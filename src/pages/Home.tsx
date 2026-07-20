import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Footer from '../components/Footer'
import TrustedBy from '../components/TrustedBy'
import { Link } from '../router'
import { POSTS } from '../data/posts'

const EXPLORE = [
  { label: 'Artificial Intelligence', to: '/ai', desc: 'Strategy, generative AI, agents and MLOps — proven in our own operations first.', img: '/images/heroes/circuit.webp' },
  { label: 'Our Products', to: '/products', desc: 'In-house products from AmBrightTech Labs — born from real problems.', img: '/images/heroes/lab.webp' },
  { label: 'Startups', to: '/startups', desc: 'Idea validation to MVP in 90 days, with founder-friendly terms.', img: '/images/heroes/rocket.webp' },
  { label: 'Industries', to: '/industries', desc: 'Ten industries where we speak the domain language fluently.', img: '/images/heroes/city.webp' },
  { label: 'Technologies', to: '/technologies', desc: 'Fifteen stacks we build with and staff for — with real depth.', img: '/images/heroes/stack.webp' },
  { label: 'Roles We Staff', to: '/roles', desc: 'Practitioner-screened talent across ten role families.', img: '/images/heroes/briefcase.webp' },
]

function Explore() {
  return (
    <section className="bg-white pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-center gap-3 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
            3
          </span>
          <span className="rounded-full border border-gray-200 px-3 py-1 text-[12px] font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
            Explore AmBrightTech
          </span>
        </div>
        <h2 className="mb-10 px-5 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mb-14 sm:px-8 lg:mb-16 lg:px-12">
          Everything a modern business needs
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          to build, run and staff technology.
        </h2>
        <div className="grid grid-cols-1 gap-5 px-5 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:px-8 lg:px-12">
          {EXPLORE.map((e) => (
            <Link
              key={e.to}
              to={e.to}
              className="card-lift group flex flex-col overflow-hidden rounded-2xl border border-gray-200 transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              <img
                src={e.img}
                alt={e.label}
                className="w-full object-cover aspect-[2/1] transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.08]"
              />
              <span className="mx-6 mt-5 flex items-center justify-between">
                <h3 className="text-[16px] font-semibold text-gray-900 sm:text-[17px]">
                  {e.label}
                </h3>
                <ArrowRight
                  size={15}
                  className="text-[#2563EB] transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0"
                />
              </span>
              <p className="mx-6 mb-6 mt-2 text-[13px] leading-relaxed text-gray-600 sm:text-[14px]">
                {e.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const OUR_PRODUCTS = [
  { name: 'NoMenu', slug: 'nomenu', desc: 'Digital ordering, reimagined — no app download required.', color: '#0891B2' },
  { name: 'RxRemind', slug: 'rxremind', desc: 'Medication reminders that actually work.', color: '#059669' },
  { name: 'InGarage', slug: 'ingarage', desc: 'Vehicle maintenance made effortless.', color: '#D97706' },
  { name: 'SlotMyInterview', slug: 'slotmyinterview', desc: 'Interview scheduling that eliminates the back-and-forth.', color: '#E11D48' },
  { name: 'Alavatu', slug: 'alavatu', desc: 'Think bigger — ideas deserve more than a notes app.', color: '#7C3AED' },
  { name: 'MuMMum Tracker', slug: 'mummum-tracker', desc: 'Every feeding, every nap, every milestone — beautifully tracked.', color: '#2563EB' },
]

function Innovation() {
  return (
    <section className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-center gap-3 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
            4
          </span>
          <span className="rounded-full border border-gray-300 px-3 py-1 text-[12px] font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
            Innovation
          </span>
        </div>
        <div className="mb-10 px-5 sm:mb-14 sm:px-8 lg:px-12">
          <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900">
            Products we built in-house.
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] leading-[1.65] text-gray-600 sm:text-[17px]">
            Six products from AmBrightTech Labs — born from real problems in our own operations, now available to the world.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 px-5 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:px-8 lg:px-12">
          {OUR_PRODUCTS.map((p) => (
            <Link
              key={p.slug}
              to={'/products/' + p.slug}
              className="card-lift group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] sm:p-7"
            >
              <span
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-[15px] font-bold text-white"
                style={{ backgroundColor: p.color }}
              >
                {p.name.charAt(0)}
              </span>
              <h3 className="text-[17px] font-semibold text-gray-900 sm:text-[18px]">
                {p.name}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
                {p.desc}
              </p>
              <span className="mt-4 flex items-center gap-2 text-[13px] font-medium text-gray-900">
                Learn more
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0"
                />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 px-5 sm:mt-14 sm:px-8 lg:px-12">
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 text-[14px] font-medium text-gray-900"
          >
            View all products
            <ArrowRight
              size={14}
              className="transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

function NewsPreview() {
  const latest = POSTS.filter(
    (p) => p.category === 'News' || p.category === 'Blog',
  ).slice(0, 3)
  return (
    <section className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-center gap-3 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
            5
          </span>
          <span className="rounded-full border border-gray-300 px-3 py-1 text-[12px] font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
            Latest news
          </span>
        </div>
        <div className="mb-10 flex flex-col gap-6 px-5 sm:mb-14 sm:px-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900">
            From the newsroom.
          </h2>
          <Link
            to="/blog"
            className="group flex items-center gap-2 self-start text-[14px] font-medium text-gray-900 lg:self-end"
          >
            All posts
            <ArrowRight
              size={14}
              className="transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 px-5 md:grid-cols-3 sm:gap-6 sm:px-8 lg:px-12">
          {latest.map((p) => (
            <Link
              key={p.path}
              to={p.path}
              className="card-lift group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
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
              <h3 className="mx-6 mt-3 text-[16px] font-semibold leading-[1.35] text-gray-900 sm:text-[17px]">
                {p.title}
              </h3>
              <p className="mx-6 mt-2 text-[13px] leading-relaxed text-gray-600 sm:text-[14px]">
                {p.excerpt}
              </p>
              <span className="mx-6 mb-6 mt-3 flex items-center gap-2 text-[13px] font-medium text-gray-900">
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
  )
}

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <About />
      <Work />
      <Explore />
      <Innovation />
      <NewsPreview />
      <Footer />
    </div>
  )
}
