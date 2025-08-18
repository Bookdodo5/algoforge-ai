import { sessionValidation } from "@/app/actions/serverActions";
import { LoglineDisplay } from "@/app/dashboard/loglines/logline-display";
import { prisma } from "@/lib/prisma";

async function getLoglines() {
    const session = await sessionValidation()
    const userId = session.user.id
    const loglines = await prisma.starredLogline.findMany({
        where: {
            userId: userId
        }
    })
    return loglines
}

export default async function Loglines() {
    const loglines = await getLoglines();

    return (
        <div className="bg-background p-36 pb-16 flex flex-col">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Your Starred <span className="text-primary">Loglines</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Loglines you've starred for the initial ideation of problem narrative.
                </p>
            </div>

            <LoglineDisplay loglines={loglines} />
        </div>
    );
}