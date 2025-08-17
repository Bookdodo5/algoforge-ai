import { prisma } from "@/lib/prisma";
import { sessionValidation } from "@/app/actions/serverActions";
import ThemeIdeationClient from "./theme-ideation-client";

export default async function ThemeIdeationPage({
    params
}: {
    params: Promise<{
        problemId: string
    }>
}) {
    const { problemId } = await params;
    const userId = await sessionValidation();

    // Fetch starred themes and current problem
    const [starredThemes, problem] = await Promise.all([
        prisma.starredTheme.findMany({
            where: {
                userId: userId
            }
        }),
        prisma.problemGeneration.findUnique({
            where: {
                id: problemId
            }
        })
    ]);

    const currentTheme = problem?.theme || "";

    return (
        <div className="h-full flex flex-grow items-center justify-center bg-background min-h-96 py-20 px-20">
            <ThemeIdeationClient
                problemId={problemId}
                starredThemes={starredThemes}
                currentTheme={currentTheme}
            />
        </div>
    );
} 