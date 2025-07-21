import { GoogleGenAI } from "@google/genai";
import { z } from "zod";

export async function generateAiResponse<T>(
    systemInstruction: string,
    message: string,
    schema: z.ZodType<T>
): Promise<T> {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    console.log("Generating AI response with message:", message);

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: message,
        config: {
            responseMimeType: "application/json",
            systemInstruction: systemInstruction,
            temperature: 0.7
        },
    });

    console.log("AI Response:", response.text);

    if (!response.text) {
        throw new Error("AI service returned empty response");
    }

    const parsedResponse = JSON.parse(response.text);
    console.log("Parsed AI response:", parsedResponse);

    const validation = schema.safeParse(parsedResponse);
    if (!validation.success) {
        throw new Error(`Invalid AI response structure: ${validation.error.message}`);
    }
    return validation.data;
} 