import { useState } from 'react'
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

const INPUT_CLASS =
  'w-full rounded-xl border border-gray-200 px-4 py-3 text-[14px] text-gray-900 outline-none transition-all duration-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20'

function ApplicationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    coverNote: '',
  })
  const [resume, setResume] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const formData = new FormData()
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('phone', form.phone)
      formData.append('role', form.role)
      formData.append('coverNote', form.coverNote)
      if (resume) formData.append('resume', resume)

      const res = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="mt-12 rounded-2xl bg-[#F0FDF4] p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-[18px] font-semibold text-gray-900">Application received!</h3>
        <p className="mt-2 text-[14px] text-gray-600">
          Thank you, {form.name}. Our team will review your application and get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-12 rounded-2xl bg-[#F5F5F5] p-6 sm:p-8">
      <h2 className="mb-2 text-[18px] font-semibold text-gray-900 sm:text-[20px]">
        Apply now
      </h2>
      <p className="mb-6 max-w-[560px] text-[14px] leading-[1.65] text-gray-600 sm:text-[15px]">
        Upload your resume and tell us what you do best. We match
        AmBright-Techies to roles year-round.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[13px] font-medium text-gray-900">
              Full name *
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className={INPUT_CLASS}
              placeholder="Jane Smith"
              required
            />
          </div>
          <div>
            <label className="mb-1.5 block text-[13px] font-medium text-gray-900">
              Email *
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className={INPUT_CLASS}
              placeholder="jane@example.com"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[13px] font-medium text-gray-900">
              Phone
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              className={INPUT_CLASS}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-[13px] font-medium text-gray-900">
              Desired role
            </label>
            <input
              type="text"
              value={form.role}
              onChange={(e) => update('role', e.target.value)}
              className={INPUT_CLASS}
              placeholder="e.g. Senior Java Developer"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-[13px] font-medium text-gray-900">
            Cover note
          </label>
          <textarea
            value={form.coverNote}
            onChange={(e) => update('coverNote', e.target.value)}
            className={INPUT_CLASS + ' min-h-[100px] resize-y'}
            placeholder="Tell us about yourself and what you are looking for..."
          />
        </div>

        <div>
          <label className="mb-1.5 block text-[13px] font-medium text-gray-900">
            Resume (PDF or DOCX) *
          </label>
          <div className="relative">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResume(e.target.files?.[0] || null)}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-gray-900 file:px-4 file:py-1.5 file:text-[12px] file:font-medium file:text-white"
              required
            />
          </div>
          {resume && (
            <p className="mt-1.5 text-[12px] text-gray-500">
              Selected: {resume.name} ({(resume.size / 1024).toFixed(0)} KB)
            </p>
          )}
        </div>

        {status === 'error' && (
          <p className="text-[13px] text-red-600">
            Something went wrong. Please try again or email us at contact@ambrighttech.com.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="mt-2 self-start rounded-xl bg-gray-900 px-8 py-3 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-gray-800 disabled:opacity-60"
        >
          {status === 'sending' ? 'Submitting...' : 'Submit application'}
        </button>
      </form>
    </div>
  )
}

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
              Openings across our client base and consulting practices. Don\'t
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

          <ApplicationForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}
