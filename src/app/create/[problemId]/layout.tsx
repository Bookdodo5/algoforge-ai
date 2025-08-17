import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TriangleAlert } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { sessionValidation } from "@/app/actions/serverActions";
import StepperProgress from "./stepper-progress";

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
    const userId = await sessionValidation();
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
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <StepperProgress key={problem.id+"Stepper"} />
            <main className="flex-grow flex items-center justify-center">
                {children}
            </main>
        </div>
    );
}
