'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
//   const measurementId = process?.env?.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-R7QC4J3R7H";
  const measurementId = "G-R7QC4J3R7H";

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
} 