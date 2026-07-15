import { ArrowRight } from 'lucide-react'
import { Link } from '../router'

// Custom illustrations shipped with the site (swap for real media anytime)
const MEDIA_1 = '/images/card-consulting.webp'
const MEDIA_2 = '/images/card-workforce.webp'

function LinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

export default function Work() {
  return (
    <section id="services" className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <div className="mx-auto max-w-[1440px]">
        {/* Badge row */}
        <div className="mb-6 flex items-center gap-3 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
            2
          </span>
          <span className="rounded-full border border-gray-300 px-3 py-1 text-[12px] font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
            What we deliver
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-10 px-5 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:mb-14 sm:px-8 sm:text-[clamp(2.5rem,5vw,4.2rem)] lg:mb-16 lg:px-12">
          Our services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 px-5 sm:gap-6 sm:px-8 md:grid-cols-2 lg:gap-7 lg:px-12">
          {/* Card 1 — IT Consulting & Services */}
          <Link to="/it-services" className="block">
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#0D1B36] aspect-[329/246]">
              <img
                src={MEDIA_1}
                alt="IT consulting — engineering and delivery"
                className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-0 transition-all duration-300 ease-in-out group-hover:w-[148px] group-hover:px-4">
                <span className="whitespace-nowrap text-[13px] font-medium text-gray-900 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">
                  Learn more
                </span>
                <LinkIcon />
              </div>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-gray-600 sm:text-[14px]">
              End-to-end technology consulting — cloud, data and enterprise
              applications engineered to move the needle
            </p>
            <h3 className="mt-1 text-[14px] font-semibold text-gray-900 sm:text-[15px]">
              IT Consulting &amp; Services
            </h3>
          </Link>

          {/* Card 2 — Workforce Solutions */}
          <Link to="/workforce-solutions" className="block">
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#0E1E42] aspect-square">
              <img
                src={MEDIA_2}
                alt="Workforce solutions — connecting talent and teams"
                className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center gap-2 overflow-hidden rounded-full bg-gray-900 px-0 transition-all duration-300 ease-in-out group-hover:w-[168px] group-hover:px-4">
                <span className="whitespace-nowrap text-[13px] font-medium text-white opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">
                  View solutions
                </span>
                <ArrowRight
                  size={14}
                  className="shrink-0 text-white transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0"
                />
              </div>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-gray-600 sm:text-[14px]">
              Workforce solutions that connect exceptional technology talent
              with the teams that need them most
            </p>
            <h3 className="mt-1 text-[14px] font-semibold text-gray-900 sm:text-[15px]">
              Workforce Solutions
            </h3>
          </Link>
        </div>
      </div>
    </section>
  )
}
