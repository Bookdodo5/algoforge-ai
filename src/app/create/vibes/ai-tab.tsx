"use client"

import { useMutation } from "@tanstack/react-query"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wand2, Loader2, Sparkles } from "lucide-react"
import { VibeProfile } from "@/app/actions/serverActions"

// API call
const analyzeVibeText = async (sample: string): Promise<VibeProfile["vibeProfile"]> => {
    const response = await fetch("/api/ai/vibe-extraction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sample })
    })

    if (!response.ok) {
        throw new Error("Analysis failed")
    }

    return response.json()
}

export default function AITab({ onAnalysisSuccess, sampleText, setSampleText }: {
    onAnalysisSuccess: (data: VibeProfile["vibeProfile"]) => void,
    sampleText: string,
    setSampleText: (text: string) => void
}) {
    const analyzeMutation = useMutation({
        mutationFn: analyzeVibeText,
        onSuccess: (data) => {
            onAnalysisSuccess(data)
        },
        onError: (error) => {
            console.error("Analysis error:", error)
            alert("Failed to analyze text. Please try again.")
        }
    })

    return (
        <div className="max-w-4xl mx-auto w-full">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Wand2 className="size-4" />
                        AI Vibe Analysis
                    </CardTitle>
                    <CardDescription>
                        Paste a text sample and let AI analyze the writing style for you.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Textarea
                        id="sample-text"
                        placeholder="Paste a text sample here to analyze the writing style..."
                        value={sampleText}
                        onChange={(e) => setSampleText(e.target.value)}
                        className="min-h-48 mt-2"
                    />

                    <Button
                        onClick={() => { analyzeMutation.mutate(sampleText) }}
                        disabled={!sampleText.trim() || analyzeMutation.isPending}
                        className="w-full"
                    >
                        {analyzeMutation.isPending ? (
                            <>
                                <Loader2 className="size-4 animate-spin" />
                                Analyzing...
                            </>
                        ) : (
                            <>
                                <Sparkles className="size-4" />
                                Analyze Style
                            </>
                        )}
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
} 