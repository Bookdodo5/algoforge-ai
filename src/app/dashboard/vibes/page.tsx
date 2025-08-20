import { prisma } from "@/lib/prisma"
import { sessionValidation } from "@/app/actions/serverActions"
import type { VibeProfile } from "@/app/actions/serverActions"
import { VibesDisplay } from "./vibes-display"
import ContentAnimator from "@/components/content-animator"

async function getVibes() {
    const session = await sessionValidation()
    if(session instanceof Error) {
        console.error(session)
        return [];
    }
    const userId = session.user.id
    const vibesFromDb = await prisma.vibeProfile.findMany({
        where: {
            userId: userId
        }
    })
    const vibes = vibesFromDb.map(v => ({
        ...v,
        vibeProfile: JSON.parse((v.vibeProfile as unknown as string).replace("`", ""))
    })) as VibeProfile[]
    return vibes
}

export default async function Vibes() {
    const vibes = await getVibes()

    return (
        <div className="bg-background p-36 pb-16 flex flex-col">
            {/* Header */}
            <ContentAnimator>
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Your <span className="text-primary">Vibe Profiles</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Profiles to help the AI understand the style of the problem you want.
                </p>
            </div>
            </ContentAnimator>

            <ContentAnimator delay={0.2}>
            <VibesDisplay vibes={vibes} />
            </ContentAnimator>
        </div>
    );
}