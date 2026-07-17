import { useEffect, useState } from 'react'
import { Clock, Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from '../router'

interface NavChild {
  label: string
  href: string
}
interface NavGroup {
  label: string
  href: string
  children: NavChild[]
}

const MENU: NavGroup[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'IT Consulting & Services', href: '/it-services' },
      { label: 'Workforce Solutions', href: '/workforce-solutions' },
      { label: 'Project Staffing', href: '/project-staffing' },
      { label: 'Direct Hire', href: '/direct-hire' },
      { label: 'Managed IT', href: '/services/managed-it' },
      { label: 'All services →', href: '/services' },
    ],
  },
  {
    label: 'Technology',
    href: '/technology-practices',
    children: [
      { label: 'Technology Practices', href: '/technology-practices' },
      { label: 'Cloud', href: '/cloud' },
      { label: 'DevOps', href: '/devops' },
      { label: 'Data & Analytics', href: '/data-analytics' },
      { label: 'Architecture', href: '/architecture' },
      { label: 'Technologies we cover →', href: '/technologies' },
    ],
  },
  {
    label: 'AI & Products',
    href: '/ai',
    children: [
      { label: 'AI Overview', href: '/ai' },
      { label: 'AI Strategy', href: '/ai/strategy' },
      { label: 'Generative AI', href: '/ai/generative-ai' },
      { label: 'AI Agents & Automation', href: '/ai/ai-agents' },
      { label: 'Our Products', href: '/products' },
      { label: 'AmBrightTech Labs', href: '/labs' },
    ],
  },
  {
    label: 'Startups',
    href: '/startups',
    children: [
      { label: 'Startup Services', href: '/startups' },
      { label: 'Idea Validation', href: '/startups/idea-validation' },
      { label: 'MVP Development', href: '/startups/mvp-development' },
      { label: 'Fractional CTO', href: '/startups/fractional-cto' },
      { label: 'Scale-Up Engineering', href: '/startups/scaling' },
    ],
  },
  {
    label: 'Company',
    href: '/aboutus',
    children: [
      { label: 'About Us', href: '/aboutus' },
      { label: 'Industries', href: '/industries' },
      { label: 'Roles We Staff', href: '/roles' },
      { label: 'Careers', href: '/careers' },
      { label: 'Job Openings', href: '/job-openings' },
      { label: 'Blog & News', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

function useLocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'America/Chicago',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function DesktopDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={group.href}
        className="flex items-center gap-1 py-2 text-[14px] text-gray-900 transition-colors duration-300 hover:text-gray-500"
      >
        {group.label}
        <ChevronDown
          size={13}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </Link>
      <div
        className={`absolute left-0 top-full z-30 pt-2 ${open ? '' : 'hidden'}`}
      >
        <div className="min-w-[240px] rounded-2xl bg-white p-2 shadow-[0_12px_40px_rgba(14,30,66,0.16)]">
          {group.children.map((c) => (
            <Link
              key={c.label}
              to={c.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-[13px] text-gray-900 transition-colors duration-300 hover:bg-gray-100"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const time = useLocalTime()

  return (
    <>
      <div className="relative z-20 mx-auto w-full max-w-[1440px] p-2 sm:p-3">
        <nav className="flex items-center justify-between rounded-full bg-white p-[5px]">
          {/* Left: logo + links */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 sm:h-10 sm:w-10"
            >
              <img src="/images/logo-white.svg" alt="AmBrightTech" className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <div className="hidden items-center gap-5 md:flex">
              {MENU.map((group) => (
                <DesktopDropdown key={group.label} group={group} />
              ))}
            </div>
          </div>

          {/* Right: clock, CTA */}
          <div className="hidden items-center gap-5 md:flex">
            <span className="hidden items-center gap-1.5 text-[13px] text-gray-600 lg:flex">
              <Clock size={14} />
              {time} in McKinney
            </span>
            <Link
              to="/contact"
              className="group flex items-center gap-3 rounded-full bg-gray-900 py-2 pl-5 pr-2 text-[13px] font-medium text-white"
            >
              <span className="overflow-hidden h-[20px]">
                <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                  <span className="h-[20px] leading-[20px] whitespace-nowrap">
                    Book a strategy call
                  </span>
                  <span className="h-[20px] leading-[20px] whitespace-nowrap">
                    Book a strategy call
                  </span>
                </span>
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <ArrowRight size={12} className="text-gray-900" />
              </span>
            </Link>
          </div>

          {/* Mobile: menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2.5 text-[13px] font-medium text-white md:hidden"
          >
            <Menu size={16} />
            Menu
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col justify-end md:hidden ${
          menuOpen ? '' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`relative mx-3 mb-3 max-h-[calc(100vh_-_5rem)] overflow-y-auto rounded-2xl bg-white p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            menuOpen ? 'translate-y-0' : 'translate-y-[calc(100%_+_0.75rem)]'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-[13px] text-gray-600">
              <Clock size={14} />
              {time} in McKinney
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2.5 text-[13px] font-medium text-white"
            >
              <X size={16} />
              Close
            </button>
          </div>
          <div className="mt-6 flex flex-col gap-6">
            {MENU.map((group) => (
              <div key={group.label}>
                <Link
                  to={group.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[13px] font-semibold text-gray-500"
                >
                  {group.label}
                </Link>
                <div className="mt-2 flex flex-col gap-2">
                  {group.children.map((c) => (
                    <Link
                      key={c.label}
                      to={c.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-[17px] font-medium text-gray-900"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-8 flex items-center justify-between rounded-full bg-[#2563EB] py-2 pl-6 pr-2 text-[14px] font-medium text-white"
          >
            Start with us
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <ArrowRight size={14} className="text-[#2563EB]" />
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}
