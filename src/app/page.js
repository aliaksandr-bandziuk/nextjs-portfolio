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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MY8KLK2YZY" />
      <Script id='google-analytics' strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
          });
          gtag('js', new Date());
          gtag('config', 'G-MY8KLK2YZY');
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
