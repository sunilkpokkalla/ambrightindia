import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from '../router'
import { POSTS } from '../data/posts'

export default function BlogIndex({
  title = 'Blog & News',
  intro = 'Stories, announcements and insights from the AmBright-Techie community.',
  filterPaths,
}: {
  title?: string
  intro?: string
  /** When set, show only these post paths (used by archive pages). */
  filterPaths?: string[]
}) {
  const posts = filterPaths
    ? POSTS.filter((p) => filterPaths.includes(p.path))
    : POSTS.filter((p) => p.category === 'News' || p.category === 'Blog')

  return (
    <div>
      <div className="bg-[#EFEFEF]">
        <Navbar />
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12">
          <span className="rounded-full border border-gray-300 px-3 py-1 text-[12px] font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
            {title}
          </span>
          <h1 className="mt-6 text-[clamp(1.75rem,5vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:mt-8">
            Latest from AmBrightTech
          </h1>
          <p className="mt-5 max-w-[640px] text-[15px] leading-[1.65] text-gray-600 sm:mt-6 sm:text-[17px]">
            {intro}
          </p>
        </div>
      </div>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {posts.map((p) => (
              <Link
                key={p.path}
                to={p.path}
                className="group flex flex-col gap-3 overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full object-cover aspect-[2/1] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                  />
                )}
                <span className="mx-6 mt-4 self-start rounded bg-gray-900 px-2 py-0.5 text-[11px] text-white">
                  {p.category}
                </span>
                <h2 className="mx-6 text-[16px] font-semibold leading-[1.35] text-gray-900 sm:text-[17px]">
                  {p.title}
                </h2>
                <p className="mx-6 text-[13px] leading-relaxed text-gray-600 sm:text-[14px]">
                  {p.excerpt}
                </p>
                <span className="mx-6 mb-6 mt-1 flex items-center gap-2 text-[13px] font-medium text-gray-900">
                  Read post
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
