'use client';

import Script from 'next/script'

import { usePathName, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { pageview } from '@/app/lib/gtagHelper';

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {

  const pathName = usePathName();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathName + searchParams.toString();

    pageview(GA_MEASUREMENT_ID, url);
  }, [pathName, searchParams, GA_MEASUREMENT_ID]);


  return (
    <>
      <Script strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script id='google-analytics' strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
    </>
  )
}