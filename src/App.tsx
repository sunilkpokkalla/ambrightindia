import { Router, usePath } from './router'
import Home from './pages/Home'
import ContentPage from './pages/ContentPage'
import ArticlePage from './pages/ArticlePage'
import BlogIndex from './pages/BlogIndex'
import JobsPage from './pages/JobsPage'
import ContactPage from './pages/ContactPage'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import JobPostPage from './pages/JobPostPage'
import NotFound from './pages/NotFound'
import { getAnyPage, ALL_PAGES } from './data/catalog'
import { getPost, POSTS } from './data/posts'
import { getJob, ALL_JOBS } from './data/jobs'

const STATIC_ROUTES = ['/', '/blog', '/2025/07', '/job-openings', '/contact', '/contact-us', '/admin', '/admin/dashboard']
const KNOWN_PATHS = new Set([
  ...STATIC_ROUTES,
  ...ALL_PAGES.map((p) => p.path),
  ...POSTS.map((p) => p.path),
  ...ALL_JOBS.map((j) => `/jobs/${j.slug}`),
])

function Routes() {
  const path = usePath()

  if (path === '/admin') return <AdminLogin />
  if (path === '/admin/dashboard') return <AdminDashboard />

  if (path === '/') return <Home />

  if (path === '/blog') return <BlogIndex />

  if (path === '/2025/07')
    return (
      <BlogIndex
        title="Archive — July 2025"
        intro="Posts published in July 2025, preserved from the original site archive."
      />
    )

  if (path === '/job-openings') return <JobsPage />

  const job = getJob(path)
  if (job) return <JobPostPage job={job} />

  if (path === '/contact')
    return (
      <ContactPage
        badge="Contact"
        title="Let\'s build something bright."
        intro="Hiring, consulting, careers or anything else — tell us what you need and we\'ll get right back to you."
      />
    )

  if (path === '/contact-us')
    return (
      <ContactPage
        badge="Contact Us"
        title="We are here to assist with your inquiries."
        intro="Reach the AmBrightTech team by email, visit us in McKinney, or connect on social — whatever works for you."
      />
    )

  const page = getAnyPage(path)
  if (page) return <ContentPage page={page} />

  const post = getPost(path)
  if (post) return <ArticlePage post={post} />

  return <NotFound />
}

export default function App() {
  return (
    <Router isValidPath={(p) => KNOWN_PATHS.has(p)}>
      <main>
        <Routes />
      </main>
    </Router>
  )
}
