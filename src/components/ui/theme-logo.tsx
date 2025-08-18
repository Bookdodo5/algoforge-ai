import * as React from "react"

export function ThemeLogo({ className = "" }: {className?: string}) {
    
    return (
        <div className={`relative ${className}`}>
            <img 
                src="/logo_dark.svg" 
                alt="AlgoForge Logo" 
                className={`dark:hidden`}
            />
            <img 
                src="/logo_light.svg" 
                alt="AlgoForge Logo" 
                className={`hidden dark:block`}
            />
        </div>
    )
} 