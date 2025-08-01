import { prisma } from "@/lib/prisma"
import { sessionValidation } from "@/app/actions/serverActions"
import { VibesDisplay } from "./vibes-display"

async function getVibes() {
    const userId = await sessionValidation()
    const vibes = await prisma.vibeProfile.findMany({
        where: {
            userId: userId
        }
    })
    return vibes
}

export default async function Vibes() {
    const vibes = await getVibes()

    return (
        <div className="bg-background p-36 pb-16 flex flex-col">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Your <span className="text-primary">Vibe Profiles</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Profiles to help the AI understand the style of the problem you want.
                </p>
            </div>

            <VibesDisplay vibes={vibes} />
        </div>
    );
}