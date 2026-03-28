import Image from 'next/image'

export function Navbar() {
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
      <button className="bg-white text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-white/90 transition-all cursor-pointer">
        Get Started
      </button>
    </nav>
  )
}
