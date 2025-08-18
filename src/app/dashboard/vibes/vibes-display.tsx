"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Plus } from "lucide-react"
import { VibeProfile, deleteVibeProfile } from "@/app/actions/serverActions"
import { useRouter } from "next/navigation"

export function VibesDisplay({ vibes }: { vibes: VibeProfile[] }) {
    const router = useRouter()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vibes.map(vibe => {
                const vibeData = vibe.vibeProfile
                const vibeId = vibe.id
                return (
                    <Card key={vibeId} className="border-2 border-border hover:border-primary/50 transition-all">
                        <CardHeader>
                            <CardTitle className="text-lg">{vibeData.vibe_name}</CardTitle>
                            <CardDescription>{vibeData.aesthetic}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col h-full">
                            <div className="space-y-4 flex-1">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">{vibeData.formality}</Badge>
                                    <Badge variant="secondary">{vibeData.pacing}</Badge>
                                    <Badge variant="secondary">{vibeData.complexity}</Badge>
                                </div>

                                {vibeData.vibe_keywords.length > 0 && (
                                <div>
                                    <h4 className="font-medium text-sm mb-2 text-foreground">Keywords</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {vibeData.vibe_keywords.map((keyword, index) => (
                                            <Badge key={index} variant="default" className="text-xs">
                                                {keyword}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                )}

                                {vibeData.stylistic_tags.length > 0 && (
                                <div>
                                    <h4 className="font-medium text-sm mb-2 text-foreground">Tags</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {vibeData.stylistic_tags.map((keyword, index) => (
                                            <Badge key={index} variant="default" className="text-xs">
                                                {keyword}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                )}

                                {vibeData.humor_styles.length > 0 && (
                                <div>
                                    <h4 className="font-medium text-sm mb-2 text-foreground">Humor Style</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {vibeData.humor_styles.map((style, index) => (
                                            <Badge key={index} variant="default" className="text-xs">
                                                {style}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                )}
                                
                                <p className="line-clamp-4 text-xs text-muted-foreground leading-normal">
                                    "{vibeData.sample_text}"
                                </p>
                            </div>

                            <div className="flex justify-center items-center gap-4 mt-8">
                                <Button
                                    variant="default"
                                    className="cursor-pointer"
                                    onClick={() => { 
                                        router.push(`/create/vibes?edit=${vibeId}&data=${encodeURIComponent(JSON.stringify(vibeData))}`) 
                                    }}
                                >
                                    <Edit className="size-4" />
                                    Edit
                                </Button>
                                <Button
                                    variant="destructive"
                                    className="cursor-pointer"
                                    onClick={() => { deleteVibeProfile(vibeId) }}
                                >
                                    <Trash2 className="size-4" />
                                    Delete
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
            
            <Card className="border-2 border-dashed border-muted-foreground/30 hover:border-primary/50 transition-all bg-muted/20">
                <CardContent className="flex flex-col items-center justify-center h-full min-h-[300px] p-6">
                    <div className="text-center space-y-4">
                        <div className="size-16 rounded-full bg-primary/60 dark:bg-primary/20 flex items-center justify-center mx-auto">
                            <Plus className="size-8 text-card dark:text-primary" />
                        </div>
                        <div>
                            <CardTitle className="text-lg mb-2">Create New Vibe</CardTitle>
                            <CardDescription className="text-sm">
                                Add a new vibe profile to your collection
                            </CardDescription>
                        </div>
                        <Button 
                            onClick={() => router.push('/create/vibes')}
                            className="mt-4"
                        >
                            <Plus className="size-4" />
                            New Vibe
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}