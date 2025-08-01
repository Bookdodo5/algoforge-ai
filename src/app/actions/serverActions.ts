'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { getServerSession } from 'next-auth'
import { authConfig } from '../api/auth/[...nextauth]/route'

export const sessionValidation = async () => {
    const session = await getServerSession(authConfig);
    if(!session?.user?.id) throw new Error('Unauthorized');
    return session.user.id;
}

export interface ProblemUpdateData {
    title?: string;
    currentStep?: number;
    lastValidStep?: number;
    isCompleted?: boolean;
    theme?: string;
    vibeProfile?: any;
    selectedLogline?: any;
    narrative?: string;
    selectedAlgorithms?: any;
    problemProposal?: any;
    formalizedProblem?: any;
    technicalOutline?: string;
    solutionCode?: string;
    testGenerator?: string;
}

export interface VibeProfile {
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

export interface LoglineData {
    protagonist: string
    goal: string
    obstacle: string
    stakes?: string | null
    logline_sentence: string
}

export async function createNewProblem() {
    const userId = await sessionValidation();
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
    const userId = await sessionValidation();
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
    const userId = await sessionValidation();
    
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

// Specialized function for updating workflow progress
export async function updateProblemStep(problemId: string, currentStep: number, stepData: Partial<ProblemUpdateData>) {
    const userId = await sessionValidation();
    
    const problem = await prisma.problemGeneration.update({
        where: {
            id: problemId,
            userId: userId,
        },
        data: {
            ...stepData,
            currentStep,
            lastValidStep: currentStep,
            updatedAt: new Date(),
        },
    })

    revalidatePath('/')
    return problem;
}

export async function starLogline(logline: Object) {
    const userId = await sessionValidation();
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
    const userId = await sessionValidation();
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
    const userId = await sessionValidation();
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
    const userId = await sessionValidation();
    const starredTheme = await prisma.starredTheme.delete({
        where: {
            id: starredThemeId,
            userId: userId,
        }
    })

    revalidatePath('/')
    return starredTheme;
}

export async function createVibeProfile(vibeProfile: VibeProfile) {
    const userId = await sessionValidation();
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
    const userId = await sessionValidation();
    const deletedVibeProfile = await prisma.vibeProfile.delete({
        where: {
            id: vibeProfileId,
            userId: userId,
        }
    })

    revalidatePath('/')
    return deletedVibeProfile
}

export async function editVibeProfile(vibeProfileId: string, vibeProfile: VibeProfile) {
    const userId = await sessionValidation();
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