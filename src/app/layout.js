import './globals.css'
import { Montserrat } from 'next/font/google'
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter/TheFooter'
import CookieConsent from '@/components/CookieConsent/CookieConsent'

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Frontend developer Aliaksandr Bandziuk',
  description: 'Frontend developer Aliaksandr Bandziuk. I createing websites and web applications. I have been working in this field for more than 3 years.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <TheHeader />
        {children}
        <TheFooter />
        <CookieConsent />
      </body>
    </html>
  )
}
