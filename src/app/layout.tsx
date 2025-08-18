import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";
import { sessionValidation } from "@/app/actions/serverActions"
import { Suspense } from "react";
import { LoadingPage } from "@/components/ui/loading";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "AlgoForge AI - Transform Stories into Algorithmic Adventures",
    description: "The creative studio where storytellers become algorithm architects. Craft compelling competitive programming problems through our AI-assisted 8-step pipeline.",
    keywords: ["algorithm", "competitive programming", "AI", "story", "creative", "problem solving"],
    authors: [{ name: "AlgoForge AI Team" }],
    creator: "AlgoForge AI",
    openGraph: {
        title: "AlgoForge AI - Creative Problem Creation Studio",
        description: "Transform your stories into algorithmic adventures with AI assistance",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "AlgoForge AI - Creative Problem Creation Studio",
        description: "Transform your stories into algorithmic adventures with AI assistance",
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await sessionValidation();
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background min-h-screen flex flex-col`}
            >
                <Providers
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar session={session} />
                    <Suspense fallback={<LoadingPage text="Loading..." />}>
                        <main className="flex-1">
                            {children}
                        </main>
                    </Suspense>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
