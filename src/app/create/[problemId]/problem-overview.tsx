'use client'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTransition, useState, ReactNode } from "react"
import { updateProblem, ProblemUpdateData, LoglineData, VibeProfile } from "@/app/actions/serverActions"
import { useParams } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CircleCheck, FileText } from "lucide-react"
import Link from "next/link"
import React from "react"
import { ThemeSyntax } from "@/components/homepage/theme-syntax"
import oneLight from 'react-syntax-highlighter/dist/cjs/styles/prism/one-light';
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark';

const DataSection = ({ title, data, fullWidth = false, code = false }: { title: string, data: any, fullWidth?: boolean, code?: boolean }) => {
    const isEmpty = data === null || data === undefined || (Array.isArray(data) && data.length === 0);

    return (
        <div className={fullWidth ? "col-span-2" : ""}>
            <h4 className="font-medium text-sm text-foreground">{title}</h4>
            <div className={`mt-1 ${code ? "max-h-80" : "max-h-40"} overflow-y-auto`}>
                {isEmpty ? (
                    <p className="text-sm text-muted-foreground">none</p>
                ) : !code ? (
                    <p className="text-sm text-muted-foreground whitespace-pre-line break-words">{String(data)}</p>
                ) : (
                    <div className="bg-muted rounded-lg text-sm">
                        <ThemeSyntax displayedCode={String(data)} dark={oneDark} light={oneLight} typing={false} />
                    </div>
                )}
            </div>
        </div>
    );
};

const OverviewSection = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Separator className="my-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                {children}
            </div>
        </div>
    );
};


export default function ProblemOverview({
    problem,
}: {
    problem: ProblemUpdateData
}) {
    const [isPending, startTransition] = useTransition()
    const { problemId } = useParams()
    const [title, setTitle] = useState(problem.title || "")

    const handleSave = () => {
        startTransition(async () => {
            await updateProblem(problemId as string, {
                title: title,
            })
        })
    }

    const {
        isCompleted,
        theme,
        vibeProfile,
        selectedLogline,
        narrative,
        selectedAlgorithms,
        problemProposal,
        formalizedProblem,
        solutionCode,
    } = problem;

    return (
        <Card className="w-full max-w-5xl mx-auto">
            <CardHeader className="flex flex-row items-start justify-between">
                <div className="flex flex-col gap-1.5">
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="size-5" />
                        Problem Overview
                    </CardTitle>
                    <CardDescription>A complete summary of the current problem.</CardDescription>
                </div>
                {isCompleted ? (
                    <Badge variant="accent">
                        <CircleCheck className="size-5" />
                        Completed
                    </Badge>
                ) : (
                    <Badge variant="secondary">In Progress</Badge>
                )}
            </CardHeader>
            <CardContent className="space-y-8">
                <div>
                    <Label htmlFor="title" className="text-sm font-medium">Problem Name</Label>
                    <div className="flex items-center gap-2 mt-2">
                        <Input
                            id="title"
                            type="text"
                            placeholder="A name for the problem..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Button onClick={handleSave} size="sm" disabled={isPending}>
                            {isPending ? "Saving..." : "Save"}
                        </Button>
                    </div>
                </div>

                <OverviewSection>
                    <DataSection title="Vibe Profile" data={(vibeProfile as VibeProfile)?.vibeProfile?.vibe_name} />
                    <DataSection title="Theme" data={theme} />
                    <DataSection title="Selected Logline" data={(selectedLogline as LoglineData)?.logline_sentence} fullWidth />
                    <DataSection title="Narrative" data={narrative} fullWidth />
                </OverviewSection>

                <OverviewSection>
                    <DataSection title="Selected Algorithms" data={selectedAlgorithms?.map((a: any) => a.name).join(', ')} fullWidth={true} />
                    <DataSection title="Core Idea" data={problemProposal?.coreConcept} />
                    <DataSection title="Formalized Problem" data={formalizedProblem ?
                        formalizedProblem?.problemTitle + "\n" +
                        formalizedProblem?.subtasks.length + " subtasks\n" +
                        formalizedProblem?.exampleTestcases.length + " testcases"
                        : null
                    } />
                    <DataSection title="Solution Code" data={solutionCode} code fullWidth />
                </OverviewSection>
                <Link href={`/create/${problemId}/vibe-extraction`}>
                    <Button className="w-full">
                        Next
                        <ArrowRight className="size-4" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}
