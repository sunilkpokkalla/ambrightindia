/**
 * POST /api/login
 * Validates admin password and returns a session token.
 *
 * Environment variable required:
 *   ADMIN_PASSWORD — the admin password (set in Cloudflare Pages > Settings > Environment variables)
 */

interface Env {
  ADMIN_PASSWORD: string
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { password } = (await context.request.json()) as { password: string }

  if (!context.env.ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ error: 'ADMIN_PASSWORD not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  if (password !== context.env.ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ error: 'Invalid password' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Simple token: base64 of password hash + timestamp
  // In production, use a proper JWT library
  const token = btoa(
    JSON.stringify({
      admin: true,
      iat: Date.now(),
      exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    })
  )

  return new Response(JSON.stringify({ token }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
