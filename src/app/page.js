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
      <Script
        strategy='lazyOnload'
        src="https://www.googletagmanager.com/gtag/js?id=G-3S7ZLYWVWK"
      />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3S7ZLYWVWK');
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
