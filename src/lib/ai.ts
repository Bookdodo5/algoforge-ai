import { GoogleGenAI } from "@google/genai";
import { z } from "zod";

function cleanJsonResponse(text: string): string {
    text = text.trim();
    
    if (text.startsWith('```json')) {
        text = text.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (text.startsWith('```')) {
        text = text.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }
    
    const startBrace = text.indexOf('{');
    const endBrace = text.lastIndexOf('}');
    
    if (startBrace !== -1 && endBrace !== -1 && endBrace > startBrace) {
        text = text.substring(startBrace, endBrace + 1);
    }
    
    return text;
}

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

    const cleanedResponse = cleanJsonResponse(response.text);
    console.log("Cleaned response:", cleanedResponse);

    try {
        const parsedResponse = JSON.parse(cleanedResponse);
        console.log("Parsed AI response:", parsedResponse);

        const validation = schema.safeParse(parsedResponse);
        if (!validation.success) {
            throw new Error(`Invalid AI response structure: ${validation.error.message}`);
        }
        return validation.data;
    } catch (parseError) {
        console.error("JSON parsing error:", parseError);
        console.error("Failed to parse response:", cleanedResponse);
        throw new Error(`Failed to parse AI response as JSON: ${parseError instanceof Error ? parseError.message : 'Unknown error'}`);
    }
} 