"use client"

import { ThemeToggle } from "./ui/theme-toggle";
import { ThemeLogo } from "./ui/theme-logo";
import { Button } from "./ui/button"
import Link from "next/link"
import { signIn, signOut } from "next-auth/react";
import * as React from "react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
    LayoutGrid,
    FileCode2,
    Sparkles,
    Palette,
    ScrollText,
    Plus,
    LogOut,
    BookOpen,
    Code,
    Database,
    Rocket
} from "lucide-react"
import { Session } from "next-auth";

function ListItem({
    title,
    children,
    href,
    icon: Icon,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & {
    href: string;
    icon?: React.ComponentType<{ className?: string }>
}) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="flex items-start gap-3 rounded-lg p-2 hover:bg-muted/50 transition-colors"
                >
                    <div className="flex-1">
                        <div className="flex items-center gap-2 text-sm font-medium leading-none mb-1">
                            {Icon && <Icon className="w-5 h-5 hover:text-accent dark:hover:text-primary" />}
                            {title}
                        </div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            {children}
                        </p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

export default function Navbar({ session }: { session: Session | null }) {
    return (
        <div className="h-16 flex justify-between items-center px-24 bg-background/80  backdrop-blur-sm fixed border-b-2 border-muted w-full z-50">
            <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center cursor-pointer">
                    <ThemeLogo className="w-10 h-10" />
                    <h1 className="text-2xl font-black text-foreground">ALGOFORGE</h1>
                </Link>
                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                        {session && (<>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/dashboard">
                                        <div className="flex items-center gap-2">
                                            <LayoutGrid className="w-4 h-4 peer-hover:text-accent peer-hover:dark:text-primary transition-colors" />
                                            Dashboard
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="flex items-center gap-2">
                                    <FileCode2 className="w-4 h-4" />
                                    My Creations
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-2 md:w-[400px] lg:w-[450px] lg:grid-cols-2">
                                        <ListItem
                                            href="/dashboard/problems"
                                            title="Problems"
                                            icon={FileCode2}
                                        >
                                            Manage your coding problems
                                        </ListItem>
                                        <ListItem
                                            href="/dashboard/vibes"
                                            title="Vibes"
                                            icon={Sparkles}
                                        >
                                            Browse your vibe profiles
                                        </ListItem>
                                        <ListItem
                                            href="/dashboard/themes"
                                            title="Themes"
                                            icon={Palette}
                                        >
                                            Browse your starred themes
                                        </ListItem>
                                        <ListItem
                                            href="/dashboard/loglines"
                                            title="Loglines"
                                            icon={ScrollText}
                                        >
                                            Browse your starred loglines
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </>)}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Learn
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 md:w-[200px] lg:w-[200px] lg:grid-cols-1">
                                    <ListItem
                                        href="/algorithms"
                                        title="Algorithms"
                                        icon={Code}
                                    >
                                        Algorithms and their uses
                                    </ListItem>
                                    <ListItem
                                        href="/resources"
                                        title="Resources"
                                        icon={Database}
                                    >
                                        Additional resources
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex items-center gap-4">
                {session ? (
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList>
                        <NavigationMenuItem>
                                <Link href="/create">
                                    <Button variant="default" size="sm" className="flex items-center gap-2 cursor-pointer">
                                        <Plus className="w-4 h-4" />
                                        Create Problem
                                    </Button>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="flex items-center gap-3 rounded-lg hover:bg-muted/50 transition-colors">
                                    <Avatar className="w-8 h-8">
                                        <AvatarImage 
                                            src={session?.user?.image || ""} 
                                            alt={`${session?.user?.name}'s avatar`}
                                        />
                                        <AvatarFallback>
                                            {session?.user?.name?.charAt(0) || "U"}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col items-start">
                                        <span className="text-sm font-semibold text-foreground">
                                            {session?.user?.name}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {session?.user?.email}
                                        </span>
                                    </div>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-[220px]">
                                        <li>
                                            <Button
                                                variant="ghost"
                                                onClick={() => signOut()}
                                                className="w-full justify-start gap-3 h-auto p-2 hover:bg-destructive/15 dark:hover:bg-destructive/15 hover:text-destructive transition-colors cursor-pointer"
                                            >
                                                <div className="p-2 rounded-md bg-destructive/15">
                                                    <LogOut className="w-4 h-4 text-destructive" />
                                                </div>
                                                <div className="flex-1 text-left">
                                                    <div className="text-sm font-medium">Sign Out</div>
                                                    <div className="text-xs text-muted-foreground">End your session
                                                    </div>
                                                </div>
                                            </Button>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                ) : (
                    <div className="flex items-center gap-2">
                        <Button
                            variant="default"
                            onClick={() => signIn()}
                            className="flex items-center gap-2"
                        >
                            <Rocket className="w-4 h-4" />
                            Start Creating
                        </Button>
                    </div>
                )}
                <ThemeToggle />
            </div>
        </div>
    );
}