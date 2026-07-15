import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RollButton from '../components/RollButton'

// TODO: replace with live openings (from the WordPress export or your ATS)
const OPENINGS = [
  {
    title: 'Senior Java Developer',
    type: 'Contract',
    location: 'Dallas–Fort Worth, TX (Hybrid)',
  },
  {
    title: 'Cloud Engineer (AWS)',
    type: 'Contract-to-hire',
    location: 'Remote (US)',
  },
  {
    title: 'Data Analyst',
    type: 'Direct hire',
    location: 'McKinney, TX',
  },
  {
    title: 'DevOps Engineer',
    type: 'Contract',
    location: 'Remote (US)',
  },
]

export default function JobsPage() {
  return (
    <div>
      <div className="bg-[#EFEFEF]">
        <Navbar />
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:grid-cols-[1fr_42%] lg:gap-14 lg:px-12">
          <div>
            <span className="rounded-full border border-gray-300 px-3 py-1 text-[12px] font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
              Job Openings
            </span>
            <h1 className="mt-6 text-[clamp(1.75rem,5vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:mt-8">
              Your next role starts here.
            </h1>
            <p className="mt-5 max-w-[640px] text-[15px] leading-[1.65] text-gray-600 sm:mt-6 sm:text-[17px]">
              Openings across our client base and consulting practices. Don’t
              see your role? Send your resume anyway — most placements start
              with a conversation.
            </p>
          </div>
          <img
            src="/images/heroes/briefcase.webp"
            alt="Careers at AmBrightTech"
            className="w-full rounded-2xl object-cover shadow-[0_8px_32px_rgba(14,30,66,0.18)] aspect-[3/2]"
          />
        </div>
      </div>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-4">
            {OPENINGS.map((job) => (
              <a
                key={job.title}
                href={`mailto:contact@ambrighttech.com?subject=Application: ${encodeURIComponent(job.title)}`}
                className="group flex flex-col gap-2 rounded-2xl border border-gray-200 p-6 transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] sm:flex-row sm:items-center sm:justify-between sm:p-7"
              >
                <div className="flex flex-col gap-1">
                  <h2 className="text-[16px] font-semibold text-gray-900 sm:text-[18px]">
                    {job.title}
                  </h2>
                  <p className="text-[13px] text-gray-600 sm:text-[14px]">
                    {job.type} · {job.location}
                  </p>
                </div>
                <span className="flex items-center gap-2 text-[13px] font-medium text-gray-900">
                  Apply
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                    <ArrowRight size={14} className="text-white" />
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start gap-5 rounded-2xl bg-[#F5F5F5] p-6 sm:p-8">
            <h2 className="text-[18px] font-semibold text-gray-900 sm:text-[20px]">
              Open application
            </h2>
            <p className="max-w-[560px] text-[14px] leading-[1.65] text-gray-600 sm:text-[15px]">
              Tell us what you do best and where you want to go. We match
              AmBright-Techies to roles year-round.
            </p>
            <RollButton
              label="Send your resume"
              href="mailto:contact@ambrighttech.com?subject=Open application"
              pillClassName="bg-[#2563EB] hover:bg-[#1d4ed8] text-white self-start"
              paddingClassName="pl-5 sm:pl-6 pr-2 py-2"
              textSizeClassName="text-[13px] sm:text-[14px]"
              circleClassName="w-7 h-7 sm:w-8 sm:h-8 bg-white"
              arrowClassName="text-[#2563EB]"
              arrowSize={14}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
