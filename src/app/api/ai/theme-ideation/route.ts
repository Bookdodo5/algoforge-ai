import { z } from "zod";
import { THEME_IDEATION_SYSTEM_INSTRUCTION } from "@/lib/prompts";
import { NextResponse } from "next/server";
import { generateAiResponse } from "@/lib/ai";

const themeProfileSchema = z.object({
    themes: z.array(z.string())
        .describe("An array of exactly 100 theme strings (numbered 1-100)"),
});

export async function GET(request: Request) {
    try {
        const message = `
Generate exactly 100 individual theme strings, one per array element.
Do not combine multiple themes into single strings or use numbered lists.
`;

        const result = await generateAiResponse(
            THEME_IDEATION_SYSTEM_INSTRUCTION,
            message,
            themeProfileSchema
        );

        return NextResponse.json(result);
    }
    catch (error) {
        console.error("Theme ideation error:", error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}