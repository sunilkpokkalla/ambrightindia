// gen-art4.mjs — Diverse-palette hero illustrations with realistic people
// Each theme gets its OWN color palette — no monotone blue site.
import { mkdirSync } from 'node:fs'
import { createRequire } from 'node:module'
const require_ = createRequire(import.meta.url)
const sharp = require_('/home/claude/.npm-global/lib/node_modules/sharp')

const OUT = new URL('../public/images/heroes/', import.meta.url).pathname
mkdirSync(OUT, { recursive: true })

const W = 1200, H = 800

// ─── Shared helpers ───
const dots = (color = '#FFFFFF', op = 0.08, step = 58) => {
  let s = ''
  for (let x = step; x < W; x += step)
    for (let y = step; y < H; y += step)
      s += `<circle cx="${x}" cy="${y}" r="1.3" fill="${color}" opacity="${op}"/>`
  return s
}

const glow = (cx, cy, r, c, op = 0.14) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" opacity="${op}"/>`

const frame = (bg1, bg2, inner, dotColor) => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="${bg1}"/><stop offset="1" stop-color="${bg2}"/>
</linearGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#bg)"/>
${dots(dotColor || '#FFFFFF')}
${inner}
</svg>`

// ─── People primitives ───
const standing = (x, y, s = 1, fill = '#FFF', hair = '', op = 1) => `
<g transform="translate(${x},${y}) scale(${s})" opacity="${op}">
  <circle cx="0" cy="-82" r="16" fill="${hair || fill}"/>
  <path d="M-14 -65 C-14 -65 -18 -30 -18 -10 L-22 50 L-12 50 L-4 0 L4 0 L12 50 L22 50 L18 -10 C18 -30 14 -65 14 -65 Z" fill="${fill}"/>
  <path d="M-14 -60 L-30 -20 M14 -60 L30 -20" stroke="${fill}" stroke-width="5" stroke-linecap="round" fill="none"/>
</g>`

const seated = (x, y, s = 1, fill = '#FFF', op = 1) => `
<g transform="translate(${x},${y}) scale(${s})" opacity="${op}">
  <circle cx="0" cy="-48" r="14" fill="${fill}"/>
  <path d="M-12 -33 C-12 -33 -15 -10 -15 5 L-20 5 L-20 35 L-10 35 L-10 5 L10 5 L10 35 L20 35 L20 5 L15 5 C15 -10 12 -33 12 -33 Z" fill="${fill}"/>
  <path d="M-12 -28 L-26 -10 M12 -28 L26 -10" stroke="${fill}" stroke-width="4" stroke-linecap="round" fill="none"/>
</g>`

const walking = (x, y, s = 1, fill = '#FFF', op = 1) => `
<g transform="translate(${x},${y}) scale(${s})" opacity="${op}">
  <circle cx="0" cy="-80" r="15" fill="${fill}"/>
  <path d="M-10 -64 C-10 -64 -14 -30 -14 -10 L-24 50 L-14 50 L-2 -5 L2 -5 L14 50 L24 50 L14 -10 C14 -30 10 -64 10 -64 Z" fill="${fill}"/>
  <path d="M-10 -58 L-28 -25 M10 -58 L22 -20" stroke="${fill}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
</g>`

const laptop = (x, y, s = 1, screenFill = '#1E3A8A', frameFill = '#1E3A8A') => `
<g transform="translate(${x},${y}) scale(${s})">
  <rect x="-40" y="-28" width="80" height="50" rx="4" fill="${frameFill}" stroke="${screenFill}" stroke-width="1.5"/>
  <rect x="-34" y="-22" width="68" height="38" rx="2" fill="${screenFill}" opacity="0.4"/>
  <rect x="-28" y="-16" width="40" height="4" rx="2" fill="#FFFFFF" opacity="0.6"/>
  <rect x="-28" y="-8" width="50" height="3" rx="1.5" fill="#FFFFFF" opacity="0.35"/>
  <rect x="-56" y="22" width="112" height="6" rx="3" fill="${frameFill}"/>
</g>`

const whiteboard = (x, y, accent = '#2563EB') => `
<rect x="${x}" y="${y}" width="180" height="130" rx="6" fill="#FFFFFF" opacity="0.95"/>
<rect x="${x + 15}" y="${y + 15}" width="100" height="6" rx="3" fill="${accent}" opacity="0.7"/>
<rect x="${x + 15}" y="${y + 30}" width="150" height="4" rx="2" fill="#94A3B8" opacity="0.5"/>
<rect x="${x + 15}" y="${y + 42}" width="120" height="4" rx="2" fill="#94A3B8" opacity="0.4"/>
<rect x="${x + 15}" y="${y + 60}" width="60" height="40" rx="4" fill="${accent}" opacity="0.15"/>
<rect x="${x + 85}" y="${y + 60}" width="60" height="40" rx="4" fill="${accent}" opacity="0.1"/>`

const codeLines = (x, y, colors) =>
  colors.map(([w, c, o], i) =>
    `<rect x="${x}" y="${y + i * 30}" width="${w}" height="12" rx="6" fill="${c}" opacity="${o}"/>`).join('')

// ─── 16 THEMES — each with its own palette ───

const THEMES = {
  // ▸ circuit — AI team (TEAL + EMERALD)
  circuit: frame('#042F2E', '#065F46', `
${glow(200, 650, 300, '#10B981')}
${glow(1000, 150, 250, '#34D399')}
<rect x="300" y="430" width="600" height="10" rx="5" fill="#065F46" opacity="0.8"/>
${laptop(460, 405, 1.1, '#065F46', '#0D3D30')}
${laptop(740, 405, 1.1, '#065F46', '#0D3D30')}
${standing(340, 380, 1.4, '#FFFFFF')}
${standing(500, 395, 1.3, '#A7F3D0', '', 0.85)}
${standing(700, 390, 1.35, '#FFFFFF')}
${standing(860, 385, 1.3, '#6EE7B7', '', 0.85)}
${whiteboard(500, 140, '#10B981')}
${standing(480, 380, 1.2, '#D1FAE5', '', 0.75)}
<g transform="translate(430,240)">
<rect x="0" y="0" width="140" height="140" rx="18" fill="#0A2E24" stroke="#10B981" stroke-width="2.5"/>
<text x="70" y="80" font-family="sans-serif" font-size="28" font-weight="700" fill="#34D399" text-anchor="middle">AI</text>
</g>
`, '#6EE7B7'),

  // ▸ neural — brain + person (VIOLET + PURPLE)
  neural: frame('#1E1042', '#4C1D95', `
${glow(200, 650, 240, '#8B5CF6')}
${standing(280, 450, 1.8, '#FFFFFF')}
<g stroke="#A78BFA" stroke-width="2" opacity="0.4">
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
        c += `<circle cx="${x}" cy="${y}" r="22" fill="#1E1042" stroke="#A78BFA" stroke-width="2.5"/><circle cx="${x}" cy="${y}" r="8" fill="#7C3AED"/>`
    return c
  })()}
<line x1="340" y1="380" x2="520" y2="400" stroke="#C4B5FD" stroke-width="2" stroke-dasharray="6 4" opacity="0.5"/>
${walking(420, 500, 1.1, '#DDD6FE', 0.7)}
`, '#C4B5FD'),

  // ▸ cloud — cloud infrastructure (SKY BLUE + WHITE)
  cloud: frame('#0C4A6E', '#0284C7', `
${glow(1050, 620, 260, '#38BDF8', 0.2)}
${standing(250, 480, 1.6, '#FFFFFF')}
${laptop(250, 510, 1.2, '#0C4A6E', '#075985')}
<g transform="translate(700, 250)">
<circle cx="-140" cy="90" r="90" fill="#FFFFFF" opacity="0.94"/>
<circle cx="0" cy="55" r="115" fill="#FFFFFF" opacity="0.94"/>
<circle cx="140" cy="95" r="80" fill="#FFFFFF" opacity="0.94"/>
<rect x="-210" y="95" width="400" height="85" rx="42" fill="#FFFFFF" opacity="0.94"/>
<circle cx="0" cy="95" r="24" fill="#0284C7"/>
<path d="M0 81 v28 M-14 95 h28" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
</g>
<g stroke="#BAE6FD" stroke-width="2.5" opacity="0.6">
<line x1="600" y1="440" x2="460" y2="600"/><line x1="720" y1="445" x2="700" y2="600"/><line x1="840" y1="430" x2="940" y2="580"/>
</g>
${standing(460, 640, 0.9, '#BAE6FD', '', 0.6)}
${standing(700, 640, 0.85, '#E0F2FE', '', 0.6)}
${standing(940, 620, 0.9, '#BAE6FD', '', 0.6)}
`, '#7DD3FC'),

  // ▸ code — developer at workstation (DARK SLATE + AMBER accents)
  code: frame('#0F172A', '#1E293B', `
${glow(1020, 180, 220, '#F59E0B')}
<rect x="340" y="200" width="620" height="400" rx="24" fill="#020617" stroke="#334155" stroke-width="2"/>
<rect x="340" y="200" width="620" height="55" rx="24" fill="#1E293B"/>
<circle cx="382" cy="228" r="8" fill="#EF4444" opacity="0.9"/><circle cx="408" cy="228" r="8" fill="#FBBF24" opacity="0.9"/><circle cx="434" cy="228" r="8" fill="#34D399" opacity="0.9"/>
${codeLines(385, 290, [
    [180, '#F59E0B', 0.9], [310, '#FFFFFF', 0.4], [240, '#FBBF24', 0.7],
    [160, '#FFFFFF', 0.3], [280, '#34D399', 0.5], [220, '#F59E0B', 0.75],
    [140, '#FFFFFF', 0.4], [260, '#FDE68A', 0.6]])}
${seated(240, 530, 2.0, '#FFFFFF')}
<rect x="160" y="560" width="200" height="8" rx="4" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
`, '#FDE68A'),

  // ▸ chart — analytics dashboard (NAVY + CORAL / ORANGE)
  chart: frame('#1E1B4B', '#312E81', `
${glow(180, 160, 200, '#FB923C')}
<rect x="360" y="160" width="580" height="420" rx="24" fill="#FFFFFF" opacity="0.96"/>
<rect x="400" y="200" width="160" height="14" rx="7" fill="#1E1B4B" opacity="0.8"/>
<rect x="400" y="224" width="100" height="10" rx="5" fill="#94A3B8" opacity="0.5"/>
<rect x="400" y="410" width="60" height="110" rx="8" fill="#F97316"/>
<rect x="485" y="365" width="60" height="155" rx="8" fill="#FB923C"/>
<rect x="570" y="310" width="60" height="210" rx="8" fill="#F97316"/>
<rect x="655" y="375" width="60" height="145" rx="8" fill="#FDBA74"/>
<rect x="740" y="280" width="60" height="240" rx="8" fill="#F97316"/>
<polyline points="400,290 530,255 655,270 780,215 860,190" fill="none" stroke="#7C3AED" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
<circle cx="860" cy="190" r="8" fill="#7C3AED"/>
${standing(230, 470, 1.7, '#FFFFFF')}
<line x1="310" y1="380" x2="360" y2="380" stroke="#E9D5FF" stroke-width="2" stroke-dasharray="4 3" opacity="0.5"/>
`, '#FDBA74'),

  // ▸ rocket — startup launch (INDIGO + ROSE / PINK)
  rocket: frame('#1A1036', '#3730A3', `
${glow(950, 200, 240, '#F43F5E')}
${[[180, 130], [1050, 560], [300, 620], [880, 90]].map(([x, y]) =>
    `<path d="M${x} ${y} l5 12 12 5 -12 5 -5 12 -5 -12 -12 -5 12 -5 z" fill="#FDA4AF" opacity="0.5"/>`).join('')}
<g transform="translate(650,380) rotate(-45)">
<path d="M0 -160 C 50 -95 58 -18 38 76 L -38 76 C -58 -18 -50 -95 0 -160 Z" fill="#FFFFFF"/>
<circle cx="0" cy="-30" r="28" fill="#E11D48"/>
<circle cx="0" cy="-30" r="16" fill="#1A1036"/>
<path d="M-38 34 L-88 100 L-38 84 Z" fill="#FB7185"/>
<path d="M38 34 L88 100 L38 84 Z" fill="#FB7185"/>
<path d="M-20 78 L0 160 L20 78 Z" fill="#FBBF24"/>
<path d="M-11 78 L0 130 L11 78 Z" fill="#F97316"/>
</g>
${standing(300, 520, 1.5, '#FFFFFF', '', 0.9)}
${walking(420, 540, 1.3, '#FECDD3', '', 0.8)}
${standing(850, 520, 1.4, '#FECDD3', '', 0.85)}
`, '#FDA4AF'),

  // ▸ shield — cybersecurity (DARK GREEN + EMERALD)
  shield: frame('#052E16', '#166534', `
${glow(220, 620, 240, '#22C55E')}
<g transform="translate(600,380)">
<path d="M0 -200 C 70 -155 140 -140 185 -135 C 185 25 122 148 0 205 C -122 148 -185 25 -185 -135 C -140 -140 -70 -155 0 -200 Z" fill="#14532D" stroke="#22C55E" stroke-width="4"/>
<path d="M0 -145 C 48 -118 100 -105 135 -100 C 132 17 87 106 0 150 C -87 106 -132 17 -135 -100 C -100 -105 -48 -118 0 -145 Z" fill="#052E16"/>
<path d="M-60 0 L-12 52 L74 -52" stroke="#4ADE80" stroke-width="18" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
${standing(220, 480, 1.5, '#FFFFFF', '', 0.9)}
${standing(980, 480, 1.5, '#BBF7D0', '', 0.85)}
`, '#86EFAC'),

  // ▸ gears — operations (WARM GRAY + AMBER)
  gears: frame('#1C1917', '#44403C', `
${glow(1000, 640, 220, '#F59E0B')}
<circle cx="620" cy="320" r="150" fill="none" stroke="#D97706" stroke-width="36" stroke-dasharray="46 26" opacity="0.75"/>
<circle cx="620" cy="320" r="76" fill="none" stroke="#FBBF24" stroke-width="10" opacity="0.6"/>
<circle cx="620" cy="320" r="26" fill="#FBBF24"/>
<circle cx="880" cy="490" r="95" fill="none" stroke="#FDE68A" stroke-width="26" stroke-dasharray="32 20" opacity="0.55"/>
<circle cx="880" cy="490" r="45" fill="none" stroke="#FEF3C7" stroke-width="7" opacity="0.5"/>
<circle cx="880" cy="490" r="16" fill="#FEF3C7" opacity="0.75"/>
${standing(260, 500, 1.6, '#FFFFFF')}
${walking(400, 520, 1.3, '#FEF3C7', 0.8)}
`, '#FDE68A'),

  // ▸ people — diverse team network (WARM BLUE-GRAY + MULTIPLE SKIN TONES)
  people: frame('#172554', '#1E3A8A', `
${glow(180, 180, 220, '#3B82F6', 0.2)}
<g stroke="#DBEAFE" stroke-width="2.5" opacity="0.4">
<line x1="600" y1="360" x2="340" y2="230"/><line x1="600" y1="360" x2="870" y2="210"/>
<line x1="600" y1="360" x2="310" y2="560"/><line x1="600" y1="360" x2="890" y2="540"/>
<line x1="600" y1="360" x2="560" y2="650"/>
</g>
<circle cx="600" cy="360" r="100" fill="#2563EB" opacity="0.2"/>
${standing(600, 410, 1.6, '#FFFFFF', '#FFFFFF', 1)}
${standing(340, 280, 1.1, '#FECACA', '#FECACA', 0.9)}
${walking(870, 260, 1.0, '#A5F3FC', '#A5F3FC', 0.85)}
${standing(310, 610, 1.05, '#FDE68A', '#FDE68A', 0.85)}
${walking(890, 590, 1.1, '#C4B5FD', '#C4B5FD', 0.9)}
${standing(560, 700, 0.95, '#BBF7D0', '#BBF7D0', 0.8)}
`, '#93C5FD'),

  // ▸ city — smart city / industries (SLATE + WARM LIGHTS)
  city: (() => {
    const b = [[220, 340, 120], [360, 240, 150], [530, 420, 130], [680, 180, 170], [870, 320, 140]]
    const colors = ['#FBBF24', '#60A5FA', '#FB923C', '#34D399', '#A78BFA']
    let bldg = ''
    for (let bi = 0; bi < b.length; bi++) {
      const [x, top, w] = b[bi]
      bldg += '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (700 - top) + '" rx="8" fill="#1E293B" stroke="#475569" stroke-width="1.5"/>'
      let ci = 0
      for (let wx = x + 16; wx < x + w - 16; wx += 32)
        for (let wy = top + 22; wy < 660; wy += 42)
          bldg += '<rect x="' + wx + '" y="' + wy + '" width="14" height="18" rx="2" fill="' + ((ci++) % 5 === 0 ? colors[bi] : '#334155') + '" opacity="' + (ci % 3 === 0 ? '0.9' : '0.5') + '"/>'
    }
    return frame('#0F172A', '#1E293B',
      glow(1030, 170, 240, '#F59E0B') + bldg +
      '<rect x="160" y="698" width="900" height="5" rx="2.5" fill="#FBBF24" opacity="0.6"/>' +
      walking(200, 650, 1.2, '#FFFFFF', 0.9) +
      standing(480, 660, 1.1, '#FDE68A', '', 0.8) +
      walking(770, 650, 1.15, '#FFFFFF', 0.85) +
      standing(1020, 660, 1.0, '#BBF7D0', '', 0.75),
      '#FBBF24')
  })(),

  // ▸ stack — data infrastructure (PURPLE + TEAL)
  stack: (() => {
    const fills = ['#7E22CE', '#A855F7', '#7E22CE']
    const bases = ['#2E1065', '#581C87', '#2E1065']
    let discs = ''
    for (const [i, y] of [-100, 0, 100].entries()) {
      discs += '<ellipse cx="0" cy="' + (y - 40) + '" rx="190" ry="50" fill="' + bases[i] + '" stroke="#C084FC" stroke-width="2.5"/>'
      discs += '<path d="M-190 ' + (y - 40) + ' v55 a190 50 0 0 0 380 0 v-55" fill="' + bases[i] + '" stroke="#C084FC" stroke-width="2.5"/>'
      discs += '<ellipse cx="0" cy="' + (y - 40) + '" rx="190" ry="50" fill="' + fills[i] + '"/>'
    }
    return frame('#14082E', '#581C87',
      glow(220, 200, 220, '#A855F7') +
      '<g transform="translate(680,380)">' + discs +
      '<circle cx="130" cy="-145" r="9" fill="#E9D5FF"/><circle cx="-110" cy="-40" r="9" fill="#14B8A6"/><circle cx="80" cy="60" r="9" fill="#E9D5FF"/>' +
      '</g>' +
      standing(240, 480, 1.6, '#FFFFFF') +
      laptop(240, 510, 1.0, '#581C87', '#3B0764'),
      '#D8B4FE')
  })(),

  // ▸ mobile — app development (DARK CYAN + LIME accents)
  mobile: frame('#083344', '#155E75', `
${glow(980, 620, 230, '#22D3EE')}
<g transform="translate(680,380)">
<rect x="-130" y="-230" width="260" height="460" rx="38" fill="#0E2D3A" stroke="#22D3EE" stroke-width="3.5"/>
<rect x="-104" y="-194" width="208" height="370" rx="16" fill="#083344"/>
<rect x="-44" y="-216" width="88" height="10" rx="5" fill="#155E75"/>
<rect x="-82" y="-168" width="120" height="14" rx="7" fill="#22D3EE" opacity="0.85"/>
<rect x="-82" y="-132" width="168" height="80" rx="12" fill="#0891B2"/>
<rect x="-82" y="-30" width="78" height="70" rx="12" fill="#164E63"/>
<rect x="8" y="-30" width="78" height="70" rx="12" fill="#164E63"/>
<rect x="-82" y="58" width="168" height="12" rx="6" fill="#FFFFFF" opacity="0.4"/>
<rect x="-82" y="84" width="130" height="12" rx="6" fill="#FFFFFF" opacity="0.25"/>
<rect x="-82" y="120" width="168" height="38" rx="19" fill="#84CC16"/>
</g>
${standing(280, 480, 1.7, '#FFFFFF')}
${walking(400, 510, 1.2, '#A5F3FC', 0.75)}
`, '#A5F3FC'),

  // ▸ lab — innovation & R&D (DEEP BLUE + AMBER FLASK)
  lab: frame('#0C1425', '#1E3A5F', `
${glow(230, 180, 220, '#F59E0B')}
<g transform="translate(700, 370)">
<path d="M-36 -200 h72 v35 h-14 v105 L 130 140 a35 35 0 0 1 -30 52 h-200 a35 35 0 0 1 -30 -52 L -22 -60 v-105 h-14 z" fill="#1E293B" stroke="#F59E0B" stroke-width="3.5"/>
<path d="M-68 52 L 83 52 L 130 140 a35 35 0 0 1 -30 52 h-200 a35 35 0 0 1 -30 -52 Z" fill="#D97706" opacity="0.7"/>
<circle cx="-18" cy="105" r="12" fill="#FDE68A" opacity="0.85"/>
<circle cx="35" cy="140" r="9" fill="#FEF3C7" opacity="0.85"/>
<circle cx="8" cy="26" r="7" fill="#FBBF24"/>
<circle cx="60" cy="-40" r="12" fill="#F59E0B" opacity="0.7"/>
</g>
${standing(300, 480, 1.6, '#FFFFFF')}
${standing(480, 500, 1.3, '#FDE68A', '', 0.85)}
<rect x="880" y="250" width="140" height="110" rx="10" fill="#FFFFFF" opacity="0.95"/>
<rect x="900" y="270" width="50" height="28" rx="4" fill="#F59E0B" opacity="0.7"/>
<rect x="960" y="270" width="40" height="28" rx="4" fill="#D97706" opacity="0.5"/>
<rect x="900" y="310" width="100" height="4" rx="2" fill="#94A3B8" opacity="0.5"/>
<rect x="900" y="322" width="80" height="4" rx="2" fill="#94A3B8" opacity="0.35"/>
`, '#FBBF24'),

  // ▸ target — strategy & goals (WARM RED + CREAM)
  target: frame('#450A0A', '#7F1D1D', `
${glow(200, 620, 240, '#DC2626', 0.2)}
<g transform="translate(700,380)">
<circle r="200" fill="none" stroke="#FECACA" stroke-width="22" opacity="0.4"/>
<circle r="140" fill="none" stroke="#FCA5A5" stroke-width="22" opacity="0.55"/>
<circle r="80" fill="none" stroke="#FFFFFF" stroke-width="22" opacity="0.75"/>
<circle r="26" fill="#450A0A"/>
<line x1="26" y1="-26" x2="170" y2="-170" stroke="#450A0A" stroke-width="12" stroke-linecap="round"/>
<path d="M170 -170 l-12 -44 56 0 0 56 -44 -12 z" fill="#450A0A"/>
</g>
${standing(220, 480, 1.7, '#FFFFFF')}
${walking(380, 510, 1.3, '#FECACA', 0.8)}
`, '#FCA5A5'),

  // ▸ briefcase — careers / talent (NAVY + GOLD)
  briefcase: frame('#172554', '#1E3A8A', `
${glow(1000, 200, 230, '#EAB308')}
<g transform="translate(680,400)">
<rect x="-210" y="-100" width="420" height="250" rx="28" fill="#1E3A5F" stroke="#EAB308" stroke-width="3.5"/>
<path d="M-76 -100 v-42 a25 25 0 0 1 25 -25 h102 a25 25 0 0 1 25 25 v42" fill="none" stroke="#EAB308" stroke-width="14" stroke-linecap="round"/>
<rect x="-210" y="-16" width="420" height="12" fill="#CA8A04"/>
<rect x="-34" y="-38" width="68" height="50" rx="10" fill="#EAB308"/>
<polyline points="-160,92 -90,50 -20,70 50,16 130,32 180,-8" fill="none" stroke="#FDE68A" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
</g>
${standing(240, 480, 1.6, '#FFFFFF')}
${walking(380, 510, 1.2, '#FEF9C3', 0.75)}
${standing(950, 500, 1.3, '#FDE68A', '', 0.7)}
`, '#FDE68A'),

  // ▸ partner — handshake / collaboration (WARM SLATE + CORAL)
  partner: frame('#1C1917', '#292524', `
${glow(180, 200, 230, '#FB7185', 0.2)}
<g transform="translate(600,400)">
<circle cx="-150" cy="0" r="135" fill="#F43F5E" opacity="0.15"/>
<circle cx="150" cy="0" r="135" fill="#2563EB" opacity="0.15"/>
<circle cx="-150" cy="0" r="135" fill="none" stroke="#FB7185" stroke-width="2.5" opacity="0.5"/>
<circle cx="150" cy="0" r="135" fill="none" stroke="#60A5FA" stroke-width="2.5" opacity="0.5"/>
<rect x="-36" y="-12" width="72" height="24" rx="12" fill="#FFFFFF" opacity="0.3"/>
<circle cx="0" cy="0" r="165" fill="none" stroke="#D6D3D1" stroke-width="2" stroke-dasharray="9 11" opacity="0.3"/>
</g>
${standing(380, 480, 1.4, '#FFFFFF', '', 0.9)}
${standing(480, 490, 1.3, '#FECDD3', '', 0.8)}
${standing(720, 480, 1.4, '#FFFFFF', '', 0.9)}
${standing(820, 490, 1.3, '#BFDBFE', '', 0.8)}
`, '#FB7185'),
}

const jobs = Object.entries(THEMES).map(([name, svg]) =>
  sharp(Buffer.from(svg))
    .webp({ quality: 90 })
    .toFile(`${OUT}${name}.webp`),
)
await Promise.all(jobs)
console.log('diverse hero library generated:', Object.keys(THEMES).join(', '))
