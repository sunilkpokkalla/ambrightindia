import { useState, useEffect } from 'react'
import { Link, useNavigate } from '../router'
import { ArrowRight } from 'lucide-react'

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

function getToken() {
  return sessionStorage.getItem('admin_token') || ''
}

async function apiFetch(path: string, opts: RequestInit = {}) {
  const res = await fetch(path, {
    ...opts,
    headers: {
      ...opts.headers,
      Authorization: 'Bearer ' + getToken(),
      'Content-Type': 'application/json',
    },
  })
  if (res.status === 401) {
    sessionStorage.removeItem('admin_token')
    window.location.hash = '#/admin'
    throw new Error('Session expired')
  }
  return res
}

/* ─── Post Editor ─── */
function PostEditor({
  post,
  onSave,
  onCancel,
}: {
  post?: Post
  onSave: (p: Omit<Post, 'id'> & { id?: string }) => void
  onCancel: () => void
}) {
  const [title, setTitle] = useState(post?.title || '')
  const [category, setCategory] = useState<'Blog' | 'News'>(post?.category || 'Blog')
  const [excerpt, setExcerpt] = useState(post?.excerpt || '')
  const [body, setBody] = useState(post?.body || '')
  const [image, setImage] = useState(post?.image || '')
  const [author, setAuthor] = useState(post?.author || 'Girija Bhagavantha')
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    await onSave({
      id: post?.id,
      title,
      category,
      excerpt,
      body,
      image,
      author,
      date: post?.date || new Date().toISOString().split('T')[0],
      published: true,
    })
    setSaving(false)
  }

  const inputClass =
    'w-full rounded-xl border border-gray-200 px-4 py-3 text-[14px] text-gray-900 outline-none transition-all duration-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20'

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-[800px]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[20px] font-semibold text-gray-900">
          {post ? 'Edit Post' : 'New Post'}
        </h2>
        <button
          type="button"
          onClick={onCancel}
          className="text-[13px] font-medium text-gray-600 hover:text-gray-900"
        >
          Cancel
        </button>
      </div>

      <div className="flex flex-col gap-5 rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-8">
        <div>
          <label className="mb-2 block text-[13px] font-medium text-gray-900">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={inputClass}
            placeholder="Post title"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block text-[13px] font-medium text-gray-900">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as 'Blog' | 'News')}
              className={inputClass}
            >
              <option value="Blog">Blog</option>
              <option value="News">News</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-[13px] font-medium text-gray-900">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium text-gray-900">
            Hero Image URL
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className={inputClass}
            placeholder="/images/heroes/circuit.webp or https://..."
          />
          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-3 h-32 w-full rounded-xl object-cover"
              onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
            />
          )}
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium text-gray-900">Excerpt</label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className={inputClass + ' min-h-[80px] resize-y'}
            placeholder="Short summary shown on blog listing..."
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium text-gray-900">
            Body (Markdown supported)
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className={inputClass + ' min-h-[300px] resize-y font-mono text-[13px]'}
            placeholder="Write your post content here..."
            required
          />
        </div>

        <div className="flex items-center gap-4 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="rounded-xl bg-gray-900 px-6 py-3 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-gray-800 disabled:opacity-60"
          >
            {saving ? 'Saving...' : post ? 'Update Post' : 'Publish Post'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border border-gray-200 px-6 py-3 text-[14px] font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  )
}

/* ─── Posts List ─── */
function PostsList({
  posts,
  onEdit,
  onDelete,
  onNew,
}: {
  posts: Post[]
  onEdit: (p: Post) => void
  onDelete: (id: string) => void
  onNew: () => void
}) {
  return (
    <div className="mx-auto max-w-[900px]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[20px] font-semibold text-gray-900">
          Posts ({posts.length})
        </h2>
        <button
          onClick={onNew}
          className="flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-2.5 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-[#1d4ed8]"
        >
          New Post
          <ArrowRight size={14} />
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl bg-white p-12 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <p className="text-[15px] text-gray-600">No posts yet. Create your first one!</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {posts.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center gap-4">
                {p.image && (
                  <img
                    src={p.image}
                    alt=""
                    className="h-12 w-16 rounded-lg object-cover"
                  />
                )}
                <div>
                  <h3 className="text-[15px] font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-0.5 text-[12px] text-gray-500">
                    {p.category} &middot; {p.date} &middot; {p.author}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onEdit(p)}
                  className="rounded-lg px-3 py-1.5 text-[12px] font-medium text-[#2563EB] transition-colors hover:bg-blue-50"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    if (confirm('Delete this post?')) onDelete(p.id)
                  }}
                  className="rounded-lg px-3 py-1.5 text-[12px] font-medium text-red-600 transition-colors hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Dashboard Shell ─── */
export default function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([])
  const [view, setView] = useState<'list' | 'editor'>('list')
  const [editingPost, setEditingPost] = useState<Post | undefined>()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (!getToken()) {
      navigate('/admin')
      return
    }
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const res = await apiFetch('/api/posts')
      if (res.ok) {
        const data = await res.json()
        setPosts(data.posts || [])
      }
    } catch {
      // handled by apiFetch
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async (post: Omit<Post, 'id'> & { id?: string }) => {
    try {
      const res = await apiFetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(post),
      })
      if (res.ok) {
        await loadPosts()
        setView('list')
        setEditingPost(undefined)
      }
    } catch {
      alert('Failed to save post')
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await apiFetch('/api/posts/' + id, { method: 'DELETE' })
      await loadPosts()
    } catch {
      alert('Failed to delete post')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('admin_token')
    navigate('/admin')
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Top bar */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 sm:px-8">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900">
              <img src="/images/logo-white.svg" alt="AmBrightTech" className="h-5 w-5" />
            </Link>
            <span className="text-[14px] font-semibold text-gray-900">Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-[13px] font-medium text-gray-600 hover:text-gray-900"
            >
              View site
            </Link>
            <button
              onClick={handleLogout}
              className="text-[13px] font-medium text-red-600 hover:text-red-800"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8 sm:py-12">
        {loading ? (
          <div className="py-20 text-center text-[14px] text-gray-500">Loading...</div>
        ) : view === 'list' ? (
          <PostsList
            posts={posts}
            onEdit={(p) => {
              setEditingPost(p)
              setView('editor')
            }}
            onDelete={handleDelete}
            onNew={() => {
              setEditingPost(undefined)
              setView('editor')
            }}
          />
        ) : (
          <PostEditor
            post={editingPost}
            onSave={handleSave}
            onCancel={() => {
              setView('list')
              setEditingPost(undefined)
            }}
          />
        )}
      </main>
    </div>
  )
}
