import { prisma } from "@/lib/prisma";
import ProblemOverview from "./problem-overview";
import { notFound } from "next/navigation";

export default async function ProblemPage({ params }: { params: Promise<{ problemId: string }> }) {
    const { problemId } = await params;
    const problem = await prisma.problemGeneration.findUnique({
        where: {
            id: problemId,
        },
    });

    if (!problem) {
        return notFound();
    }

    return (
        <div className="h-full flex flex-grow items-center justify-center bg-background min-h-96 py-20 px-20">
            <ProblemOverview problem={problem} />
        </div>
    );
}
