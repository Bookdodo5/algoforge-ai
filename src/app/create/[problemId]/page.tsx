import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Problem({params}: {params: {problemId: string}}) {
    const { problemId } = params;

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>{problemId}</CardTitle>
                </CardHeader>
            </Card>
        </div>
    );
}