"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit3, Wand2 } from "lucide-react"
import { VibeProfile } from "@/app/actions/serverActions"
import AITab from "./ai-tab"
import ManualTab from "./manual-tab"

export interface ManualProfile {
    vibeProfile: VibeProfile["vibeProfile"]
    currentKeyword: string
    currentTag: string
}

export default function CreateVibes() {
    const searchParams = useSearchParams()
    const editId = searchParams.get('edit')
    const editData = searchParams.get('data')
    const isEdit = !!editId

    const [activeTab, setActiveTab] = useState<"ai" | "manual">(isEdit ? "manual" : "ai")

    const [sampleText, setSampleText] = useState("")
    const [manualProfile, setManualProfile] = useState<ManualProfile>(
        {
            vibeProfile: {
                vibe_name: "",
                voice_summary: "",
                vibe_keywords: [],
                stylistic_tags: [],
                formality: "Standard",
                pacing: "Steady",
                complexity: "Standard",
                humor_styles: ["None"],
                aesthetic: "",
                sample_text: "",
                language: "English",
            },
            currentKeyword: "",
            currentTag: ""
        }
    )

    useEffect(() => {
        if (isEdit && editData) {
            try {
                const parsedData = JSON.parse(decodeURIComponent(editData)) as VibeProfile["vibeProfile"];
                setManualProfile(prev => ({
                    ...prev,
                    vibeProfile: { ...prev.vibeProfile, ...parsedData }
                }));
            } catch (error) {
                console.error("Failed to parse edit data:", error)
            }
        }
    }, [isEdit, editData])

    const handleAnalysisSuccess = (data: VibeProfile["vibeProfile"]) => {
        setManualProfile(x => ({ ...x, vibeProfile: data }))
        setActiveTab("manual")
    }

    return (
        <div className="bg-background p-36 pb-16 flex flex-col">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {isEdit ? "Edit" : "Create"} <span className="text-primary">Vibe Profiles</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {isEdit
                        ? "Edit your existing vibe profile."
                        : "Manually create the vibe, or create from sample text with AI."
                    }
                </p>
            </div>

            {/* Tab Navigation */}
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "ai" | "manual")}>
                <TabsList className="grid w-96 grid-cols-2 mx-auto mb-4">
                    <TabsTrigger value="ai" className="flex items-center gap-2">
                        <Wand2 className="size-4" />
                        AI Analysis
                    </TabsTrigger>
                    <TabsTrigger value="manual" className="flex items-center gap-2">
                        <Edit3 className="size-4" />
                        {isEdit ? "Edit Profile" : "Manual Creation"}
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="ai" className="space-y-6">
                    <AITab onAnalysisSuccess={handleAnalysisSuccess} sampleText={sampleText} setSampleText={setSampleText} />
                </TabsContent>

                <TabsContent value="manual" className="space-y-6">
                    <ManualTab
                        manualProfile={manualProfile}
                        setManualProfile={setManualProfile}
                        isEdit={isEdit}
                        editId={editId || undefined}
                    />
                </TabsContent>
            </Tabs>
        </div>
    )
}