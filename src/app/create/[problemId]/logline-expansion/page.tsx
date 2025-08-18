import { prisma } from "@/lib/prisma";
import LoglineExpansionClient from "./logline-expansion-client";
import { sessionValidation } from "@/app/actions/serverActions";

export default async function LoglineExpansionPage({
    params
}: {
    params: Promise<{ problemId: string }>
}) {
    const { problemId } = await params;
    const session = await sessionValidation();
    const userId = session.user.id;

    const [problem, starredLoglines] = await Promise.all([
        prisma.problemGeneration.findUnique({
            where: {
                id: problemId
            }
        }),
        prisma.starredLogline.findMany({
            where: {
                userId: userId
            }
        })
    ]);

    const theme = problem?.theme || "";
    const vibe = problem?.vibeProfile ? JSON.parse(JSON.stringify(problem.vibeProfile)) : null;
    const currentLogline = problem?.selectedLogline ? (problem.selectedLogline as any) : null;

    return (
        <div className="h-full flex flex-grow items-center justify-center bg-background min-h-96 py-20 px-20">
            <LoglineExpansionClient
                problemId={problemId}
                theme={theme}
                vibe={vibe}
                starredLoglines={starredLoglines as any}
                currentLogline={currentLogline}
            />
        </div>
    );
}