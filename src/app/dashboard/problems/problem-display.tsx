"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CircleCheck, Trash2, ArrowRight, Plus } from "lucide-react"
import { deleteProblem, createNewProblem } from "@/app/actions/serverActions"
import { useRouter } from "next/navigation"

export function ProblemDisplay({ problems }: { problems: any[] }) {
    const router = useRouter()

    const getStepName = (step: number) => {
        const steps = [
            "Start",
            "Vibe Extraction",
            "Theme Ideation",
            "Logline Expansion",
            "Narrative Generation",
            "Problem Formalization",
            "Solution Formation",
            "Algorithm Specification",
            "Finalization"
        ]
        return steps[step] || "Unknown Step"
    }

    return (
        <div className="flex flex-col gap-6">
            {problems.map(problem => {
                const problemData = problem
                const problemId = problem.id
                const vibeProfile = problemData.vibeProfile ? problemData.vibeProfile.vibeProfile : null;
                const logline = problemData.selectedLogline ? problemData.selectedLogline : null;

                return (
                    <Card key={problemId} className="border-2 border-border hover:border-primary/50 transition-all">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg">{problemData.title}</CardTitle>
                                    <CardDescription>
                                        Last updated: {new Date(problemData.updatedAt).toLocaleDateString()}
                                    </CardDescription>
                                </div>
                                {problemData.isCompleted && <Badge variant="accent">
                                    <CircleCheck className="size-5" />
                                    Completed
                                </Badge>}
                            </div>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-sm text-foreground">Current Step</h4>
                                    {problemData.isCompleted ?
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Completed
                                        </p> :
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {getStepName(problemData.currentStep)}
                                            {` (${problemData.currentStep} of 8)`}
                                        </p>
                                    }
                                </div>
                                <div>
                                    <h4 className="font-medium text-sm text-foreground">Vibe</h4>
                                    <p className="text-sm text-muted-foreground mt-1">{vibeProfile ? vibeProfile.vibe_name : "None"}</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-sm text-foreground">Theme</h4>
                                    <p className="text-sm text-muted-foreground mt-1">{problemData.theme || "None"}</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-sm text-foreground">Logline</h4>
                                    <p className="line-clamp-3 text-sm text-muted-foreground mt-1 italic">
                                        {logline ? `"${logline.logline_sentence}"` : "None"}
                                    </p>
                                </div>
                                <div className="flex justify-end items-center gap-2">
                                    <Button
                                        variant="destructive"
                                        size="icon"
                                        onClick={() => deleteProblem(problemId)}
                                    >
                                        <Trash2 className="size-4" />
                                    </Button>
                                    <Button
                                        variant="default"
                                        className="cursor-pointer"
                                        onClick={() => {
                                            if(problemData.isCompleted) {
                                                router.push(`/create/${problemId}/finalization`)
                                                return;
                                            }
                                            router.push(`/create/${problemId}/${getStepName(problemData.currentStep).replace(" ", "-").toLowerCase()}`)
                                        }}
                                    >
                                        {problemData.isCompleted ? "View" : "Continue"}
                                        <ArrowRight className="size-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
            <Card className="border-2 border-dashed border-muted-foreground/30 hover:border-primary/50 transition-all bg-muted/20">
                <CardContent className="flex flex-col items-center justify-center h-full min-h-[300px] p-6">
                    <div className="text-center space-y-4">
                        <div className="size-16 rounded-full bg-primary/60 dark:bg-primary/20 flex items-center justify-center mx-auto">
                            <Plus className="size-8 text-card dark:text-primary" />
                        </div>
                        <CardTitle className="text-lg mb-2">Create New Problem</CardTitle>
                        <CardDescription className="text-sm">
                            Forge a new algorithmic problem from scratch.
                        </CardDescription>
                        <Button
                            onClick={async () => {
                                const newProblem = await createNewProblem();
                                router.push(`/create/${newProblem.id}/}`);
                            }}
                            className="mt-4"
                        >
                            <Plus className="size-4" />
                            Create Problem
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
