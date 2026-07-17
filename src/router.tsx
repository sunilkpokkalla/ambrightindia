import {
  createContext,
  useContext,
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react'

/** Normalize a path: collapse trailing slash (except root), strip query/hash. */
export function normalizePath(p: string): string {
  let path = p.split(/[?#]/)[0]
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1)
  return path || '/'
}

function hashPath(): string | null {
  if (typeof window === 'undefined') return null
  const h = window.location.hash
  return h.startsWith('#/') ? normalizePath(h.slice(1)) : null
}

interface RouterState {
  path: string
  navigate: (to: string) => void
}

const RouterContext = createContext<RouterState>({
  path: '/',
  navigate: () => {},
})

interface RouterProps {
  children: ReactNode
  /**
   * Returns true when a path is a real route. Used on first load: if the
   * browser's current pathname is not a known route (offline previews,
   * sandboxed viewers, odd hosting paths), the router starts at home
   * instead of showing a 404.
   */
  isValidPath?: (path: string) => boolean
}

export function Router({ children, isValidPath }: RouterProps) {
  const [path, setPath] = useState(() => {
    if (typeof window === 'undefined') return '/'
    const fromHash = hashPath()
    if (fromHash) return fromHash
    if (window.location.protocol !== 'http:' && window.location.protocol !== 'https:')
      return '/'
    const fromPathname = normalizePath(window.location.pathname)
    if (isValidPath && !isValidPath(fromPathname)) return '/'
    return fromPathname
  })

  useEffect(() => {
    const sync = () => setPath(hashPath() ?? normalizePath(window.location.pathname))
    window.addEventListener('popstate', sync)
    window.addEventListener('hashchange', sync)
    return () => {
      window.removeEventListener('popstate', sync)
      window.removeEventListener('hashchange', sync)
    }
  }, [])

  const navigate = (to: string) => {
    const target = normalizePath(to)
    let urlUpdated = false
    if (
      window.location.protocol === 'http:' ||
      window.location.protocol === 'https:'
    ) {
      try {
        window.history.pushState({}, '', to)
        urlUpdated = true
      } catch {
        /* fall through to hash */
      }
    }
    if (!urlUpdated) {
      try {
        window.location.hash = '#' + target
      } catch {
        /* in-memory navigation only */
      }
    }
    setPath(target)
    window.scrollTo({ top: 0 })
  }

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function usePath(): string {
  return useContext(RouterContext).path
}

export function useNavigate(): (to: string) => void {
  return useContext(RouterContext).navigate
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
  children: ReactNode
}

const CLEAN_URLS =
  typeof window !== 'undefined' &&
  (window.location.protocol === 'http:' || window.location.protocol === 'https:')

/** Anchor that performs client-side navigation for internal paths. */
export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useContext(RouterContext)
  const internal = to.startsWith('/')
  return (
    <a
      href={internal && !CLEAN_URLS ? '#' + normalizePath(to) : to}
      onClick={(e) => {
        onClick?.(e)
        if (
          internal &&
          !e.defaultPrevented &&
          e.button === 0 &&
          !e.metaKey &&
          !e.ctrlKey &&
          !e.shiftKey &&
          !e.altKey
        ) {
          e.preventDefault()
          navigate(to)
        }
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
