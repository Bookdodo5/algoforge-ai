import { prisma } from "@/lib/prisma";
import { sessionValidation } from "@/app/actions/serverActions";
import SolutionFormationClient from "./solution-formation-client";

export default async function SolutionFormationPage({
    params,
}: {
    params: Promise<{ problemId: string }>;
}) {
    const { problemId } = await params;
    await sessionValidation();

    const problem = await prisma.problemGeneration.findUnique({ where: { id: problemId } });

    const fullProblem = problem?.formalizedProblem ? (problem.formalizedProblem as any) : null;
    const existingOutline = problem?.technicalOutline || "";
    const existingSolution = problem?.solutionCode || "";
    const existingTestGen = problem?.testGenerator || "";

    return (
        <div className="h-full flex flex-grow items-center justify-center bg-background min-h-96 py-20 px-20">
            <SolutionFormationClient
                problemId={problemId}
                fullProblem={fullProblem}
                existingOutline={existingOutline}
                existingSolution={existingSolution}
                existingTestGen={existingTestGen}
            />
        </div>
    );
}