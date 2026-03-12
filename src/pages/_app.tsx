import "@/styles/globals.css";
import type { AppProps } from "next/app";

// executado tanto no client quanto no server
export default function App({ Component, pageProps }: AppProps) {
  console.log('app') 
  return <Component {...pageProps} />;
}
