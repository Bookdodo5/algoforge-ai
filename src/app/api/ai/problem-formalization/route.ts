import { z } from "zod";
import { PROBLEM_FORMALIZATION_SYSTEM_INSTRUCTION } from "@/lib/prompts";
import { NextResponse } from "next/server";
import { generateAiResponse } from "@/lib/ai";
import { withAuth } from "@/lib/auth-middleware";

const problemFormalizationOutputSchema = z.object({
    problemTitle: z.string(),
    problemStatement: z.string(),
    constraints: z.string(),
    inputFormat: z.string(),
    outputFormat: z.string(),
    subtasks: z.array(z.object({
        points: z.number(),
        description: z.string(),
        constraints: z.string(),
        intendedSolution: z.string(),
    })),
    exampleTestcases: z.array(z.object({
        input: z.string(),
        output: z.string(),
        explanation: z.string(),
    })),
    notes: z.string().optional(),
});

export const POST = withAuth(async (request: Request, session: any) => {
    try {
        const { narrative, problem, vibe } = await request.json();
        if (!narrative || !problem || !vibe) {
            throw new Error("Narrative, problem, and vibe are required");
        }

        const message = `
Generate a problem statement based on this problem proposal:
${JSON.stringify(problem, null, 2)}

Based on this narrative:
${narrative}

The authorial voice profile that should influence the writing style:
${JSON.stringify(vibe, null, 2)}
        `;

        const result = await generateAiResponse(
            PROBLEM_FORMALIZATION_SYSTEM_INSTRUCTION,
            message,
            problemFormalizationOutputSchema
        );

        return NextResponse.json(result);
    } catch (error) {
        console.error("Problem formalization error:", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
});
