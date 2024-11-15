import { GetStaticPropsContext } from "next";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Ozivon | Sell Your Property Quickly & Securely</title>
        <meta
          name="description"
          content="With Ozivon, you can sell your property without the hassle. We secure a buyer for your home within 1 to 4 months."
        />
        <link rel="icon" href="/favicon.jpg" type="image/png" sizes="32x32" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

