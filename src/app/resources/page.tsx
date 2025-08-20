import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code, ExternalLink, FileText, Book } from "lucide-react";
import React from 'react';
import ContentAnimator from "@/components/content-animator";

const ResourcesPage = () => {
    const externalResources = [
        {
            title: "Programming Practice Platforms",
            description: "Get inspired by challenges in existing platforms.",
            icon: Code,
            color: "text-accent",
            bgColor: "bg-accent/20",
            resources: [
                {
                    name: "HackerRank",
                    href: "https://hackerrank.com",
                    description: "Monthly competitions, interview prep kits, real-world projects, and skill assessments across multiple domains"
                },
                {
                    name: "ICPC",
                    href: "https://icpc.global",
                    description: "International Collegiate Programming Contest with team-based competitions from local to world finals"
                },
                {
                    name: "CodeChef",
                    href: "https://codechef.com",
                    description: "10-day Long Challenge, monthly Cook-Off, Lunchtime contests, and comprehensive tutorials"
                },
                {
                    name: "LeetCode",
                    href: "https://leetcode.com",
                    description: "Weekly/biweekly contests, extensive interview preparation, company-sponsored contests, and discussion forums"
                },
                {
                    name: "Codeforces",
                    href: "https://codeforces.com",
                    description: "6 contests monthly, unique hacking phase, educational contests, and extensive problem archives"
                },
                {
                    name: "AtCoder",
                    href: "https://atcoder.jp",
                    description: "Japanese platform with ABC (beginner), ARC (regular), AGC (advanced) contests and heuristic challenges"
                }
            ]
        },
        {
            title: "Educational Resources",
            description: "Learn fundamental algorithms and data structures",
            icon: Book,
            color: "text-chart-4",
            bgColor: "bg-chart-4/20",
            resources: [
                {
                    name: "USACO Guide",
                    href: "https://usaco.guide",
                    description: "Most exhaustive CP resource with topic explanations and practice problems in structured order"
                },
                {
                    name: "CP-Algorithms",
                    href: "https://cp-algorithms.com",
                    description: "Well-written articles on Data Structures and Algorithms with practice problem links"
                },
                {
                    name: "Codeforces Catalog",
                    href: "https://codeforces.com/catalog",
                    description: "Curated collection of useful blogs, tutorials, and editorials from the CP community"
                },
                {
                    name: "GeeksforGeeks",
                    href: "https://geeksforgeeks.org",
                    description: "Comprehensive tutorials on algorithms, data structures, and programming"
                },
                {
                    name: "Visualgo",
                    href: "https://visualgo.net",
                    description: "Interactive algorithm and data structure visualizations"
                }
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-background p-36 pb-16 flex flex-col">
            {/* Header */}
            <ContentAnimator>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        External <span className="text-primary">Algorithmic Resources</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Resources for learning / finding inspirations, and more...
                    </p>
                </div>
            </ContentAnimator>

            {/* Resource Categories */}
            <ContentAnimator delay={0.2}>
                <div className="grid md:grid-cols-2 gap-12 mb-8">
                    {externalResources.map((category, index) => (
                        <Card key={index} className="border-border hover:border-primary/50 border-2 transition-colors">
                            <CardHeader>
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className={`p-2 ${category.bgColor} rounded-lg`}>
                                        <category.icon className={`size-4 ${category.color}`} />
                                    </div>
                                    <CardTitle className="text-xl">{category.title}</CardTitle>
                                </div>
                                <CardDescription>
                                    {category.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {category.resources.map((resource, resourceIndex) => (
                                    <div key={resourceIndex}>
                                        <a
                                            href={resource.href}
                                            target="_blank"
                                            className="flex items-start justify-between mt-2 p-2 rounded-lg hover:bg-primary/5 transition-colors group"
                                        >
                                            <div className="flex flex-col items-start flex-1 p-1">
                                                <div className="flex items-center space-x-4">
                                                    <FileText className="size-4 text-muted-foreground group-hover:text-primary" />
                                                    <p className="font-medium group-hover:text-primary transition-colors">
                                                        {resource.name}
                                                    </p>
                                                </div>
                                                <p className="max-w-7/8 text-sm text-muted-foreground mt-1 ml-8">
                                                    {resource.description}
                                                </p>
                                            </div>
                                            <ExternalLink className="size-4 text-primary opacity-0 group-hover:opacity-100 transition-all" />
                                        </a>
                                        {resourceIndex < category.resources.length - 1 && (
                                            <Separator className="my-2" />
                                        )}
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </ContentAnimator>
        </div>
    );
};

export default ResourcesPage; 