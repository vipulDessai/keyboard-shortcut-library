import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Change colors based on key combos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://cdn.jsdelivr.net/gh/dmauro/Keypress@master/keypress.js"
          strategy="beforeInteractive"></Script>
      </body>
    </Html>
  );
}
