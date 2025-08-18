'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { getServerSession } from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { Session } from "next-auth"
import { User } from "next-auth"

const authConfig = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/signin',
        error: '/auth/error',
    },
    callbacks: {
        async session({ session, user }: { session: Session, user: User }) {
            if (session.user) {
                session.user.id = user.id
            }
            return session
        }
    },
}

export async function sessionValidation() {
    const session = await getServerSession(authConfig);
    if (!session?.user?.id) return new Error('Unauthorized');
    return session;
}

export interface ProblemUpdateData {
    title?: string;
    currentStep?: number;
    lastValidStep?: number;
    isCompleted?: boolean;
    theme?: string | null;
    vibeProfile?: any | null;
    selectedLogline?: any | null;
    narrative?: string | null;
    selectedAlgorithms?: any | null;
    problemProposal?: any | null;
    formalizedProblem?: any | null;
    technicalOutline?: string | null;
    solutionCode?: string | null;
    testGenerator?: string | null;
}

export interface VibeProfile {
    id: string,
    userId: string,
    vibeProfile: {
        vibe_name: string
        voice_summary: string
        vibe_keywords: string[]
        stylistic_tags: string[]
        formality: "Academic" | "Standard" | "Casual" | "Shitpost"
        pacing: "Contemplative" | "Steady" | "Urgent"
        complexity: "Minimalist" | "Standard" | "World-building"
        humor_styles: ("None" | "Dry" | "Absurdist" | "Slapstick" | "Meme-based" | "Satire" | "Pun")[]
        aesthetic: string
        sample_text: string
        language: string
    }
}

export interface LoglineData {
    protagonist: string
    goal: string
    obstacle: string
    stakes?: string | null
    logline_sentence: string
}

export async function createNewProblem() {
    const session = await sessionValidation();
    if(session instanceof Error) {
        console.error(session)
        return null;
    }
    const userId = session.user.id;
    const problem = await prisma.problemGeneration.create({
        data: {
            userId: userId,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    })

    revalidatePath('/')
    return problem;
}

export async function deleteProblem(problemId: string) {
    const session = await sessionValidation();
    if(session instanceof Error) {
        console.error(session)
        return null;
    }
    const userId = session.user.id;
    const problem = await prisma.problemGeneration.delete({
        where: {
            id: problemId,
            userId: userId,
        }
    })

    revalidatePath('/')
    return problem;
}

export async function updateProblem(problemId: string, data: ProblemUpdateData) {
    const session = await sessionValidation();
    if(session instanceof Error) {
        console.error(session)
        return null;
    }
    const userId = session.user.id;

    const problem = await prisma.problemGeneration.update({
        where: {
            id: problemId,
            userId: userId,
        },
        data: { ...data, updatedAt: new Date() },
    })

    revalidatePath('/')
    return problem;
}

export async function starLogline(logline: Object) {
    const session = await sessionValidation();
    if(session instanceof Error) {
        console.error(session)
        return null;
    }
    const userId = session.user.id;
    const starredLogline = await prisma.starredLogline.create({
        data: {
            userId: userId,
            logline: JSON.stringify(logline),
        },
    })

    revalidatePath('/')
    return starredLogline;
}

export async function unstarLogline(starredLoglineId: string) {
    const session = await sessionValidation();
    if(session instanceof Error) {
        console.error(session)
        return null;
    }
    const userId = session.user.id;
    const starredLogline = await prisma.starredLogline.delete({
        where: {
            id: starredLoglineId,
            userId: userId,
        }
    })

    revalidatePath('/')
    return starredLogline;
}

export async function starTheme(theme: string) {
    const session = await sessionValidation();
    if(session instanceof Error) {
        console.error(session)
        return null;
    }
    const userId = session.user.id;
    const starredTheme = await prisma.starredTheme.create({
        data: {
            userId: userId,
            theme: theme,
        },
    })

    revalidatePath('/')
    return starredTheme;
}

export async function unstarTheme(starredThemeId: string) {
    const session = await sessionValidation();
    if(session instanceof Error) {
        console.error(session)
        return null;
    }
    const userId = session.user.id;
    const starredTheme = await prisma.starredTheme.delete({
        where: {
            id: starredThemeId,
            userId: userId,
        }
    })

    revalidatePath('/')
    return starredTheme;
}

export async function createVibeProfile(vibeProfile: VibeProfile["vibeProfile"]) {
    const session = await sessionValidation();
    if(session instanceof Error) {
        console.error(session)
        return null;
    }
    const userId = session.user.id;
    const createdVibeProfile = await prisma.vibeProfile.create({
        data: {
            userId: userId,
            vibeProfile: JSON.stringify(vibeProfile),
        },
    })

    revalidatePath('/')
    return createdVibeProfile;
}

export async function deleteVibeProfile(vibeProfileId: string) {
    const session = await sessionValidation();
    if(session instanceof Error) {
        console.error(session)
        return null;
    }
    const userId = session.user.id;
    const deletedVibeProfile = await prisma.vibeProfile.delete({
        where: {
            id: vibeProfileId,
            userId: userId,
        }
    })

    revalidatePath('/')
    return deletedVibeProfile
}

export async function editVibeProfile(vibeProfileId: string, vibeProfile: VibeProfile["vibeProfile"]) {
    const session = await sessionValidation();
    if(session instanceof Error) {
        console.error(session)
        return null;
    }
    const userId = session.user.id;
    const editedVibeProfile = await prisma.vibeProfile.update({
        where: {
            id: vibeProfileId,
            userId: userId,
        },
        data: {
            vibeProfile: JSON.stringify(vibeProfile),
        },
    })

    revalidatePath('/')
    return editedVibeProfile;
}

export async function editLogline(loglineId: string, logline: LoglineData) {
    const session = await sessionValidation();
    if(session instanceof Error) {
        console.error(session)
        return null;
    }
    const userId = session.user.id;
    const editedLogline = await prisma.starredLogline.update({
        where: {
            id: loglineId,
            userId: userId,
        },
        data: {
            logline: JSON.stringify(logline),
        },
    })

    revalidatePath('/')
    return editedLogline;
}

export async function editTheme(themeId: string, theme: string) {
    const session = await sessionValidation();
    if(session instanceof Error) {
        console.error(session)
        return null;
    }
    const userId = session.user.id;
    const editedTheme = await prisma.starredTheme.update({
        where: {
            id: themeId,
            userId: userId,
        },
        data: {
            theme: theme,
        },
    })

    revalidatePath('/')
    return editedTheme;
}