import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RollButton from '../components/RollButton'

export default function NotFound() {
  return (
    <div>
      <div className="bg-[#EFEFEF]">
        <Navbar />
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-6 px-5 pb-20 pt-14 sm:px-8 lg:px-12">
          <span className="rounded-full border border-gray-300 px-3 py-1 text-[12px] font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
            404
          </span>
          <h1 className="text-[clamp(1.75rem,5vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900">
            This page took a brighter path.
          </h1>
          <p className="max-w-[560px] text-[15px] leading-[1.65] text-gray-600 sm:text-[17px]">
            The address you followed doesn\'t exist on the new site. Head back
            home or reach out and we\'ll point you the right way.
          </p>
          <RollButton
            label="Back to home"
            href="/"
            pillClassName="bg-gray-900 text-white self-start"
            circleClassName="w-7 h-7 bg-white"
            arrowClassName="text-gray-900"
            arrowSize={13}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
