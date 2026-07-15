import Navbar from './Navbar'
import ShaderBackdrop from './ShaderBackdrop'
import PartnerIcon from './PartnerIcon'
import RollButton from './RollButton'

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
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
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
    </section>
  )
}
