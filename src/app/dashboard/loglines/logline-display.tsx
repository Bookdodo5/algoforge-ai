"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Star, Plus, Save, X, Trash2 } from "lucide-react"
import { LoglineData, unstarLogline, editLogline, starLogline } from "@/app/actions/serverActions"
import { JsonValue } from "@prisma/client/runtime/library"
import { useState } from "react"

export function LoglineDisplay({ loglines }: { loglines: JsonValue[] }) {
    const [editingId, setEditingId] = useState<string | null>(null)
    const [newLogline, setNewLogline] = useState<LoglineData>({
        protagonist: "",
        goal: "",
        obstacle: "",
        stakes: "",
        logline_sentence: ""
    })
    const [isAdding, setIsAdding] = useState(false)

    const handleEdit = async (loglineId: string, loglineData: LoglineData) => {
        try {
            await editLogline(loglineId, loglineData)
            setEditingId(null)
        } catch (error) {
            console.error('Failed to edit logline:', error)
        }
    }

    const handleDelete = async (loglineId: string) => {
        try {
            await unstarLogline(loglineId)
        } catch (error) {
            console.error('Failed to delete logline:', error)
        }
    }

    const handleAdd = async (loglineData: LoglineData) => {
        try {
            await starLogline(loglineData)
            setNewLogline({
                protagonist: "",
                goal: "",
                obstacle: "",
                stakes: "",
                logline_sentence: ""
            })
            setIsAdding(false)
        } catch (error) {
            console.error('Failed to add logline:', error)
        }
    }

    return (
        <div className="space-y-6">

            {/* Starred Loglines */}
            {loglines.length > 0 && (
                <div className="space-y-4">
                    {loglines.map((logline) => {
                        const loglineData: LoglineData = JSON.parse((logline as any).logline)
                        const loglineId: string = (logline as any).id
                        const isEditing = editingId === loglineId

                        return (
                            <Card key={loglineId} className="border-2 border-border hover:border-primary/50 transition-all p-6">
                                {isEditing ? (
                                    <LoglineEditForm
                                        initialData={loglineData}
                                        onSave={(updatedData) => handleEdit(loglineId, updatedData)}
                                        onCancel={() => setEditingId(null)}
                                    />
                                ) : (
                                    <div>
                                        {/* Header with star indicator */}
                                        <div className="flex items-start justify-between gap-6">
                                            <div className="flex gap-4 min-w-0 flex-1">
                                                <div className="flex items-center h-8">
                                                    <Star className="size-5 text-primary fill-primary flex-shrink-0" />
                                                </div>
                                                <h3 className="text-lg text-foreground leading-relaxed break-words min-w-0 italic">
                                                    "{loglineData.logline_sentence}"
                                                </h3>
                                            </div>
                                            <div className="flex gap-2 flex-shrink-0">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() => setEditingId(loglineId)}
                                                    className=""
                                                >
                                                    <Edit className="size-4" />
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    size="icon"
                                                    onClick={() => handleDelete(loglineId)}
                                                    className=""
                                                >
                                                    <Trash2 className="size-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Card>
                        )
                    })}
                </div>
            )}

            {isAdding ? (
                <Card className="border-4 border-primary/50 bg-muted/20 p-6">
                    <LoglineEditForm
                        initialData={newLogline}
                        onSave={handleAdd}
                        onCancel={() => setIsAdding(false)}
                        isNew={true}
                    />
                </Card>
            ) : (
                <Card className="border-2 border-dashed border-muted-foreground/30 hover:border-primary/50 transition-all bg-muted/20">
                    <CardContent className="flex items-center justify-center p-6">
                        <Button onClick={() => setIsAdding(true)}>
                            <Plus className="size-4" />
                            New Empty Logline
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}

function LoglineEditForm({
    initialData,
    onSave,
    onCancel,
    isNew = false
}: {
    initialData: LoglineData
    onSave: (data: LoglineData) => void
    onCancel: () => void
    isNew?: boolean
}) {
    const [formData, setFormData] = useState<LoglineData>(initialData)

    const handleSave = () => {
        if (formData.protagonist && formData.goal && formData.obstacle && formData.logline_sentence) {
            onSave(formData)
        }
    }

    return (
        <div className="space-y-4">
            <div className="flex gap-2 items-center">
                <Star className="size-5 text-primary" />
                <h3 className="text-lg font-semibold">
                    {isNew ? "Create a New Logline" : "Edit Starred Logline"}
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-sm font-medium">Protagonist</label>
                    <Input
                        value={formData.protagonist}
                        onChange={(e) => setFormData(prev => ({ ...prev, protagonist: e.target.value }))}
                        placeholder="Who is the main character?"
                        className="mt-3"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium">Goal</label>
                    <Input
                        value={formData.goal}
                        onChange={(e) => setFormData(prev => ({ ...prev, goal: e.target.value }))}
                        placeholder="What do they want to achieve?"
                        className="mt-3"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium">Obstacle</label>
                    <Input
                        value={formData.obstacle}
                        onChange={(e) => setFormData(prev => ({ ...prev, obstacle: e.target.value }))}
                        placeholder="What stands in their way?"
                        className="mt-3"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium">Stake</label>
                    <Input
                        value={formData.stakes || ""}
                        onChange={(e) => setFormData(prev => ({ ...prev, stakes: e.target.value }))}
                        placeholder="What's at risk?"
                        className="mt-3"
                    />
                </div>
            </div>

            <div>
                <label className="text-sm font-medium">Logline Sentence</label>
                <Textarea
                    value={formData.logline_sentence}
                    onChange={(e) => setFormData(prev => ({ ...prev, logline_sentence: e.target.value }))}
                    placeholder="Write the complete logline sentence..."
                    rows={3}
                    className="mt-3 min-h-32"
                />
            </div>

            <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
                <Button
                    onClick={handleSave}
                    disabled={!formData.protagonist || !formData.goal || !formData.obstacle || !formData.stakes || !formData.logline_sentence}
                >
                    <Save className="size-4" />
                    Save Changes
                </Button>
            </div>
        </div>
    )
}