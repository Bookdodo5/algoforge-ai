import { z } from "zod";
import { NARRATIVE_GENERATION_SYSTEM_INSTRUCTION } from "@/lib/prompts";
import { NextResponse } from "next/server";
import { generateAiResponse } from "@/lib/ai";
import { withAuth } from "@/lib/auth-middleware";   

const outlineSchema = z.object({
    technicalOutline: z.string().describe("A well-structured implementation outline written in markdown"),
});

export const POST = withAuth(async (request: Request, session: any) => {
    try {
        const { fullProblem } = await request.json();
        if (!fullProblem) {
            throw new Error("Full problem is required");
        }

        const message = `
Generate a well-structured implementation outline based on this full problem:
Full Problem: ${JSON.stringify(fullProblem, null, 2)}

The output should be a valid JSON object with a single field, "technicalOutline", which is a string written in markdown format.
`;

        const result = await generateAiResponse(
            NARRATIVE_GENERATION_SYSTEM_INSTRUCTION,
            message,
            outlineSchema
        );

        return NextResponse.json(result);
    }
    catch (error) {
        console.error("Implementation outline error:", error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
});