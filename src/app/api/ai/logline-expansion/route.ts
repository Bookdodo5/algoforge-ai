import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { LOGLINE_EXPANSION_SYSTEM_INSTRUCTION } from "@/lib/prompts";
import { NextResponse } from "next/server";

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

export async function expandLoglines(theme: string, vibe: object): Promise<object | null> {
    if (!theme || !vibe) {
        throw new Error("Theme and vibe are required");
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    console.log("Expanding loglines");

    const message = `Generate exactly 8 loglines based on this theme and voice profile:
Theme: ${theme}
Voice Profile: ${JSON.stringify(vibe, null, 2)}

Each logline must be an object with these fields:
- protagonist: A 2-5 word description of the main character
- goal: What the protagonist wants to achieve
- obstacle: The core conflict/challenge
- stakes: (optional) What happens if they fail
- logline_sentence: A complete sentence combining all elements`;

    console.log(message)

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: message,
        config: {
            responseMimeType: "application/json",
            systemInstruction: LOGLINE_EXPANSION_SYSTEM_INSTRUCTION,
            temperature: 0.7
        },
    });
    console.log("Response: ", response, response.text);

    if (!response.text) throw new Error("AI service returned empty response");
    const parsedResponse = JSON.parse(response.text);

    console.log("Parsed response: ", parsedResponse);

    const validation = loglineExpansionSchema.safeParse(parsedResponse);
    if (!validation.success) throw new Error(validation.error.message);
    console.log("Validation success: ", validation.success);
    return validation.data;
}

export async function POST(request: Request) {
    try {
        const { theme, vibe } = await request.json();
        console.log("Theme: ", theme);
        console.log("Vibe: ", vibe);
        const result = await expandLoglines(theme, vibe);
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("Logline expansion error:", error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}