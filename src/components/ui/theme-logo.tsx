import * as React from "react"
import Image from "next/image"

export function ThemeLogo({ className = "" }: {className?: string}) {
    
    return (
        <div className={`relative ${className}`}>
            <Image 
                src="/logo_dark.svg" 
                alt="AlgoForge Logo" 
                className={`dark:hidden`}
            />
            <Image 
                src="/logo_light.svg" 
                alt="AlgoForge Logo" 
                className={`hidden dark:block`}
            />
        </div>
    )
} 