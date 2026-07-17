import { Component, type ReactNode } from 'react'
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react'

const layerStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
}

const ShaderAny = Shader as any
const SwirlAny = Swirl as any
const ChromaFlowAny = ChromaFlow as any
const FlutedGlassAny = FlutedGlass as any
const FilmGrainAny = FilmGrain as any

/** Animated CSS fallback shown if WebGL / the shader runtime is unavailable. */
export function ShaderFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#EFEFEF]">
      <div className="shader-fallback-blob shader-fallback-blob-a" />
      <div className="shader-fallback-blob shader-fallback-blob-b" />
      <div className="shader-fallback-blob shader-fallback-blob-c" />
    </div>
  )
}

class ShaderErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) return <ShaderFallback />
    return this.props.children
  }
}

/**
 * Full-screen animated shader stack for the hero.
 * Swirl -> ChromaFlow -> FlutedGlass -> FilmGrain, per design spec.
 */
export default function ShaderBackdrop() {
  return (
    <ShaderErrorBoundary>
      <ShaderAny style={layerStyle}>
        <SwirlAny
          style={layerStyle}
          colorA="#FF3366"
          colorB="#00E5FF"
          detail={1.7}
        />
        <ChromaFlowAny
          style={layerStyle}
          baseColor="#FF00AA"
          downColor="#FFDD00"
          leftColor="#00FFCC"
          rightColor="#7000FF"
          upColor="#FF4500"
          momentum={13}
          radius={3.5}
        />
        <FlutedGlassAny
          style={layerStyle}
          aberration={0.61}
          angle={31}
          frequency={8}
          highlight={0.12}
          highlightSoftness={0}
          lightAngle={-90}
          refraction={4}
          shape="rounded"
          softness={1}
          speed={0.15}
        />
        <FilmGrainAny style={layerStyle} strength={0.05} />
      </ShaderAny>
    </ShaderErrorBoundary>
  )
}
