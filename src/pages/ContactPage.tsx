import { ArrowRight, Clock } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage({
  badge = 'Contact',
  title = 'Let’s build something bright.',
  intro = 'Hiring, consulting, careers or anything else — we are here to assist with your inquiries.',
}: {
  badge?: string
  title?: string
  intro?: string
}) {
  return (
    <div>
      <div className="bg-[#EFEFEF]">
        <Navbar />
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:grid-cols-[1fr_42%] lg:gap-14 lg:px-12 lg:pb-20">
          <div>
            <span className="rounded-full border border-gray-300 px-3 py-1 text-[12px] font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
              {badge}
            </span>
            <h1 className="mt-6 max-w-[900px] text-[clamp(1.75rem,5vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:mt-8">
              {title}
            </h1>
            <p className="mt-5 max-w-[640px] text-[15px] leading-[1.65] text-gray-600 sm:mt-6 sm:text-[17px]">
              {intro}
            </p>
          </div>
          <img
            src="/images/heroes/partner.webp"
            alt="Connect with AmBrightTech"
            className="w-full rounded-2xl object-cover shadow-[0_8px_32px_rgba(14,30,66,0.18)] aspect-[3/2]"
          />
        </div>
      </div>

      <section className="bg-white py-14 sm:py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-5 px-5 md:grid-cols-3 sm:gap-6 sm:px-8 lg:px-12">
          <a
            href="mailto:contact@ambrighttech.com"
            className="group flex flex-col gap-3 rounded-2xl border border-gray-200 p-6 transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] sm:p-7"
          >
            <span className="text-[13px] font-medium text-gray-600">Email</span>
            <span className="text-[17px] font-semibold text-gray-900 sm:text-[18px]">
              contact@ambrighttech.com
            </span>
            <span className="mt-1 flex items-center gap-2 text-[13px] font-medium text-gray-900">
              Write to us
              <ArrowRight
                size={14}
                className="transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0"
              />
            </span>
          </a>
          <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 p-6 sm:p-7">
            <span className="text-[13px] font-medium text-gray-600">Office</span>
            <span className="text-[17px] font-semibold text-gray-900 sm:text-[18px]">
              McKinney, Texas
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-gray-600">
              <Clock size={14} />
              Mon–Fri, 9:00–17:00 Central
            </span>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 p-6 sm:p-7">
            <span className="text-[13px] font-medium text-gray-600">Social</span>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/company/ambrighttech"
                target="_blank"
                rel="noreferrer"
                className="text-[14px] font-medium text-gray-900 transition-colors duration-300 hover:text-gray-500"
              >
                LinkedIn — @ambrighttech
              </a>
              <a
                href="https://www.facebook.com/ambrighttech/"
                target="_blank"
                rel="noreferrer"
                className="text-[14px] font-medium text-gray-900 transition-colors duration-300 hover:text-gray-500"
              >
                Facebook — @ambrighttech
              </a>
              <a
                href="https://www.instagram.com/ambrighttech/"
                target="_blank"
                rel="noreferrer"
                className="text-[14px] font-medium text-gray-900 transition-colors duration-300 hover:text-gray-500"
              >
                Instagram — @ambrighttech
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
