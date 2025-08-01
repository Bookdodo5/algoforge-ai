"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import oneLight from 'react-syntax-highlighter/dist/cjs/styles/prism/one-light';
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark';
import {
    BookOpen,
    BrainCircuit,
    ClipboardList,
    Bot,
    Network,
    UserCheck,
    ListChecks,
    FileJson2,
    ScrollText,
    Code2,
    Cpu,
    Lightbulb,
    Palette,
    Terminal,
    Trophy,
    FileText,
    Copy,
    Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { ThemeSyntax } from "./theme-syntax";

export const PipelineHero = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [displayedCode, setDisplayedCode] = useState("");
    const { theme } = useTheme();
    const delayRef = useRef(-1);

    const steps = [
        {
            title: "Vibe Extraction",
            description: "Extract the target problem's ideal writing style",
            icon: BrainCircuit,
            code:
`// AI Vibe Analysis Result:
{
    "voice_summary": "A deeply philosophical narrator who deconstructs concepts.",
    "vibe_keywords": ["philosophical", "meta-narrative"],
    "stylistic_tags": ["Rambling", "Abstract"],
    "formality": "Academic",
    "pacing": "Contemplative",
    "aesthetic": "Modern Japanese philosophical fiction"
}`
        },
        {
            title: "Theme Ideation",
            description: "Brainstorm creative problem themes",
            icon: Lightbulb,
            code:
`// AI-Generated Themes:
[
    "A Library with One-Way Staircases",
    "Aliens Who Don't Use Numbers",
    "A City with No Clocks",
    "Musical Chairs You Must Lose",
    "Reassembling a Broken Pot",
    "Following a Recipe Incorrectly",
]`
        },
        {
            title: "Logline Expansion",
            description: "Expand a theme into story concepts",
            icon: ClipboardList,
            code:
`// AI-Generated Logline:
{
    "protagonist": "A librarian in a sentient library",
    "goal": "to find the 'Silent Section'",
    "obstacle": "the staircases rearrange themselves based on unspoken rules",
    "stakes": "before the library consumes itself in paradoxes",
    "logline_sentence": "..." // Combined logline sentence
}`
        },
        {
            title: "Narrative Generation",
            description: "Write the full problem story",
            icon: ScrollText,
            code:
`\`\`\`
The Grand Library is not a place of stone and paper; it is a living entity.
Its corridors breathe, and its shelves sigh with the weight of forgotten tales.
You are its new caretaker.

Your task is to find the 'Silent Section,' a rumored sanctuary of perfect quiet. But the Library is whimsical...

...
\`\`\``
        },
        {
            title: "Algorithm Specification",
            description: "Select algorithms for the problem",
            icon: Network,
            code:
`// AI-Generated Problem Proposal:
{
    "coreConcept": "A shortest path problem on a dynamic graph where edge weights change based on the path taken.",
    "detailedDescription": "The Library is a graph of N rooms and M staircases. Each staircase has a 'noise' cost...",
    "originalityNotes": "This is a twist on Dijkstra's algorithm...",
    "difficulty": "Challenging"
}`
        },
        {
            title: "Problem Formalization",
            description: "Create the final technical specification",
            icon: FileText,
            code:
`/*
Input:
The first line contains N and M (1 <= N <= 100,000).
The second line contains the start and end rooms.
The next M lines describe staircases: u, v, w.

Output:
The minimum total noise to reach the destination.
If impossible, output -1.
*/`
        },
        {
            title: "Solution Formation",
            description: "AI generates a model solution and tests",
            icon: Bot,
            code:
`// AI-Generated C++ Solution
#include <iostream>
#include <vector>

using namespace std;

void solve() {
    int n, m;
    cin >> n >> m;
    // ... Algorithm implementation ...
}`
        },
        {
            title: "Finalization",
            description: "Final polish and packaging for publishing",
            icon: Trophy,
            code:
`// Final Problem Package:
{
    "title": "The Silent Librarian",
    "statement": "The Grand Library is not a place...",
    "subtasks": [
        { "points": 20, "constraints": "N <= 100" },
        { "points": 80, "constraints": "Full" }
    ],
    "testcases": [...],
    "solution": "..."
}`
        }
    ];

    // Typewriter effect
    useEffect(() => {
        delayRef.current = -1;
        setDisplayedCode("");

        const code = steps[currentStep].code;
        let i = 0;

        const typeInterval = setInterval(() => {
            if (i < code.length) {
                setDisplayedCode(code.slice(0, i + 1));
                i++;
            } else if(delayRef.current < 0) {
                delayRef.current = 150;
            } else if(delayRef.current > 0) {
                delayRef.current--;
            } else {
                setCurrentStep((prev) => (prev + 1) % steps.length);
                clearInterval(typeInterval);
            }
        }, 15);

        return () => clearInterval(typeInterval);
    }, [currentStep]);

    return (
        <div className="container mx-auto">
            <motion.div
                className="max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Card className="overflow-hidden bg-card/50 border-border backdrop-blur-sm relative shadow-2xl">
                    {/* Pipeline Header */}
                    <CardHeader className="bg-muted/30 border-y border-border p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="flex space-x-2">
                                    <div className="size-3 bg-destructive rounded-full shadow-sm" />
                                    <div className="size-3 bg-accent rounded-full shadow-sm" />
                                    <div className="size-3 bg-chart-5 rounded-full shadow-sm" />
                                </div>
                                <Terminal className="size-4 text-muted-foreground" />
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-center space-x-1"
                                >
                                    {React.createElement(steps[currentStep].icon, {
                                        className: `size-4`
                                    })}
                                    <span className="text-sm font-medium text-foreground">
                                        {steps[currentStep].title}
                                    </span>
                                    <span className="text-sm text-muted-foreground ml-1">
                                        ({steps[currentStep].description})
                                    </span>
                                </motion.div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Badge variant="secondary" className="text-xs">
                                    Step {currentStep + 1}/8
                                </Badge>
                                <motion.div
                                    className={`size-2 rounded-full bg-chart-5 shadow-sm`}
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 2.5, repeat: Infinity }}
                                />
                            </div>
                    </CardHeader>

                    {/* Code Content */}
                    <CardContent className="p-0 bg-gradient-to-br from-card to-card/80">
                        <div className="relative">

                            {/* Syntax Highlighted Code */}
                            <div className="relative min-h-72 overflow-hidden">
                                <ThemeSyntax
                                    displayedCode={displayedCode}
                                    dark={oneDark}
                                    light={oneLight}
                                    theme={theme || "light"}
                                />
                            </div>

                            {/* Code Footer */}
                            <div className="px-4 py-2 bg-muted/10 border-y border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                                <span>AlgoForge Pipeline</span>
                                <span className="font-mono">{displayedCode.split('\n').length} lines</span>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="p-4 space-y-2 bg-muted/5 border-b border-border/50">
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>Creation Progress</span>
                                <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                            </div>
                            <Progress
                                value={((currentStep + 1) / steps.length) * 100}
                                className="h-2 bg-muted/50"
                            />
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}; 