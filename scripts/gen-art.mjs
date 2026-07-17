// Generates the site's vector illustrations (blue palette) into public/images/.
// Abstract, modern, IT-consulting themed — no stock photos required.
import { mkdirSync } from 'node:fs'
import { createRequire } from 'node:module'
const require_ = createRequire(import.meta.url)
const sharp = require_('/home/claude/.npm-global/lib/node_modules/sharp')

const OUT = new URL('../public/images/', import.meta.url).pathname
mkdirSync(OUT, { recursive: true })

const dots = (w, h, step, r, color, op) => {
  let s = ''
  for (let x = step; x < w; x += step)
    for (let y = step; y < h; y += step)
      s += `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" opacity="${op}"/>`
  return s
}

// 1 — About small: analytics dashboard on deep blue (876x692)
const teamSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="876" height="692">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#0E1E42"/><stop offset="1" stop-color="#1E3A8A"/>
</linearGradient>
<linearGradient id="bar" x1="0" y1="1" x2="0" y2="0">
<stop offset="0" stop-color="#2563EB"/><stop offset="1" stop-color="#60A5FA"/>
</linearGradient>
</defs>
<rect width="876" height="692" fill="url(#bg)"/>
${dots(876, 692, 44, 1.5, '#93C5FD', 0.18)}
<circle cx="760" cy="90" r="180" fill="#3B82F6" opacity="0.12"/>
<circle cx="80" cy="640" r="220" fill="#60A5FA" opacity="0.08"/>
<!-- main dashboard card -->
<rect x="120" y="150" width="460" height="340" rx="24" fill="#FFFFFF" opacity="0.97"/>
<rect x="152" y="186" width="150" height="14" rx="7" fill="#0E1E42" opacity="0.85"/>
<rect x="152" y="212" width="90" height="10" rx="5" fill="#94A3B8" opacity="0.6"/>
<rect x="152" y="380" width="52" height="74" rx="8" fill="url(#bar)"/>
<rect x="222" y="330" width="52" height="124" rx="8" fill="url(#bar)" opacity="0.85"/>
<rect x="292" y="290" width="52" height="164" rx="8" fill="url(#bar)"/>
<rect x="362" y="350" width="52" height="104" rx="8" fill="url(#bar)" opacity="0.7"/>
<rect x="432" y="252" width="52" height="202" rx="8" fill="url(#bar)"/>
<line x1="152" y1="454" x2="548" y2="454" stroke="#CBD5E1" stroke-width="2"/>
<!-- floating uptime card -->
<rect x="480" y="90" width="270" height="120" rx="20" fill="#0E1E42" opacity="0.95"/>
<circle cx="522" cy="150" r="18" fill="#2563EB"/>
<path d="M514 150 l6 7 l12 -14" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="556" y="128" width="120" height="12" rx="6" fill="#FFFFFF" opacity="0.9"/>
<rect x="556" y="152" width="80" height="10" rx="5" fill="#93C5FD" opacity="0.7"/>
<!-- line chart card -->
<rect x="560" y="420" width="220" height="160" rx="20" fill="#FFFFFF" opacity="0.95"/>
<polyline points="586,548 630,520 668,532 706,486 750,466" fill="none" stroke="#2563EB" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="750" cy="466" r="9" fill="#2563EB"/>
<circle cx="750" cy="466" r="16" fill="#2563EB" opacity="0.25"/>
</svg>`

// 2 — About large: cloud platform & code (1350x900)
const collabSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="1350" height="900">
<defs>
<linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#1E3A8A"/><stop offset="1" stop-color="#3B82F6"/>
</linearGradient>
</defs>
<rect width="1350" height="900" fill="url(#bg2)"/>
${dots(1350, 900, 52, 1.6, '#DBEAFE', 0.16)}
<circle cx="1180" cy="130" r="260" fill="#60A5FA" opacity="0.15"/>
<circle cx="120" cy="820" r="300" fill="#1D4ED8" opacity="0.25"/>
<!-- cloud -->
<g transform="translate(700,180)">
<circle cx="0" cy="80" r="95" fill="#FFFFFF" opacity="0.95"/>
<circle cx="120" cy="55" r="120" fill="#FFFFFF" opacity="0.95"/>
<circle cx="255" cy="90" r="85" fill="#FFFFFF" opacity="0.95"/>
<rect x="-70" y="90" width="400" height="90" rx="45" fill="#FFFFFF" opacity="0.95"/>
<circle cx="120" cy="90" r="26" fill="#2563EB"/>
<path d="M120 74 v32 M104 90 h32" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
</g>
<!-- nodes wired to cloud -->
<g stroke="#DBEAFE" stroke-width="3" opacity="0.75">
<line x1="820" y1="370" x2="640" y2="560"/><line x1="880" y1="370" x2="900" y2="580"/>
<line x1="960" y1="350" x2="1130" y2="520"/>
</g>
<g>
<circle cx="640" cy="580" r="26" fill="#0E1E42"/><circle cx="640" cy="580" r="10" fill="#60A5FA"/>
<circle cx="900" cy="600" r="26" fill="#0E1E42"/><circle cx="900" cy="600" r="10" fill="#60A5FA"/>
<circle cx="1150" cy="540" r="26" fill="#0E1E42"/><circle cx="1150" cy="540" r="10" fill="#60A5FA"/>
</g>
<!-- code window -->
<rect x="130" y="300" width="430" height="330" rx="24" fill="#0E1E42" opacity="0.97"/>
<circle cx="170" cy="342" r="8" fill="#EF4444" opacity="0.85"/>
<circle cx="196" cy="342" r="8" fill="#FBBF24" opacity="0.85"/>
<circle cx="222" cy="342" r="8" fill="#34D399" opacity="0.85"/>
<g>
<rect x="170" y="384" width="180" height="14" rx="7" fill="#60A5FA" opacity="0.9"/>
<rect x="170" y="418" width="280" height="14" rx="7" fill="#FFFFFF" opacity="0.55"/>
<rect x="204" y="452" width="220" height="14" rx="7" fill="#93C5FD" opacity="0.8"/>
<rect x="204" y="486" width="150" height="14" rx="7" fill="#FFFFFF" opacity="0.4"/>
<rect x="170" y="520" width="250" height="14" rx="7" fill="#60A5FA" opacity="0.85"/>
<rect x="170" y="554" width="110" height="14" rx="7" fill="#FFFFFF" opacity="0.55"/>
</g>
</svg>`

// 3 — Card: IT consulting terminal (1316x984)
const consultingSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="1316" height="984">
<defs>
<linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#0D1B36"/><stop offset="1" stop-color="#16295B"/>
</linearGradient>
<linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#2563EB"/><stop offset="1" stop-color="#60A5FA"/>
</linearGradient>
</defs>
<rect width="1316" height="984" fill="url(#bg3)"/>
${dots(1316, 984, 56, 1.8, '#3B82F6', 0.2)}
<circle cx="1150" cy="150" r="240" fill="#2563EB" opacity="0.14"/>
<!-- gear ring -->
<circle cx="1050" cy="700" r="150" fill="none" stroke="#3B82F6" stroke-width="26" stroke-dasharray="46 26" opacity="0.5"/>
<circle cx="1050" cy="700" r="72" fill="none" stroke="#60A5FA" stroke-width="10" opacity="0.6"/>
<!-- terminal -->
<rect x="150" y="200" width="640" height="440" rx="28" fill="#0A142E" stroke="#274690" stroke-width="2"/>
<rect x="150" y="200" width="640" height="64" rx="28" fill="#111F44"/>
<circle cx="196" cy="232" r="9" fill="#EF4444" opacity="0.9"/>
<circle cx="226" cy="232" r="9" fill="#FBBF24" opacity="0.9"/>
<circle cx="256" cy="232" r="9" fill="#34D399" opacity="0.9"/>
<g font-family="monospace">
<rect x="196" y="302" width="26" height="16" rx="4" fill="#60A5FA"/>
<rect x="236" y="302" width="230" height="16" rx="8" fill="#FFFFFF" opacity="0.75"/>
<rect x="196" y="342" width="320" height="16" rx="8" fill="#93C5FD" opacity="0.55"/>
<rect x="196" y="382" width="180" height="16" rx="8" fill="#FFFFFF" opacity="0.4"/>
<rect x="196" y="438" width="26" height="16" rx="4" fill="#60A5FA"/>
<rect x="236" y="438" width="300" height="16" rx="8" fill="#FFFFFF" opacity="0.75"/>
<rect x="196" y="478" width="250" height="16" rx="8" fill="#34D399" opacity="0.6"/>
<rect x="196" y="548" width="26" height="16" rx="4" fill="#60A5FA"/>
<rect x="236" y="548" width="16" height="16" rx="4" fill="#FFFFFF" opacity="0.9"/>
</g>
<!-- rising line -->
<polyline points="180,900 380,830 560,860 780,750 980,780 1200,640" fill="none" stroke="url(#glow)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
<circle cx="1200" cy="640" r="14" fill="#60A5FA"/>
<circle cx="1200" cy="640" r="26" fill="#60A5FA" opacity="0.25"/>
</svg>`

// 4 — Card: workforce network (1000x1000)
const person = (x, y, s, fill, op) => `
<g transform="translate(${x},${y}) scale(${s})" opacity="${op}">
<circle cx="0" cy="0" r="46" fill="${fill}"/>
<circle cx="0" cy="-12" r="15" fill="#FFFFFF"/>
<path d="M-22 26 a22 18 0 0 1 44 0 z" fill="#FFFFFF"/>
</g>`
const workforceSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000">
<defs>
<radialGradient id="bg4" cx="0.5" cy="0.42" r="0.9">
<stop offset="0" stop-color="#1E40AF"/><stop offset="1" stop-color="#0E1E42"/>
</radialGradient>
</defs>
<rect width="1000" height="1000" fill="url(#bg4)"/>
${dots(1000, 1000, 50, 1.6, '#93C5FD', 0.18)}
<g stroke="#60A5FA" stroke-width="3" opacity="0.55">
<line x1="500" y1="430" x2="250" y2="260"/><line x1="500" y1="430" x2="760" y2="230"/>
<line x1="500" y1="430" x2="200" y2="640"/><line x1="500" y1="430" x2="790" y2="600"/>
<line x1="500" y1="430" x2="420" y2="800"/><line x1="500" y1="430" x2="680" y2="810"/>
<line x1="250" y1="260" x2="760" y2="230"/><line x1="200" y1="640" x2="420" y2="800"/>
</g>
<circle cx="500" cy="430" r="120" fill="#2563EB" opacity="0.25"/>
${person(500, 430, 1.9, '#2563EB', 1)}
${person(250, 260, 1.15, '#3B82F6', 0.95)}
${person(760, 230, 1.0, '#1D4ED8', 0.95)}
${person(200, 640, 1.05, '#1D4ED8', 0.9)}
${person(790, 600, 1.2, '#3B82F6', 0.95)}
${person(420, 800, 0.95, '#2563EB', 0.9)}
${person(680, 810, 1.05, '#3B82F6', 0.9)}
</svg>`

const jobs = [
  ['about-team.webp', teamSVG],
  ['about-collab.webp', collabSVG],
  ['card-consulting.webp', consultingSVG],
  ['card-workforce.webp', workforceSVG],
]
await Promise.all(
  jobs.map(([name, svg]) =>
    sharp(Buffer.from(svg)).webp({ quality: 92 }).toFile(OUT + name),
  ),
)
console.log('artwork generated:', jobs.map(([n]) => n).join(', '))
