import { z } from "zod";
import { LOGLINE_EXPANSION_SYSTEM_INSTRUCTION } from "@/lib/prompts";
import { NextResponse } from "next/server";
import { generateAiResponse } from "@/lib/ai";

const loglineExpansionSchema = z.object({
    loglines: z.array(z.object({
        protagonist: z.string(),
        goal: z.string(),
        obstacle: z.string(),
        stakes: z.string().optional(),
        logline_sentence: z.string()
    }))
        .describe("An array of exactly 8 logline JSON objects"),
});

export async function POST(request: Request) {
    try {
        const { theme, vibe } = await request.json();
        if (!theme || !vibe) {
            throw new Error("Theme and vibe are required");
        }

        const message = `
Generate exactly 8 loglines based on this theme and voice profile:
Theme: ${theme}
Voice Profile: ${JSON.stringify(vibe, null, 2)}

Each logline must be an object with these fields:
- protagonist: A 2-5 word description of the main character
- goal: What the protagonist wants to achieve
- obstacle: The core conflict/challenge
- stakes: (optional) What happens if they fail
- logline_sentence: A complete sentence combining all elements`;

        const result = await generateAiResponse(
            LOGLINE_EXPANSION_SYSTEM_INSTRUCTION,
            message,
            loglineExpansionSchema
        );

        return NextResponse.json(result);
    }
    catch (error) {
        console.error("Logline expansion error:", error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}