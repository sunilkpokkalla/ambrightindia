import RollButton from './RollButton'

// Custom illustrations shipped with the site (swap for real photos anytime)
const IMG_SMALL = '/images/about-team.webp'
const IMG_LARGE = '/images/about-collab.webp'

function AboutButton() {
  return (
    <RollButton
      label="About our company"
      href="/aboutus"
      pillClassName="bg-[#2563EB] hover:bg-[#1d4ed8] text-white self-start"
      paddingClassName="pl-5 sm:pl-6 pr-2 py-2"
      textSizeClassName="text-[13px] sm:text-[14px]"
      circleClassName="w-7 h-7 sm:w-8 sm:h-8 bg-white"
      arrowClassName="text-[#2563EB]"
      arrowSize={14}
    />
  )
}

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-[1440px]">
        {/* Badge row */}
        <div className="mb-6 flex items-center gap-3 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
            1
          </span>
          <span className="rounded-full border border-gray-200 px-3 py-1 text-[12px] font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
            Introducing AmBrightTech
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-12 px-5 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mb-16 sm:px-8 lg:mb-28 lg:px-12">
          Strategy-led consulting, delivering
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          results in technology and beyond.
        </h2>

        {/* Mobile / tablet layout */}
        <div className="px-5 sm:px-8 lg:hidden">
          <p className="text-[15px] font-medium leading-[1.6] text-gray-900 sm:text-[17px]">
            Through consulting, staffing and workforce solutions we help
            growing businesses realize their full technology potential.
          </p>
          <div className="mt-6">
            <AboutButton />
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
            <img
              src={IMG_SMALL}
              alt="The AmBrightTech team at work"
              className="animate-fade-in-up w-full rounded-xl object-cover aspect-[438/346] sm:w-[45%] sm:rounded-2xl"
            />
            <img
              src={IMG_LARGE}
              alt="AmBrightTech consultants collaborating"
              className="animate-fade-in-up delay-200 w-full rounded-xl object-cover aspect-[900/600] sm:w-[55%] sm:rounded-2xl"
            />
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden grid-cols-[26%_1fr_48%] items-end gap-6 px-12 lg:grid xl:gap-8">
          <div className="self-end">
            <img
              src={IMG_SMALL}
              alt="The AmBrightTech team at work"
              className="w-full rounded-2xl object-cover aspect-[438/346]"
            />
          </div>
          <div className="flex flex-col items-start justify-end gap-8 self-start">
            <p className="whitespace-nowrap text-[16px] font-medium leading-[1.65] text-gray-900 xl:text-[18px]">
              Through consulting, staffing and
              <br />
              workforce solutions we help growing
              <br />
              businesses realize their full potential.
            </p>
            <AboutButton />
          </div>
          <div className="self-end">
            <img
              src={IMG_LARGE}
              alt="AmBrightTech consultants collaborating"
              className="w-full rounded-2xl object-cover aspect-[3/2]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
