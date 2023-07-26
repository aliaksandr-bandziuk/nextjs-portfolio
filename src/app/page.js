import { About } from '@/components/About'
import { Benefits } from '@/components/Benefits'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Portfolio } from '@/components/Portfolio'
import { Technologies } from '@/components/Technologies'

import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script id='ga' src="https://www.googletagmanager.com/gtag/js?id=G-FYN41J3DJK" />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FYN41J3DJK');
        `}
      </Script>
      <main>
        <Hero />
        <About />
        <Technologies />
        <Portfolio />
        <Benefits />
        <Contact />
      </main>
    </>
  )
}
