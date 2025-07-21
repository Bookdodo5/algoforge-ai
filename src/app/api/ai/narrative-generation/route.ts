import { z } from "zod";
import { NARRATIVE_GENERATION_SYSTEM_INSTRUCTION } from "@/lib/prompts";
import { NextResponse } from "next/server";
import { generateAiResponse } from "@/lib/ai";

const narrativeGenerationSchema = z.object({
    narrative: z.string().describe("A narrative of 200-300 words"),
});

export async function POST(request: Request) {
    try {
        const { logline, vibe, priorText } = await request.json();
        if (!logline || !vibe) {
            throw new Error("Logline and vibe are required");
        }

        const message = `
Generate a narrative based on this logline and vibe profile:
Logline: ${JSON.stringify(logline, null, 2)}
Voice Profile: ${JSON.stringify(vibe, null, 2)}

${priorText ? `
Prior Text: ${priorText}
**Important** You have to continue writing the narrative from where the prior text left off. Do not start a new narrative. Do not rewrite the prior text. Just continue writing the narrative from where the prior text left off.

` : ""}

The output should be a valid JSON object with a single field, "narrative", which is a string of 200-300 words.
`;

        const result = await generateAiResponse(
            NARRATIVE_GENERATION_SYSTEM_INSTRUCTION,
            message,
            narrativeGenerationSchema
        );

        return NextResponse.json(result);
    }
    catch (error) {
        console.error("Narrative generation error:", error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}