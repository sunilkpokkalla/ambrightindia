import { ArrowRight, Clock } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SEO } from '../components/SEO'

export default function ContactPage({
  badge = 'Contact',
  title = 'Let\'s build something bright.',
  intro = 'Hiring, consulting, product development, or careers — tell us what you need and we\'ll get right back to you with the right expertise.',
}: {
  badge?: string
  title?: string
  intro?: string
}) {
  return (
    <div>
      <SEO title={title} description={intro} url="http://www.ambrighttech.com/contact" />
      <div className="bg-[#EFEFEF]">
        <Navbar />
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:grid-cols-[1fr_42%] lg:gap-14 lg:px-12 lg:pb-20">
          <div>
            <span className="animate-fade-in-up rounded-full border border-gray-300 px-3 py-1 text-[12px] font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
              {badge}
            </span>
            <h1 className="animate-fade-in-up delay-100 mt-6 max-w-[900px] text-[clamp(1.75rem,5vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:mt-8">
              {title}
            </h1>
            <p className="animate-fade-in-up delay-200 mt-5 max-w-[640px] text-[15px] leading-[1.65] text-gray-600 sm:mt-6 sm:text-[17px]">
              {intro}
            </p>
          </div>
          <img
            src="/images/heroes/partner.webp"
            alt="Connect with AmBrightTech"
            className="animate-fade-in-right delay-300 hero-image-motion w-full rounded-2xl object-cover shadow-[0_8px_32px_rgba(14,30,66,0.18)] aspect-[3/2]"
          />
        </div>
      </div>

      {/* Contact info + phone */}
      <section className="bg-white py-14 sm:py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-5 px-5 md:grid-cols-3 sm:gap-6 sm:px-8 lg:px-12">
          {/* Email Card (Updated with list) */}
          <div className="group flex flex-col gap-3 rounded-2xl border border-gray-200 p-6 transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] sm:p-7">
            <span className="mb-2 text-[13px] font-medium text-gray-600">Email</span>
            
            <div className="flex flex-col gap-4">
              <div>
                <span className="block text-[12px] font-medium text-gray-500">General information</span>
                <a href="mailto:contact@ambrighttech.com" className="text-[14px] font-medium text-gray-900 transition-colors hover:text-[#2563EB]">
                  contact@ambrighttech.com
                </a>
              </div>
              
              <div>
                <span className="block text-[12px] font-medium text-gray-500">Employment verification</span>
                <a href="mailto:employmentverification@ambrighttech.com" className="text-[14px] font-medium text-gray-900 transition-colors hover:text-[#2563EB]">
                  employmentverification@ambrighttech.com
                </a>
              </div>

              <div>
                <span className="block text-[12px] font-medium text-gray-500">Inquiry about your W2</span>
                <a href="mailto:hr@ambrighttech.com" className="text-[14px] font-medium text-gray-900 transition-colors hover:text-[#2563EB]">
                  hr@ambrighttech.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Schedule a Call Card */}
          <a
            href="mailto:contact@ambrighttech.com?subject=Schedule a Strategy Call"
            className="group flex flex-col gap-3 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6 transition-all duration-300 hover:border-[#3B82F6] hover:shadow-[0_4px_16px_rgba(59,130,246,0.12)] sm:p-7"
          >
            <span className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#E0E7FF] text-[#4F46E5]">
              <Clock size={20} />
            </span>
            <span className="text-[17px] font-semibold text-gray-900 sm:text-[18px]">
              Schedule a Call
            </span>
            <span className="text-[14px] leading-relaxed text-gray-600">
              Book a 30-minute discovery session with our consulting team to discuss your IT strategy.
            </span>
            <span className="mt-auto pt-4 flex items-center gap-2 text-[13px] font-medium text-[#2563EB]">
              Book meeting
              <ArrowRight
                size={14}
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              />
            </span>
          </a>
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
              <a
                href="http://x.com/ambrighttech"
                target="_blank"
                rel="noreferrer"
                className="text-[14px] font-medium text-gray-900 transition-colors duration-300 hover:text-gray-500"
              >
                X — @ambrighttech
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Branch offices */}
      <section className="bg-[#F5F5F5] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-[20px] font-semibold tracking-[-0.01em] text-gray-900 sm:mb-10 sm:text-[24px]">
            Our offices
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {/* McKinney */}
            <a
              href="https://g.co/kgs/oJ7Wu2C"
              target="_blank"
              rel="noreferrer"
              className="card-lift group flex flex-col gap-2 rounded-2xl bg-white p-6 sm:p-7"
            >
              <span className="text-[13px] font-medium text-[#2563EB]">McKinney Branch Office</span>
              <span className="text-[16px] font-semibold text-gray-900 sm:text-[17px]">
                7300 State Highway 121
              </span>
              <span className="text-[14px] leading-relaxed text-gray-600">
                3rd Floor, Suite 300<br />McKinney, Texas 75070
              </span>
              <span className="mt-1 flex items-center gap-2 text-[13px] font-medium text-gray-900">
                View on map
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0"
                />
              </span>
            </a>
            {/* Allen */}
            <div className="card-lift flex flex-col gap-2 rounded-2xl bg-white p-6 sm:p-7">
              <span className="text-[13px] font-medium text-[#2563EB]">Allen Branch Office</span>
              <span className="text-[16px] font-semibold text-gray-900 sm:text-[17px]">
                450 Century Pkwy
              </span>
              <span className="text-[14px] leading-relaxed text-gray-600">
                Suite 250<br />Allen, TX 75013
              </span>
            </div>
            {/* Mysore */}
            <div className="card-lift flex flex-col gap-2 rounded-2xl bg-white p-6 sm:p-7">
              <span className="text-[13px] font-medium text-[#2563EB]">India — Mysore</span>
              <span className="text-[16px] font-semibold text-gray-900 sm:text-[17px]">
                AmBright Technologies India Pvt. Ltd
              </span>
              <span className="text-[14px] leading-relaxed text-gray-600">
                Technology Hub<br />Mysore, Karnataka, India
              </span>
            </div>
            {/* Tirupati */}
            <div className="card-lift flex flex-col gap-2 rounded-2xl bg-white p-6 sm:p-7">
              <span className="text-[13px] font-medium text-[#2563EB]">India — Tirupati</span>
              <span className="text-[16px] font-semibold text-gray-900 sm:text-[17px]">
                AmBright Technologies India Pvt. Ltd
              </span>
              <span className="text-[14px] leading-relaxed text-gray-600">
                Technology Hub<br />Tirupati, Andhra Pradesh, India
              </span>
            </div>
          </div>
          

        </div>
      </section>

      <Footer />
    </div>
  )
}
