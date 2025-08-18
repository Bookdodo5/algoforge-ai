"use client"

import { useRouter } from "next/navigation";
import { VibeProfile, updateProblem } from "@/app/actions/serverActions";
import { ArrowRight, Loader2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function VibeProfileSelection({
    vibes,
    problemVibe,
    problemId
}: {
    vibes: VibeProfile[],
    problemVibe: VibeProfile | null | undefined,
    problemId: string
}) {
    const router = useRouter();

    const [selectedId, setSelectedId] = useState<string | null>(
        problemVibe?.id ?? null
    );

    const selectedName = selectedId ? vibes.find(v => v.id === selectedId)?.vibeProfile.vibe_name : null;
    const [isRouting, setIsRouting] = useState(false);

    const saveMutation = useMutation({
        mutationFn: (vibeId: string) => updateProblem(problemId, {
            vibeProfile: vibes.find(vibe => vibe.id === vibeId),
            currentStep: 2
        }),
        onSuccess: () => {
            setIsRouting(true);
            router.push(`/create/${problemId}/theme-ideation`);
        },
    });

    return (
        <Card className="w-full max-w-2xl">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Zap className="size-5" />
                    Vibe Extraction
                </CardTitle>
                <CardDescription>Select an existing vibe profile or create a new one.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex gap-6 items-center">
                    <Select defaultValue={selectedId ?? undefined} onValueChange={(value) => {
                        setSelectedId(value);
                    }}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a vibe profile" >
                                {selectedName}
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            {vibes.map(vibe => (
                                <SelectItem key={vibe.id} value={vibe.id}>
                                    <div className="flex flex-col max-w-lg w-full">
                                        <p>{vibe?.vibeProfile?.vibe_name}</p>
                                        <p className="text-xs text-muted-foreground">{vibe?.vibeProfile?.voice_summary}</p>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <p className="text-muted-foreground text-sm">Or</p>
                    <Button onClick={() => router.push('/create/vibes')}>Create New Vibe</Button>
                </div>
                <Button className="w-full" disabled={!selectedId || saveMutation.isPending || isRouting} onClick={() => saveMutation.mutate(selectedId as string)}>
                    {saveMutation.isPending || isRouting ? (
                        <>
                            <Loader2 className="size-4 animate-spin" />
                            Saving...
                        </>
                    ) : (
                        <>
                            Next
                            <ArrowRight className="size-4" />
                        </>
                    )}
                </Button>
            </CardContent>
        </Card>
    )
}

