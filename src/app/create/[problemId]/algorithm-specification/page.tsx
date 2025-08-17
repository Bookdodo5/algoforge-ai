import { prisma } from "@/lib/prisma";
import { sessionValidation } from "@/app/actions/serverActions";
import AlgorithmSpecificationClient from "./algorithm-specification-client";

export default async function AlgorithmSpecificationPage({
    params
}: {
    params: Promise<{ problemId: string }>
}) {
    const { problemId } = await params;
    await sessionValidation();

    const problem = await prisma.problemGeneration.findUnique({ where: { id: problemId } });

    const narrative = problem?.narrative || "";
    const selectedAlgorithms = problem?.selectedAlgorithms ? (problem.selectedAlgorithms as any) : [];
    const problemProposal = problem?.problemProposal ? (problem.problemProposal as any) : null;

    return (
        <div className="h-full flex flex-grow items-center justify-center bg-background min-h-96 py-20 px-20">
            <AlgorithmSpecificationClient
                problemId={problemId}
                narrative={narrative}
                selectedAlgorithms={selectedAlgorithms}
                existingProposal={problemProposal}
            />
        </div>
    );
}