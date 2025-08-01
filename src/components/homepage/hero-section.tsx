"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cog, PlayCircle, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { PipelineHero } from "./pipeline-hero";

export function HeroSection() {
    return (
        <motion.div
            className="text-center relative z-10"
        >
            {/* Hero Badge */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Badge
                    variant="secondary"
                    className="mb-6 text-sm"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="mr-1"
                    >
                        <Cog className="w-4 h-4 text-destructive" />
                    </motion.div>
                    AI-Powered Creative Problem Generator
                </Badge>
            </motion.div>

            {/* Hero Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 max-w-6xl mx-auto leading-tight tracking-tight">
                    Turn Your{" "}
                    <span className="text-primary">
                        Creative Ideas
                    </span>{" "}
                    <br />
                    into Coding Problems
                </h1>
            </motion.div>

            {/* Hero Description */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                    Create unique competitive programming problems like never before
                </p>
            </motion.div>

            {/* Hero Buttons */}
            <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-32"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300">
                        <Link href="/create">
                            <Rocket className="size-4" />
                            Start Creating Free
                        </Link>
                    </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="border-2 border-border">
                        <PlayCircle className="size-4" />
                        Watch Demo
                    </Button>
                </motion.div>
            </motion.div>

            {/* Interactive Pipeline Demo */}
            <PipelineHero />
        </motion.div>
    );
}