// Mini utility-CSS generator for LOCAL PREVIEW ONLY.
// The real build uses Tailwind 3.4 on Cloudflare Pages; this script exists
// because this sandbox has no npm access. It resolves the exact utility
// classes used in src/ into equivalent CSS.
import { readFileSync, readdirSync, writeFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const SRC = new URL('../src', import.meta.url).pathname
const OUT = process.argv[2] || 'preview/preview.css'

// ---------- collect candidate tokens ----------
function walk(dir, acc = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    if (statSync(p).isDirectory()) walk(p, acc)
    else if (/\.(tsx?|jsx?|html)$/.test(f)) acc.push(readFileSync(p, 'utf8'))
  }
  return acc
}
const tokens = new Set()
for (let source of walk(SRC)) {
  // strip comments — apostrophes/quotes inside them desync quote pairing
  source = source.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/\/\/[^\n]*/g, ' ')
  for (const m of source.matchAll(/"([^"]*)"|'([^']*)'|`([^`]*)`/g)) {
    const body = m[1] ?? m[2] ?? m[3] ?? ''
    for (const t of body.split(/\s+/)) {
      if (!t) continue
      tokens.add(t)
      // template-literal ternaries leave quotes/braces on token edges
      const cleaned = t.replace(/^['"`{}$?!;,]+|['"`{}$?!;,]+$/g, '')
      if (cleaned) tokens.add(cleaned)
    }
  }
}

// ---------- helpers ----------
const SPACING = (n) => {
  if (n === 'px') return '1px'
  if (n === 'full') return '100%'
  const f = parseFloat(n)
  return Number.isNaN(f) ? null : `${f * 0.25}rem`
}
const FRACTION = (v) => {
  const m = v.match(/^(\d+)\/(\d+)$/)
  return m ? `${(100 * +m[1]) / +m[2]}%` : null
}
const arb = (v) => v.replace(/_/g, ' ')
const COLORS = {
  white: '#fff',
  black: '#000',
  'gray-200': '#e5e7eb',
  'gray-300': '#d1d5db',
  'gray-500': '#6b7280',
  'gray-600': '#4b5563',
  'gray-900': '#111827',
}
function color(v) {
  const [name, alpha] = v.split('/')
  let c = null
  if (name.startsWith('[') && name.endsWith(']')) c = name.slice(1, -1)
  else c = COLORS[name] || null
  if (!c) return null
  if (alpha) {
    const hex = c.replace('#', '')
    const full = hex.length === 3 ? hex.split('').map((x) => x + x).join('') : hex
    const r = parseInt(full.slice(0, 2), 16),
      g = parseInt(full.slice(2, 4), 16),
      b = parseInt(full.slice(4, 6), 16)
    return `rgb(${r} ${g} ${b} / ${+alpha / 100})`
  }
  return c
}

// display utilities get an explicit sort rank so `hidden` wins like Tailwind
const DISPLAY = {
  block: 'block', 'inline-block': 'inline-block', inline: 'inline',
  flex: 'flex', 'inline-flex': 'inline-flex', grid: 'grid', hidden: 'none',
}

const STATIC = {
  relative: 'position:relative', absolute: 'position:absolute',
  fixed: 'position:fixed', sticky: 'position:sticky',
  'inset-0': 'inset:0',
  'flex-1': 'flex:1 1 0%', 'flex-col': 'flex-direction:column',
  'flex-row': 'flex-direction:row', 'shrink-0': 'flex-shrink:0',
  'items-center': 'align-items:center', 'items-start': 'align-items:flex-start',
  'items-end': 'align-items:flex-end',
  'justify-between': 'justify-content:space-between',
  'justify-center': 'justify-content:center', 'justify-end': 'justify-content:flex-end',
  'self-start': 'align-self:flex-start', 'self-end': 'align-self:flex-end',
  'overflow-hidden': 'overflow:hidden',
  'pointer-events-none': 'pointer-events:none',
  'cursor-pointer': 'cursor:pointer', 'cursor-default': 'cursor:default',
  'whitespace-nowrap': 'white-space:nowrap',
  'min-h-screen': 'min-height:100vh',
  'mx-auto': 'margin-left:auto;margin-right:auto',
  'w-full': 'width:100%', 'h-full': 'height:100%',
  'object-cover': 'object-fit:cover',
  'aspect-square': 'aspect-ratio:1/1',
  'rounded-full': 'border-radius:9999px', 'rounded-2xl': 'border-radius:1rem',
  'rounded-xl': 'border-radius:0.75rem', rounded: 'border-radius:0.25rem',
  border: 'border-width:1px', 'border-t': 'border-top-width:1px',
  'border-b': 'border-bottom-width:1px', 'border-l-2': 'border-left-width:2px',
  'font-medium': 'font-weight:500', 'font-semibold': 'font-weight:600',
  'font-bold': 'font-weight:700',
  'tracking-tight': 'letter-spacing:-0.025em', 'tracking-wide': 'letter-spacing:0.025em',
  'leading-relaxed': 'line-height:1.625',
  'fill-current': 'fill:currentColor',
  'opacity-0': 'opacity:0', 'opacity-100': 'opacity:1',
  'transition-colors':
    'transition-property:color,background-color,border-color,fill,stroke;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms',
  'transition-transform':
    'transition-property:transform;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms',
  'transition-opacity':
    'transition-property:opacity;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms',
  'transition-shadow':
    'transition-property:box-shadow;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms',
  'transition-all':
    'transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms',
  'ease-in-out': 'transition-timing-function:cubic-bezier(0.4,0,0.2,1)',
  'translate-y-0': 'transform:translateY(0)',
  'translate-y-full': 'transform:translateY(100%)',
  '-translate-y-1/2': 'transform:translateY(-50%)',
  'rotate-0': 'transform:rotate(0deg)',
  'scale-105': 'transform:scale(1.05)',
  '-rotate-45': 'transform:rotate(-45deg)',
  'text-center': 'text-align:center',
}

function resolveBase(base) {
  if (STATIC[base]) return STATIC[base]
  if (DISPLAY[base]) return `display:${DISPLAY[base]}`
  let m

  // z-index
  if ((m = base.match(/^z-(\d+)$/))) return `z-index:${m[1]}`

  // position offsets
  if ((m = base.match(/^(top|right|bottom|left)-(.+)$/))) {
    const v = SPACING(m[2]) || FRACTION(m[2])
    if (v) return `${m[1]}:${v}`
  }

  // grid
  if ((m = base.match(/^grid-cols-\[(.+)\]$/)))
    return `grid-template-columns:${arb(m[1])}`
  if ((m = base.match(/^grid-cols-(\d+)$/)))
    return `grid-template-columns:repeat(${m[1]},minmax(0,1fr))`

  // gap
  if ((m = base.match(/^gap-(.+)$/))) {
    const v = SPACING(m[1])
    if (v) return `gap:${v}`
  }

  // width / height / max-w
  if ((m = base.match(/^max-w-\[(.+)\]$/))) return `max-width:${arb(m[1])}`
  if ((m = base.match(/^([wh])-\[(.+)\]$/)))
    return `${m[1] === 'w' ? 'width' : 'height'}:${arb(m[2])}`
  if ((m = base.match(/^([wh])-(.+)$/))) {
    const prop = m[1] === 'w' ? 'width' : 'height'
    const v = SPACING(m[2]) || FRACTION(m[2])
    if (v) return `${prop}:${v}`
  }

  // aspect
  if ((m = base.match(/^aspect-\[(.+)\]$/))) return `aspect-ratio:${arb(m[1])}`

  // padding / margin
  const SIDES = {
    p: ['padding'], px: ['padding-left', 'padding-right'],
    py: ['padding-top', 'padding-bottom'], pt: ['padding-top'],
    pr: ['padding-right'], pb: ['padding-bottom'], pl: ['padding-left'],
    m: ['margin'], mx: ['margin-left', 'margin-right'],
    my: ['margin-top', 'margin-bottom'], mt: ['margin-top'],
    mr: ['margin-right'], mb: ['margin-bottom'], ml: ['margin-left'],
  }
  if ((m = base.match(/^(p[xytrbl]?|m[xytrbl]?)-\[(.+)\]$/)))
    return SIDES[m[1]].map((p) => `${p}:${arb(m[2])}`).join(';')
  if ((m = base.match(/^(p[xytrbl]?|m[xytrbl]?)-(.+)$/))) {
    const v = SPACING(m[2])
    if (v && SIDES[m[1]]) return SIDES[m[1]].map((p) => `${p}:${v}`).join(';')
  }

  // colors
  if ((m = base.match(/^bg-(.+)$/))) {
    const c = color(m[1])
    if (c) return `background-color:${c}`
  }
  if ((m = base.match(/^text-\[(#[0-9a-fA-F]{3,8})\]$/))) return `color:${m[1]}`
  if ((m = base.match(/^text-\[(.+)\]$/))) return `font-size:${arb(m[1])}`
  if ((m = base.match(/^text-(.+)$/))) {
    const c = color(m[1])
    if (c) return `color:${c}`
  }
  if ((m = base.match(/^border-(.+)$/))) {
    const c = color(m[1])
    if (c) return `border-color:${c}`
  }

  // typography
  if ((m = base.match(/^leading-\[(.+)\]$/))) return `line-height:${arb(m[1])}`
  if ((m = base.match(/^tracking-\[(.+)\]$/))) return `letter-spacing:${arb(m[1])}`

  // translate arbitrary
  if ((m = base.match(/^(-?)translate-y-\[(.+)\]$/)))
    return `transform:translateY(${m[1]}${arb(m[2])})`

  // rounded arbitrary
  if ((m = base.match(/^rounded-\[(.+)\]$/))) return `border-radius:${arb(m[1])}`

  // shadow arbitrary
  if ((m = base.match(/^shadow-\[(.+)\]$/))) return `box-shadow:${arb(m[1])}`

  // transitions
  if ((m = base.match(/^duration-(\d+)$/))) return `transition-duration:${m[1]}ms`
  if ((m = base.match(/^delay-(\d+)$/))) return `transition-delay:${m[1]}ms`
  if ((m = base.match(/^ease-\[(.+)\]$/)))
    return `transition-timing-function:${arb(m[1])}`

  return null
}

// split variants on ':' outside brackets
function splitVariants(token) {
  const parts = []
  let depth = 0,
    cur = ''
  for (const ch of token) {
    if (ch === '[') depth++
    if (ch === ']') depth--
    if (ch === ':' && depth === 0) {
      parts.push(cur)
      cur = ''
    } else cur += ch
  }
  parts.push(cur)
  return parts
}

const escapeClass = (t) => t.replace(/([^a-zA-Z0-9_-])/g, '\\$1')
const BP = { sm: 640, md: 768, lg: 1024, xl: 1280 }

// rank keeps display order Tailwind-like (hidden last)
function rank(base) {
  const dispOrder = ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'grid']
  const i = dispOrder.indexOf(base)
  if (i >= 0) return 10 + i
  if (base === 'hidden') return 40
  if (base.startsWith('transition')) return 50
  if (/^(duration|delay|ease)/.test(base)) return 55
  return 100
}

const buckets = { base: [], hover: [] }
for (const bp of Object.keys(BP)) buckets[bp] = []

let unresolvedSample = []
for (const token of [...tokens].sort()) {
  const parts = splitVariants(token)
  const base = parts.pop()
  const variants = parts
  const decl = resolveBase(base)
  if (!decl) {
    if (/[:[\]]|^-?[a-z]+-/.test(token) && !/^(https?|mailto)/.test(token))
      unresolvedSample.push(token)
    continue
  }
  let media = null
  let hover = false
  let groupHover = false
  let ok = true
  for (const v of variants) {
    if (v === 'hover') hover = true
    else if (v === 'group-hover') groupHover = true
    else if (BP[v]) media = v
    else ok = false
  }
  if (!ok) continue
  let selector = '.' + escapeClass(token)
  if (hover) selector += ':hover'
  if (groupHover) selector = '.group:hover ' + selector
  const rule = { css: `${selector}{${decl}}`, r: rank(base) }
  if (media) buckets[media].push(rule)
  else if (variants.includes('hover') || variants.includes('group-hover'))
    buckets.hover.push(rule)
  else buckets.base.push(rule)
}

const PREFLIGHT = `
*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
html{-webkit-text-size-adjust:100%;line-height:1.5}
body{margin:0;font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}
h1,h2,h3,h4,p,blockquote{margin:0;font-size:inherit;font-weight:inherit}
a{color:inherit;text-decoration:inherit}
button{background-color:transparent;background-image:none;padding:0;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;cursor:pointer;text-transform:none}
img,svg,video{display:block;vertical-align:middle}
img,video{max-width:100%;height:auto}
ul,ol{margin:0;padding:0;list-style:none}
`

let css = PREFLIGHT
const emit = (rules) =>
  rules.sort((a, b) => a.r - b.r).map((x) => x.css).join('\n')
css += emit(buckets.base) + '\n' + emit(buckets.hover) + '\n'
for (const [bp, px] of Object.entries(BP)) {
  if (!buckets[bp].length) continue
  css += `@media (min-width:${px}px){\n${emit(buckets[bp])}\n}\n`
}

// Append custom CSS from index.css (animations, fallback blobs, etc.)
const indexCss = readFileSync(join(SRC, 'index.css'), 'utf8')
  .replace(/@tailwind\s+\w+;\s*/g, '') // strip @tailwind directives
css += '\n/* === Custom CSS from index.css === */\n' + indexCss

writeFileSync(OUT, css)
console.log(`wrote ${OUT} (${css.length} bytes)`)
if (unresolvedSample.length)
  console.log('unresolved (check these):', unresolvedSample.join(' '))
