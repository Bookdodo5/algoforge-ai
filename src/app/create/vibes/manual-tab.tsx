"use client"

import { useMutation } from "@tanstack/react-query"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Plus, Save, Loader2, X, Edit3 } from "lucide-react"
import { createVibeProfile, editVibeProfile } from "@/app/actions/serverActions"
import { useRouter } from "next/navigation"
import { ManualProfile } from "./page"
import { SetStateAction, useCallback } from "react"

const FORMALITY_OPTIONS = ["Academic", "Standard", "Casual", "Shitpost"]
const PACING_OPTIONS = ["Contemplative", "Steady", "Urgent"]
const COMPLEXITY_OPTIONS = ["Minimalist", "Standard", "World-building"]
const HUMOR_STYLES = ["None", "Dry", "Absurdist", "Slapstick", "Meme-based", "Satire", "Pun"]

function TagWrapper({ field, children, manualProfile, removeFromManual }: {
    field: "vibe_keywords" | "stylistic_tags" | "humor_styles"
    children: React.ReactNode
    manualProfile: ManualProfile
    removeFromManual: (field: keyof ManualProfile, value: string) => void
}) {
    return <div key={field}>
        <Label>{field.charAt(0).toUpperCase() + field.slice(1).replace("_", " ")}</Label>
        <div className="flex gap-2 mt-3">
            {children}
        </div>
        {manualProfile[field].length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
            {manualProfile[field].map((item, index) => (
                <Badge key={`${field}-${item}-${index}`} variant="secondary" className="flex items-center gap-1">
                    {item}
                    <button
                        onClick={() => removeFromManual(field, item)}
                        className="ml-1 hover:text-destructive cursor-pointer transition-colors"
                    >
                        <X className="size-3" />
                    </button>
                </Badge>
                ))}
            </div>
        )}
    </div>
}

export default function ManualTab({ 
    manualProfile, 
    setManualProfile, 
    isEdit = false, 
    editId 
}: {
    manualProfile: ManualProfile,
    setManualProfile: (setFunction: (manualProfile: ManualProfile) => ManualProfile) => void
    isEdit?: boolean
    editId?: string
}) {
    const router = useRouter()

    const saveMutation = useMutation({
        mutationFn: async (data: ManualProfile) => {
            if (isEdit && editId) {
                return editVibeProfile(editId, data)
            } else {
                return createVibeProfile(data)
            }
        },
        onSuccess: () => {
            router.push("/dashboard/vibes")
        },
        onError: (error) => {
            console.error("Save error:", error)
            alert(`Failed to ${isEdit ? 'update' : 'save'} vibe profile. Please try again.`)
        }
    })

    const addToManual = useCallback((value: string, field: keyof ManualProfile) => {
        const currentArray = manualProfile[field] as string[]
        console.log("ADD", value, field, manualProfile, { ...manualProfile, [field]: [...currentArray, value.trim()] })
        if (value.trim() && !currentArray.includes(value.trim())) {
            setManualProfile(x => ({ ...x, [field]: [...currentArray, value.trim()] }))
        }
    }, [manualProfile, setManualProfile])

    const removeFromManual = useCallback((field: keyof ManualProfile, value: string) => {
        const currentArray = manualProfile[field] as string[]
        setManualProfile(x => ({ ...x, [field]: currentArray.filter(i => i !== value) }))
    }, [manualProfile, setManualProfile])

    function OptionInput({ field, options }: {
        field: "formality" | "pacing" | "complexity"
        options: string[]
    }) {
        return <div key={field}>
            <Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
            <Select
                value={manualProfile[field]}
                onValueChange={(value: any) => setManualProfile(x => ({ ...x, [field]: value }))}
            >
                <SelectTrigger className="mt-3 w-full">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {options.map(option => (
                        <SelectItem key={option + field} value={option}>
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    }

    const addTagHandler = useCallback((field: "vibe_keywords" | "stylistic_tags") => {
        if (field === "vibe_keywords") {
            addToManual(manualProfile.currentKeyword, "vibe_keywords")
            setManualProfile(x => ({ ...x, currentKeyword: "" }))
        } else if (field === "stylistic_tags") {
            addToManual(manualProfile.currentTag, "stylistic_tags")
            setManualProfile(x => ({ ...x, currentTag: "" }))
        }
    }, [manualProfile, addToManual, setManualProfile])

    return (
        <div className="max-w-4xl mx-auto w-full">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Edit3 className="size-4" />
                        {isEdit ? "Edit Profile" : "Manual Creation"}
                    </CardTitle>
                    <CardDescription>
                        {isEdit 
                            ? "Update your existing vibe profile."
                            : "Create a profile manually, with control over everything."
                        }
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-3 gap-6 w-full">
                        <div className="col-span-2">
                            <Label htmlFor="vibe-name">Vibe Name</Label>
                            <Input
                                id="vibe-name"
                                type="text"
                                placeholder="A name for the vibe..."
                                value={manualProfile.vibe_name}
                                onChange={(e) => setManualProfile(x => ({ ...x, vibe_name: e.target.value }))}
                                className="mt-3"
                            />
                        </div>
                        <div className="col-span-1">
                            <Label htmlFor="language">Language</Label>
                            <Input
                                id="language"
                                placeholder="Language of the text..."
                                value={manualProfile.language}
                                onChange={(e) => setManualProfile(x => ({ ...x, language: e.target.value }))}
                                className="mt-3"
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="aesthetic">Aesthetic</Label>
                        <Input
                            id="aesthetic"
                            placeholder="One phrase describing the overall aesthetic..."
                            value={manualProfile.aesthetic}
                            onChange={(e) => setManualProfile(x => ({ ...x, aesthetic: e.target.value }))}
                            className="mt-3"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-6 w-full h-56">
                        <div className="col-span-2 flex flex-col">
                            <Label htmlFor="voice-summary">Voice Summary</Label>
                            <Textarea
                                id="voice-summary"
                                placeholder="Description of the voice..."
                                value={manualProfile.voice_summary}
                                onChange={(e) => setManualProfile(x => ({ ...x, voice_summary: e.target.value }))}
                                className="flex-1 mt-3"
                            />
                        </div>
                        <div className="col-span-1 flex flex-col justify-between">
                            <OptionInput field="pacing" options={PACING_OPTIONS} />
                            <OptionInput field="formality" options={FORMALITY_OPTIONS} />
                            <OptionInput field="complexity" options={COMPLEXITY_OPTIONS} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <TagWrapper key="vibe_keywords" field="vibe_keywords" manualProfile={manualProfile} removeFromManual={removeFromManual}>
                            <Input
                                placeholder={`Add a vibe keyword...`}
                                value={manualProfile.currentKeyword}
                                onChange={(e) => setManualProfile(x => ({ ...x, currentKeyword: e.target.value }))}
                                onKeyDown={(e) => e.key === "Enter" && addTagHandler("vibe_keywords")}
                            />
                            <Button onClick={() => addTagHandler("vibe_keywords")} size="sm">
                                <Plus className="size-4" />
                            </Button>
                        </TagWrapper>
                        <TagWrapper key="stylistic_tags" field="stylistic_tags" manualProfile={manualProfile} removeFromManual={removeFromManual}>
                            <Input
                                placeholder={`Add a style tag...`}
                                value={manualProfile.currentTag}
                                onChange={(e) => setManualProfile(x => ({ ...x, currentTag: e.target.value }))}
                                onKeyDown={(e) => e.key === "Enter" && addTagHandler("stylistic_tags")}
                            />
                            <Button onClick={() => addTagHandler("stylistic_tags")} size="sm">
                                <Plus className="size-4" />
                            </Button>
                        </TagWrapper>
                        <TagWrapper key="humor_styles" field="humor_styles" manualProfile={manualProfile} removeFromManual={removeFromManual}>
                            <Select value={undefined} onValueChange={(value) => addToManual(value, "humor_styles")}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select humor style..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {HUMOR_STYLES.map(style => (
                                        <SelectItem key={style} value={style}>
                                            {style}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </TagWrapper>
                    </div>

                    <div className="h-48 flex flex-col">
                        <Label htmlFor="sample-text-manual">Sample Text</Label>
                        <Textarea
                            id="sample-text-manual"
                            placeholder="A few representative sentences or paragraphs..."
                            value={manualProfile.sample_text}
                            onChange={(e) => setManualProfile(x => ({ ...x, sample_text: e.target.value }))}
                            className="mt-3 flex-1"
                        />
                    </div>

                    <Separator />

                    <Button
                        onClick={() => saveMutation.mutate(manualProfile)}
                        disabled={saveMutation.isPending || !manualProfile.vibe_name || !manualProfile.voice_summary || !manualProfile.aesthetic || !manualProfile.sample_text || !manualProfile.language}
                        className="w-full"
                    >
                        {saveMutation.isPending ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                {isEdit ? "Updating..." : "Saving..."}
                            </>
                        ) : (
                            <>
                                <Save className="w-4 h-4 mr-2" />
                                {isEdit ? "Update Vibe Profile" : "Save Vibe Profile"}
                            </>
                        )}
                    </Button>
                </CardContent>
            </Card>
        </div >
    )
} 