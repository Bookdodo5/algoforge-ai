import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { createNewProblem } from "@/app/actions/serverActions"
import { redirect } from "next/navigation"
import { PlusCircle, BookOpen } from "lucide-react"

export default function Create() {

    async function handleCreateNewProblem() {
        'use server'
        const problem = await createNewProblem()
        redirect(`/create/${problem.id}`)
    }

    async function handleContinueProblem() {
        'use server'
        redirect('/dashboard/problems')
    }

    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-center p-8">

            {/* Main Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-8">
                <Card className="border-2 border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 p-6">
                    <CardContent className="flex flex-col items-center text-center space-y-6 p-6">
                        <div className="p-4 rounded-full bg-primary/40 dark:bg-primary/20">
                            <PlusCircle className="size-8 text-primary" />
                        </div>
                        <div className="space-y-2">
                            <CardTitle className="text-2xl">Create New Problem</CardTitle>
                            <CardDescription className="text-base leading-relaxed">
                                Start fresh with a new, empty problem.
                            </CardDescription>
                        </div>
                        <Button
                            size="lg"
                            onClick={handleCreateNewProblem}
                        >
                            Create Problem
                        </Button>
                    </CardContent>
                </Card>

                <Card className="border-2 border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 p-6">
                    <CardContent className="flex flex-col items-center text-center space-y-6 p-6">
                        <div className="p-4 rounded-full bg-primary/40 dark:bg-primary/20">
                            <BookOpen className="size-8 text-primary" />
                        </div>
                        <div className="space-y-2">
                            <CardTitle className="text-2xl">Continue Previous Work</CardTitle>
                            <CardDescription className="text-base leading-relaxed">
                                Resume working where you left off.
                            </CardDescription>
                        </div>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={handleContinueProblem}
                        >
                            View My Problems
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}