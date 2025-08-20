import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma";
import { sessionValidation } from "@/app/actions/serverActions";
import StepperProgress from "./stepper-progress";
import ContentAnimator from "@/components/content-animator";
import Link from "next/link"

export default async function CreateProblemLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{
        problemId: string
    }>
}) {
    const { problemId } = await params;
    const session = await sessionValidation();
    if (session instanceof Error) {
        console.error(session)
        return null;
    }
    const userId = session.user.id;
    const problem = await prisma.problemGeneration.findUnique({
        where: {
            id: problemId,
            userId: userId
        }
    })

    if (!problem) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-background">
                <Card className="w-full max-w-lg bg-destructive/20 border-destructive">
                    <CardHeader className="flex gap-4 items-center">
                        <TriangleAlert className="size-20" />
                        <div className="flex flex-col gap-2">
                            <CardTitle>Problem Not Found</CardTitle>
                            <CardDescription>
                                The problem you are looking for does not exist.
                            </CardDescription>
                        </div>
                    </CardHeader>
                </Card>
                <Link href="/dashboard/problems" className="mt-8">
                    <Button variant="ghost" className="flex items-center gap-2 cursor-pointer">
                        <ArrowLeft className="size-4" />
                        View all Problems
                    </Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <StepperProgress key={problem.id + "Stepper"} />
            <main className="flex-grow flex items-center justify-center">
                <ContentAnimator>
                    {children}
                </ContentAnimator>
            </main>
        </div>
    );
}
