import { z } from "zod";
import { LOGLINE_EXPANSION_SYSTEM_INSTRUCTION } from "@/lib/prompts";
import { NextResponse } from "next/server";
import { generateAiResponse } from "@/lib/ai";
import { withAuth } from "@/lib/auth-middleware";

const loglineExpansionSchema = z.object({
    loglines: z.array(z.object({
        protagonist: z.string(),
        goal: z.string(),
        obstacle: z.string(),
        stakes: z.string(),
        logline_sentence: z.string()
    }))
        .describe("An array of exactly 8 logline JSON objects"),
});

export const POST = withAuth(async (request: Request, _session) => {
    try {
        const { theme, vibe } = await request.json();
        if (!theme || !vibe) {
            throw new Error("Theme and vibe are required");
        }

        const message = `
Generate exactly 8 loglines based on this theme and voice profile:
Theme: ${theme}
Voice Profile: ${JSON.stringify({ ...vibe, complexity: "Minimalist" }, null, 2)}
DON'T MAKE IT TOO VERBOSE. KEEP THE LOGLINE CONCISE AND SHORT, WHILE CONVEYING THE MAIN IDEA. KEEP IT SIMPLE
`;

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
});