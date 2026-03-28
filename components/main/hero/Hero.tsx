'use client'
import { MeshGradient } from '@paper-design/shaders-react'
import { useEffect, useState } from 'react'

export function Hero() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 w-screen h-screen">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={['#f9c6d0', '#fadadd', '#fce4ec', '#f8bbd0', '#f48fb1', '#ffeef2']}
              distortion={0.6}
              swirl={0.5}
              grainMixer={0}
              grainOverlay={0}
              speed={0.3}
              offsetX={0.08}
            />
            <div className="absolute inset-0 pointer-events-none bg-pink-50/10" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
            style={{
              border: '1px solid rgba(180,80,100,0.2)',
              background: 'rgba(255,255,255,0.35)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M6.5 0L7.8 5.2L13 6.5L7.8 7.8L6.5 13L5.2 7.8L0 6.5L5.2 5.2L6.5 0Z"
                fill="#c2647a"
                fillOpacity="0.9"
              />
            </svg>
            <span
              className="tracking-widest uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#a0455a' }}
            >
              AI Thumbnail Generator
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-bold text-balance text-4xl sm:text-5xl md:text-6xl xl:text-[80px] leading-tight mb-6"
            style={{ fontFamily: 'var(--font-indie-flower)', color: '#3d1a24' }}
          >
            Design the Click.{' '}
            <span style={{ color: '#c2647a' }}>
              AI Does the Work.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 px-4" style={{ color: '#7a3a4a' }}>
            Our AI analyzes your content and generates
            high-CTR YouTube thumbnails in seconds.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-4">
            <button
              className="px-8 py-4 rounded-full font-semibold text-sm transition-colors cursor-pointer"
              style={{ background: '#c2647a', color: '#fff' }}
            >
              Start for Free
            </button>
            <button
              className="flex items-center gap-2.5 px-8 py-4 rounded-full text-sm transition-colors cursor-pointer"
              style={{ border: '1px solid rgba(180,80,100,0.3)', color: '#a0455a', background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)' }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="8.25" stroke="#c2647a" strokeOpacity="0.7" strokeWidth="1.5" />
                <path d="M7.5 6.5L7.5 11.5L12.5 9L7.5 6.5Z" fill="#c2647a" fillOpacity="0.9" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
