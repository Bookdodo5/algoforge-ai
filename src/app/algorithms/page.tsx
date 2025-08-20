"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ALGORITHM_LIBRARY } from "@/lib/algorithms";
import React, { useState } from 'react';
import { Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContentAnimator from "@/components/content-animator";

const diffColorMap = {
    "Beginner": "default",
    "Intermediate": "secondary",
    "Advanced": "accent",
    "Expert": "destructive"
}

const AlgorithmsPage = () => {

    const [diffFilter, setDiffFilter] = useState<string>("All");
    const [tagFilter, setTagFilter] = useState<string>("All");
    const [searchFilter, setSearchFilter] = useState<string>("");

    const filteredAlgorithms = ALGORITHM_LIBRARY.filter((algo) => {
        const matchesDiff = diffFilter === "All" || algo.level === diffFilter;
        const matchesTag = tagFilter === "All" || algo.category === tagFilter;
        const matchesSearch = searchFilter === "" || algo.name.toLowerCase().includes(searchFilter.toLowerCase());
        return matchesDiff && matchesTag && matchesSearch;
    });

    const difficultyList = [...new Set(ALGORITHM_LIBRARY.map((algo) => algo.level))];
    const tagList = [...new Set(ALGORITHM_LIBRARY.map((algo) => algo.category))];

    const difficultyOptions = ["All", ...difficultyList].map((difficulty) => {
        return (
            <Button
                key={difficulty}
                size="sm"
                variant={diffFilter === difficulty ? "default" : "outline"}
                onClick={() => setDiffFilter(difficulty)}
            >
                {difficulty}
            </Button>
        )
    });

    const tagOptions = ["All", ...tagList].map((tag) => {
        return (
            <Button
                key={tag}
                size="sm"
                variant={tagFilter === tag ? "default" : "outline"}
                onClick={() => setTagFilter(tag)}
            >
                {tag}
            </Button>
        )
    });

    return (
        <div className="min-h-screen bg-background p-36 pb-16 flex flex-col">
            {/* Header */}
            <ContentAnimator>
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-primary">Algorithm</span> Library
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        A curated library of algorithms and data structures the AI can suggest from.
                    </p>
                </div>
            </ContentAnimator>

            <ContentAnimator delay={0.2}>
                <Input
                    placeholder="Search"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    className="max-w-1/2 min-w-80 mx-auto mb-8"
                />
            </ContentAnimator>

            <ContentAnimator delay={0.4}>
                <div className="flex items-center gap-2 mb-4">
                    <p className="text-sm text-muted-foreground mr-4">Difficulty</p>
                    {difficultyOptions}
                </div>
                <div className="flex items-center gap-2 mb-8">
                    <p className="text-sm text-muted-foreground mr-4">Tag</p>
                    {tagOptions}
                </div>
            </ContentAnimator>

            <ContentAnimator delay={0.6}>
                <div className="grid grid-cols-3 gap-6">
                    {
                        filteredAlgorithms.length === 0 ? (
                            <div className="col-span-3 text-center text-muted-foreground h-2 justify-center flex items-center">
                                No algorithms found.
                            </div>
                        ) :
                            filteredAlgorithms.map((algo) => {
                                return (
                                    <Link key={algo.id} href={`/algorithms/${algo.id}`}>
                                        <Card className="border-border hover:border-primary/50 border-2 transition-colors cursor-pointer">
                                            <CardHeader>
                                                <CardTitle className="text-md flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <Cpu className="w-4 h-4 text-primary" />
                                                        {algo.name}
                                                    </div>
                                                    <Badge
                                                        variant={diffColorMap[algo.level] as any || "primary"}
                                                        className="w-fit"
                                                    >
                                                        {algo.level}
                                                    </Badge>
                                                </CardTitle>
                                                <CardDescription className="">
                                                    {algo.category}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm">{algo.description}</p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                )
                            })
                    }
                </div>
            </ContentAnimator>
        </div>
    );
};

export default AlgorithmsPage; 