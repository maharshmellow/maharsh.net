import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss"
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-WDSWTLJM55`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WDSWTLJM55');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}