import { Link } from '../router'

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: 'Services',
    links: [
      { label: 'All Services', to: '/services' },
      { label: 'IT Consulting & Services', to: '/it-services' },
      { label: 'Workforce Solutions', to: '/workforce-solutions' },
      { label: 'Project Staffing', to: '/project-staffing' },
      { label: 'Direct Hire', to: '/direct-hire' },
      { label: 'Managed IT', to: '/services/managed-it' },
      { label: 'Cybersecurity', to: '/services/cybersecurity' },
    ],
  },
  {
    title: 'Technology',
    links: [
      { label: 'Technology Practices', to: '/technology-practices' },
      { label: 'Cloud', to: '/cloud' },
      { label: 'DevOps', to: '/devops' },
      { label: 'Data & Analytics', to: '/data-analytics' },
      { label: 'Architecture', to: '/architecture' },
      { label: 'Agile', to: '/agile' },
      { label: 'Technologies We Cover', to: '/technologies' },
    ],
  },
  {
    title: 'AI & Products',
    links: [
      { label: 'AI Overview', to: '/ai' },
      { label: 'AI Strategy', to: '/ai/strategy' },
      { label: 'Generative AI', to: '/ai/generative-ai' },
      { label: 'AI Agents', to: '/ai/ai-agents' },
      { label: 'Our Products', to: '/products' },
      { label: 'AmBrightTech Labs', to: '/labs' },
      { label: 'Building Digital Products', to: '/product/building-digital-products-that-solve-real-problems' },
    ],
  },
  {
    title: 'Startups & Industries',
    links: [
      { label: 'Startup Services', to: '/startups' },
      { label: 'MVP Development', to: '/startups/mvp-development' },
      { label: 'Fractional CTO', to: '/startups/fractional-cto' },
      { label: 'Industries We Serve', to: '/industries' },
      { label: 'Roles We Staff', to: '/roles' },
      { label: 'Careers', to: '/careers' },
      { label: 'Job Openings', to: '/job-openings' },
    ],
  },
  {
    title: 'Company & Legal',
    links: [
      { label: 'About Us', to: '/aboutus' },
      { label: 'Blog & News', to: '/blog' },
      { label: 'Support', to: '/product/support' },
      { label: 'Contact', to: '/contact' },
      { label: 'Contact Us', to: '/contact-us' },
      { label: 'Privacy Policy', to: '/policy/ambright-tech-privacy-policy' },
      { label: 'Privacy (Products)', to: '/product/privacy-policy' },
      { label: 'BOIA Compliance', to: '/policy/navigating-boia-compliance-ambrighttechs-commitment-to-excellence' },
      { label: 'Archive — July 2025', to: '/2025/07' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#F5F5F5]">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-14 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-[320px]">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900">
                <span className="text-[11px] font-bold tracking-tight text-white">AB</span>
              </span>
              <span className="text-[15px] font-semibold text-gray-900">
                AmBrightTech LLC
              </span>
            </Link>
            <p className="mt-4 text-[13px] leading-relaxed text-gray-600">
              Staffing agency for job seekers and employers. IT consulting,
              workforce solutions and technology practices — McKinney, Texas.
            </p>
            <p className="mt-3 text-[13px] text-gray-600">
              E-Verify certified employer
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-10">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-[13px] font-semibold text-gray-900">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.to + l.label}>
                      <Link
                        to={l.to}
                        className="text-[13px] text-gray-600 transition-colors duration-300 hover:text-gray-900"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-gray-600">
            © 2026 AmBrightTech LLC — McKinney, Texas
          </p>
          <a
            href="mailto:contact@ambrighttech.com"
            className="text-[13px] font-medium text-gray-900 transition-colors duration-300 hover:text-gray-500"
          >
            contact@ambrighttech.com
          </a>
        </div>
      </div>
    </footer>
  )
}
