import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from '../router'
import { SEO } from '../components/SEO'
import type { Job } from '../data/jobs'

export default function JobPostPage({ job }: { job: Job }) {
  return (
    <div>
      <SEO title={job.title} description={`AmBrightTech is hiring for ${job.title} in ${job.location}`} url={`http://www.ambrighttech.com/jobs/${job.slug}`} />
      <div className="bg-[#EFEFEF]">
        <Navbar />
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="rounded bg-gray-900 px-2 py-0.5 text-[11px] text-white">
              Job Opening
            </span>
            <Link
              to="/job-openings"
              className="text-[13px] text-gray-600 transition-colors duration-300 hover:text-gray-900"
            >
              ← All openings
            </Link>
          </div>
          <h1 className="mt-6 max-w-[880px] text-[clamp(1.6rem,4.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mt-8">
            {job.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px] text-gray-700">
            <span><strong>Location:</strong> {job.location}</span>
            <span><strong>Job Type:</strong> {job.type}</span>
            {job.salary && <span><strong>Salary:</strong> {job.salary}</span>}
            {job.closingOn && <span><strong>Closing on:</strong> {job.closingOn}</span>}
          </div>
        </div>
      </div>

      <article className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex max-w-[760px] flex-col gap-10">
            
            <section>
              <h2 className="text-[18px] font-semibold text-gray-900 mb-3">Description</h2>
              {job.description ? (
                <div className="flex flex-col gap-4">
                  {job.description.map((para, idx) => (
                    <p key={idx} className="text-[15px] leading-[1.75] text-gray-600 sm:text-[16px]">
                      {para}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-[15px] leading-[1.75] text-gray-600 sm:text-[16px]">
                  We are currently accepting applications for {job.title}. Please review the application requirements below.
                </p>
              )}
            </section>

            <section>
              <h2 className="text-[18px] font-semibold text-gray-900 mb-3">How to Apply</h2>
              <p className="text-[15px] leading-[1.75] text-gray-600 sm:text-[16px]">
                Please submit your application using the form on the main Job Openings page, OR apply via email to <a href="mailto:contact@ambrighttech.com" className="text-blue-600 hover:underline">contact@ambrighttech.com</a>, OR by mail.
              </p>
              <div className="mt-4 rounded-xl bg-gray-50 p-5 border border-gray-100">
                <p className="text-[15px] leading-[1.75] text-gray-700">
                  <strong>If applying by mail:</strong> Ref# JSQA-0225 ITA and mail resume to:
                </p>
                <p className="mt-2 text-[14px] leading-[1.6] text-gray-600">
                  Ambright Tech, LLC<br />
                  7300 State Hwy 121, 3F, Suite 300<br />
                  McKinney, TX 75070
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-[18px] font-semibold text-gray-900 mb-3">Application Requirements</h2>
              <p className="text-[15px] leading-[1.75] text-gray-600 sm:text-[16px]">
                Please provide Resume, Degrees, Transcripts, Skills Based Experience Letters. For Serious Inquiries Only. Ambright Tech is an Equal Opportunity Employer M/F/V/D.
              </p>
            </section>

          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
