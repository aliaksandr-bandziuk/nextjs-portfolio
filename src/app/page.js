import { About } from '@/components/About'
import { Benefits } from '@/components/Benefits'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Portfolio } from '@/components/Portfolio'
import { Technologies } from '@/components/Technologies'

import Script from 'next/script'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Technologies />
      <Portfolio />
      <Benefits />
      <Contact />
    </main>
  )
}
