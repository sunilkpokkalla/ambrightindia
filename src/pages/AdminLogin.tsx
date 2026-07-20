import { useState } from 'react'
import { useNavigate } from '../router'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 400))
      
      if (username === 'admin' && (password === 'admin' || password === 'admin123')) {
        sessionStorage.setItem('admin_token', 'mock-token')
        navigate('/admin/dashboard')
      } else {
        setError('Invalid username or password. Please try again.')
      }
    } catch {
      setError('Unable to connect. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EFEFEF] px-5">
      <div className="w-full max-w-[400px]">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900">
            <img src="/images/logo-white.svg" alt="AmBrightTech" className="h-7 w-7" />
          </div>
          <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-gray-900">
            Admin Login
          </h1>
          <p className="mt-2 text-[14px] text-gray-600">
            Sign in to manage blog posts and news.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-8"
        >
          <div className="mb-4">
            <label className="block text-[13px] font-medium text-gray-900">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-[14px] text-gray-900 outline-none transition-all duration-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
              required
              autoFocus
            />
          </div>

          <label className="block text-[13px] font-medium text-gray-900">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-[14px] text-gray-900 outline-none transition-all duration-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
            required
          />

          {error && (
            <p className="mt-3 text-[13px] text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-5 w-full rounded-xl bg-gray-900 py-3 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-gray-800 disabled:opacity-60"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <p className="mt-6 text-center text-[12px] text-gray-500">
          AmBrightTech LLC Admin Panel
        </p>
      </div>
    </div>
  )
}
