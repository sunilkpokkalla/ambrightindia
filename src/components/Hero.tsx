import Navbar from './Navbar'
import ShaderBackdrop from './ShaderBackdrop'
import PartnerIcon from './PartnerIcon'
import RollButton from './RollButton'
import { Network } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col bg-[#EFEFEF]">
      {/* Animated shader overlay */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <ShaderBackdrop />
      </div>

      <Navbar />

      <div className="flex-1" />

      {/* Hero content pinned to the bottom of the viewport */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-12 px-5 pb-14 sm:px-8 sm:pb-16 lg:flex-row lg:items-end lg:px-12 lg:pb-20">
        
        {/* Left Side - Main Headline */}
        <div className="max-w-[840px]">
          <p className="mb-5 text-[13px] tracking-wide text-gray-900 sm:mb-8 sm:text-[14px]">
            AmBrightTech LLC
          </p>
          <h1 className="text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
            We deliver IT consulting
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            and bright talent for businesses
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            ready to lead their industry.
          </h1>

          <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
            <RollButton
              label="Start with us"
              href="/contact"
              pillClassName="bg-[#2563EB] hover:bg-[#1d4ed8] text-white self-start"
              paddingClassName="pl-5 sm:pl-6 pr-2 py-2"
              textSizeClassName="text-[13px] sm:text-[14px]"
              circleClassName="w-7 h-7 sm:w-8 sm:h-8 bg-white"
              arrowClassName="text-[#2563EB]"
              arrowSize={14}
            />

            <div className="flex cursor-default items-center gap-2.5 self-start rounded-[4px] bg-white py-2 pl-3 pr-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
              <PartnerIcon className="h-5 w-5 fill-current text-[#3B82F6] sm:h-6 sm:w-6" />
              <span className="text-[13px] font-medium text-gray-900 sm:text-[14px]">
                Certified Partner
              </span>
              <span className="rounded bg-gray-900 px-1.5 py-0.5 text-[10px] text-white sm:px-2 sm:text-[11px]">
                Featured
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Innovation Blurb */}
        <div className="max-w-[400px] rounded-2xl bg-white/30 p-6 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] lg:mb-2">
           <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/50 p-2 shadow-sm border border-white/60">
             <Network className="h-5 w-5 text-[#2563EB]" strokeWidth={1.5} />
           </div>
           <div className="mb-3 flex items-center gap-2">
             <div className="h-2 w-2 rounded-full bg-[#2563EB] animate-pulse"></div>
             <p className="text-[13px] font-bold uppercase tracking-wider text-gray-900">Innovation at our core</p>
           </div>
           <p className="text-[14px] text-gray-800 leading-[1.6]">
             We don't just staff teams—we build the future. Through <strong>AmBrightTech Labs</strong>, we engineer our own in-house products, bringing real-world product development experience directly to your IT consulting engagements.
           </p>
        </div>
      </div>
    </section>
  )
}
