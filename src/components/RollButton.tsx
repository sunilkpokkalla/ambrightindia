import { ArrowRight } from 'lucide-react'
import { Link } from '../router'

/**
 * Pill button with the signature "text roll" hover animation:
 * the label is duplicated in a flex-col container clipped to 20px;
 * on hover the column slides up 50% so the second copy rolls in.
 * The arrow sits in a circle and rotates -45deg on hover.
 */
interface RollButtonProps {
  label: string
  href?: string
  /** Pill background / text classes */
  pillClassName: string
  /** Left padding differs between navbar and hero variants */
  paddingClassName?: string
  /** Circle that holds the arrow */
  circleClassName: string
  /** Arrow icon classes (color) */
  arrowClassName?: string
  arrowSize?: number
  textSizeClassName?: string
}

export default function RollButton({
  label,
  href = '/contact',
  pillClassName,
  paddingClassName = 'pl-5 pr-2 py-2',
  circleClassName,
  arrowClassName = '',
  arrowSize = 12,
  textSizeClassName = 'text-[13px]',
}: RollButtonProps) {
  const className = `group inline-flex items-center gap-3 rounded-full font-medium transition-colors duration-300 ${textSizeClassName} ${paddingClassName} ${pillClassName}`
  const inner = (
    <>
      <span className="overflow-hidden h-[20px]">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="h-[20px] leading-[20px] whitespace-nowrap">{label}</span>
          <span className="h-[20px] leading-[20px] whitespace-nowrap">{label}</span>
        </span>
      </span>
      <span
        className={`flex items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 ${circleClassName}`}
      >
        <ArrowRight size={arrowSize} className={arrowClassName} />
      </span>
    </>
  )
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className}>
        {inner}
      </Link>
    )
  }
  return (
    <a href={href} className={className}>
      {inner}
    </a>
  )
}
