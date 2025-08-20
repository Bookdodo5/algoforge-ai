"use client"

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight, ChevronLeft, ChevronRight, Loader2, Quote, Star, StarOff, Wand2, Zap, Shuffle } from "lucide-react";
import { LoglineData, updateProblem, starLogline, unstarLogline } from "@/app/actions/serverActions";

type StarredLogline = {
    id: string;
    userId: string;
    logline: any
};

const generateLoglines = async (theme: string, vibe: any): Promise<{ loglines: LoglineData[] }> => {
    const response = await fetch("/api/ai/logline-expansion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme, vibe: vibe }),
    });

    if (!response.ok) throw new Error("Logline generation failed");

    return response.json();
};

export default function LoglineExpansionClient({
    problemId,
    theme,
    vibe,
    starredLoglines,
    currentLogline,
}: {
    problemId: string;
    theme: string;
    vibe: any;
    starredLoglines: StarredLogline[];
    currentLogline: LoglineData | null;
}) {
    const router = useRouter();

    const [generatedLoglines, setGeneratedLoglines] = useState<LoglineData[]>([]);
    const [currentGeneratedIndex, setCurrentGeneratedIndex] = useState(0);
    const [starred, setStarred] = useState<StarredLogline[]>(starredLoglines);
    const [currentStarredIndex, setCurrentStarredIndex] = useState(0);
    const [selected, setSelected] = useState<LoglineData>(
        currentLogline ?? {
            protagonist: "",
            goal: "",
            obstacle: "",
            stakes: "",
            logline_sentence: "",
        }
    );
    const [isRouting, setIsRouting] = useState(false);

    const currentStarred = starred[currentStarredIndex] ?? null;
    const currentGenerated = generatedLoglines[currentGeneratedIndex] ?? null;

    useEffect(() => {
        setCurrentStarredIndex((i) => Math.min(i, Math.max(0, starred.length - 1)));
    }, [starred.length]);

    const generateMutation = useMutation({
        mutationFn: () => generateLoglines(theme, vibe),
        onSuccess: (data) => {
            setGeneratedLoglines(data.loglines);
            setCurrentGeneratedIndex(0);
        },
    });

    const starMutation = useMutation({
        mutationFn: (logline: LoglineData) => starLogline(logline as any),
        onSuccess: (created) => {
            setStarred((prev) => [...prev, created as any]);
        },
    });

    const unstarMutation = useMutation({
        mutationFn: (id: string) => unstarLogline(id),
        onSuccess: (_res, id) => {
            setStarred((prev) => prev.filter((l) => l.id !== id));
        },
    });

    const saveMutation = useMutation({
        mutationFn: (logline: LoglineData) => updateProblem(problemId, {
            selectedLogline: logline,
            currentStep: 4
        }),
        onSuccess: () => {
            setIsRouting(true);
            router.push(`/create/${problemId}/narrative-generation`);
        },
    });

    const isStarred = (candidate: LoglineData) => {
        return starred.some((s) => {
            return JSON.stringify(JSON.parse(s.logline)) == JSON.stringify(candidate)
        });
    };

    const getStarredId = (candidate: LoglineData) => {
        for (const s of starred) {
            if (JSON.stringify(JSON.parse(s.logline)) == JSON.stringify(candidate))
                return s.id;
        }
        return null;
    };

    const handleToggleStar = (candidate: LoglineData) => {
        if (!isStarred(candidate)) {
            starMutation.mutate(candidate);
            return;
        }
        const starredId = getStarredId(candidate);
        if (starredId) unstarMutation.mutate(starredId);
    };

    return (
        <Card className="w-full max-w-6xl mx-auto">
            <CardHeader className="flex justify-between">
                <div className="grid gap-1.5">
                    <CardTitle className="flex items-center gap-2">
                        <Quote className="size-5" />
                        Logline Expansion
                    </CardTitle>
                    <CardDescription>
                        Generate loglines from your theme and vibe.
                    </CardDescription>
                </div>
                <div className="flex flex-col gap-2 items-end">
                    <Badge variant="secondary" className="flex items-center gap-1">
                        <Zap className="size-3" />
                        <p className="truncate max-w-108">{"Vibe: " + vibe?.vibeProfile?.vibe_name || "No vibe selected"}</p>
                    </Badge>
                    <Badge variant="accent" className="flex items-center gap-1">
                        <Wand2 className="size-3" />
                        <p className="truncate max-w-108">{"Theme: " + theme || "No theme selected"}</p>
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        {/* Starred Loglines */}
                        {starred.length > 0 && (<>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-medium text-sm text-foreground">Starred Loglines</h4>
                                    <div className="flex items-center gap-1">
                                        <span className="text-xs text-muted-foreground">
                                            {currentStarredIndex + 1} of {starred.length}
                                        </span>
                                        <Button
                                            variant="ghost"
                                            onClick={() => setCurrentStarredIndex((i) => i - 1)}
                                            disabled={currentStarredIndex === 0}
                                            className="size-6 p-0"
                                            aria-label="Previous starred logline"
                                        >
                                            <ChevronLeft className="size-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            onClick={() => setCurrentStarredIndex((i) => i + 1)}
                                            disabled={currentStarredIndex + 1 >= starred.length}
                                            className="size-6 p-0"
                                            aria-label="Next starred logline"
                                        >
                                            <ChevronRight className="size-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div
                                    className={`border border-border bg-muted/20 rounded-md transition-all cursor-pointer ${isStarred(selected) && getStarredId(selected) === currentStarred?.id ? "ring-primary ring-2" : ""}`}
                                >
                                    <div
                                        onClick={() => {
                                            setSelected(JSON.parse(currentStarred.logline));
                                        }}
                                        className="cursor-pointer text-sm p-3 flex items-start gap-2"
                                    >
                                        <Star className="w-3 h-6 py-1.5 text-primary fill-primary" />
                                        <div className="flex-1">
                                            <p className="italic leading-relaxed">
                                                "{JSON.parse(currentStarred.logline).logline_sentence}"
                                            </p>
                                        </div>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    className="size-6"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        unstarMutation.mutate(currentStarred.id);
                                                    }}
                                                    aria-label="Unstar logline"
                                                >
                                                    <StarOff className="size-3" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent side="top">Unstar</TooltipContent>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                            <Separator />
                        </>
                        )}


                        {/* Generated Loglines */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h4 className="font-medium text-sm text-foreground">AI-Generated Loglines</h4>
                                {generatedLoglines.length > 0 && currentGenerated && (
                                    <div className="flex items-center gap-1">
                                        <span className="text-xs text-muted-foreground">{currentGeneratedIndex + 1} of {generatedLoglines.length}</span>
                                        <Button
                                            variant="ghost"
                                            onClick={() => setCurrentGeneratedIndex((i) => i - 1)}
                                            disabled={currentGeneratedIndex === 0}
                                            className="size-6 p-0"
                                            aria-label="Previous generated logline"
                                        >
                                            <ChevronLeft className="size-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            onClick={() => setCurrentGeneratedIndex((i) => i + 1)}
                                            disabled={currentGeneratedIndex + 1 >= generatedLoglines.length}
                                            className="size-6 p-0"
                                            aria-label="Next generated logline"
                                        >
                                            <ChevronRight className="size-4" />
                                        </Button>
                                    </div>
                                )}
                            </div>

                            {generatedLoglines.length > 0 && currentGenerated && (
                                <div
                                    className={`border border-border/70 bg-muted/20 rounded-md transition-colors cursor-pointer ${selected.logline_sentence === currentGenerated.logline_sentence ? "ring-primary ring-2" : ""}`}
                                >
                                    <div
                                        onClick={() => setSelected(currentGenerated)}
                                        className="cursor-pointer text-sm p-3 flex items-start gap-2"
                                    >
                                        <Quote className="w-3 h-6 py-1.5 text-muted-foreground" />
                                        <p className="italic leading-relaxed flex-1">"{currentGenerated.logline_sentence}"</p>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    className="size-6"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleToggleStar(currentGenerated);
                                                    }}
                                                    aria-label={isStarred(currentGenerated) ? "Unstar logline" : "Star logline"}
                                                >
                                                    {isStarred(currentGenerated) ? (
                                                        <StarOff className="size-3" />
                                                    ) : (
                                                        <Star className="size-3" />
                                                    )}
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent side="top">{isStarred(currentGenerated) ? "Unstar" : "Star"}</TooltipContent>
                                        </Tooltip>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Button
                            onClick={() => generateMutation.mutate()}
                            disabled={generateMutation.isPending || !theme || !vibe?.vibeProfile?.vibe_name}
                            className="w-full"
                            aria-busy={generateMutation.isPending}
                        >
                            {generateMutation.isPending ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" />
                                    Generating...
                                </>
                            ) : generatedLoglines.length === 0 ? (
                                <>
                                    <Wand2 className="size-4" />
                                    Generate Loglines With AI
                                </>
                            ) : (
                                <>
                                    <Shuffle className="size-4" />
                                    Regenerate Loglines With AI
                                </>
                            )}
                        </Button>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-sm font-medium text-foreground">Selected Logline</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <Label htmlFor="protagonist">Protagonist</Label>
                                <Input
                                    id="protagonist"
                                    value={selected.protagonist}
                                    onChange={(e) => setSelected((p) => ({ ...p, protagonist: e.target.value }))}
                                    placeholder="Who is the main character?"
                                />
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="goal">Goal</Label>
                                <Input
                                    id="goal"
                                    value={selected.goal}
                                    onChange={(e) => setSelected((p) => ({ ...p, goal: e.target.value }))}
                                    placeholder="What do they want to achieve?"
                                />
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="obstacle">Obstacle</Label>
                                <Input
                                    id="obstacle"
                                    value={selected.obstacle}
                                    onChange={(e) => setSelected((p) => ({ ...p, obstacle: e.target.value }))}
                                    placeholder="What stands in their way?"
                                />
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="stakes">Stake</Label>
                                <Input
                                    id="stakes"
                                    value={selected.stakes || ""}
                                    onChange={(e) => setSelected((p) => ({ ...p, stakes: e.target.value }))}
                                    placeholder="What's at risk?"
                                />
                            </div>
                            <div className="space-y-3 col-span-2">
                                <Label htmlFor="logline_sentence">Logline Sentence</Label>
                                <Textarea
                                    id="logline_sentence"
                                    value={selected.logline_sentence}
                                    onChange={(e) => setSelected((p) => ({ ...p, logline_sentence: e.target.value }))}
                                    placeholder="Write the complete logline sentence..."
                                    rows={4}
                                    className="min-h-32"
                                />
                            </div>
                        </div>
                        <Button
                            onClick={() => saveMutation.mutate(selected)}
                            disabled={!(selected.protagonist && selected.goal && selected.obstacle && selected.stakes && selected.logline_sentence) || saveMutation.isPending || isRouting}
                            className="w-full gap-2"
                            aria-busy={saveMutation.isPending || isRouting}
                        >
                            {saveMutation.isPending || isRouting ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    Next
                                    <ArrowRight className="size-4" />
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}


