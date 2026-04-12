import { FacebookIcon, LinkedinIcon, SlackIcon, TwitterIcon } from "lucide-react";

export type ShareConfig = {
    url: string,
    title?: string
    text?: string
}

export type SocialProvider = 'linkedin' | 'facebook' | 'slack' | 'twitter' | 'clipboard';

export const SOCIAL_PROVIDERS = {
    linkedin: {
        name: "LinkedIn",
        icon: <LinkedinIcon className="h-4 w-4" />,
        shareUrl: (config: ShareConfig) => `https://www.linkedin.com/share?url=${encodeURIComponent(config.url)}`,
    },
    facebook: {
        name: "Facebook",
        icon: <FacebookIcon className="h-4 w-4" />,
        shareUrl: (config: ShareConfig) => `https://www.facebook.com/share?url=${encodeURIComponent(config.url)}`,
    },
    slack: {
        name: "Slack",
        icon: <SlackIcon className="h-4 w-4" />,
        shareUrl: (config: ShareConfig) => `https://www.slack.com/share?url=${encodeURIComponent(config.url)}&text${
        encodeURIComponent(config.title || '')}`
    },
    twitter: {
        name: "Twitter",
        icon: <TwitterIcon className="h-4 w-4" />,
        shareUrl: (config: ShareConfig) => `https://www.twitter.com/share?url=${encodeURIComponent(config.url)}&text${
        encodeURIComponent(config.title || '')}`
    }
    
}