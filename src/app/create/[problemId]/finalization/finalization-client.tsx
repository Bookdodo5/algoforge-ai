"use client"

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, FileText, Code2, FlaskConical, Loader2, Download, AlertCircle } from "lucide-react";
import { ProblemUpdateData, updateProblem } from "@/app/actions/serverActions";
import { ThemeSyntax } from "@/components/homepage/theme-syntax"
import oneLight from 'react-syntax-highlighter/dist/cjs/styles/prism/one-light';
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark';
import ReactMarkdown from 'react-markdown';

export default function FinalizationClient({
    problemId,
    problem,
}: {
    problemId: string;
    problem: ProblemUpdateData;
}) {
    const router = useRouter();

    const ready = problem?.vibeProfile &&
        problem?.theme &&
        problem?.selectedLogline &&
        problem?.narrative &&
        problem?.problemProposal &&
        problem?.formalizedProblem &&
        problem?.technicalOutline &&
        problem?.solutionCode &&
        problem?.testGenerator

    const finalizeMutation = useMutation({
        mutationFn: () =>
            updateProblem(problemId, {
                isCompleted: true,
                currentStep: 9,
            }),
        onSuccess: () => {
            router.push(`/dashboard/problems`);
        },
    });

    const handleDownloadPdf = () => {
        const url = `/api/export/problem-pdf?problemId=${encodeURIComponent(problemId)}`;
        window.open(url, "_blank");
    };

    const handleDownloadZip = () => {
        const url = `/api/export/solution-zip?problemId=${encodeURIComponent(problemId)}`;
        window.open(url, "_blank");
    };

    return (
        <Card className="w-full max-w-5xl mx-auto">
            <CardHeader className="flex justify-between">
                <div className="grid gap-1.5">
                    <CardTitle className="flex items-center gap-2">
                        <CheckCircle2 className="size-5" />
                        Finalization
                    </CardTitle>
                    <CardDescription>Review key outputs and mark the problem as completed.</CardDescription>
                </div>
                <div className="flex flex-col items-end">
                    <Badge variant={ready ? "accent" : "secondary"} className="flex items-center gap-1">
                        {ready ? <CheckCircle2 className="size-3" /> : <AlertCircle className="size-3" />}
                        <p className="truncate max-w-108">
                            {ready ? "All required artifacts present" : "Some artifacts missing"}
                        </p>
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-6 mt-4">
                <div className="space-y-6">
                    <div className="space-y-2 w-full">
                        <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                            <FileText className="size-4" /> Problem : {problem.formalizedProblem.problemTitle ?? "-"}
                        </h4>
                        <div className="text-sm text-muted-foreground max-h-96 overflow-auto whitespace-pre-line">
                            <ReactMarkdown>
                                {problem?.formalizedProblem?.problemStatement ?? "—"}
                            </ReactMarkdown>
                        </div>
                    </div>

                    <div className="space-y-2 w-full">
                        <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                            <Code2 className="size-4" /> C++ Solution
                        </h4>
                        <div className="bg-muted rounded-lg text-sm max-h-96 overflow-y-auto">
                            <ThemeSyntax displayedCode={String(problem?.solutionCode)} dark={oneDark} light={oneLight} typing={false} />
                        </div>
                    </div>

                    <div className="space-y-2 w-full">
                        <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                            <FlaskConical className="size-4" /> Test Generator
                        </h4>
                        <div className="bg-muted rounded-lg text-sm max-h-96 overflow-y-auto">
                            <ThemeSyntax displayedCode={String(problem?.testGenerator)} dark={oneDark} light={oneLight} typing={false} isPython />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <Button onClick={handleDownloadPdf} variant="outline" className="w-full">
                        <Download className="size-4" /> Download PDF
                    </Button>
                    <Button onClick={handleDownloadZip} variant="outline" className="w-full">
                        <Download className="size-4" /> Download Code (.zip)
                    </Button>
                    <Button
                        onClick={() => finalizeMutation.mutate()}
                        disabled={finalizeMutation.isPending || !ready}
                        className="w-full"
                        aria-busy={finalizeMutation.isPending}
                    >
                        {finalizeMutation.isPending ? (
                            <>
                                <Loader2 className="size-4 animate-spin" /> Finalizing...
                            </>
                        ) : (
                            <>
                                Mark as Completed
                                <ArrowRight className="size-4" />
                            </>
                        )}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}


