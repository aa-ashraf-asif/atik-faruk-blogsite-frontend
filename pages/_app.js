import { useEffect } from "react";
import "@/styles/global.scss";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-EDJML3M2V9"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EDJML3M2V9');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
