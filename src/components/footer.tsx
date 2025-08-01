"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { ThemeLogo } from "./ui/theme-logo";

// Footer links data
const footerLinks = [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "GitHub", href: "https://github.com/Bookdodo5", external: true },
    { label: "Hack Club", href: "https://summer.hackclub.com/users/5106", external: true },
    { label: "Discord", href: "https://discord.com/users/494517982433902602", external: true },
];

export default function Footer() {
    return (
        <footer className="mt-auto py-8 border-t border-border flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center cursor-pointer mb-2">
                <ThemeLogo className="w-10 h-10" />
                <h1 className="text-2xl font-black text-foreground">ALGOFORGE</h1>
            </div>
            <p className="text-muted-foreground">Create unique competitive programming problems like never before</p>
            <Separator />
            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
                {footerLinks.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -2, color: "rgb(var(--foreground))" }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link href={item.href} className="hover:text-foreground transition-colors" target={item.external ? "_blank" : "_self"}>
                            {item.label}
                        </Link>
                    </motion.div>
                ))}
            </div>
        </footer>
    );
}