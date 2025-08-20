"use client";

import { useScroll, useTransform } from "framer-motion";
import { ThemeStudio } from "../components/homepage/theme-studio";
import { AlgorithmGallery } from "../components/homepage/algorithm-gallery";
import { AIPartnershipDemo } from "../components/homepage/ai-partnership-demo";
import { CTASection } from "../components/homepage/cta-section";
import { ThemedSection } from "../components/ui/theme-bg";
import { HeroSection } from "../components/homepage/hero-section";

export default function Page() {
    const scroll = useScroll();

    const parallaxY = useTransform(
        scroll.scrollYProgress,
        [0, 1],
        [0, 1500]
    );

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground relative overflow-hidden">
            <ThemedSection
                light="/stacked-steps-light.svg"
                dark="/stacked-steps-dark.svg"
                className="pt-36 pb-16 md:pt-52 md:pb-24 relative bg-cover bg-center bg-no-repeat"
                parallaxY={parallaxY}
            >
                <HeroSection />
            </ThemedSection>

            <section className="py-20 bg-background relative">
                <ThemeStudio />
            </section>

            <section className="py-20 bg-muted/25 relative">
                <AlgorithmGallery />
            </section>

            <section className="py-20 bg-background relative">
                <AIPartnershipDemo />
            </section>

            <ThemedSection
                light="/low-poly-grid-light.svg"
                dark="/low-poly-grid-dark.svg"
                className="py-20 relative"
            >
                <CTASection />
            </ThemedSection>
        </div>
    );
}