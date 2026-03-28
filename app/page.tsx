import { Navbar } from '@/components/main/navbar'
import { Hero } from '@/components/main/hero'

export default function Home() {
  return (
    <main className="w-screen h-screen bg-black">
      <Navbar />
      <Hero />
    </main>
  )
}
