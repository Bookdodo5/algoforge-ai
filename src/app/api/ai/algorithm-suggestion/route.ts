import { z } from "zod";
import { ALGORITHM_SUGGESTION_SYSTEM_INSTRUCTION } from "@/lib/prompts";
import { NextResponse } from "next/server";
import { generateAiResponse } from "@/lib/ai";
import { ALGORITHM_LIBRARY } from "@/lib/algorithms";

const algorithmSuggestionSchema = z.object({
    suggestions: z.array(z.object({
        id: z.string(),
        narrativeJustification: z.string()
    }))
});

export async function POST(request: Request) {
    try {
        const { narrative } = await request.json();
        if (!narrative) {
            throw new Error("Narrative is required");
        }

        const message = `
        Generate 5 distinct algorithm suggestions for the following narrative:
        ${narrative}

        Given the algorithm library:
        ${JSON.stringify(ALGORITHM_LIBRARY, null, 2)}
        `;

        const result = await generateAiResponse(
            ALGORITHM_SUGGESTION_SYSTEM_INSTRUCTION,
            message,
            algorithmSuggestionSchema
        );
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("Algorithm suggestion error:", error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}