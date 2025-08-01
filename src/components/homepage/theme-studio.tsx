"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Workflow } from "lucide-react";
import { motion } from "framer-motion";

// Theme Studio Section
export const ThemeStudio = () => {
    const categories = [
        {
            name: "Object Manipulation",
            description: "Changing the state or order of items.",
            examples: ["Organizing a Spice Rack", "Folding Laundry", "Reassembling a Broken Pot"]
        },
        {
            name: "Agent in an Environment",
            description: "Navigating or acting within a defined space.",
            examples: ["A Subway Commute", "Hide and Seek", "Stopping a Pandemic"]
        },
        {
            name: "System with an Anomaly",
            description: "A familiar system with a single, strange rule.",
            examples: ["A Library with One-Way Staircases", "A City with No Clocks", "Teleporters with a Cooldown"]
        },
        {
            name: "Generative Rules",
            description: "Creating something that adheres to constraints.",
            examples: ["Writing a Song", "Spy Encryption", "Following a Recipe"]
        },
        {
            name: "Interaction with a Black Box",
            description: "Deducing rules through interaction.",
            examples: ["Aliens Who Don't Use Numbers", "Communicating with Goats", "Summoning an Eldritch Horror"]
        },
        {
            name: "Evaluation & Verification",
            description: "Judge a configuration using well-defined ruleset.",
            examples: ["Validating a Magic Spell", "Refereeing a Strange Sport", "Evaluating a Poker Hand", "Checking Chessboard Legality"]
        }
    ];

    return (
        <div className="container mx-auto">
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Badge variant="outline" className="mb-4">
                    <Lightbulb className="w-3 h-3 mr-1" />
                    Theme Ideation
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary">Programming-Oriented</span> Ideation
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Ensuring diverse, creative, and relevant starting points for problem creation.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border-border border-2 hover:border-accent/50 transition-all duration-300 bg-card hover:bg-card/80 gap-6">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-accent/20 rounded-md">
                                        <Workflow className="w-5 h-5 text-accent" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold">{category.name}</CardTitle>
                                </div>
                                <p className="text-sm text-muted-foreground">{category.description}</p>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {category.examples.map((example, i) => (
                                        <Badge key={i} variant="secondary" className="font-normal">
                                            {example}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}; 