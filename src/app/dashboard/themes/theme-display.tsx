"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star, Plus, Save, X, Trash2, Edit } from "lucide-react"
import { unstarTheme, starTheme, editTheme } from "@/app/actions/serverActions"
import { useState } from "react"

interface StarredTheme {
    id: string
    theme: string
    userId: string
}

export function ThemeDisplay({ themes }: { themes: StarredTheme[] }) {
    const [editingId, setEditingId] = useState<string | null>(null)
    const [editingTheme, setEditingTheme] = useState<string>("")
    const [newTheme, setNewTheme] = useState<string>("")
    const [isAdding, setIsAdding] = useState(false)

    const handleDelete = async (themeId: string) => {
        try {
            await unstarTheme(themeId)
        } catch (error) {
            console.error('Failed to delete theme:', error)
        }
    }

    const handleAdd = async (theme: string) => {
        try {
            await starTheme(theme)
            setNewTheme("")
            setIsAdding(false)
        } catch (error) {
            console.error('Failed to add theme:', error)
        }
    }

    const startEdit = (themeId: string, currentTheme: string) => {
        setEditingId(themeId)
        setEditingTheme(currentTheme)
    }

    const handleEditSave = async (themeId: string) => {
        try {
            await editTheme(themeId, editingTheme)
            setEditingId(null)
            setEditingTheme("")
        } catch (error) {
            console.error('Failed to edit theme:', error)
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap gap-6">
                {themes.map((theme) => {
                    const isEditing = editingId === theme.id

                    return (
                        <Card
                            key={theme.id}
                            className={`border-2 border-border hover:border-primary/50 transition-all p-6 grow ${isEditing && "w-full"}`}>
                            {isEditing ? (
                                <div className="flex items-start justify-between gap-4 w-full">
                                    <Input
                                        value={editingTheme}
                                        onChange={(e) => setEditingTheme(e.target.value)}
                                        placeholder="Enter theme..."
                                        className="text-lg w-full"
                                        autoFocus
                                    />
                                    <Button variant="outline" onClick={() => setEditingId(null)}>
                                        <X className="size-4" />
                                        Cancel
                                    </Button>
                                    <Button
                                        onClick={() => handleEditSave(theme.id)}
                                        disabled={!editingTheme}
                                    >
                                        <Save className="size-4" />
                                        Save Changes
                                    </Button>
                                </div>
                            ) : (
                                <div className="flex items-start justify-between gap-6">
                                    <div className="flex gap-4 min-w-0 flex-1">
                                        <div className="flex items-center h-8">
                                            <Star className="size-5 text-primary fill-primary flex-shrink-0" />
                                        </div>
                                        <h3 className="text-lg text-foreground leading-relaxed break-words min-w-0">
                                            {theme.theme}
                                        </h3>
                                    </div>
                                    <div className="flex gap-2 flex-shrink-0">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => startEdit(theme.id, theme.theme)}
                                        >
                                            <Edit className="size-4" />
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            onClick={() => handleDelete(theme.id)}
                                        >
                                            <Trash2 className="size-4" />
                                        </Button>
                                    </div>
                                </div>
                            )
                            }
                        </Card>
                    )
                })}
            </div>
            {isAdding ? (
                <Card className="border-4 border-primary/50 bg-muted/20 p-6">
                    <div className="flex gap-2 items-center">
                        <Star className="size-5 text-primary" />
                        <h3 className="text-lg font-semibold">Create New Theme</h3>
                    </div>
                    <div className="flex gap-4">
                        <Input
                            value={newTheme}
                            onChange={(e) => setNewTheme(e.target.value)}
                            placeholder="Enter a new theme..."
                            className="text-lg"
                        />
                        <Button variant="outline" onClick={() => setIsAdding(false)}>
                            <X className="size-4" />
                            Cancel
                        </Button>
                        <Button
                            onClick={() => handleAdd(newTheme)}
                            disabled={!newTheme}
                        >
                            <Save className="size-4" />
                            Save Theme
                        </Button>
                    </div>
                </Card>
            ) : (
                <Card className="border-2 border-dashed border-muted-foreground/30 hover:border-primary/50 transition-all bg-muted/20">
                    <CardContent className="flex items-center justify-center p-6">
                        <Button onClick={() => setIsAdding(true)}>
                            <Plus className="size-4" />
                            New Theme
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}