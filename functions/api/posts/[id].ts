/**
 * DELETE /api/posts/:id — delete a post (auth required)
 */

interface Env {
  POSTS_KV: KVNamespace
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

export const onRequestDelete: PagesFunction<Env> = async (context) => {
  if (!verifyToken(context.request)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const id = context.params.id as string
  const raw = await context.env.POSTS_KV.get('posts')
  const posts = raw ? JSON.parse(raw) : []
  const filtered = posts.filter((p: any) => p.id !== id)

  await context.env.POSTS_KV.put('posts', JSON.stringify(filtered))

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
