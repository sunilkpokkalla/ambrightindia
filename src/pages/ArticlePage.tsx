import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from '../router'
import { SEO } from '../components/SEO'
import type { Post } from '../data/posts'
import { POSTS } from '../data/posts'

export default function ArticlePage({ post }: { post: Post }) {
  const related = POSTS.filter(
    (p) => p.path !== post.path && p.category === post.category,
  ).slice(0, 2)

  return (
    <div>
      <SEO title={post.title} description={post.excerpt} image={post.image} url={`http://www.ambrighttech.com${post.path}`} />
      <div className="bg-[#EFEFEF]">
        <Navbar />
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="rounded bg-gray-900 px-2 py-0.5 text-[11px] text-white">
              {post.category}
            </span>
            <Link
              to="/blog"
              className="text-[13px] text-gray-600 transition-colors duration-300 hover:text-gray-900"
            >
              ← All posts
            </Link>
          </div>
          <h1 className="animate-fade-in-up mt-6 max-w-[880px] text-[clamp(1.6rem,4.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mt-8">
            {post.title}
          </h1>
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="animate-fade-in-up delay-200 hero-image-motion mt-8 w-full rounded-2xl object-cover shadow-[0_8px_32px_rgba(14,30,66,0.18)] aspect-[3/1] sm:mt-10"
            />
          )}
        </div>
      </div>

      <article className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex max-w-[760px] flex-col gap-6">
            {post.body.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-[16px] font-medium leading-[1.7] text-gray-900 sm:text-[18px]'
                    : 'text-[15px] leading-[1.75] text-gray-600 sm:text-[16px]'
                }
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-[#F5F5F5] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <h2 className="mb-8 text-[20px] font-semibold tracking-[-0.01em] text-gray-900 sm:text-[24px]">
              More from {post.category}
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 sm:gap-6">
              {related.map((p) => (
                <Link
                  key={p.path}
                  to={p.path}
                  className="group flex flex-col gap-3 rounded-2xl bg-white p-6 transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] sm:p-7"
                >
                  <span className="self-start rounded bg-gray-900 px-2 py-0.5 text-[11px] text-white">
                    {p.category}
                  </span>
                  <h3 className="text-[16px] font-semibold leading-[1.35] text-gray-900 sm:text-[17px]">
                    {p.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-gray-600 sm:text-[14px]">
                    {p.excerpt}
                  </p>
                  <span className="mt-1 flex items-center gap-2 text-[13px] font-medium text-gray-900">
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
      )}

      <Footer />
    </div>
  )
}
