"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()

    const toggleTheme = React.useCallback(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }, [resolvedTheme, setTheme])

    return (
        <Button onClick={toggleTheme} variant="outline" size="icon" className="rounded-full border-2 border-muted-foreground hover:text-accent">
            <MoonIcon className="dark:hidden" suppressHydrationWarning />
            <SunIcon className="hidden dark:block" suppressHydrationWarning />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}