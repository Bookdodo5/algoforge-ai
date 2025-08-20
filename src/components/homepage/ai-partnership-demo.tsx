"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Brain, Wand2, Network, Code2 } from "lucide-react";
import { motion } from "framer-motion";

// AI Partnership Demo
export const AIPartnershipDemo = () => {
    const demos = [
        {
            title: "Vibe to Story",
            description: "Discover the vibes and themes you want to explore, and put it into a concrete, workable narrative.",
            input:
`Theme: 'Defusing a Bomb Incorrectly'`,
            output:
`Story Idea: 'A former death game contestant finds himself trapped again, needing to disarm a bomb where the sequence of steps changes based on how many players are still alive, before the timer runs out.'`,
            icon: Wand2,
            buttonText: "Create the Narrative"
        },
        {
            title: "Story to Logic",
            description: "Analyze the narrative's core conflict, define the algorithm and twist, and then put it into a formal problem.",
            input:
`Narrative: "I woke up in a room with a bomb. There are a total of 5 strangers with me and all of them are asleep. The timer... It says there's 10 minutes..."`,
            output:
`Detailed Description: 'You are given N people in a room with a bomb. Each person can...'

Originality Notes: 'Combines classic DP with state compression, where the bomb's configuration...'`,
            icon: Network,
            buttonText: "Formalize the Problem"
        },
        {
            title: "Logic to Launch",
            description: "Generate everything you need: a model solution, test cases, subtasks, and the final problem statement.",
            input:
`Problem: {
// Complete problem
}`,
            output:
`Generated Package:
- solution.cpp
- generator.py
- statement.md
- statement.pdf`,
            icon: Code2,
            buttonText: "Launch Your Problem"
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
                    <Brain className="w-3 h-3 mr-1" />
                    AI & Human Together
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Your Creative{" "}
                    <span className="text-primary">Assistant</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Each step is built with human freedom in mind, with AI assisting the process.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
                {demos.map((demo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <Card className="h-full flex flex-col transition-all duration-300 border-border/80 hover:border-primary/50 bg-card/60">
                            <CardHeader>
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <demo.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg">{demo.title}</CardTitle>
                                </div>
                                <p className="text-sm text-muted-foreground h-12">{demo.description}</p>
                            </CardHeader>
                            <CardContent className="space-y-4 flex-grow flex flex-col">
                                <div className="space-y-2">
                                    <Label className="text-xs font-medium text-muted-foreground">Your Input</Label>
                                    <div className="p-3 bg-muted/50 rounded-lg text-sm font-mono h-24 overflow-auto whitespace-pre-wrap">
                                        {demo.input}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-medium text-muted-foreground">AI Output</Label>
                                    <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg overflow-auto text-sm font-mono h-32 whitespace-pre-wrap">
                                        {demo.output}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}; 