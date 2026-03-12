import { Html, Head, Main, NextScript } from "next/document";

// executado apenas no server
export default function Document() {
  console.log('document')
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
