import Link from "next/link"
import Image from "next/image"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Avatar } from "@/components/avatar"
import { Markdown } from "@/components/markdown"
import { Post } from "contentlayer/generated"
import { PostShare } from "./components/post-share"

export type PostPageProps = {
  post: Post
}
export const PostPage = ({ post }: PostPageProps) => {
  const publishedDate = new Date(post?.date).toLocaleDateString("pt-BR")
  const postUrl = `https://site.set/blog/${post.slug}`

  return (
    <main className="mt-20">
      <div className="container space-y-8 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link className="text-gray-100 text-action-sm" href="/blog">Blog</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-100" />
            <BreadcrumbItem>
              <span className="text-blue-200 text-action-sm">{post?.title}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
          <article className="bg-gray-600 rounded-lg overflow-hidden border border-gray-400">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg">
              <Image
                src={post?.image ?? ""}
                alt={post?.title ?? ""}
                fill
                className="object-cover"
              />
            </figure>

            <header className="p-4 md:p-6 lg:p-12 pb-0 mt-8 md:mt-12">
              <h1 className="mb-8 text-gray-100 text-balance text-heading-lg md:text-heading-xl ">{post?.title}</h1>
              <Avatar.Container>
                <Avatar.Image size="sm" src={post?.author.avatar ?? ""} alt={post?.author.name ?? ""} />
                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>Publicado em {" "} <time dateTime={post?.date}>{publishedDate}</time></Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prove-invert max-w-none px-4 mt-12 md:px-6 lg:px-12">
              <Markdown content={post?.body.raw} />
            </div>
          </article>
          <PostShare postUrl={postUrl} postTitle={post.title} postDescription={post.description} />
        </div>
      </div>
    </main>
  )
}
