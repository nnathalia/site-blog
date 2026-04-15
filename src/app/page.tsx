import { LandingPage } from "@/templates/landing-page"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Site.set',
    description: 'Venda seus produtos como afiliado em um único lugar',
    robots: 'index, follow',
    openGraph: {
        title: 'Site.set',
        description: 'Venda seus produtos como afiliado em um único lugar',
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
export default function Home() {
    return (
        <LandingPage />
    )
}