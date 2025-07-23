"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"

export function Providers({
    children,
    ...props
}: React.ComponentProps<typeof ThemeProvider>) {
    return (
        <ThemeProvider {...props}>
            <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
    )
}