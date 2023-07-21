import { About } from '@/components/About'
import { Benefits } from '@/components/Benefits'
import { Hero } from '@/components/Hero'
import { Portfolio } from '@/components/Portfolio'
import { Technologies } from '@/components/Technologies'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Technologies />
      <Benefits />
    </main>
  )
}
