'use client'
import { MeshGradient } from '@paper-design/shaders-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AuthPage() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)

  async function handleGoogleLogin() {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  useEffect(() => {
    setMounted(true)
    const update = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <main className="relative w-screen h-screen overflow-hidden flex">
      {/* 전체 배경 mesh gradient */}
      <div className="fixed inset-0 w-screen h-screen">
        {mounted && (
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
        )}
      </div>

      {/* 왼쪽 패널 — 3/5 비율 */}
      <div className="relative z-10 w-3/5 h-full flex flex-col">
        {/* 야간 투명 분홍 오버레이 */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(40, 4, 18, 0.74)' }}
        />

        {/* Back 버튼 */}
        <nav className="relative z-10 px-10 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70 cursor-pointer"
            style={{ color: '#f9c6d0' }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L6 9L11 14" stroke="#f9c6d0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>
        </nav>

        {/* 유튜브 영상 — src의 VIDEO_ID를 실제 영상 ID로 교체하세요 */}
        <div className="relative z-10 px-10">
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/1Ur-1ZKjR1Q?autoplay=1&mute=1&loop=1&controls=0&playlist=1Ur-1ZKjR1Q"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>

        {/* nailart 대형 디스플레이 텍스트 */}
        <div className="relative z-10 flex-1 flex items-end px-8 pb-10">
          <span
            className="leading-none tracking-tight select-none"
            style={{
              fontFamily: 'var(--font-indie-flower)',
              fontSize: 'clamp(5rem, 11vw, 11rem)',
              color: 'rgba(255, 200, 215, 0.88)',
            }}
          >
            nailart
          </span>
        </div>
      </div>

      {/* 오른쪽 패널 — 2/5 비율 */}
      <div className="relative z-10 w-2/5 h-full flex items-center justify-center px-8">
        <div
          className="w-full max-w-sm rounded-3xl px-8 py-10 flex flex-col items-center"
          style={{
            background: 'rgba(255,255,255,0.45)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: '0 8px 40px rgba(180,80,100,0.1)',
          }}
        >
          {/* 로고 */}
          <div className="flex items-center gap-2.5 mb-8">
            <Image src="/nailart.png" alt="Jims Nailart" width={36} height={36} />
            <span className="font-bold text-xl tracking-tight" style={{ color: '#3d1a24' }}>
              Jims Nailart
            </span>
          </div>

          {/* 타이틀 */}
          <h1
            className="text-3xl font-bold mb-2 text-center"
            style={{ fontFamily: 'var(--font-indie-flower)', color: '#3d1a24' }}
          >
            Welcome back
          </h1>
          <p className="text-sm text-center mb-8" style={{ color: '#a0455a' }}>
            Sign in to generate your thumbnails
          </p>

          {/* 구분선 */}
          <div className="w-full flex items-center gap-3 mb-6">
            <div className="flex-1 h-px" style={{ background: 'rgba(180,80,100,0.15)' }} />
            <span className="text-xs" style={{ color: '#c2647a' }}>continue with</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(180,80,100,0.15)' }} />
          </div>

          {/* Google 로그인 버튼 */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl font-semibold text-sm transition-all cursor-pointer"
            style={{
              background: 'rgba(255,255,255,0.8)',
              border: '1px solid rgba(180,80,100,0.2)',
              color: '#3d1a24',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.332 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
              <path d="M6.306 14.691l6.571 4.819C14.655 15.108 19.001 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
              <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.316 0-9.828-3.417-11.534-8.146l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
              <path d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.021 35.625 44 30.138 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
            </svg>
            Continue with Google
          </button>

          {/* 약관 */}
          <p className="text-xs text-center mt-6 leading-relaxed" style={{ color: '#b07080' }}>
            By continuing, you agree to our{' '}
            <span className="underline cursor-pointer" style={{ color: '#c2647a' }}>Terms</span>
            {' '}and{' '}
            <span className="underline cursor-pointer" style={{ color: '#c2647a' }}>Privacy Policy</span>
          </p>
        </div>
      </div>
    </main>
  )
}
