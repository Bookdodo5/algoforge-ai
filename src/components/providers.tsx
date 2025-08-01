"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 120 * 1000,
            retry: 1,
        },
    },
})

export function Providers({
    children,
    ...props
}: React.ComponentProps<typeof ThemeProvider>) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider 
                {...props}
            >
                <SessionProvider>{children}</SessionProvider>
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}