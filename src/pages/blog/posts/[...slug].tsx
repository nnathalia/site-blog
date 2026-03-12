import { useRouter } from "next/router"

export default function PostPage() {
    const router  = useRouter()
    console.log(router.query.slug)
    const segments = router.query.slug as string[];
    return (
        <div>
            <h1>Post {segments.join('/')}</h1>
        </div>
    )
}