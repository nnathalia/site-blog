import { HeroSection, FeatureSection, SupportSection, CustomerStorySection, CallToAction } from "@/templates/landing-page/sections";

export function LandingPage() {
    return (
        <article className="flex flex-col">
            <HeroSection />
            <FeatureSection />
            <SupportSection />
            <CustomerStorySection />
        </article>
    )
}