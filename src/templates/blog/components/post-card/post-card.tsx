import Link from "next/link";
import Image from "next/image";
import { Avatar } from "@/components/avatar";

type Author = {
    name: string;
    avatar: string;
}

type  PostCardProps = {
    title: string;
    description: string;
    date: string;
    image: string;
    author: Author;
    slug: string;
}

export function PostCard({ title, description, date, image, author, slug }: PostCardProps) {
    return (
        <Link href={`/blog/${slug}`}
            className="w-full max-w-2xl rounded-3xl border-[1px] border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-300"
        >
            {/* Post container */}
            <div className="p-2 rounded-md overflow-hidden">
                {/* Image container */}
                <div className="relative">
                    <div className="absolute top-0 right-0 px-3 py-1 bg-gray-600 rounded-tr-xl rounded-bl-lg">
                        <span className="text-gray-300 text-body-xs ">{date}</span>
                    </div>
                    <Image
                        src={image}
                        alt={title}
                        width={288}
                        height={144}
                        className="w-full h-40 object-cover items-start object-center rounded-xl rounded-tr-2xl"
                    />
                </div>

                {/* Post info */}
                <div className="px-2 mt-4 space-y-4">
                    <h2 className="text-heading-xs text-gray-100 line-clamp-3">{title}</h2>
                    <p className="text-body-sm text-gray-300 line-clamp-3">{description}</p>

                    {/* Post footer*/}
                    <div className="flex items-center gap-3 border-t border-gray-400 py-4">
                        <Avatar.Container>
                            <Avatar.Image size="xs" src={author.avatar} alt={author.name} />
                            <Avatar.Title>{author.name}</Avatar.Title>
                        </Avatar.Container>
                    </div>
                </div>
            </div>
        </Link>
    )
}