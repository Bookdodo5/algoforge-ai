import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { sessionValidation } from "@/app/actions/serverActions"
import { prisma } from "@/lib/prisma"
import Link from "next/link"
import {
    Sparkles,
    Palette,
    ScrollText,
    FileCode2,
    ArrowRight
} from "lucide-react"

async function getDashboardData() {
    const session = await sessionValidation()
    const userId = session.user.id

    const [vibes, themes, loglines, problems] = await Promise.all([
        prisma.vibeProfile.count({ where: { userId } }),
        prisma.starredTheme.count({ where: { userId } }),
        prisma.starredLogline.count({ where: { userId } }),
        prisma.problemGeneration.count({ where: { userId } })
    ])

    const [recentVibes, recentThemes, recentLoglines, recentProblems] = await Promise.all([
        prisma.vibeProfile.findMany({
            where: { userId },
            take: 2,
            orderBy: { id: 'desc' }
        }),
        prisma.starredTheme.findMany({
            where: { userId },
            take: 2,
            orderBy: { id: 'desc' }
        }),
        prisma.starredLogline.findMany({
            where: { userId },
            take: 2,
            orderBy: { id: 'desc' }
        }),
        prisma.problemGeneration.findMany({
            where: { userId },
            take: 2,
            orderBy: { id: 'desc' }
        })
    ])

    return {
        stats: { vibes, themes, loglines, problems },
        recentVibes,
        recentThemes,
        recentLoglines,
        recentProblems
    }
}

function StatsCard({
    number,
    title,
    icon: Icon,
    iconColor
}: {
    number: number,
    title: string,
    icon: React.ComponentType<{ className?: string }>,
    iconColor: string
}) {
    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 text-center space-y-4">
                <Icon className={`size-8 mx-auto ${iconColor}`} />
                <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold">{number}</div>
                    <p className="text-base text-muted-foreground">{title}</p>
                </div>
                <Link href={`/dashboard/${title.toLowerCase()}`}>
                    <Button variant="outline" className="cursor-pointer">
                        View {title}
                        <ArrowRight className="size-4" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}

function RecentCard({ recent, title, icon: Icon, iconColor }: {
    recent: string[],
    title: string,
    icon: React.ComponentType<{ className?: string }>,
    iconColor: string
}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="h-full">
                {recent.length == 0 ?
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                        No {title.toLowerCase()}
                    </div> :
                    <div className="space-y-3">
                        {
                            recent.map((item, index) => (
                                <div key={title + index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                                    <span className="text-sm line-clamp-1">"{item}"</span>
                                </div>
                            ))
                        }
                    </div>
                }
            </CardContent>
        </Card>
    )
}

export default async function Dashboard() {
    const { stats, recentVibes, recentThemes, recentLoglines, recentProblems } = await getDashboardData()

    return (
        <div className="bg-background p-36 pb-16 flex flex-col">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Your <span className="text-primary">Dashboard</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    All the stats for your creative problems.
                </p>
            </div>

            {/* Creation Counts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <StatsCard
                    number={stats.vibes}
                    title="Vibes"
                    icon={Sparkles}
                    iconColor="text-destructive"
                />
                <StatsCard
                    number={stats.themes}
                    title="Themes"
                    icon={Palette}
                    iconColor="text-accent"
                />
                <StatsCard
                    number={stats.loglines}
                    title="Loglines"
                    icon={ScrollText}
                    iconColor="text-chart-4"
                />
                <StatsCard
                    number={stats.problems}
                    title="Problems"
                    icon={FileCode2}
                    iconColor="text-primary"
                />
            </div>

            {/* Recent Activities - Separated by Category */}
            <div className="grid md:grid-cols-2 gap-6">
                <RecentCard
                    recent={recentVibes.map((vibe) => JSON.parse(vibe.vibeProfile as string).vibe_name)}
                    title="Recent Vibes"
                    icon={Sparkles}
                    iconColor="text-destructive"
                />
                <RecentCard
                    recent={recentThemes.map((theme) => theme.theme)}
                    title="Recent Themes"
                    icon={Palette}
                    iconColor="text-accent"
                />
                <RecentCard
                    recent={recentLoglines.map((logline) => JSON.parse(logline.logline as string).logline_sentence)}
                    title="Recent Loglines"
                    icon={ScrollText}
                    iconColor="text-chart-4"
                />
                <RecentCard
                    recent={recentProblems.map((problem) => problem.title)}
                    title="Recent Problems"
                    icon={FileCode2}
                    iconColor="text-primary"
                />
            </div>

        </div>
    );
}