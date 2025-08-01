"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
    return (
        <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <Card className="p-8 md:p-12 bg-primary/5 border-2 dark:border-primary/20 border-foreground/20 shadow-2xl backdrop-blur-sm space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Human and AI can be{" "}
                    <span className="text-primary">Creative</span>
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                    We understand the value of human creative process.<br />
                    No agents, no unnatural problems. Just AI reducing the workload.
                </p>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-fit mx-auto"
                >
                    <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                        <Link href="/create">
                            <Rocket className="size-4" />
                            Start Creating
                        </Link>
                    </Button>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                    className="absolute top-4 right-4 size-8 bg-primary/10 rounded-full"
                    animate={{
                        scale: [1, 0.75, 1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-4 left-4 size-8 bg-accent/10 rounded-full"
                    animate={{
                        scale: [1, 0.75, 1]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </Card>
        </motion.div>
    );
}