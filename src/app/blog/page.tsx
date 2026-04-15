import { BlogList } from "@/templates/blog"
import { allPosts } from "contentlayer/generated"
import { Metadata } from "next"

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
export default function BlogPage() {
    const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return (
        <BlogList posts={sortedPosts} />
    )
}