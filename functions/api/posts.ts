/**
 * GET  /api/posts  — list all posts
 * POST /api/posts  — create or update a post (auth required)
 *
 * Environment variable required:
 *   ADMIN_PASSWORD — used to verify tokens
 *
 * KV Namespace binding required:
 *   POSTS_KV — Cloudflare KV namespace for storing posts
 *
 * Setup in Cloudflare Pages:
 *   1. Create a KV namespace called "ambrighttech-posts"
 *   2. Bind it as POSTS_KV in Pages > Settings > Functions > KV namespace bindings
 */

interface Env {
  ADMIN_PASSWORD: string
  POSTS_KV: KVNamespace
}

interface Post {
  id: string
  title: string
  category: 'Blog' | 'News'
  excerpt: string
  body: string
  image: string
  author: string
  date: string
  published: boolean
}

function verifyToken(request: Request): boolean {
  const auth = request.headers.get('Authorization')
  if (!auth?.startsWith('Bearer ')) return false

  try {
    const payload = JSON.parse(atob(auth.slice(7)))
    return payload.admin === true && payload.exp > Date.now()
  } catch {
    return false
  }
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

// GET /api/posts — public
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const raw = await context.env.POSTS_KV.get('posts')
  const posts: Post[] = raw ? JSON.parse(raw) : []

  return new Response(
    JSON.stringify({ posts: posts.filter((p) => p.published) }),
    { headers: { 'Content-Type': 'application/json' } }
  )
}

// POST /api/posts — authenticated
export const onRequestPost: PagesFunction<Env> = async (context) => {
  if (!verifyToken(context.request)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const input = (await context.request.json()) as Partial<Post> & { id?: string }

  const raw = await context.env.POSTS_KV.get('posts')
  const posts: Post[] = raw ? JSON.parse(raw) : []

  if (input.id) {
    // Update existing
    const idx = posts.findIndex((p) => p.id === input.id)
    if (idx >= 0) {
      posts[idx] = { ...posts[idx], ...input } as Post
    }
  } else {
    // Create new
    const newPost: Post = {
      id: generateId(),
      title: input.title || 'Untitled',
      category: input.category || 'Blog',
      excerpt: input.excerpt || '',
      body: input.body || '',
      image: input.image || '',
      author: input.author || 'Girija Bhagavantha',
      date: input.date || new Date().toISOString().split('T')[0],
      published: input.published !== false,
    }
    posts.unshift(newPost) // newest first
  }

  await context.env.POSTS_KV.put('posts', JSON.stringify(posts))

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
