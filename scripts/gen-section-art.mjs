// gen-section-art.mjs — About + Work section images with people and warm palettes
import { mkdirSync } from 'node:fs'
import { createRequire } from 'node:module'
const require_ = createRequire(import.meta.url)
const sharp = require_('/home/claude/.npm-global/lib/node_modules/sharp')

const OUT = new URL('../public/images/', import.meta.url).pathname
mkdirSync(OUT, { recursive: true })

const standing = (x, y, s, fill, op = 1) => `
<g transform="translate(${x},${y}) scale(${s})" opacity="${op}">
  <circle cx="0" cy="-82" r="16" fill="${fill}"/>
  <path d="M-14 -65 C-14 -65 -18 -30 -18 -10 L-22 50 L-12 50 L-4 0 L4 0 L12 50 L22 50 L18 -10 C18 -30 14 -65 14 -65 Z" fill="${fill}"/>
  <path d="M-14 -60 L-30 -20 M14 -60 L30 -20" stroke="${fill}" stroke-width="5" stroke-linecap="round" fill="none"/>
</g>`

const seated = (x, y, s, fill, op = 1) => `
<g transform="translate(${x},${y}) scale(${s})" opacity="${op}">
  <circle cx="0" cy="-48" r="14" fill="${fill}"/>
  <path d="M-12 -33 C-12 -33 -15 -10 -15 5 L-20 5 L-20 35 L-10 35 L-10 5 L10 5 L10 35 L20 35 L20 5 L15 5 C15 -10 12 -33 12 -33 Z" fill="${fill}"/>
  <path d="M-12 -28 L-26 -10 M12 -28 L26 -10" stroke="${fill}" stroke-width="4" stroke-linecap="round" fill="none"/>
</g>`

const dots = (w, h, c = '#FFFFFF', op = 0.07) => {
  let s = ''
  for (let x = 40; x < w; x += 50)
    for (let y = 40; y < h; y += 50)
      s += '<circle cx="' + x + '" cy="' + y + '" r="1.2" fill="' + c + '" opacity="' + op + '"/>'
  return s
}

// about-team.webp — 876×692 (aspect 438/346) — warm teal, team huddle
const aboutTeam = `<svg xmlns="http://www.w3.org/2000/svg" width="876" height="692">
<defs><linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#042F2E"/><stop offset="1" stop-color="#0F766E"/>
</linearGradient></defs>
<rect width="876" height="692" fill="url(#bg1)"/>
${dots(876, 692, '#5EEAD4')}
<circle cx="438" cy="346" r="200" fill="#134E4A" opacity="0.5"/>
<circle cx="438" cy="346" r="120" fill="#115E59" opacity="0.4"/>
${standing(320, 420, 1.5, '#FFFFFF')}
${standing(438, 410, 1.6, '#99F6E4')}
${standing(556, 420, 1.5, '#FFFFFF')}
${standing(240, 450, 1.2, '#A7F3D0', 0.75)}
${standing(636, 450, 1.2, '#CCFBF1', 0.75)}
<rect x="300" y="500" width="276" height="8" rx="4" fill="#14B8A6" opacity="0.5"/>
</svg>`

// about-collab.webp — 1800×1200 (aspect 900/600) — warm purple, whiteboard session
const aboutCollab = `<svg xmlns="http://www.w3.org/2000/svg" width="1800" height="1200">
<defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#1E1042"/><stop offset="1" stop-color="#4C1D95"/>
</linearGradient></defs>
<rect width="1800" height="1200" fill="url(#bg2)"/>
${dots(1800, 1200, '#C4B5FD')}
<circle cx="300" cy="900" r="350" fill="#7C3AED" opacity="0.08"/>
<rect x="650" y="200" width="500" height="350" rx="16" fill="#FFFFFF" opacity="0.95"/>
<rect x="690" y="240" width="280" height="14" rx="7" fill="#7C3AED" opacity="0.7"/>
<rect x="690" y="272" width="420" height="8" rx="4" fill="#94A3B8" opacity="0.45"/>
<rect x="690" y="296" width="360" height="8" rx="4" fill="#94A3B8" opacity="0.35"/>
<rect x="690" y="340" width="180" height="120" rx="10" fill="#EDE9FE"/>
<rect x="890" y="340" width="180" height="120" rx="10" fill="#DDD6FE"/>
<rect x="690" y="480" width="120" height="40" rx="20" fill="#7C3AED"/>
${standing(500, 650, 2.2, '#FFFFFF')}
${standing(650, 680, 1.8, '#E9D5FF', 0.85)}
${standing(1250, 660, 2.0, '#FFFFFF')}
${standing(1400, 700, 1.6, '#C4B5FD', 0.75)}
${seated(900, 850, 2.0, '#FDE68A', 0.8)}
<rect x="200" y="840" width="1400" height="10" rx="5" fill="#4C1D95" opacity="0.5"/>
</svg>`

// card-consulting.webp — strategy session (warm slate + coral)
const cardConsulting = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
<defs><linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#1C1917"/><stop offset="1" stop-color="#44403C"/>
</linearGradient></defs>
<rect width="1200" height="800" fill="url(#bg3)"/>
${dots(1200, 800, '#FCA5A5')}
<circle cx="200" cy="600" r="250" fill="#F43F5E" opacity="0.08"/>
<rect x="400" y="200" width="500" height="340" rx="18" fill="#FFFFFF" opacity="0.95"/>
<rect x="440" y="240" width="200" height="12" rx="6" fill="#1C1917" opacity="0.75"/>
<rect x="440" y="268" width="140" height="8" rx="4" fill="#94A3B8" opacity="0.5"/>
<rect x="440" y="310" width="55" height="90" rx="6" fill="#F43F5E"/>
<rect x="510" y="280" width="55" height="120" rx="6" fill="#FB7185"/>
<rect x="580" y="330" width="55" height="70" rx="6" fill="#FDA4AF"/>
<rect x="650" y="260" width="55" height="140" rx="6" fill="#F43F5E"/>
<rect x="720" y="300" width="55" height="100" rx="6" fill="#FB7185"/>
<polyline points="440,280 530,240 620,260 710,210 800,200" fill="none" stroke="#E11D48" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
${standing(220, 500, 1.8, '#FFFFFF')}
${standing(350, 520, 1.5, '#FECDD3', 0.85)}
${standing(980, 500, 1.6, '#FFFFFF', 0.8)}
</svg>`

// card-workforce.webp — team placement (navy + gold)
const cardWorkforce = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
<defs><linearGradient id="bg4" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#172554"/><stop offset="1" stop-color="#1E3A8A"/>
</linearGradient></defs>
<rect width="1200" height="800" fill="url(#bg4)"/>
${dots(1200, 800, '#FDE68A')}
<circle cx="1000" cy="200" r="280" fill="#EAB308" opacity="0.06"/>
<g stroke="#FDE68A" stroke-width="2" opacity="0.3">
<line x1="600" y1="380" x2="300" y2="230"/>
<line x1="600" y1="380" x2="900" y2="230"/>
<line x1="600" y1="380" x2="250" y2="560"/>
<line x1="600" y1="380" x2="950" y2="560"/>
</g>
<circle cx="600" cy="380" r="90" fill="#EAB308" opacity="0.15"/>
${standing(600, 430, 1.8, '#FFFFFF')}
${standing(300, 280, 1.2, '#FEF9C3', 0.9)}
${standing(900, 280, 1.2, '#FFFFFF', 0.85)}
${standing(250, 610, 1.1, '#FDE68A', 0.8)}
${standing(950, 610, 1.1, '#FEF9C3', 0.85)}
<rect x="200" y="700" width="800" height="6" rx="3" fill="#EAB308" opacity="0.4"/>
</svg>`

await Promise.all([
  sharp(Buffer.from(aboutTeam)).webp({ quality: 90 }).toFile(OUT + 'about-team.webp'),
  sharp(Buffer.from(aboutCollab)).webp({ quality: 90 }).toFile(OUT + 'about-collab.webp'),
  sharp(Buffer.from(cardConsulting)).webp({ quality: 90 }).toFile(OUT + 'card-consulting.webp'),
  sharp(Buffer.from(cardWorkforce)).webp({ quality: 90 }).toFile(OUT + 'card-workforce.webp'),
])
console.log('section images generated: about-team, about-collab, card-consulting, card-workforce')
