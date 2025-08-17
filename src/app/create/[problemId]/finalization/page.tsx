import { prisma } from "@/lib/prisma";
import { sessionValidation } from "@/app/actions/serverActions";
import FinalizationClient from "./finalization-client";

export default async function FinalizationPage({
    params,
}: {
    params: Promise<{ problemId: string }>;
}) {
    const { problemId } = await params;
    await sessionValidation();

    const problem = await prisma.problemGeneration.findUnique({ where: { id: problemId } });

    return (
        <div className="h-full flex flex-grow items-center justify-center bg-background min-h-96 py-20 px-20">
            <FinalizationClient problemId={problemId} problem={problem as any} />
        </div>
    );
}