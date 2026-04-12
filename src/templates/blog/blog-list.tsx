import { Search } from "@/components/search";
import { useRouter } from "next/router";
import { PostCard } from "@/templates/blog/components/post-card";
import { PostGridCard } from "@/templates/blog/components/post-grid-card";
import { Post } from "contentlayer/generated";
import { Inbox } from "lucide-react";

export type BlogListProps = {
    posts: Post[]
}
export function BlogList({ posts }: BlogListProps) {
    const router = useRouter()
    const query = router.query.q as string;

    const pageTitle = query 
    ? `Resultados de busca para "${query}"` 
    : "Dicas e estratégias para impulsionar seu negócio";
    
   const postList = query 
   ? posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase())) 
   : posts


    const hasPosts = postList.length > 0
    return (
        <div className="flex flex-col py-24 flex-grow h-full">
            <header className="pb-14">
                <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
                    <div className="flex flex-col gap-4 md:px-0">
                        <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300 uppercase">Blog</span>
                        <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">{pageTitle}</h1>
                    </div>
                    <Search />
                </div>
            </header>
            {/* Listagem de posts */}
            {hasPosts &&
                <PostGridCard>
                    {postList.map((post) => (
                        <PostCard
                            title={post.title}
                            description={post.description}
                            date={new Date(post.date).toLocaleDateString('pt-BR')}
                            image={post.image}
                            author={{
                                avatar: post.author.avatar,
                                name: post.author.name
                            }}
                            slug={post.slug}
                        />
                    ))}
                </PostGridCard>
            }

            {!hasPosts && (
                <div className="container">
                    <div className="flex flex-col items-center justify-center gap-8 border-dashed border-2 border-gray-300 rounded-lg p-8 md:p-12">
                        <Inbox className="text-cyan-100 h-12 w-12 " />
                        <h2 className=" text-gray-100">Nenhum post encontrado</h2>
                    </div>
                </div>
            )}
        </div>
    )
}