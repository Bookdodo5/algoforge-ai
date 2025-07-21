import { GoogleGenAI } from "@google/genai";
import { object, z } from "zod";
import { NARRATIVE_GENERATION_SYSTEM_INSTRUCTION } from "@/lib/prompts";
import { NextResponse } from "next/server";

const narrativeGenerationSchema = z.object({
    narrative: z.string().describe("A narrative of 200-300 words"),
});

export async function generateNarrative(logline: object, vibe: object, priorText: string): Promise<object | null> {
    if (!logline || !vibe) {
        throw new Error("Logline and vibe are required");
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    console.log("Generating narrative");

    const message = `Generate a narrative based on this logline and vibe profile:
Logline: ${JSON.stringify(logline, null, 2)}
Voice Profile: ${JSON.stringify(vibe, null, 2)}

${priorText ? `
Prior Text: ${priorText}
**Important** You have to continue writing the narrative from where the prior text left off. Do not start a new narrative. Do not rewrite the prior text. Just continue writing the narrative from where the prior text left off.

` : ""}

The output should be a valid JSON object with a single field, "narrative", which is a string of 200-300 words.
`;

    console.log(message)

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: message,
        config: {
            responseMimeType: "application/json",
            systemInstruction: NARRATIVE_GENERATION_SYSTEM_INSTRUCTION,
            temperature: 1
        },
    });
    console.log("Response: ", response, response.text);

    if (!response.text) throw new Error("AI service returned empty response");
    const parsedResponse = JSON.parse(response.text);

    console.log("Parsed response: ", parsedResponse);

    const validation = narrativeGenerationSchema.safeParse(parsedResponse);
    if (!validation.success) throw new Error(validation.error.message);
    console.log("Validation success: ", validation.success);
    return validation.data;
}

export async function POST(request: Request) {
    try {
        const { logline, vibe, priorText } = await request.json();
        console.log("Logline: ", logline);
        console.log("Vibe: ", vibe);
        console.log("Prior Text: ", priorText);
        const result = await generateNarrative(logline, vibe, priorText);
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("Narrative generation error:", error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}