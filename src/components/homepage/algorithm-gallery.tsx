"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, BrainCircuit, Cpu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ALGORITHM_LIBRARY } from "@/lib/algorithms";
import React from "react";

// Algorithm Gallery Section
export const AlgorithmGallery = () => {
    const suggestedAlgorithms = [
        {
            ...ALGORITHM_LIBRARY.find(a => a.id === 'paradigm-binary-search')!,
            justification: "The monotonic nature of time vs. shadow length makes it a very good contender for an interesting binary search on answer problem."
        },
        {
            ...ALGORITHM_LIBRARY.find(a => a.id === 'math-geometry-primitives')!,
            justification: "The core of the problem involves calculating shadow positions and intersections using geometric formulas to find the current time."
        }
    ];

    return (
        <div className="container mx-auto">
            {/* Header */}
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Badge variant="outline" className="mb-4">
                    <BrainCircuit className="w-3 h-3 mr-1" />
                    Narrative-Based Algorithm Selection
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    From Story to <span className="text-primary">Structure</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Identify the narrative's computational core, and find the most fitting algorithms from the library to build a programming problem around.
                </p>
            </motion.div>

            {/* AI Suggestion Showcase */}
            <div className="px-32 grid lg:grid-cols-11 gap-6 items-center">
                {/* Narrative Card */}
                <motion.div
                    className="lg:col-span-5"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Card className="h-full bg-background border-border">
                        <CardHeader>
                            <CardTitle className="text-base font-semibold">Narrative Input</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground italic">
                                "In a city with no clocks, time measurement is exclusive to the noble class. The only possible method of measuring it is with the length of shadows. As a genius prince, you made an appointment with a friend in 2 days, but today, the sun..."
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* AI Processor */}
                <motion.div
                    className="lg:col-span-1 flex justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="p-4 bg-primary/20 rounded-full border-2 border-dashed border-primary/50">
                        <Bot className="size-8 text-primary" />
                    </div>
                </motion.div>

                {/* Suggestions */}
                <motion.div
                    className="lg:col-span-5 space-y-4"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {suggestedAlgorithms.map((algo) => (
                        <Card key={algo.id} className="bg-background border-border hover:border-primary/50 border-2 transition-colors">
                            <CardHeader>
                                <CardTitle className="text-md flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Cpu className="w-4 h-4 text-primary" />
                                        {algo.name}
                                    </div>
                                    <Badge variant="secondary" className="w-fit">{algo.level}</Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{algo.justification}</p>
                            </CardContent>
                        </Card>
                    ))}
                </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
                className="text-center mt-8 flex justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button size="lg" variant="default" className="cursor-pointer" asChild>
                        <Link href="/algorithms">
                            Explore the Full Algorithm Library
                            <ArrowRight className="size-4" />
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    );
}; 