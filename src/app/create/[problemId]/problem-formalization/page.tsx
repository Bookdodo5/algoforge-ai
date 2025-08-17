import { prisma } from "@/lib/prisma";
import { sessionValidation } from "@/app/actions/serverActions";
import ProblemFormalizationClient from "./problem-formalization-client";

export default async function ProblemFormalizationPage({
    params,
}: {
    params: Promise<{ problemId: string }>
}) {
    const { problemId } = await params;
    await sessionValidation();

    const problem = await prisma.problemGeneration.findUnique({ where: { id: problemId } });

    const vibe = problem?.vibeProfile ? JSON.parse(JSON.stringify(problem.vibeProfile)) : null;
    const narrative = problem?.narrative || "";
    const proposal = problem?.problemProposal ? (problem.problemProposal as any) : null;
    const existingFormalization = problem?.formalizedProblem ? (problem.formalizedProblem as any) : null;

    return (
        <div className="h-full flex flex-grow items-center justify-center bg-background min-h-96 py-20 px-20">
            <ProblemFormalizationClient
                problemId={problemId}
                vibe={vibe}
                narrative={narrative}
                proposal={proposal}
                existingFormalization={existingFormalization}
            />
        </div>
    );
}