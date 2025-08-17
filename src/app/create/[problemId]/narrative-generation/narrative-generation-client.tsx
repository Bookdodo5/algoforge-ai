"use client"

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Loader2, Quote, Wand2, Zap } from "lucide-react";
import { LoglineData, VibeProfile, updateProblem } from "@/app/actions/serverActions";

export default function NarrativeGenerationClient({
    problemId,
    theme,
    vibe,
    logline,
    narrative: initialNarrative,
}: {
    problemId: string;
    theme: string;
    vibe: VibeProfile;
    logline: LoglineData | null;
    narrative: string;
}) {
    const router = useRouter();
    const [narrative, setNarrative] = useState<string>(initialNarrative || "");
    const [isRouting, setIsRouting] = useState(false);

    const generateMutation = useMutation({
        mutationFn: async () => {
            const response = await fetch("/api/ai/narrative-generation", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    logline: logline,
                    vibe: vibe,
                    priorText: narrative ? narrative : undefined,
                }),
            });

            if (!response.ok) throw new Error("Narrative generation failed");

            return response.json() as Promise<{ narrative: string }>;
        },
        onSuccess: (data) => {
            setNarrative((prev) => (prev ? prev + "\n\n" : "") + data.narrative);
        },
    });

    const saveMutation = useMutation({
        mutationFn: (n: string) => updateProblem(problemId,
            {
                narrative: n,
                currentStep: 5
            }),
        onSuccess: () => {
            setIsRouting(true);
            router.push(`/create/${problemId}/algorithm-specification`);
        },
    });

    console.log(vibe,theme,logline)

    return (
        <Card className="w-full max-w-5xl mx-auto">
            <CardHeader className="flex justify-between">
                <div className="grid gap-1.5">
                    <CardTitle className="flex items-center gap-2">
                        <BookOpen className="size-5" />
                        Narrative Generation
                    </CardTitle>
                    <CardDescription>
                        Craft the main story / narrative for the base of your problem.
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
                    <Badge variant="default" className="flex items-center gap-1">
                        <Quote className="size-3" />
                        <p className="truncate max-w-108">{"Logline: " + logline?.logline_sentence || "No logline selected"}</p>
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-3">
                    <Label htmlFor="narrative">Narrative</Label>
                    <Textarea
                        id="narrative"
                        value={narrative}
                        onChange={(e) => setNarrative(e.target.value)}
                        placeholder="Generate to draft the narrative, or write your own..."
                        rows={14}
                        className="min-h-60"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button
                        onClick={() => generateMutation.mutate()}
                        disabled={generateMutation.isPending || !logline || !vibe}
                        className="w-full gap-2"
                        aria-busy={generateMutation.isPending}
                    >
                        {generateMutation.isPending ? (
                            <>
                                <Loader2 className="size-4 animate-spin" />
                                Generating...
                            </>
                        ) : (
                            <>
                                <Wand2 className="size-4" />
                                {narrative ? "Continue Narrative With AI" : "Generate Narrative With AI"}
                            </>
                        )}
                    </Button>

                    <Button
                        onClick={() => saveMutation.mutate(narrative)}
                        disabled={!narrative.trim() || saveMutation.isPending || isRouting}
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
            </CardContent>
        </Card>
    );
}


