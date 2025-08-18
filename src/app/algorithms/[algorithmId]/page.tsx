"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ALGORITHM_LIBRARY } from "@/lib/algorithms"
import { ArrowLeft, Cpu, BookOpen, List, Crosshair, Info } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const diffColorMap = {
    "Beginner": "default",
    "Intermediate": "secondary",
    "Advanced": "accent",
    "Expert": "destructive"
}

export default function AlgorithmDetailPage() {
    const { algorithmId } = useParams();

    const algorithm = ALGORITHM_LIBRARY.find(algo => algo.id === algorithmId);

    if (!algorithm) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center">
                <Cpu className="size-16 text-muted-foreground mx-auto mb-2" />
                <h1 className="text-3xl font-bold mb-2">Algorithm Not Found</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    The algorithm "{algorithmId}" doesn't exist in our library...
                </p>
                <Link href="/algorithms">
                    <Button variant="ghost" className="flex items-center gap-2 cursor-pointer">
                        <ArrowLeft className="size-4" />
                        Back to Algorithms
                    </Button>
                </Link>
            </div>
        );
    }

    const relatedAlgorithms = ALGORITHM_LIBRARY.filter(algo =>
        algo.id !== algorithmId &&
        (algo.category === algorithm.category)
    ).sort((a, b) => {
        const aSameLevel = a.level === algorithm.level;
        const bSameLevel = b.level === algorithm.level;

        if (aSameLevel && !bSameLevel) return -1;
        if (!aSameLevel && bSameLevel) return 1;
        return 0;
    }).slice(0, 6);

    return (
        <div className="min-h-screen bg-background p-36 pb-16 flex flex-col">
            {/* Header with back button */}
            <div className="mb-4">
                <Link href="/algorithms">
                    <Button variant="ghost" className="flex items-center gap-2 mb-4 cursor-pointer">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Algorithms
                    </Button>
                </Link>
            </div>

            {/* Main algorithm card */}
            <Card className="mb-12">
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Cpu className="w-8 h-8 text-primary" />
                            {algorithm.name}
                        </div>
                        <Badge
                            variant={diffColorMap[algorithm.level] as any || "primary"}
                            className="text-sm px-3 py-1"
                        >
                            {algorithm.level}
                        </Badge>
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                        {algorithm.category}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">
                        {algorithm.description}
                    </p>

                    {/* AI Description */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-muted/50 rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Info className="w-4 h-4 text-primary" />
                                <h3 className="font-semibold">Description</h3>
                            </div>
                            <p className="text-sm leading-relaxed">
                                {algorithm.aiDescription}
                            </p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Crosshair className="w-4 h-4 text-primary" />
                                <h3 className="font-semibold">Problem's Key Quality</h3>
                            </div>
                            <p className="text-sm leading-relaxed">
                                {algorithm.aiKeyQuality.split("**")[0]}
                            </p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <List className="w-4 h-4 text-primary" />
                                <h3 className="font-semibold">Use Cases</h3>
                            </div>
                            <p className="text-sm leading-relaxed">
                                {algorithm.aiUseCases}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Related Algorithms */}
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Related Algorithms
            </h2>
            {relatedAlgorithms.length === 0 ?
                <div className="text-center text-muted-foreground mt-4">
                    No related algorithms found.
                </div>
                : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {relatedAlgorithms.map((relatedAlgo) => (
                            <Link key={relatedAlgo.id} href={`/algorithms/${relatedAlgo.id}`}>
                                <Card className="border-border hover:border-primary/50 border-2 transition-colors cursor-pointer">
                                    <CardHeader>
                                        <CardTitle className="text-md flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Cpu className="w-4 h-4 text-primary" />
                                                {relatedAlgo.name}
                                            </div>
                                            <Badge
                                                variant={diffColorMap[relatedAlgo.level] as any || "primary"}
                                                className="w-fit"
                                            >
                                                {relatedAlgo.level}
                                            </Badge>
                                        </CardTitle>
                                        <CardDescription className="">
                                            {relatedAlgo.category}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm">{relatedAlgo.description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}
        </div>
    );
}