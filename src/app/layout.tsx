import { Layout } from "@/components/layout"
import "@/styles/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Dicas e estratégias para impulsionar seu negócio',
  robots: 'index, follow',
  openGraph: {
    title: 'Blog',
    description: 'Dicas e estratégias para impulsionar seu negócio',
    type: 'website',
    url: 'https://site-blog-zeta-plum.vercel.app',
    siteName: 'Site.set',
    images: [
      {
        url: 'https://site-blog-zeta-plum.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Site.set',
      },
    ],
    locale: 'pt-BR',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
