"use client"

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileCog, Loader2, ScrollText, Code2, FlaskConical } from "lucide-react";
import { updateProblem } from "@/app/actions/serverActions";

export default function SolutionFormationClient({
    problemId,
    fullProblem,
    existingOutline,
    existingSolution,
    existingTestGen,
}: {
    problemId: string;
    fullProblem: any;
    existingOutline: string;
    existingSolution: string;
    existingTestGen: string;
}) {
    const router = useRouter();
    const [outline, setOutline] = useState<string>(existingOutline || "");
    const [solutionCode, setSolutionCode] = useState<string>(existingSolution || "");
    const [testGenerator, setTestGenerator] = useState<string>(existingTestGen || "");
    const [isRouting, setIsRouting] = useState(false);

    const generateOutline = useMutation({
        mutationFn: async () => {
            const res = await fetch("/api/ai/implementation-outline", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullProblem }),
            });

            if (!res.ok) throw new Error("Outline generation failed");

            return res.json() as Promise<{ technicalOutline: string }>;
        },
        onSuccess: (data) => setOutline(data.technicalOutline),
    });

    const generateSolution = useMutation({
        mutationFn: async () => {
            const res = await fetch("/api/ai/solution-formation", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullProblem, technicalOutline: outline }),
            });

            if (!res.ok) throw new Error("Solution generation failed");

            return res.json() as Promise<{ cpp_code: string }>;
        },
        onSuccess: (data) => setSolutionCode(data.cpp_code),
    });

    const generateTests = useMutation({
        mutationFn: async () => {
            const res = await fetch("/api/ai/test-generator", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullProblem }),
            });

            if (!res.ok) throw new Error("Test generator failed");

            return res.json() as Promise<{ python_code: string }>;
        },
        onSuccess: (data) => setTestGenerator(data.python_code),
    });

    const saveMutation = useMutation({
        mutationFn: () =>
            updateProblem(problemId, {
                technicalOutline: outline,
                solutionCode: solutionCode,
                testGenerator: testGenerator,
                currentStep: 8,
            }),
        onSuccess: () => {
            setIsRouting(true);
            router.push(`/create/${problemId}/finalization`);
        },
    });

    return (
        <Card className="w-full max-w-6xl mx-auto">
            <CardHeader className="flex justify-between">
                <div className="grid gap-1.5">
                    <CardTitle className="flex items-center gap-2">
                        <Code2 className="size-5" />
                        Solution Formation
                    </CardTitle>
                    <CardDescription>
                        Create the solution outline, model solution, and test generator.
                    </CardDescription>
                </div>
                <div className="flex flex-col gap-2 items-end">
                    <Badge variant="secondary" className="flex items-center gap-1">
                        <ScrollText className="size-3" />
                        <p className="truncate max-w-108">{"Formalized Problem: " + fullProblem.problemTitle || "No Formalized Problem"}</p>
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-12 mt-6">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="outline">
                            <FileCog className="size-4" />
                            Implementation Outline
                        </Label>
                        <Button
                            onClick={() => generateOutline.mutate()}
                            disabled={generateOutline.isPending || !fullProblem}
                            aria-busy={generateOutline.isPending}
                        >
                            {generateOutline.isPending ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" /> Generating...
                                </>
                            ) : (
                                <>Generate Outline</>
                            )}
                        </Button>
                    </div>
                    <Textarea
                        id="outline"
                        rows={14}
                        className="min-h-60"
                        value={outline}
                        onChange={(e) => setOutline(e.target.value)}
                        placeholder="Outline in markdown..."
                    />
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="solution">
                            <Code2 className="size-4" />
                            C++ Solution
                        </Label>
                        <Button
                            onClick={() => generateSolution.mutate()}
                            disabled={generateSolution.isPending || !fullProblem || !outline.trim()}
                            aria-busy={generateSolution.isPending}
                        >
                            {generateSolution.isPending ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" /> Generating...
                                </>
                            ) : (
                                <>Generate Solution</>
                            )}
                        </Button>
                    </div>
                    <Textarea
                        id="solution"
                        rows={14}
                        className="min-h-60 font-mono"
                        value={solutionCode}
                        onChange={(e) => setSolutionCode(e.target.value)}
                        placeholder="C++ solution..."
                    />
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="testGenerator">
                            <FlaskConical className="size-4" />
                            Python Test Generator
                        </Label>
                        <Button
                            onClick={() => generateTests.mutate()}
                            disabled={generateTests.isPending || !fullProblem}
                            aria-busy={generateTests.isPending}
                        >
                            {generateTests.isPending ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" /> Generating...
                                </>
                            ) : (
                                <>Generate Test Script</>
                            )}
                        </Button>
                    </div>
                    <Textarea
                        id="testGenerator"
                        rows={14}
                        className="min-h-60 font-mono"
                        value={testGenerator}
                        onChange={(e) => setTestGenerator(e.target.value)}
                        placeholder="Python test generator..."
                    />
                </div>

                <Button
                    onClick={() => saveMutation.mutate()}
                    disabled={saveMutation.isPending || isRouting || !solutionCode || !testGenerator || ! outline}
                    className="w-full gap-2"
                    aria-busy={saveMutation.isPending || isRouting}
                >
                    {saveMutation.isPending || isRouting ? (
                        <>
                            <Loader2 className="size-4 animate-spin" /> Saving...
                        </>
                    ) : (
                        <>
                            Next
                            <ArrowRight className="size-4" />
                        </>
                    )}
                </Button>
            </CardContent>
        </Card>
    );
}


