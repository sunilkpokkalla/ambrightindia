// Generates the themed hero/thumbnail illustration library (blue palette)
// into public/images/heroes/. 15 themes used across pages, posts and cards.
import { mkdirSync } from 'node:fs'
import { createRequire } from 'node:module'
const require_ = createRequire(import.meta.url)
const sharp = require_('/home/claude/.npm-global/lib/node_modules/sharp')

const OUT = new URL('../public/images/heroes/', import.meta.url).pathname
mkdirSync(OUT, { recursive: true })

const W = 1200
const H = 800

const PALETTES = {
  navy: ['#0E1E42', '#1E3A8A'],
  blue: ['#1E3A8A', '#3B82F6'],
  deep: ['#0D1B36', '#16295B'],
  indigo: ['#141C4D', '#2743A6'],
}

const dots = (step = 52) => {
  let s = ''
  for (let x = step; x < W; x += step)
    for (let y = step; y < H; y += step)
      s += `<circle cx="${x}" cy="${y}" r="1.6" fill="#93C5FD" opacity="0.16"/>`
  return s
}

const glow = (cx, cy, r, c = '#3B82F6', op = 0.15) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" opacity="${op}"/>`

const frame = (pal, inner) => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="${PALETTES[pal][0]}"/><stop offset="1" stop-color="${PALETTES[pal][1]}"/>
</linearGradient></defs>
<rect width="${W}" height="${H}" fill="url(#bg)"/>
${dots()}
${inner}
</svg>`

const person = (x, y, s, fill, op = 1) => `
<g transform="translate(${x},${y}) scale(${s})" opacity="${op}">
<circle cx="0" cy="0" r="46" fill="${fill}"/>
<circle cx="0" cy="-12" r="15" fill="#FFFFFF"/>
<path d="M-22 26 a22 18 0 0 1 44 0 z" fill="#FFFFFF"/>
</g>`

const codeLines = (x, y, lines) =>
  lines
    .map(
      ([w, c, o], i) =>
        `<rect x="${x}" y="${y + i * 34}" width="${w}" height="14" rx="7" fill="${c}" opacity="${o}"/>`,
    )
    .join('')

const THEMES = {
  // AI chip / circuit
  circuit: ['indigo', `
${glow(1000, 140, 220)}
<g transform="translate(430,240)">
<rect x="0" y="0" width="340" height="340" rx="36" fill="#0A142E" stroke="#3B82F6" stroke-width="3"/>
<rect x="80" y="80" width="180" height="180" rx="20" fill="#12234F" stroke="#60A5FA" stroke-width="3"/>
<text x="170" y="185" font-family="sans-serif" font-size="52" font-weight="700" fill="#60A5FA" text-anchor="middle">AI</text>
${[0, 1, 2, 3].map((i) => `
<line x1="${60 + i * 74}" y1="0" x2="${60 + i * 74}" y2="-70" stroke="#3B82F6" stroke-width="6" stroke-linecap="round"/>
<line x1="${60 + i * 74}" y1="340" x2="${60 + i * 74}" y2="410" stroke="#3B82F6" stroke-width="6" stroke-linecap="round"/>
<line x1="0" y1="${60 + i * 74}" x2="-70" y2="${60 + i * 74}" stroke="#3B82F6" stroke-width="6" stroke-linecap="round"/>
<line x1="340" y1="${60 + i * 74}" x2="410" y2="${60 + i * 74}" stroke="#3B82F6" stroke-width="6" stroke-linecap="round"/>
<circle cx="${60 + i * 74}" cy="-70" r="8" fill="#60A5FA"/>
<circle cx="${60 + i * 74}" cy="410" r="8" fill="#60A5FA"/>
<circle cx="-70" cy="${60 + i * 74}" r="8" fill="#60A5FA"/>
<circle cx="410" cy="${60 + i * 74}" r="8" fill="#60A5FA"/>`).join('')}
</g>`],
  // neural network
  neural: ['navy', `
${glow(200, 650, 240)}
<g stroke="#60A5FA" stroke-width="2.5" opacity="0.5">
${[220, 220, 220].map((_, i) => '').join('')}
${(() => {
    const L = [[300, [250, 400, 550]], [600, [180, 330, 480, 630]], [900, [250, 400, 550]]]
    let lines = ''
    for (let li = 0; li < L.length - 1; li++)
      for (const y1 of L[li][1])
        for (const y2 of L[li + 1][1])
          lines += `<line x1="${L[li][0]}" y1="${y1}" x2="${L[li + 1][0]}" y2="${y2}"/>`
    return lines
  })()}
</g>
${(() => {
    const L = [[300, [250, 400, 550]], [600, [180, 330, 480, 630]], [900, [250, 400, 550]]]
    let c = ''
    for (const [x, ys] of L)
      for (const y of ys)
        c += `<circle cx="${x}" cy="${y}" r="26" fill="#0A142E" stroke="#60A5FA" stroke-width="3"/><circle cx="${x}" cy="${y}" r="10" fill="#3B82F6"/>`
    return c
  })()}`],
  // cloud
  cloud: ['blue', `
${glow(1050, 620, 260, '#1D4ED8', 0.3)}
<g transform="translate(600,230)">
<circle cx="-140" cy="90" r="95" fill="#FFFFFF" opacity="0.96"/>
<circle cx="0" cy="55" r="120" fill="#FFFFFF" opacity="0.96"/>
<circle cx="140" cy="95" r="85" fill="#FFFFFF" opacity="0.96"/>
<rect x="-210" y="95" width="400" height="90" rx="45" fill="#FFFFFF" opacity="0.96"/>
<circle cx="0" cy="95" r="27" fill="#2563EB"/>
<path d="M0 79 v32 M-16 95 h32" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
</g>
<g stroke="#DBEAFE" stroke-width="3" opacity="0.7">
<line x1="500" y1="420" x2="360" y2="600"/><line x1="620" y1="430" x2="640" y2="620"/><line x1="740" y1="410" x2="900" y2="580"/>
</g>
<circle cx="360" cy="620" r="26" fill="#0E1E42"/><circle cx="360" cy="620" r="10" fill="#60A5FA"/>
<circle cx="640" cy="640" r="26" fill="#0E1E42"/><circle cx="640" cy="640" r="10" fill="#60A5FA"/>
<circle cx="900" cy="600" r="26" fill="#0E1E42"/><circle cx="900" cy="600" r="10" fill="#60A5FA"/>`],
  // code
  code: ['deep', `
${glow(1020, 180, 220)}
<rect x="240" y="170" width="720" height="470" rx="28" fill="#0A142E" stroke="#274690" stroke-width="2"/>
<rect x="240" y="170" width="720" height="64" rx="28" fill="#111F44"/>
<circle cx="286" cy="202" r="9" fill="#EF4444" opacity="0.9"/><circle cx="316" cy="202" r="9" fill="#FBBF24" opacity="0.9"/><circle cx="346" cy="202" r="9" fill="#34D399" opacity="0.9"/>
${codeLines(290, 280, [
    [200, '#60A5FA', 0.9], [340, '#FFFFFF', 0.5], [260, '#93C5FD', 0.8],
    [180, '#FFFFFF', 0.35], [300, '#34D399', 0.55], [240, '#60A5FA', 0.85],
    [150, '#FFFFFF', 0.5], [280, '#93C5FD', 0.7],
  ])}`],
  // chart
  chart: ['navy', `
${glow(180, 160, 200)}
<rect x="250" y="160" width="700" height="480" rx="28" fill="#FFFFFF" opacity="0.97"/>
<rect x="300" y="210" width="180" height="16" rx="8" fill="#0E1E42" opacity="0.85"/>
<rect x="300" y="240" width="110" height="11" rx="5" fill="#94A3B8" opacity="0.6"/>
<rect x="300" y="470" width="70" height="110" rx="10" fill="#2563EB"/>
<rect x="395" y="420" width="70" height="160" rx="10" fill="#3B82F6"/>
<rect x="490" y="370" width="70" height="210" rx="10" fill="#2563EB"/>
<rect x="585" y="440" width="70" height="140" rx="10" fill="#60A5FA"/>
<rect x="680" y="330" width="70" height="250" rx="10" fill="#2563EB"/>
<polyline points="300,340 420,300 540,320 660,250 780,230 890,180" fill="none" stroke="#1D4ED8" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
<circle cx="890" cy="180" r="10" fill="#1D4ED8"/>`],
  // rocket
  rocket: ['indigo', `
${glow(950, 200, 240)}
${[[180, 130], [1050, 560], [300, 620], [880, 90]].map(([x, y]) => `<path d="M${x} ${y} l6 14 14 6 -14 6 -6 14 -6 -14 -14 -6 14 -6 z" fill="#93C5FD" opacity="0.6"/>`).join('')}
<g transform="translate(600,400) rotate(-45)">
<path d="M0 -190 C 60 -110 70 -20 45 90 L -45 90 C -70 -20 -60 -110 0 -190 Z" fill="#FFFFFF"/>
<circle cx="0" cy="-40" r="34" fill="#2563EB"/>
<circle cx="0" cy="-40" r="20" fill="#0E1E42"/>
<path d="M-45 40 L-105 120 L-45 100 Z" fill="#60A5FA"/>
<path d="M45 40 L105 120 L45 100 Z" fill="#60A5FA"/>
<path d="M-24 92 L0 190 L24 92 Z" fill="#FBBF24"/>
<path d="M-13 92 L0 150 L13 92 Z" fill="#F97316"/>
</g>`],
  // shield
  shield: ['deep', `
${glow(220, 620, 240)}
<g transform="translate(600,400)">
<path d="M0 -230 C 80 -180 160 -160 210 -155 C 210 30 140 170 0 235 C -140 170 -210 30 -210 -155 C -160 -160 -80 -180 0 -230 Z" fill="#12234F" stroke="#3B82F6" stroke-width="5"/>
<path d="M0 -170 C 55 -135 115 -120 155 -115 C 152 20 100 122 0 172 C -100 122 -152 20 -155 -115 C -115 -120 -55 -135 0 -170 Z" fill="#0A142E"/>
<path d="M-70 0 L-15 60 L85 -60" stroke="#60A5FA" stroke-width="22" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>`],
  // gears
  gears: ['navy', `
${glow(1000, 640, 220)}
<circle cx="520" cy="380" r="170" fill="none" stroke="#3B82F6" stroke-width="42" stroke-dasharray="52 30" opacity="0.85"/>
<circle cx="520" cy="380" r="86" fill="none" stroke="#60A5FA" stroke-width="12" opacity="0.8"/>
<circle cx="520" cy="380" r="30" fill="#60A5FA"/>
<circle cx="810" cy="560" r="110" fill="none" stroke="#93C5FD" stroke-width="30" stroke-dasharray="36 22" opacity="0.7"/>
<circle cx="810" cy="560" r="52" fill="none" stroke="#DBEAFE" stroke-width="9" opacity="0.6"/>
<circle cx="810" cy="560" r="18" fill="#DBEAFE" opacity="0.85"/>`],
  // people network
  people: ['blue', `
${glow(180, 180, 220, '#1D4ED8', 0.3)}
<g stroke="#DBEAFE" stroke-width="3" opacity="0.6">
<line x1="600" y1="380" x2="330" y2="240"/><line x1="600" y1="380" x2="880" y2="220"/>
<line x1="600" y1="380" x2="300" y2="580"/><line x1="600" y1="380" x2="900" y2="560"/>
<line x1="600" y1="380" x2="560" y2="680"/>
</g>
<circle cx="600" cy="380" r="110" fill="#1D4ED8" opacity="0.3"/>
${person(600, 380, 1.8, '#0E1E42')}
${person(330, 240, 1.1, '#1D4ED8', 0.95)}
${person(880, 220, 1.0, '#0E1E42', 0.95)}
${person(300, 580, 1.05, '#0E1E42', 0.9)}
${person(900, 560, 1.15, '#1D4ED8', 0.95)}
${person(560, 680, 0.95, '#0E1E42', 0.9)}`],
  // city
  city: ['navy', `
${glow(1030, 170, 240)}
${(() => {
    const b = [[220, 340, 120], [360, 240, 150], [530, 420, 130], [680, 180, 170], [870, 320, 140]]
    let s = ''
    for (const [x, top, w] of b) {
      s += `<rect x="${x}" y="${top}" width="${w}" height="${700 - top}" rx="10" fill="#12234F" stroke="#274690" stroke-width="2"/>`
      for (let wx = x + 18; wx < x + w - 18; wx += 34)
        for (let wy = top + 24; wy < 660; wy += 44)
          s += `<rect x="${wx}" y="${wy}" width="16" height="20" rx="3" fill="${Math.random() > 0.4 ? '#60A5FA' : '#1E3A8A'}" opacity="0.85"/>`
    }
    return s
  })()}
<rect x="160" y="698" width="900" height="6" rx="3" fill="#3B82F6" opacity="0.7"/>`],
  // data stack
  stack: ['indigo', `
${glow(220, 200, 220)}
<g transform="translate(600,400)">
${[-110, 0, 110].map((y, i) => `
<ellipse cx="0" cy="${y - 45}" rx="210" ry="55" fill="${i === 1 ? '#1D4ED8' : '#12234F'}" stroke="#60A5FA" stroke-width="3"/>
<path d="M-210 ${y - 45} v60 a210 55 0 0 0 420 0 v-60" fill="${i === 1 ? '#1D4ED8' : '#12234F'}" stroke="#60A5FA" stroke-width="3"/>
<ellipse cx="0" cy="${y - 45}" rx="210" ry="55" fill="${i === 1 ? '#2563EB' : '#0A142E'}"/>`).join('')}
<circle cx="150" cy="-155" r="10" fill="#60A5FA"/><circle cx="-120" cy="-45" r="10" fill="#93C5FD"/><circle cx="90" cy="65" r="10" fill="#60A5FA"/>
</g>`],
  // mobile
  mobile: ['deep', `
${glow(980, 620, 230)}
<g transform="translate(600,400)">
<rect x="-150" y="-260" width="300" height="520" rx="44" fill="#0A142E" stroke="#3B82F6" stroke-width="4"/>
<rect x="-122" y="-220" width="244" height="420" rx="20" fill="#12234F"/>
<rect x="-50" y="-244" width="100" height="12" rx="6" fill="#274690"/>
<rect x="-98" y="-190" width="140" height="16" rx="8" fill="#60A5FA" opacity="0.9"/>
<rect x="-98" y="-152" width="196" height="90" rx="14" fill="#2563EB"/>
<rect x="-98" y="-40" width="90" height="80" rx="14" fill="#1E3A8A"/>
<rect x="8" y="-40" width="90" height="80" rx="14" fill="#1E3A8A"/>
<rect x="-98" y="62" width="196" height="14" rx="7" fill="#FFFFFF" opacity="0.5"/>
<rect x="-98" y="94" width="150" height="14" rx="7" fill="#FFFFFF" opacity="0.3"/>
<rect x="-98" y="140" width="196" height="44" rx="22" fill="#2563EB"/>
</g>`],
  // lab flask
  lab: ['indigo', `
${glow(230, 180, 220)}
<g transform="translate(620,380)">
<path d="M-42 -230 h84 v40 h-16 v120 L 150 160 a40 40 0 0 1 -34 60 h-232 a40 40 0 0 1 -34 -60 L -26 -70 v-120 h-16 z" fill="#12234F" stroke="#60A5FA" stroke-width="4"/>
<path d="M-78 60 L 96 60 L 150 160 a40 40 0 0 1 -34 60 h-232 a40 40 0 0 1 -34 -60 Z" fill="#2563EB" opacity="0.85"/>
<circle cx="-20" cy="120" r="14" fill="#93C5FD" opacity="0.9"/>
<circle cx="40" cy="160" r="10" fill="#DBEAFE" opacity="0.9"/>
<circle cx="10" cy="30" r="8" fill="#60A5FA"/>
<circle cx="60" cy="-40" r="12" fill="#60A5FA" opacity="0.7"/>
<circle cx="-50" cy="-100" r="9" fill="#93C5FD" opacity="0.7"/>
</g>`],
  // target
  target: ['blue', `
${glow(200, 620, 240, '#1D4ED8', 0.3)}
<g transform="translate(620,400)">
<circle r="230" fill="none" stroke="#DBEAFE" stroke-width="26" opacity="0.5"/>
<circle r="160" fill="none" stroke="#93C5FD" stroke-width="26" opacity="0.7"/>
<circle r="90" fill="none" stroke="#FFFFFF" stroke-width="26" opacity="0.9"/>
<circle r="30" fill="#0E1E42"/>
<line x1="30" y1="-30" x2="200" y2="-200" stroke="#0E1E42" stroke-width="14" stroke-linecap="round"/>
<path d="M200 -200 l-14 -52 66 0 0 66 -52 -14 z" fill="#0E1E42"/>
</g>`],
  // briefcase
  briefcase: ['navy', `
${glow(1000, 200, 230)}
<g transform="translate(600,420)">
<rect x="-250" y="-120" width="500" height="300" rx="32" fill="#12234F" stroke="#3B82F6" stroke-width="4"/>
<path d="M-90 -120 v-50 a30 30 0 0 1 30 -30 h120 a30 30 0 0 1 30 30 v50" fill="none" stroke="#3B82F6" stroke-width="16" stroke-linecap="round"/>
<rect x="-250" y="-20" width="500" height="14" fill="#1E3A8A"/>
<rect x="-40" y="-45" width="80" height="60" rx="12" fill="#2563EB"/>
<polyline points="-190,110 -110,60 -30,84 60,20 150,40 210,-10" fill="none" stroke="#60A5FA" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
</g>`],
  // handshake / partnership
  partner: ['blue', `
${glow(180, 200, 230, '#1D4ED8', 0.3)}
<g transform="translate(600,410)">
<circle cx="-160" cy="0" r="150" fill="#0E1E42" opacity="0.95"/>
<circle cx="160" cy="0" r="150" fill="#FFFFFF" opacity="0.95"/>
<circle cx="-160" cy="0" r="52" fill="#2563EB"/>
<circle cx="160" cy="0" r="52" fill="#60A5FA"/>
<rect x="-40" y="-14" width="80" height="28" rx="14" fill="#93C5FD"/>
<circle cx="0" cy="0" r="180" fill="none" stroke="#DBEAFE" stroke-width="3" stroke-dasharray="10 12" opacity="0.7"/>
</g>`],
}

const jobs = Object.entries(THEMES).map(([name, [pal, inner]]) =>
  sharp(Buffer.from(frame(pal, inner)))
    .webp({ quality: 90 })
    .toFile(`${OUT}${name}.webp`),
)
await Promise.all(jobs)
console.log('hero library generated:', Object.keys(THEMES).join(', '))
