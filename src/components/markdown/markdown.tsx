import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

type MarkdownProps = {
    content: string
}

export const Markdown = ({content, }: MarkdownProps) => {
    return (
        <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
            h1: ({children}) => (
                <h1 className="text-heading-md md:text-heading-xl mb-4 text-gray-200">{children}</h1>
            ),
            h2: ({children}) => (
                <h2 className="text-heading-sm md:text-heading-lg mb-4 mt-8 text-gray-200">{children}</h2>
            ),
            a: ({href,children}) => (
                <a href={href} className="text-blue-200 hover:underline">{children}</a>
            ),
             p: ({children}) => (
                <p className="leading-relaxed text-gray-200 mb-6">{children}</p>
            ),
            strong: ({children}) => (
                <strong className="font-extrabold  text-gray-100">{children}</strong>
            ),
        }}
        >
            {content}
        </ReactMarkdown>
    )
}