import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RollButton from '../components/RollButton'
import { Link } from '../router'
import { SEO } from '../components/SEO'
import type { PageDef } from '../data/pages'

export default function ContentPage({ page }: { page: PageDef }) {
  return (
    <div>
      <SEO title={page.title} description={page.intro} image={page.image} url={`http://www.ambrighttech.com${page.path}`} />
      <div className="bg-[#EFEFEF]">
        <Navbar />
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:grid-cols-[1fr_42%] lg:gap-14 lg:px-12 lg:pb-20 lg:pt-16">
          <div>
            <span className="animate-fade-in-up rounded-full border border-gray-300 px-3 py-1 text-[12px] font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
              {page.badge}
            </span>
            <h1 className="animate-fade-in-up delay-100 mt-6 max-w-[900px] text-[clamp(1.75rem,5vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:mt-8">
              {page.title}
            </h1>
            <p className="animate-fade-in-up delay-200 mt-5 max-w-[720px] text-[15px] leading-[1.7] text-gray-600 sm:mt-6 sm:text-[17px]">
              {page.intro}
            </p>
          </div>
          {page.image && (
            <img
              src={page.image}
              alt={page.badge}
              className="animate-fade-in-right delay-300 hero-image-motion w-full rounded-2xl object-cover shadow-[0_8px_32px_rgba(14,30,66,0.18)] aspect-[3/2]"
            />
          )}
        </div>
      </div>

      {page.stats && (
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-px overflow-hidden px-5 py-10 sm:px-8 lg:grid-cols-4 lg:px-12 lg:py-14">
            {page.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-2 border-l-2 border-[#2563EB] px-5 py-3"
              >
                <span className="text-[26px] font-semibold tracking-[-0.02em] text-gray-900 sm:text-[32px]">
                  {s.value}
                </span>
                <span className="max-w-[220px] text-[12px] leading-[1.5] text-gray-600 sm:text-[13px]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-white py-14 sm:py-16 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-5 sm:px-8 lg:gap-16 lg:px-12">
          {page.sections.map((s, i) => (
            <div
              key={s.heading}
              className="flex flex-col gap-4 lg:grid lg:grid-cols-[26%_1fr] lg:gap-8"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
                  {i + 1}
                </span>
                <h2 className="text-[18px] font-semibold tracking-[-0.01em] text-gray-900 sm:text-[20px]">
                  {s.heading}
                </h2>
              </div>
              <div className="max-w-[760px]">
                <p className="text-[15px] leading-[1.75] text-gray-600 sm:text-[16px]">
                  {s.body}
                </p>
                {s.points && (
                  <ul className="mt-5 flex flex-col gap-3">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                        <span className="text-[14px] font-medium text-gray-900 sm:text-[15px]">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {page.links && (
        <section className="bg-[#F5F5F5] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <h2 className="mb-8 text-[20px] font-semibold tracking-[-0.01em] text-gray-900 sm:mb-10 sm:text-[24px]">
              {page.linksTitle || 'Explore'}
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-5">
              {page.links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="card-lift group flex flex-col gap-2 rounded-2xl bg-white p-6 transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                >
                  <span className="flex items-center justify-between">
                    <h3 className="text-[15px] font-semibold text-gray-900 sm:text-[16px]">
                      {l.label}
                    </h3>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EFF4FF] transition-colors duration-300 group-hover:bg-[#2563EB]">
                      <ArrowRight
                        size={13}
                        className="text-[#2563EB] transition-all duration-300 -rotate-45 group-hover:rotate-0 group-hover:text-white"
                      />
                    </span>
                  </span>
                  <p className="text-[13px] leading-relaxed text-gray-600">
                    {l.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.quote && (
        <section className="bg-[#0E1E42] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <span className="text-[40px] font-semibold leading-none text-[#60A5FA] sm:text-[52px]">
              "
            </span>
            <blockquote className="mt-2 max-w-[880px] text-[clamp(1.3rem,3vw,2.2rem)] font-medium leading-[1.3] tracking-[-0.02em] text-white">
              {page.quote.text}
            </blockquote>
            {page.quote.attribution && (
              <p className="mt-6 text-[13px] font-medium text-[#93C5FD] sm:text-[14px]">
                — {page.quote.attribution}
              </p>
            )}
          </div>
        </section>
      )}

      {page.cta && (
        <section className="bg-[#F5F5F5] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-6 px-5 sm:px-8 lg:px-12">
            <h2 className="text-[clamp(1.4rem,3.5vw,2.4rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900">
              Ready when you are.
            </h2>
            <RollButton
              label={page.cta.label}
              href={page.cta.to}
              pillClassName="bg-[#2563EB] hover:bg-[#1d4ed8] text-white self-start"
              paddingClassName="pl-5 sm:pl-6 pr-2 py-2"
              textSizeClassName="text-[13px] sm:text-[14px]"
              circleClassName="w-7 h-7 sm:w-8 sm:h-8 bg-white"
              arrowClassName="text-[#2563EB]"
              arrowSize={14}
            />
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
