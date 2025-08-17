"use client"

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, Loader2, Wand2, BookOpen, Network, Quote, Zap, ChevronRight, ChevronLeft, Plus, X } from "lucide-react";
import { updateProblem } from "@/app/actions/serverActions";

type Subtask = {
    points: number;
    description: string;
    constraints: string;
    intendedSolution: string;
};

type ExampleTestcase = {
    input: string;
    output: string;
    explanation: string;
};

type FormalizedProblem = {
    problemTitle: string;
    problemStatement: string;
    constraints: string;
    inputFormat: string;
    outputFormat: string;
    subtasks: Subtask[];
    exampleTestcases: ExampleTestcase[];
    notes?: string;
};

export default function ProblemFormalizationClient({
    problemId,
    vibe,
    narrative,
    proposal,
    existingFormalization,
}: {
    problemId: string;
    vibe: any;
    narrative: string;
    proposal: any;
    existingFormalization: FormalizedProblem | null;
}) {
    const router = useRouter();
    const [formalization, setFormalization] = useState<FormalizedProblem>(existingFormalization || {
        problemTitle: "",
        problemStatement: "",
        constraints: "",
        inputFormat: "",
        outputFormat: "",
        subtasks: [],
        exampleTestcases: [],
        notes: ""
    });
    const [isRouting, setIsRouting] = useState(false);
    const [currentSubtaskIdx, setCurrentSubtaskIdx] = useState(0);
    const [currentExampleIdx, setCurrentExampleIdx] = useState(0);

    const generateMutation = useMutation({
        mutationFn: async () => {
            const vibePayload = vibe?.vibeProfile ?? vibe ?? null;
            const res = await fetch("/api/ai/problem-formalization", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ narrative, problem: proposal, vibe: vibePayload }),
            });

            if (!res.ok) throw new Error("Problem formalization failed");

            return res.json() as Promise<FormalizedProblem>;
        },
        onSuccess: (data) => setFormalization(data),
    });

    const saveMutation = useMutation({
        mutationFn: () => updateProblem(problemId, { formalizedProblem: formalization, currentStep: 7 }),
        onSuccess: () => {
            setIsRouting(true);
            router.push(`/create/${problemId}/solution-formation`);
        },
    });

    console.log(currentSubtaskIdx, formalization?.subtasks)

    useEffect(() => {
        if (!formalization?.subtasks.length) return;
        if (currentSubtaskIdx >= formalization?.subtasks.length)
            setCurrentSubtaskIdx(i => i - 1)
    }, [formalization?.subtasks.length])

    useEffect(() => {
        if (!formalization?.exampleTestcases.length) return;
        if (currentExampleIdx >= formalization?.exampleTestcases.length)
            setCurrentExampleIdx(i => i - 1)
    }, [formalization?.exampleTestcases.length])

    return (
        <Card className="w-full max-w-5xl mx-auto">
            <CardHeader className="flex justify-between">
                <div className="grid gap-1.5">
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="size-5" />
                        Problem Formalization
                    </CardTitle>
                    <CardDescription>
                        Turn narrative and proposal into a full problem statement.
                    </CardDescription>
                </div>
                <div className="flex flex-col gap-2 items-end">
                    <Badge variant="secondary" className="flex items-center gap-1">
                        <Zap className="size-3" />
                        <p className="truncate max-w-108">{"Vibe: " + vibe?.vibeProfile?.vibe_name || "No vibe selected"}</p>
                    </Badge>
                    <Badge variant="accent" className="flex items-center gap-1">
                        <BookOpen className="size-3" />
                        <p className="truncate max-w-108">Narrative: {narrative}</p>
                    </Badge>
                    <Badge variant="default" className="flex items-center gap-1">
                        <Network className="size-3" />
                        <p className="truncate max-w-108">Proposal: {proposal.coreAlgorithm}</p>
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-6 mt-4">
                <Button
                    onClick={() => generateMutation.mutate()}
                    disabled={generateMutation.isPending || !narrative || !proposal || !vibe?.vibeProfile}
                    className="w-full"
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
                            {formalization ? "Regenerate With AI" : "Generate With AI"}
                        </>
                    )}
                </Button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3 col-span-2">
                        <Label htmlFor="problemTitle">Problem Title</Label>
                        <Input
                            id="problemTitle"
                            value={formalization?.problemTitle}
                            onChange={(e) =>
                                setFormalization((p) => ({ ...p, problemTitle: e.target.value }))
                            }
                        />
                    </div>
                    <div className="space-y-3 col-span-2">
                        <Label htmlFor="problemStatement">Problem Statement (Markdown)</Label>
                        <Textarea
                            id="problemStatement"
                            rows={12}
                            value={formalization?.problemStatement}
                            onChange={(e) =>
                                setFormalization((p) => ({ ...p, problemStatement: e.target.value }))
                            }
                        />
                    </div>
                    <div className="space-y-3">
                        <Label htmlFor="inputFormat">Input Format (Markdown)</Label>
                        <Textarea
                            id="inputFormat"
                            rows={6}
                            value={formalization?.inputFormat}
                            onChange={(e) =>
                                setFormalization((p) => ({ ...p, inputFormat: e.target.value }))
                            }
                        />
                    </div>
                    <div className="space-y-3">
                        <Label htmlFor="outputFormat">Output Format (Markdown)</Label>
                        <Textarea
                            id="outputFormat"
                            rows={6}
                            value={formalization?.outputFormat}
                            onChange={(e) =>
                                setFormalization((p) => ({ ...p, outputFormat: e.target.value }))
                            }
                        />
                    </div>
                    <div className="space-y-3">
                        <Label htmlFor="constraints">Constraints (Markdown)</Label>
                        <Textarea
                            id="constraints"
                            rows={6}
                            value={formalization?.constraints}
                            onChange={(e) =>
                                setFormalization((p) => ({ ...p, constraints: e.target.value }))
                            }
                        />
                    </div>
                    <div className="space-y-3">
                        <Label htmlFor="notes">Notes (optional)</Label>
                        <Textarea
                            id="notes"
                            rows={6}
                            value={formalization?.notes || ""}
                            onChange={(e) =>
                                setFormalization((p) => (p ? { ...p, notes: e.target.value } : p))
                            }
                        />
                    </div>
                    <div className="space-y-3 col-span-2">
                        <div className="flex items-center justify-between">
                            <Label>Subtasks</Label>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="default"
                                    onClick={() => setFormalization(f => ({
                                        ...f, subtasks: [...f.subtasks, {
                                            points: 0,
                                            description: "",
                                            constraints: "",
                                            intendedSolution: ""
                                        }]
                                    }))}
                                    className="h-6 text-xs gap-1"
                                >
                                    <Plus className="size-4" />
                                    Add Subtask
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setCurrentSubtaskIdx((i) => i - 1)}
                                    disabled={currentSubtaskIdx <= 0}
                                    className="size-6 p-0"
                                    aria-label="Previous subtask"
                                >
                                    <ChevronLeft className="size-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setCurrentSubtaskIdx((i) => i + 1)}
                                    disabled={currentSubtaskIdx + 1 >= formalization.subtasks.length}
                                    className="size-6 p-0"
                                    aria-label="Next subtask"
                                >
                                    <ChevronRight className="size-4" />
                                </Button>
                            </div>
                        </div>
                        {formalization.subtasks.length === 0 ? (
                            <div className="dark:bg-input/30 bg-transparent rounded-md border border-input placeholder:text-muted-foreground px-3 py-2 text-base shadow-xs disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex justify-center items-center min-h-40">
                                <p className="text-muted-foreground">You currently have no subtasks</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="p-6 border border-input rounded-lg space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-sm font-medium">Subtask {currentSubtaskIdx + 1} of {formalization.subtasks.length}</h4>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => setFormalization(f => ({
                                                ...f,
                                                subtasks: f.subtasks.filter((_, idx) => idx != currentSubtaskIdx
                                                )
                                            }))}
                                            className="h-6 gap-1 text-xs"
                                        >
                                            <X className="size-4" />
                                            Delete
                                        </Button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="points">Points</Label>
                                            <Input
                                                id="points"
                                                type="number"
                                                value={formalization.subtasks[currentSubtaskIdx]?.points || 0}
                                                onChange={(e) => setFormalization(f => ({
                                                    ...f,
                                                    subtasks: f.subtasks.map((subtask, i) =>
                                                        i === currentSubtaskIdx
                                                            ? { ...subtask, points: parseInt(e.target.value) || 0 }
                                                            : subtask
                                                    )
                                                }))}
                                            />
                                        </div>
                                        <div className="space-y-2 md:col-span-4">
                                            <Label htmlFor="constraints">Constraints</Label>
                                            <Input
                                                id="constraints"
                                                value={formalization.subtasks[currentSubtaskIdx]?.constraints}
                                                onChange={(e) => setFormalization(f => ({
                                                    ...f,
                                                    subtasks: f.subtasks.map((subtask, i) =>
                                                        i === currentSubtaskIdx
                                                            ? { ...subtask, constraints: e.target.value }
                                                            : subtask
                                                    )
                                                }))}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            id="description"
                                            value={formalization.subtasks[currentSubtaskIdx]?.description}
                                            onChange={(e) => setFormalization(f => ({
                                                ...f,
                                                subtasks: f.subtasks.map((subtask, i) =>
                                                    i === currentSubtaskIdx
                                                        ? { ...subtask, description: e.target.value }
                                                        : subtask
                                                )
                                            }))}
                                            rows={2}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="intendedSolution">Intended Solution</Label>
                                        <Textarea
                                            id="intendedSolution"
                                            value={formalization.subtasks[currentSubtaskIdx]?.intendedSolution}
                                            onChange={(e) => setFormalization(f => ({
                                                ...f,
                                                subtasks: f.subtasks.map((subtask, i) =>
                                                    i === currentSubtaskIdx
                                                        ? { ...subtask, intendedSolution: e.target.value }
                                                        : subtask
                                                )
                                            }))}
                                            rows={2}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-3 col-span-2">
                        <div className="flex items-center justify-between">
                            <Label>Example Testcases</Label>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="default"
                                    onClick={() => setFormalization(f => ({
                                        ...f, exampleTestcases: [...f.exampleTestcases, {
                                            input: "",
                                            output: "",
                                            explanation: ""
                                        }]
                                    }))}
                                    className="h-6 text-xs gap-1"
                                >
                                    <Plus className="size-4" />
                                    Add Testcase
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setCurrentExampleIdx((i) => i - 1)}
                                    disabled={currentExampleIdx <= 0}
                                    className="size-6 p-0"
                                    aria-label="Previous testcase"
                                >
                                    <ChevronLeft className="size-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setCurrentExampleIdx((i) => i + 1)}
                                    disabled={currentExampleIdx + 1 >= formalization.exampleTestcases.length}
                                    className="size-6 p-0"
                                    aria-label="Next testcase"
                                >
                                    <ChevronRight className="size-4" />
                                </Button>
                            </div>
                        </div>
                        {formalization.exampleTestcases.length === 0 ? (
                            <div className="dark:bg-input/30 bg-transparent rounded-md border border-input placeholder:text-muted-foreground px-3 py-2 text-base shadow-xs disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex justify-center items-center min-h-40">
                                <p className="text-muted-foreground">You currently have no example testcases</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="p-6 border border-input rounded-lg space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-sm font-medium">Testcase {currentExampleIdx + 1} of {formalization.exampleTestcases.length}</h4>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => setFormalization(f => ({
                                                ...f,
                                                exampleTestcases: f.exampleTestcases.filter((_, idx) => idx != currentExampleIdx
                                                )
                                            }))}
                                            className="h-6 gap-1 text-xs"
                                        >
                                            <X className="size-4" />
                                            Delete
                                        </Button>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="testcaseInput">Input</Label>
                                            <Textarea
                                                id="testcaseInput"
                                                value={formalization.exampleTestcases[currentExampleIdx]?.input}
                                                onChange={(e) => setFormalization(f => ({
                                                    ...f,
                                                    exampleTestcases: f.exampleTestcases.map((testcase, i) =>
                                                        i === currentExampleIdx
                                                            ? { ...testcase, input: e.target.value }
                                                            : testcase
                                                    )
                                                }))}
                                                rows={4}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="testcaseOutput">Output</Label>
                                            <Textarea
                                                id="testcaseOutput"
                                                value={formalization.exampleTestcases[currentExampleIdx]?.output}
                                                onChange={(e) => setFormalization(f => ({
                                                    ...f,
                                                    exampleTestcases: f.exampleTestcases.map((testcase, i) =>
                                                        i === currentExampleIdx
                                                            ? { ...testcase, output: e.target.value }
                                                            : testcase
                                                    )
                                                }))}
                                                rows={4}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="testcaseExplanation">Explanation</Label>
                                        <Textarea
                                            id="testcaseExplanation"
                                            value={formalization.exampleTestcases[currentExampleIdx]?.explanation}
                                            onChange={(e) => setFormalization(f => ({
                                                ...f,
                                                exampleTestcases: f.exampleTestcases.map((testcase, i) =>
                                                    i === currentExampleIdx
                                                        ? { ...testcase, explanation: e.target.value }
                                                        : testcase
                                                )
                                            }))}
                                            rows={8}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <Button
                    onClick={() => saveMutation.mutate()}
                    disabled={saveMutation.isPending || isRouting || !formalization.constraints || !formalization.exampleTestcases || !formalization.inputFormat || !formalization.outputFormat || !formalization.problemStatement || !formalization.problemTitle || !formalization.subtasks}
                    className="w-full"
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
            </CardContent>
        </Card>
    );
}


