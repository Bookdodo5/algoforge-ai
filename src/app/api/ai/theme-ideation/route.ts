import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { THEME_IDEATION_SYSTEM_INSTRUCTION } from "@/lib/prompts";
import { NextResponse } from "next/server";

const themeProfileSchema = z.object({
    themes: z.array(z.string())
        .describe("An array of exactly 100 theme strings (numbered 1-100)"),
});

export async function ideateThemes(): Promise<object | null> {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    console.log("Ideating themes");

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Generate exactly 100 individual theme strings, one per array element. Do not combine multiple themes into single strings or use numbered lists.",
        config: {
            responseMimeType: "application/json",
            systemInstruction: THEME_IDEATION_SYSTEM_INSTRUCTION,
            responseSchema: themeProfileSchema,
            temperature: 2
        },
    });
    console.log("Response: ", response);

    if (!response.text) throw new Error("AI service returned empty response");
    const parsedResponse = JSON.parse(response.text);

    console.log("Parsed response: ", parsedResponse);

    const validation = themeProfileSchema.safeParse(parsedResponse);
    if (!validation.success) throw new Error(validation.error.message);
    console.log("Validation success: ", validation.success);
    return validation.data;
}

export async function GET(request: Request) {
    try {
        const result = await ideateThemes();
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("Theme ideation error:", error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}