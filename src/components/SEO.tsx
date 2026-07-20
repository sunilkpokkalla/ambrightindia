import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

const DEFAULT_TITLE = 'AmBrightTech LLC — IT Consulting & Workforce Solutions'
const DEFAULT_DESCRIPTION =
  'AmBrightTech LLC is an IT consulting and staffing agency in McKinney, Texas, offering technology, architecture, cloud, devops, and data analytics solutions.'
const DEFAULT_IMAGE = 'http://www.ambrighttech.com/images/mummum-logo.png' // using a generic logo for fallback

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url = 'http://www.ambrighttech.com',
}: SEOProps) {
  const metaTitle = title ? `${title} | AmBrightTech` : DEFAULT_TITLE

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  )
}
