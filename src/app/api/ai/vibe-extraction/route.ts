import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { VIBE_EXTRACTION_SYSTEM_INSTRUCTION } from "@/lib/prompts";
import { NextResponse } from "next/server";

const vibeProfileSchema = z.object({
    voice_summary: z.string()
        .describe("A summary of the author's voice"),
    vibe_keywords: z.array(z.string())
        .describe("A list of keywords that describe the author's voice"),
    stylistic_tags: z.array(z.string())
        .describe("A list of stylistic tags that describe the author's writing style"),
    formality: z.enum(["Academic", "Standard", "Casual", "Shitpost"])
        .describe("The formality of the author's writing"),
    pacing: z.enum(["Contemplative", "Steady", "Urgent"])
        .describe("The pacing of the author's writing"),
    complexity: z.enum(["Minimalist", "Standard", "World-building"])
        .describe("The complexity of the author's writing"),
    humor_style: z.array(z.enum(["None", "Dry", "Absurdist", "Slapstick", "Meme-based", "Satire", "Pun"]))
        .describe("The humor style of the author's writing"),
    aesthetic: z.string()
        .describe("The aesthetic of the author's writing"),
    sample_text: z.string()
        .describe("A sample text from the author's writing"),
    language: z.string()
        .describe("The language of the author's writing"),
});

export async function extractVibe(sample: string): Promise<object | null> {
    if (!sample || sample.trim() === "") {
        throw new Error("Sample text is required");
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    console.log("Extracting vibe from sample: ", sample);
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite-preview-06-17",
        contents: sample,
        config: {
            responseMimeType: "application/json",
            systemInstruction: VIBE_EXTRACTION_SYSTEM_INSTRUCTION,
            responseSchema: vibeProfileSchema,
            temperature: 0.5
        },
    });
    console.log("Response: ", response);

    if (!response.text) throw new Error("AI service returned empty response");
    const parsedResponse = JSON.parse(response.text);

    console.log("Parsed response: ", parsedResponse);

    const validation = vibeProfileSchema.safeParse(parsedResponse);
    if (!validation.success) throw new Error(validation.error.message);
    console.log("Validation success: ", validation.success);
    return validation.data;
}

export async function POST(request: Request) {
    try {
        const { sample } = await request.json();
        const result = await extractVibe(sample);
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("Vibe extraction error:", error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}