'use client'

import { Button } from "@/components/ui/button"
import { useShare } from "@/hooks"
type PostShareProps = {
  postUrl: string
  postTitle: string
  postDescription: string
}

export const PostShare = ({ postUrl, postTitle, postDescription }: PostShareProps) => {
  const { shareButtons } = useShare({
    url: postUrl,
    title: postTitle,
    text: postDescription
  })
  return (
    <aside className="space-y-6 ">
      <div className="rounded-lg flex items-center justify-between md:grid md:grid-cols-1 md:items-start md:px-6">
        <h2 className=" md:mb-4 text-heading-xs text-gray-100">Compartilhar</h2>
        <div className="flex justify-end md:justify-between md:flex-col gap-2 ">
          {shareButtons.map((provider) => (
            <Button
              key={provider.provider}
              onClick={provider.action}
              variant="outline"
              className="w-fit md:w-full justify-start gap-2"
            >
              {provider.icon}
              <span className="hidden md:block">{provider.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  )
}