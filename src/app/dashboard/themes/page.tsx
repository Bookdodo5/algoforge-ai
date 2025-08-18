import { sessionValidation } from "@/app/actions/serverActions";
import { ThemeDisplay } from "./theme-display";
import { prisma } from "@/lib/prisma";

async function getThemes() {
    const session = await sessionValidation()
    if(session instanceof Error) {
        console.error(session)
        return [];
    }
    const userId = session.user.id
    const themes = await prisma.starredTheme.findMany({
        where: {
            userId: userId
        },
        orderBy: {
            id: 'asc'
        }
    })
    return themes
}

export default async function Themes() {
    const themes = await getThemes();

    return (
        <div className="bg-background p-36 pb-16 flex flex-col">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Your Starred <span className="text-primary">Themes</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Themes you've starred for initial ideas.
                </p>
            </div>

            <ThemeDisplay themes={themes} />
        </div>
    );
}