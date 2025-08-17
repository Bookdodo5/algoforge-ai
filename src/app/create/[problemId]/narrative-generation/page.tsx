import { prisma } from "@/lib/prisma";
import { sessionValidation } from "@/app/actions/serverActions";
import NarrativeGenerationClient from "./narrative-generation-client";

export default async function NarrativeGenerationPage({
    params
}: {
    params: Promise<{ problemId: string }>
}) {
    const { problemId } = await params;
    await sessionValidation();

    const problem = await prisma.problemGeneration.findUnique({ where: { id: problemId } });

    const theme = problem?.theme || "";
    const vibe = problem?.vibeProfile ? JSON.parse(JSON.stringify(problem.vibeProfile)) : null;
    const logline = problem?.selectedLogline ? (problem.selectedLogline as any) : null;
    const narrative = problem?.narrative || "";

    return (
        <div className="h-full flex flex-grow items-center justify-center bg-background min-h-96 py-20 px-20">
            <NarrativeGenerationClient
                problemId={problemId}
                theme={theme}
                vibe={vibe}
                logline={logline}
                narrative={narrative}
            />
        </div>
    );
}