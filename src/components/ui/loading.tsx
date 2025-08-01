import { Loader2 } from "lucide-react"

export function LoadingPage({text}: {text: string}) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex items-center justify-center gap-2">
                <Loader2 className="animate-spin size-8" />
                {text && <span className="text-sm text-muted-foreground">{text}</span>}
            </div>
        </div>
    )
}