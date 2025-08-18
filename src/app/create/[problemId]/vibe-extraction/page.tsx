import VibeProfileSelection from "@/app/create/[problemId]/vibe-extraction/vibe-profile-selection";
import { prisma } from "@/lib/prisma";
import { sessionValidation, VibeProfile } from "@/app/actions/serverActions";

export default async function VibeExtractionPage({
    params
}: {
    params: Promise<{
        problemId: string
    }>
}) {
    const { problemId } = await params;
    const session = await sessionValidation();
    const userId = session.user.id;
    const vibesFromDb = await prisma.vibeProfile.findMany({
        where: {
            userId: userId
        }
    })
    const vibes = vibesFromDb.map(v => ({
        ...v,
        vibeProfile: JSON.parse((v.vibeProfile as string).replace("`", ""))
    }));
    const problemFromDb = await prisma.problemGeneration.findUnique({
        where: {
            id: problemId
        }
    })
    const problemVibe = problemFromDb?.vibeProfile as VibeProfile | null;

    return (
        <div className="h-full flex flex-grow items-center justify-center bg-background min-h-96 py-20 px-20">
            <VibeProfileSelection vibes={vibes} problemVibe={problemVibe} problemId={problemId} />
        </div>
    )
}
