"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wand2, Loader2, Star, StarOff, Shuffle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { starTheme, unstarTheme, updateProblem } from "@/app/actions/serverActions";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator"

interface StarredTheme {
    id: string;
    userId: string;
    theme: string;
}

// API call for theme generation
const generateThemes = async (): Promise<{ themes: string[] }> => {
    const response = await fetch("/api/ai/theme-ideation", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
        throw new Error("Theme generation failed");
    }

    return response.json();
};

export default function ThemeIdeationClient({
    problemId,
    starredThemes,
    currentTheme
}: {
    problemId: string;
    starredThemes: StarredTheme[];
    currentTheme: string;
}) {
    const router = useRouter();

    const [generatedThemes, setGeneratedThemes] = useState<string[]>([]);
    const [selectedTheme, setSelectedTheme] = useState(currentTheme);
    const [starredThemesList, setStarredThemesList] = useState(starredThemes);
    const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
    const [currentStarredIndex, setCurrentStarredIndex] = useState(0);
    const [isRouting, setIsRouting] = useState(false);

    const currentStarredTheme = starredThemesList[currentStarredIndex] ?? null;
    const currentGeneratedTheme = generatedThemes[currentThemeIndex] ?? null;

    const generateThemesMutation = useMutation({
        mutationFn: generateThemes,
        onSuccess: (data) => {
            setGeneratedThemes(data.themes);
            setCurrentThemeIndex(0);
        },
    });

    const starThemeMutation = useMutation({
        mutationFn: (theme: string) => starTheme(theme),
        onSuccess: (newStarredTheme) => {
            if (!newStarredTheme) return;
            setStarredThemesList(prev => [...prev, newStarredTheme]);
        },
    });

    const unstarThemeMutation = useMutation({
        mutationFn: (starredThemeId: string) => unstarTheme(starredThemeId),
        onSuccess: (_, starredThemeId) => {
            setStarredThemesList(prev => prev.filter(t => t.id !== starredThemeId));
        },
    });

    useEffect(() => {
        setCurrentStarredIndex(i => Math.min(i, Math.max(0, starredThemesList.length - 1)));
    }, [starredThemesList.length]);

    const saveThemeMutation = useMutation({
        mutationFn: (theme: string) => updateProblem(problemId, { theme: theme, currentStep: 3 }),
        onSuccess: () => {
            setIsRouting(true);
            router.push(`/create/${problemId}/logline-expansion`);
        },
    });

    const isThemeStarred = (theme: string) => {
        return starredThemesList.some(starred => starred.theme === theme);
    };

    const getStarredThemeId = (theme: string) => {
        return starredThemesList.find(starred => starred.theme === theme)?.id;
    };

    const handleStarToggle = (theme: string) => {
        if (!isThemeStarred(theme)) {
            starThemeMutation.mutate(theme);
            return;
        }
        const starredId = getStarredThemeId(theme);
        if (starredId) {
            unstarThemeMutation.mutate(starredId);
        }
    };

    const handleNext = () => {
        if (selectedTheme.trim()) {
            saveThemeMutation.mutate(selectedTheme.trim());
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Wand2 className="size-5" />
                    Theme Ideation
                </CardTitle>
                <CardDescription>
                    Generate new themes or pick from your previously starred themes.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">

                {starredThemesList.length > 0 && currentStarredTheme && (
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h4 className="font-medium text-sm text-foreground">Starred Themes</h4>
                            <div className="flex items-center gap-1">
                                <span className="text-xs text-muted-foreground">
                                    {currentStarredIndex + 1} of {starredThemesList.length}
                                </span>
                                <Button
                                    variant="ghost"
                                    onClick={() => setCurrentStarredIndex(currentStarredIndex - 1)}
                                    disabled={currentStarredIndex === 0}
                                    className="size-6 p-0"
                                >
                                    <ChevronLeft className="size-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    onClick={() => setCurrentStarredIndex(currentStarredIndex + 1)}
                                    disabled={currentStarredIndex + 1 >= starredThemesList.length}
                                    className="size-6 p-0"
                                >
                                    <ChevronRight className="size-4" />
                                </Button>
                            </div>
                        </div>
                        <div className={`border border-border bg-muted/20 flex items-center justify-between rounded-md hover:bg-muted transition-all cursor-pointer ${selectedTheme === currentStarredTheme.theme ? "ring-primary ring-2" : ""}`}>
                            <div
                                onClick={() => setSelectedTheme(currentStarredTheme.theme)}
                                className="cursor-pointer text-sm flex-1 flex items-center justify-between p-2 px-3"
                            >
                                <div className="flex items-center gap-2">
                                    <Star className="size-3 text-primary fill-primary" />
                                    <div className="flex-1">
                                        {currentStarredTheme.theme}
                                    </div>
                                </div>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleStarToggle(currentStarredTheme.theme);
                                            }}
                                            className="size-6"
                                            disabled={unstarThemeMutation.isPending}
                                            aria-label="Unstar theme"
                                        >
                                            <StarOff className="size-3" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="top">Unstar</TooltipContent>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                )}

                <Separator className="my-4" />

                <div className="space-y-3">
                    {generatedThemes.length > 0 && currentGeneratedTheme && (
                        <>
                            <div className="flex items-center justify-between">
                                <h4 className="font-medium text-sm text-foreground">AI-Generated Themes</h4>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs text-muted-foreground">
                                        {currentThemeIndex + 1} of {generatedThemes.length}
                                    </span>
                                    <Button
                                        variant="ghost"
                                        onClick={() => setCurrentThemeIndex(currentThemeIndex - 1)}
                                        disabled={currentThemeIndex === 0}
                                        className="size-6 p-0"
                                    >
                                        <ChevronLeft className="size-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        onClick={() => setCurrentThemeIndex(currentThemeIndex + 1)}
                                        disabled={currentThemeIndex + 1 >= generatedThemes.length}
                                        className="size-6 p-0"
                                    >
                                        <ChevronRight className="size-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className={`border border-border/70 bg-muted/20 flex items-center justify-between rounded-md hover:bg-muted transition-colors cursor-pointer ${selectedTheme === currentGeneratedTheme ? "ring-primary ring-2" : ""}`}>
                                <div
                                    onClick={() => setSelectedTheme(currentGeneratedTheme)}
                                    className="cursor-pointer text-sm flex-1 flex items-center justify-between p-2 px-3"
                                >
                                    <div className="flex items-center gap-2">
                                        <Wand2 className="size-3 text-muted-foreground" />
                                        <div className="flex-1">
                                            {currentGeneratedTheme}
                                        </div>
                                    </div>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleStarToggle(currentGeneratedTheme);
                                                }}
                                                className="size-6"
                                                disabled={unstarThemeMutation.isPending}
                                                aria-label={isThemeStarred(currentGeneratedTheme) ? "Unstar theme" : "Star theme"}
                                            >
                                                {
                                                    isThemeStarred(currentGeneratedTheme) ?
                                                        <StarOff className="size-3" /> :
                                                        <Star className="size-3" />
                                                }
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent side="top">
                                            {isThemeStarred(currentGeneratedTheme) ? "Unstar" : "Star Theme"}
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>
                        </>
                    )}

                    <Button
                        onClick={() => generateThemesMutation.mutate()}
                        disabled={generateThemesMutation.isPending}
                        className="w-full"
                    >
                        {generateThemesMutation.isPending ? (
                            <>
                                <Loader2 className="size-4 animate-spin" />
                                Generating...
                            </>
                        ) : (
                            generatedThemes.length === 0 ?
                                <>
                                    <Wand2 className="size-4" />
                                    Generate Themes With AI
                                </> :
                                <>
                                    <Shuffle className="size-4" />
                                    Regenerate Themes With AI
                                </>
                        )}
                    </Button>
                </div>

                <Separator className="my-4" />

                {/* Selected Theme Input */}
                <div className="space-y-3">
                    <Label htmlFor="theme-input" className="text-sm font-medium">Selected Theme</Label>
                    <Input
                        id="theme-input"
                        value={selectedTheme}
                        onChange={(e) => setSelectedTheme(e.target.value)}
                        placeholder="Enter your theme..."
                    />
                </div>
                <Button
                    onClick={handleNext}
                    disabled={!selectedTheme.trim() || saveThemeMutation.isPending || isRouting}
                    className="w-full"
                >
                    {saveThemeMutation.isPending || isRouting ? (
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
            </CardContent>
        </Card >
    );
}
