import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';

import * as ga from '../lib/ga';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url);
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=G-8T8RW28ZG9`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics-script' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8T8RW28ZG9');
        `}
      </Script>
      <Script 
          src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" 
          strategy="beforeInteractive"
      />
      <Script 
          src="https://assetss3.vin65.com/js/vin65remotetools.1.2.js" 
          strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  )
}
