import PostPage from "@/pages/blog-page/[slug]"
import { allPosts } from "contentlayer/generated"
import { Metadata } from "next"
import { notFound } from "next/navigation"



type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({params}: BlogPostPageProps):Promise<Metadata> {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)
  if (!post) {
    return{}
  }
  return {
    title: post.title,
    description: post.description,
    authors:[
      {
        name: post.author.name
      }
    ],
    robots: 'index, follow',
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'website',
      url: `https://site-blog-zeta-plum.vercel.app/blog/${post.slug}`,
      siteName: 'Site.set',
      images: [
        post.image
      ],
      locale: 'pt-BR',
    }
  }
}
export const revalidate = 60

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug
  }))
}
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)
  if (!post) {
    notFound()
  }

  return (
    <PostPage post={post} />
  )
}