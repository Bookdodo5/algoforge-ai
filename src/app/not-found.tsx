import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TriangleAlert, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-background">
            <Card className="w-full max-w-lg bg-destructive/20 border-destructive">
                <CardHeader className="flex gap-4 items-center">
                    <TriangleAlert className="size-20" />
                    <div className="flex flex-col gap-2">
                        <CardTitle>Page Not Found</CardTitle>
                        <CardDescription>
                            The page you're looking for doesn't exist...
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
            <Link href="/" className="mt-8">
                <Button variant="ghost" className="flex items-center gap-2 cursor-pointer">
                    <ArrowLeft className="size-4" />
                    Back to Home
                </Button>
            </Link>
        </div>
    );
};