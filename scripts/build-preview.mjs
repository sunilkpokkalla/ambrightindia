// LOCAL PREVIEW BUNDLER — sandbox has no npm access, so this script
// transpiles the real src/ with the globally-installed TypeScript compiler,
// wraps everything in a tiny CommonJS loader, and uses the globally-installed
// React CJS builds. `shaders/react` and `lucide-react` are stubbed.
// The production build on Cloudflare Pages uses Vite + the real packages.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { join, dirname, relative } from 'node:path'
import { createRequire } from 'node:module'

const require_ = createRequire(import.meta.url)
const G = '/home/claude/.npm-global/lib/node_modules'
const ts = require_(join(G, 'typescript'))

const ROOT = new URL('..', import.meta.url).pathname
const SRC = join(ROOT, 'src')
const OUTDIR = join(ROOT, 'preview')
mkdirSync(OUTDIR, { recursive: true })

// ---------- collect + transpile src ----------
function walk(dir, acc = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    if (statSync(p).isDirectory()) walk(p, acc)
    else acc.push(p)
  }
  return acc
}

const modules = {} // id -> code (CJS body)

for (const file of walk(SRC)) {
  const rel = 'src/' + relative(SRC, file).replace(/\\/g, '/')
  if (/\.(tsx|ts)$/.test(file)) {
    let code = readFileSync(file, 'utf8')
    // Preview-only: remote hosts are blocked in this sandbox, so swap
    // remote imagery for locally generated placeholders (unless the preview
    // is being built for the user's own machine: KEEP_REMOTE_MEDIA=1).
    if (!process.env.KEEP_REMOTE_MEDIA) {
      code = code
        .replace(/https:\/\/images\.higgs\.ai\/[^']*90123[^']*'/g, "placeholder-small.png'")
        .replace(/https:\/\/images\.higgs\.ai\/[^']*90133[^']*'/g, "placeholder-large.png'")
    }
    const out = ts.transpileModule(code, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2019,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
      },
      fileName: file,
    })
    modules[rel.replace(/\.(tsx|ts)$/, '')] = out.outputText
  } else if (/\.css$/.test(file)) {
    modules[rel] = '/* css handled via <link> */'
  }
}

// ---------- npm CJS modules ----------
const DEV = !!process.env.REACT_DEV
const rBuild = (name) => DEV ? name.replace('.production.', '.development.') : name
modules['react'] = readFileSync(join(G, rBuild('react/cjs/react.production.js')), 'utf8')
modules['react/jsx-runtime'] = readFileSync(
  join(G, rBuild('react/cjs/react-jsx-runtime.production.js')),
  'utf8',
)
modules['react-dom'] = readFileSync(
  join(G, rBuild('react-dom/cjs/react-dom.production.js')),
  'utf8',
)
modules['react-dom/client'] = readFileSync(
  join(G, rBuild('react-dom/cjs/react-dom-client.production.js')),
  'utf8',
)
modules['scheduler'] = readFileSync(
  join(G, rBuild('react-dom/node_modules/scheduler/cjs/scheduler.production.js')),
  'utf8',
)

// ---------- stubs ----------
modules['lucide-react'] = `
const React = require('react');
function icon(paths) {
  return function Icon({ size = 24, className = '', ...rest }) {
    return React.createElement('svg', {
      xmlns: 'http://www.w3.org/2000/svg', width: size, height: size,
      viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
      strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
      className, ...rest,
    }, paths.map((d, i) => React.createElement('path', { key: i, d })));
  };
}
exports.ArrowRight = icon(['M5 12h14', 'm12 5 7 7-7 7']);
exports.Clock = icon(['M12 6v6l4 2', 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z']);
exports.Menu = icon(['M4 12h16', 'M4 6h16', 'M4 18h16']);
exports.X = icon(['M18 6 6 18', 'm6 6 12 12']);
exports.ChevronDown = icon(['m6 9 6 6 6-6']);
`

// Shader stub throws -> exercises the ErrorBoundary -> ShaderFallback renders,
// which is exactly what production does on machines without WebGL.
modules['shaders/react'] = `
function Throwing() { throw new Error('shaders stubbed in local preview'); }
exports.Swirl = Throwing;
exports.ChromaFlow = Throwing;
exports.FlutedGlass = Throwing;
exports.FilmGrain = Throwing;
`

// ---------- bundle ----------
function normalize(p) {
  const parts = []
  for (const seg of p.split('/')) {
    if (seg === '.' || seg === '') continue
    else if (seg === '..') parts.pop()
    else parts.push(seg)
  }
  return parts.join('/')
}

let bundle = `window.process = { env: { NODE_ENV: 'production' } };
var __modules = {}, __cache = {};
function __define(id, fn) { __modules[id] = fn; }
function __normalize(p) {
  var parts = [];
  p.split('/').forEach(function (seg) {
    if (seg === '.' || seg === '') return;
    if (seg === '..') parts.pop(); else parts.push(seg);
  });
  return parts.join('/');
}
function __resolve(from, spec) {
  if (spec[0] !== '.') return spec;
  var dir = from.split('/').slice(0, -1).join('/');
  var p = __normalize(dir + '/' + spec);
  if (__modules[p]) return p;
  if (__modules[p.replace(/\\.(tsx|ts|js)$/, '')]) return p.replace(/\\.(tsx|ts|js)$/, '');
  return p;
}
function __require(id) {
  if (__cache[id]) return __cache[id].exports;
  if (!__modules[id]) throw new Error('module not found: ' + id);
  var mod = { exports: {} };
  __cache[id] = mod;
  var localRequire = function (spec) { return __require(__resolve(id, spec)); };
  __modules[id](mod, mod.exports, localRequire);
  return mod.exports;
}
`

for (const [id, code] of Object.entries(modules)) {
  bundle += `\n__define(${JSON.stringify(id)}, function (module, exports, require) {\n${code}\n});\n`
}
bundle += `\nwindow.__require = __require; window.__modules = __modules;\ntry { __require('src/main'); } catch(e) { window.__mainError = String(e) + '\\n' + (e.stack||''); throw e; }\n`

writeFileSync(join(OUTDIR, 'app.js'), bundle)

// ---------- html ----------
writeFileSync(
  join(OUTDIR, 'index.html'),
  `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>AmBrightTech — local preview</title>
<link rel="stylesheet" href="preview.css" />
<link rel="stylesheet" href="handwritten.css" />
</head>
<body>
<div id="root"></div>
<script src="app.js"></script>
</body>
</html>
`,
)

// hand-written parts of src/index.css (everything except tailwind directives)
const idx = readFileSync(join(SRC, 'index.css'), 'utf8')
writeFileSync(
  join(OUTDIR, 'handwritten.css'),
  idx.replace(/@tailwind [a-z]+;/g, ''),
)

console.log('preview built:', Object.keys(modules).length, 'modules')
