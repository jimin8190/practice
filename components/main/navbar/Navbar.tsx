'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/lib/context/AuthContext'

export function Navbar() {
  const { user, loading, signOut } = useAuth()

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-10 py-5">
      {/* Left: Logo + Text */}
      <div className="flex items-center gap-2.5">
        <Image src="/nailart.png" alt="Jims Nailart" width={200} height={20} />
        <span className="text-white font-bold text-lg tracking-tight">
          Jims Nailart
        </span>
      </div>

      {/* Center: Links */}
      <div className="flex items-center gap-10">
        {['Features', 'Pricing', 'Contact'].map((item) => (
          <a
            key={item}
            className="text-gray/60 hover:text-white text-sm transition-colors cursor-pointer"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right: CTA */}
      {!loading && (
        user ? (
          <div className="flex items-center gap-3">
            {user.user_metadata?.avatar_url && (
              <Image
                src={user.user_metadata.avatar_url}
                alt="profile"
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <button
              onClick={signOut}
              className="bg-white/20 text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-white/30 transition-all cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link
            href="/auth"
            className="bg-white text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-white/90 transition-all cursor-pointer"
          >
            Get Started
          </Link>
        )
      )}
    </nav>
  )
}
