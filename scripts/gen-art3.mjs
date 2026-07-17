// gen-art3.mjs — Enhanced hero illustrations with realistic people silhouettes
// Replaces the abstract geometric art with people-focused business scenes.
import { mkdirSync } from 'node:fs'
import { createRequire } from 'node:module'
const require_ = createRequire(import.meta.url)
const sharp = require_('/home/claude/.npm-global/lib/node_modules/sharp')

const OUT = new URL('../public/images/heroes/', import.meta.url).pathname
mkdirSync(OUT, { recursive: true })

const W = 1200, H = 800

const PALETTES = {
  navy:   ['#0E1E42', '#1E3A8A'],
  blue:   ['#1E3A8A', '#3B82F6'],
  deep:   ['#0D1B36', '#16295B'],
  indigo: ['#141C4D', '#2743A6'],
  warm:   ['#0F172A', '#1E3A8A'],
  light:  ['#1E40AF', '#3B82F6'],
}

const dots = (step = 56) => {
  let s = ''
  for (let x = step; x < W; x += step)
    for (let y = step; y < H; y += step)
      s += `<circle cx="${x}" cy="${y}" r="1.4" fill="#93C5FD" opacity="0.12"/>`
  return s
}

const glow = (cx, cy, r, c = '#3B82F6', op = 0.12) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" opacity="${op}"/>`

const frame = (pal, inner) => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="${PALETTES[pal][0]}"/><stop offset="1" stop-color="${PALETTES[pal][1]}"/>
</linearGradient>
<linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#FFFFFF" stop-opacity="0.06"/>
<stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
</linearGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#bg)"/>
${dots()}
<rect width="${W}" height="${H}" fill="url(#shine)"/>
${inner}
</svg>`

// Realistic standing person silhouette
const standingPerson = (x, y, scale = 1, fill = '#FFFFFF', op = 0.9) => `
<g transform="translate(${x},${y}) scale(${scale})" opacity="${op}">
  <circle cx="0" cy="-82" r="16" fill="${fill}"/>
  <path d="M-14 -65 C-14 -65 -18 -30 -18 -10 L-22 50 L-12 50 L-4 0 L4 0 L12 50 L22 50 L18 -10 C18 -30 14 -65 14 -65 Z" fill="${fill}"/>
  <path d="M-14 -60 L-30 -20 M14 -60 L30 -20" stroke="${fill}" stroke-width="5" stroke-linecap="round" fill="none"/>
</g>`

// Seated person at desk
const seatedPerson = (x, y, scale = 1, fill = '#FFFFFF', op = 0.9) => `
<g transform="translate(${x},${y}) scale(${scale})" opacity="${op}">
  <circle cx="0" cy="-48" r="14" fill="${fill}"/>
  <path d="M-12 -33 C-12 -33 -15 -10 -15 5 L-20 5 L-20 35 L-10 35 L-10 5 L10 5 L10 35 L20 35 L20 5 L15 5 C15 -10 12 -33 12 -33 Z" fill="${fill}"/>
  <path d="M-12 -28 L-26 -10 M12 -28 L26 -10" stroke="${fill}" stroke-width="4" stroke-linecap="round" fill="none"/>
</g>`

// Walking person
const walkingPerson = (x, y, scale = 1, fill = '#FFFFFF', op = 0.9) => `
<g transform="translate(${x},${y}) scale(${scale})" opacity="${op}">
  <circle cx="0" cy="-80" r="15" fill="${fill}"/>
  <path d="M-10 -64 C-10 -64 -14 -30 -14 -10 L-24 50 L-14 50 L-2 -5 L2 -5 L14 50 L24 50 L14 -10 C14 -30 10 -64 10 -64 Z" fill="${fill}"/>
  <path d="M-10 -58 L-28 -25 M10 -58 L22 -20" stroke="${fill}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
</g>`

// Laptop on desk element
const laptop = (x, y, s = 1) => `
<g transform="translate(${x},${y}) scale(${s})">
  <rect x="-40" y="-28" width="80" height="50" rx="4" fill="#1E3A8A" stroke="#60A5FA" stroke-width="2"/>
  <rect x="-34" y="-22" width="68" height="38" rx="2" fill="#0D1B36"/>
  <rect x="-28" y="-16" width="40" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
  <rect x="-28" y="-8" width="50" height="3" rx="1.5" fill="#93C5FD" opacity="0.5"/>
  <rect x="-28" y="-1" width="35" height="3" rx="1.5" fill="#93C5FD" opacity="0.4"/>
  <rect x="-56" y="22" width="112" height="6" rx="3" fill="#1E3A8A"/>
</g>`

// Desk element
const desk = (x, y, w = 300) => `
<rect x="${x}" y="${y}" width="${w}" height="8" rx="4" fill="#1E3A8A" stroke="#3B82F6" stroke-width="1.5"/>
<rect x="${x + 10}" y="${y + 8}" width="6" height="40" fill="#1E3A8A"/>
<rect x="${x + w - 16}" y="${y + 8}" width="6" height="40" fill="#1E3A8A"/>`

// Whiteboard
const whiteboard = (x, y) => `
<rect x="${x}" y="${y}" width="180" height="130" rx="6" fill="#FFFFFF" opacity="0.95"/>
<rect x="${x + 15}" y="${y + 15}" width="100" height="6" rx="3" fill="#2563EB" opacity="0.7"/>
<rect x="${x + 15}" y="${y + 30}" width="150" height="4" rx="2" fill="#94A3B8" opacity="0.5"/>
<rect x="${x + 15}" y="${y + 42}" width="120" height="4" rx="2" fill="#94A3B8" opacity="0.4"/>
<rect x="${x + 15}" y="${y + 60}" width="60" height="40" rx="4" fill="#DBEAFE"/>
<rect x="${x + 85}" y="${y + 60}" width="60" height="40" rx="4" fill="#BFDBFE"/>`

// Chart/graph element
const chartEl = (x, y, s = 1) => `
<g transform="translate(${x},${y}) scale(${s})">
<rect x="-60" y="-50" width="120" height="100" rx="8" fill="#FFFFFF" opacity="0.95"/>
<rect x="-40" y="10" width="16" height="28" rx="3" fill="#2563EB"/>
<rect x="-18" y="-5" width="16" height="43" rx="3" fill="#3B82F6"/>
<rect x="4" y="-20" width="16" height="58" rx="3" fill="#60A5FA"/>
<rect x="26" y="-10" width="16" height="48" rx="3" fill="#2563EB"/>
<polyline points="-40,-15 -10,-30 18,-22 42,-35" fill="none" stroke="#1D4ED8" stroke-width="2.5" stroke-linecap="round"/>
</g>`

const THEMES = {
  // Team meeting / collaboration — people around a table
  circuit: ['warm', `
${glow(200, 650, 300)}
${glow(1000, 150, 250)}
<rect x="300" y="430" width="600" height="10" rx="5" fill="#1E3A8A" opacity="0.8"/>
<ellipse cx="600" cy="440" rx="320" ry="18" fill="#0D1B36" opacity="0.5"/>
${laptop(460, 405, 1.1)}
${laptop(740, 405, 1.1)}
${standingPerson(340, 380, 1.4, '#FFFFFF', 0.95)}
${standingPerson(500, 395, 1.3, '#DBEAFE', 0.85)}
${standingPerson(700, 390, 1.35, '#FFFFFF', 0.9)}
${standingPerson(860, 385, 1.3, '#93C5FD', 0.85)}
${whiteboard(500, 140)}
${standingPerson(480, 380, 1.2, '#BFDBFE', 0.8)}
<text x="600" y="720" font-family="sans-serif" font-size="16" fill="#60A5FA" text-anchor="middle" opacity="0.6">AI-Powered Collaboration</text>
`],

  // Brain / AI neural — person interacting with neural network
  neural: ['navy', `
${glow(200, 650, 240)}
${standingPerson(280, 450, 1.8, '#FFFFFF', 0.95)}
<g stroke="#60A5FA" stroke-width="2" opacity="0.45">
${(() => {
    const L = [[520, [250, 400, 550]], [720, [180, 330, 480, 630]], [920, [250, 400, 550]]]
    let lines = ''
    for (let li = 0; li < L.length - 1; li++)
      for (const y1 of L[li][1])
        for (const y2 of L[li + 1][1])
          lines += `<line x1="${L[li][0]}" y1="${y1}" x2="${L[li + 1][0]}" y2="${y2}"/>`
    return lines
  })()}
</g>
${(() => {
    const L = [[520, [250, 400, 550]], [720, [180, 330, 480, 630]], [920, [250, 400, 550]]]
    let c = ''
    for (const [x, ys] of L)
      for (const y of ys)
        c += `<circle cx="${x}" cy="${y}" r="22" fill="#0A142E" stroke="#60A5FA" stroke-width="2.5"/><circle cx="${x}" cy="${y}" r="8" fill="#3B82F6"/>`
    return c
  })()}
<line x1="340" y1="380" x2="520" y2="400" stroke="#93C5FD" stroke-width="2" stroke-dasharray="6 4" opacity="0.5"/>
`],

  // Cloud — person working with cloud infrastructure
  cloud: ['blue', `
${glow(1050, 620, 260, '#1D4ED8', 0.3)}
${standingPerson(250, 480, 1.6, '#FFFFFF', 0.95)}
${laptop(250, 510, 1.2)}
<g transform="translate(700, 250)">
<circle cx="-140" cy="90" r="90" fill="#FFFFFF" opacity="0.94"/>
<circle cx="0" cy="55" r="115" fill="#FFFFFF" opacity="0.94"/>
<circle cx="140" cy="95" r="80" fill="#FFFFFF" opacity="0.94"/>
<rect x="-210" y="95" width="400" height="85" rx="42" fill="#FFFFFF" opacity="0.94"/>
<circle cx="0" cy="95" r="24" fill="#2563EB"/>
<path d="M0 81 v28 M-14 95 h28" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
</g>
<g stroke="#DBEAFE" stroke-width="2.5" opacity="0.6">
<line x1="600" y1="440" x2="460" y2="600"/><line x1="720" y1="445" x2="700" y2="600"/><line x1="840" y1="430" x2="940" y2="580"/>
</g>
${standingPerson(460, 640, 0.9, '#DBEAFE', 0.6)}
${standingPerson(700, 640, 0.85, '#93C5FD', 0.6)}
${standingPerson(940, 620, 0.9, '#DBEAFE', 0.6)}
`],

  // Code — developer at workstation
  code: ['deep', `
${glow(1020, 180, 220)}
<rect x="340" y="200" width="620" height="400" rx="24" fill="#0A142E" stroke="#274690" stroke-width="2"/>
<rect x="340" y="200" width="620" height="55" rx="24" fill="#111F44"/>
<circle cx="382" cy="228" r="8" fill="#EF4444" opacity="0.9"/><circle cx="408" cy="228" r="8" fill="#FBBF24" opacity="0.9"/><circle cx="434" cy="228" r="8" fill="#34D399" opacity="0.9"/>
${(() => {
    const lines = [[180, '#60A5FA', 0.9], [310, '#FFFFFF', 0.45], [240, '#93C5FD', 0.75],
      [160, '#FFFFFF', 0.3], [280, '#34D399', 0.5], [220, '#60A5FA', 0.8], [140, '#FFFFFF', 0.45], [260, '#93C5FD', 0.65]]
    return lines.map(([w, c, o], i) =>
      `<rect x="385" y="${290 + i * 32}" width="${w}" height="12" rx="6" fill="${c}" opacity="${o}"/>`).join('')
  })()}
${seatedPerson(240, 530, 2.0, '#FFFFFF', 0.95)}
${desk(160, 560, 200)}
`],

  // Dashboard / Analytics — person presenting data
  chart: ['navy', `
${glow(180, 160, 200)}
<rect x="360" y="160" width="580" height="420" rx="24" fill="#FFFFFF" opacity="0.96"/>
<rect x="400" y="200" width="160" height="14" rx="7" fill="#0E1E42" opacity="0.8"/>
<rect x="400" y="224" width="100" height="10" rx="5" fill="#94A3B8" opacity="0.5"/>
<rect x="400" y="410" width="60" height="110" rx="8" fill="#2563EB"/>
<rect x="485" y="365" width="60" height="155" rx="8" fill="#3B82F6"/>
<rect x="570" y="310" width="60" height="210" rx="8" fill="#2563EB"/>
<rect x="655" y="375" width="60" height="145" rx="8" fill="#60A5FA"/>
<rect x="740" y="280" width="60" height="240" rx="8" fill="#2563EB"/>
<polyline points="400,290 530,255 655,270 780,215 860,190" fill="none" stroke="#1D4ED8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
<circle cx="860" cy="190" r="8" fill="#1D4ED8"/>
${standingPerson(230, 470, 1.7, '#FFFFFF', 0.95)}
<line x1="310" y1="380" x2="360" y2="380" stroke="#DBEAFE" stroke-width="2" stroke-dasharray="4 3" opacity="0.5"/>
`],

  // Startup launch — team with rocket
  rocket: ['indigo', `
${glow(950, 200, 240)}
${[[180, 130], [1050, 560], [300, 620], [880, 90]].map(([x, y]) =>
    `<path d="M${x} ${y} l5 12 12 5 -12 5 -5 12 -5 -12 -12 -5 12 -5 z" fill="#93C5FD" opacity="0.5"/>`).join('')}
<g transform="translate(650,380) rotate(-45)">
<path d="M0 -160 C 50 -95 58 -18 38 76 L -38 76 C -58 -18 -50 -95 0 -160 Z" fill="#FFFFFF"/>
<circle cx="0" cy="-30" r="28" fill="#2563EB"/>
<circle cx="0" cy="-30" r="16" fill="#0E1E42"/>
<path d="M-38 34 L-88 100 L-38 84 Z" fill="#60A5FA"/>
<path d="M38 34 L88 100 L38 84 Z" fill="#60A5FA"/>
<path d="M-20 78 L0 160 L20 78 Z" fill="#FBBF24"/>
<path d="M-11 78 L0 130 L11 78 Z" fill="#F97316"/>
</g>
${standingPerson(300, 520, 1.5, '#FFFFFF', 0.9)}
${walkingPerson(420, 540, 1.3, '#DBEAFE', 0.8)}
${standingPerson(850, 520, 1.4, '#93C5FD', 0.85)}
`],

  // Security — team protecting shield
  shield: ['deep', `
${glow(220, 620, 240)}
<g transform="translate(600,380)">
<path d="M0 -200 C 70 -155 140 -140 185 -135 C 185 25 122 148 0 205 C -122 148 -185 25 -185 -135 C -140 -140 -70 -155 0 -200 Z" fill="#12234F" stroke="#3B82F6" stroke-width="4"/>
<path d="M0 -145 C 48 -118 100 -105 135 -100 C 132 17 87 106 0 150 C -87 106 -132 17 -135 -100 C -100 -105 -48 -118 0 -145 Z" fill="#0A142E"/>
<path d="M-60 0 L-12 52 L74 -52" stroke="#60A5FA" stroke-width="18" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
${standingPerson(220, 480, 1.5, '#FFFFFF', 0.9)}
${standingPerson(980, 480, 1.5, '#DBEAFE', 0.85)}
`],

  // Operations / consulting — people working with gears
  gears: ['navy', `
${glow(1000, 640, 220)}
<circle cx="620" cy="320" r="150" fill="none" stroke="#3B82F6" stroke-width="36" stroke-dasharray="46 26" opacity="0.8"/>
<circle cx="620" cy="320" r="76" fill="none" stroke="#60A5FA" stroke-width="10" opacity="0.7"/>
<circle cx="620" cy="320" r="26" fill="#60A5FA"/>
<circle cx="880" cy="490" r="95" fill="none" stroke="#93C5FD" stroke-width="26" stroke-dasharray="32 20" opacity="0.65"/>
<circle cx="880" cy="490" r="45" fill="none" stroke="#DBEAFE" stroke-width="7" opacity="0.55"/>
<circle cx="880" cy="490" r="16" fill="#DBEAFE" opacity="0.8"/>
${standingPerson(260, 500, 1.6, '#FFFFFF', 0.95)}
${walkingPerson(400, 520, 1.3, '#DBEAFE', 0.8)}
`],

  // Team / people network — diverse team connected
  people: ['blue', `
${glow(180, 180, 220, '#1D4ED8', 0.3)}
<g stroke="#DBEAFE" stroke-width="2.5" opacity="0.5">
<line x1="600" y1="360" x2="340" y2="230"/><line x1="600" y1="360" x2="870" y2="210"/>
<line x1="600" y1="360" x2="310" y2="560"/><line x1="600" y1="360" x2="890" y2="540"/>
<line x1="600" y1="360" x2="560" y2="650"/>
</g>
<circle cx="600" cy="360" r="100" fill="#1D4ED8" opacity="0.25"/>
${standingPerson(600, 410, 1.6, '#FFFFFF', 1)}
${standingPerson(340, 280, 1.1, '#DBEAFE', 0.9)}
${walkingPerson(870, 260, 1.0, '#93C5FD', 0.85)}
${standingPerson(310, 610, 1.05, '#FFFFFF', 0.85)}
${walkingPerson(890, 590, 1.1, '#DBEAFE', 0.9)}
${standingPerson(560, 700, 0.95, '#93C5FD', 0.8)}
`],

  // Smart city — people in front of buildings
  city: ['navy', `
${glow(1030, 170, 240)}
${(() => {
    const b = [[220, 340, 120], [360, 240, 150], [530, 420, 130], [680, 180, 170], [870, 320, 140]]
    let s = ''
    for (const [x, top, w] of b) {
      s += `<rect x="${x}" y="${top}" width="${w}" height="${700 - top}" rx="8" fill="#12234F" stroke="#274690" stroke-width="1.5"/>`
      for (let wx = x + 16; wx < x + w - 16; wx += 32)
        for (let wy = top + 22; wy < 660; wy += 42)
          s += `<rect x="${wx}" y="${wy}" width="14" height="18" rx="2" fill="${(wx + wy) % 3 === 0 ? '#60A5FA' : '#1E3A8A'}" opacity="0.8"/>`
    }
    return s
  })()}
<rect x="160" y="698" width="900" height="5" rx="2.5" fill="#3B82F6" opacity="0.65"/>
${walkingPerson(200, 650, 1.2, '#FFFFFF', 0.9)}
${standingPerson(480, 660, 1.1, '#DBEAFE', 0.8)}
${walkingPerson(770, 650, 1.15, '#93C5FD', 0.85)}
${standingPerson(1020, 660, 1.0, '#FFFFFF', 0.75)}
`],

  // Data infrastructure — people managing servers
  stack: ['indigo', `
${glow(220, 200, 220)}
<g transform="translate(680,380)">
${[-100, 0, 100].map((y, i) => `
<ellipse cx="0" cy="${y - 40}" rx="190" ry="50" fill="${i === 1 ? '#1D4ED8' : '#12234F'}" stroke="#60A5FA" stroke-width="2.5"/>
<path d="M-190 ${y - 40} v55 a190 50 0 0 0 380 0 v-55" fill="${i === 1 ? '#1D4ED8' : '#12234F'}" stroke="#60A5FA" stroke-width="2.5"/>
<ellipse cx="0" cy="${y - 40}" rx="190" ry="50" fill="${i === 1 ? '#2563EB' : '#0A142E'}"/>`).join('')}
<circle cx="130" cy="-145" r="9" fill="#60A5FA"/><circle cx="-110" cy="-40" r="9" fill="#93C5FD"/><circle cx="80" cy="60" r="9" fill="#60A5FA"/>
</g>
${standingPerson(240, 480, 1.6, '#FFFFFF', 0.95)}
${laptop(240, 510, 1.0)}
`],

  // Mobile development — person with phone
  mobile: ['deep', `
${glow(980, 620, 230)}
<g transform="translate(680,380)">
<rect x="-130" y="-230" width="260" height="460" rx="38" fill="#0A142E" stroke="#3B82F6" stroke-width="3.5"/>
<rect x="-104" y="-194" width="208" height="370" rx="16" fill="#12234F"/>
<rect x="-44" y="-216" width="88" height="10" rx="5" fill="#274690"/>
<rect x="-82" y="-168" width="120" height="14" rx="7" fill="#60A5FA" opacity="0.85"/>
<rect x="-82" y="-132" width="168" height="80" rx="12" fill="#2563EB"/>
<rect x="-82" y="-30" width="78" height="70" rx="12" fill="#1E3A8A"/>
<rect x="8" y="-30" width="78" height="70" rx="12" fill="#1E3A8A"/>
<rect x="-82" y="58" width="168" height="12" rx="6" fill="#FFFFFF" opacity="0.45"/>
<rect x="-82" y="84" width="130" height="12" rx="6" fill="#FFFFFF" opacity="0.28"/>
<rect x="-82" y="120" width="168" height="38" rx="19" fill="#2563EB"/>
</g>
${standingPerson(280, 480, 1.7, '#FFFFFF', 0.95)}
${walkingPerson(400, 510, 1.2, '#DBEAFE', 0.75)}
`],

  // Innovation lab — team in lab environment
  lab: ['indigo', `
${glow(230, 180, 220)}
<g transform="translate(700, 370)">
<path d="M-36 -200 h72 v35 h-14 v105 L 130 140 a35 35 0 0 1 -30 52 h-200 a35 35 0 0 1 -30 -52 L -22 -60 v-105 h-14 z" fill="#12234F" stroke="#60A5FA" stroke-width="3.5"/>
<path d="M-68 52 L 83 52 L 130 140 a35 35 0 0 1 -30 52 h-200 a35 35 0 0 1 -30 -52 Z" fill="#2563EB" opacity="0.8"/>
<circle cx="-18" cy="105" r="12" fill="#93C5FD" opacity="0.85"/>
<circle cx="35" cy="140" r="9" fill="#DBEAFE" opacity="0.85"/>
<circle cx="8" cy="26" r="7" fill="#60A5FA"/>
</g>
${standingPerson(300, 480, 1.6, '#FFFFFF', 0.95)}
${standingPerson(480, 500, 1.3, '#DBEAFE', 0.85)}
${chartEl(950, 300, 1.2)}
`],

  // Target / strategy — person aiming at target
  target: ['blue', `
${glow(200, 620, 240, '#1D4ED8', 0.3)}
<g transform="translate(700,380)">
<circle r="200" fill="none" stroke="#DBEAFE" stroke-width="22" opacity="0.45"/>
<circle r="140" fill="none" stroke="#93C5FD" stroke-width="22" opacity="0.6"/>
<circle r="80" fill="none" stroke="#FFFFFF" stroke-width="22" opacity="0.8"/>
<circle r="26" fill="#0E1E42"/>
<line x1="26" y1="-26" x2="170" y2="-170" stroke="#0E1E42" stroke-width="12" stroke-linecap="round"/>
<path d="M170 -170 l-12 -44 56 0 0 56 -44 -12 z" fill="#0E1E42"/>
</g>
${standingPerson(220, 480, 1.7, '#FFFFFF', 0.95)}
${walkingPerson(380, 510, 1.3, '#DBEAFE', 0.8)}
`],

  // Career / briefcase — professional with briefcase
  briefcase: ['navy', `
${glow(1000, 200, 230)}
<g transform="translate(680,400)">
<rect x="-210" y="-100" width="420" height="250" rx="28" fill="#12234F" stroke="#3B82F6" stroke-width="3.5"/>
<path d="M-76 -100 v-42 a25 25 0 0 1 25 -25 h102 a25 25 0 0 1 25 25 v42" fill="none" stroke="#3B82F6" stroke-width="14" stroke-linecap="round"/>
<rect x="-210" y="-16" width="420" height="12" fill="#1E3A8A"/>
<rect x="-34" y="-38" width="68" height="50" rx="10" fill="#2563EB"/>
<polyline points="-160,92 -90,50 -20,70 50,16 130,32 180,-8" fill="none" stroke="#60A5FA" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
</g>
${standingPerson(240, 480, 1.6, '#FFFFFF', 0.95)}
${walkingPerson(380, 510, 1.2, '#93C5FD', 0.75)}
`],

  // Partnership — two teams meeting
  partner: ['blue', `
${glow(180, 200, 230, '#1D4ED8', 0.3)}
<g transform="translate(600,400)">
<circle cx="-150" cy="0" r="135" fill="#0E1E42" opacity="0.92"/>
<circle cx="150" cy="0" r="135" fill="#FFFFFF" opacity="0.92"/>
<rect x="-36" y="-12" width="72" height="24" rx="12" fill="#93C5FD"/>
<circle cx="0" cy="0" r="165" fill="none" stroke="#DBEAFE" stroke-width="2.5" stroke-dasharray="9 11" opacity="0.6"/>
</g>
${standingPerson(380, 480, 1.4, '#FFFFFF', 0.9)}
${standingPerson(480, 490, 1.3, '#DBEAFE', 0.8)}
${standingPerson(720, 480, 1.4, '#0E1E42', 0.9)}
${standingPerson(820, 490, 1.3, '#1E3A8A', 0.75)}
`],
}

const jobs = Object.entries(THEMES).map(([name, [pal, inner]]) =>
  sharp(Buffer.from(frame(pal, inner)))
    .webp({ quality: 90 })
    .toFile(`${OUT}${name}.webp`),
)
await Promise.all(jobs)
console.log('people-focused hero library generated:', Object.keys(THEMES).join(', '))
