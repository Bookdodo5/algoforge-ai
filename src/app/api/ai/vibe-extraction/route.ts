import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { z } from "zod";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});

const systemInstruction = `
You are a writing style analyzer. Analyze the provided text and return a JSON object describing the author's voice and style.

Focus on HOW they write, not WHAT they write about.
You MUST NOT write about the content of the text, only about the style.
If you write about the content of the text, you will be penalized.
Imagine if the same person who wrote the sample text were to write a different text, how would they write it?
Do NOT mention at all about the what the sample is about.

Return ONLY a valid JSON object with these fields:
- voice_summary: Brief description of the author's voice
- vibe_keywords: 3-5 words describing the style
- stylistic_tags: 3-5 adjectives describing the writing
- formality: "Academic", "Standard", "Casual", or "Shitpost"
- pacing: "Contemplative", "Steady", or "Urgent" 
- complexity: "Minimalist", "Standard", or "World-building"
- humor_style: Array of "None", "Dry", "Absurdist", "Slapstick", "Meme-based", "Satire", or "Pun"
- aesthetic: One phrase describing the overall aesthetic
- sample_text: A few (2-3) representative sentences from the text. Don't make it longer than 5 sentences.
- language: The language of the text

Examples:

Input: "You are given an array A of N integers. You have to answer Q queries. For each query, you have to find the number of distinct elements in the subarray from index L to R."
Output: {
  "voice_summary": "An impersonal, clinical instructor giving direct commands and technical specifications.",
  "vibe_keywords": ["specification", "instruction", "computation", "query"],
  "stylistic_tags": ["Clinical", "Dry", "Impersonal", "Direct"],
  "formality": "Academic",
  "pacing": "Steady",
  "complexity": "Minimalist",
  "humor_style": ["None"],
  "aesthetic": "Technical specification sheet",
  "sample_text": "You are given an array A of N integers. You have to answer Q queries.",
  "language": "English"
}

Input: "「大丈夫だよ。ぼく両利きだから」「そうなのか？」「元は左利きだったんだけど、それを矯正して右利きにした。でも《箸を持つ方の手が右手です》って教えてくれた先生が嫌いだったから左利きに戻したんだ。それが小学三年生のときの話」「噓つけ」「うん。ごめん」"
Output: {
  "voice_summary": "A narrator with a deceptively simple voice engaging in witty, sharp, and slightly absurd banter that quickly spirals and de-escalates.",
  "vibe_keywords": ["dialogue", "banter", "deception", "confession", "monologue"],
  "stylistic_tags": ["Witty", "Off-kilter", "Character-focused", "Rambling"],
  "formality": "Casual",
  "pacing": "Contemplative",
  "complexity": "Standard",
  "humor_style": ["Dry", "Absurdist"],
  "aesthetic": "Modern Japanese light novel banter",
  "sample_text": "「大丈夫だよ。ぼく両利きだから」「そうなのか？」「噓つけ」「うん。ごめん」",
  "language": "Japanese"
}

Input: "Here's my offer: I'll give you an apple for an orange and a pear for a plum and two bananas for a pineapple and a monkey to eat the fruit and you can name the monkey George and he'll love you forever and he will never die"
Output: {
  "voice_summary": "A hyperactive, enthusiastic deal-maker whose proposals rapidly spiral out of control into breathless, absurd generosity.",
  "vibe_keywords": ["trade", "escalation", "hyperbole", "run-on"],
  "stylistic_tags": ["Rambling", "Breathless", "Enthusiastic", "Generous"],
  "formality": "Casual",
  "pacing": "Urgent",
  "complexity": "Standard",
  "humor_style": ["Absurdist", "Slapstick"],
  "aesthetic": "Fever-dream negotiation",
  "sample_text": "I'll give you an apple for an orange and a pear for a plum and two bananas for a pineapple",
  "language": "English"
}

Input: "Bro is NOT the Gyattler 💀 He does NOT have the Ohio Rizz 😭 My sigma can't be this fanum tax 💯 Blud thinks he's the Kai Cenat of the function 🔥🗣️"
Output: {
  "voice_summary": "An extremely online individual communicating entirely through a dense collage of niche, rapidly evolving internet slang.",
  "vibe_keywords": ["copypasta", "commentary", "slang-salad", "reaction"],
  "stylistic_tags": ["Repetitive", "Niche", "Ironic", "Low-effort", "Emoji-heavy"],
  "formality": "Shitpost",
  "pacing": "Urgent",
  "complexity": "Minimalist",
  "humor_style": ["Meme-based", "Absurdist"],
  "aesthetic": "Gen Z internet brainrot",
  "sample_text": "Bro is NOT the Gyattler 💀 He does NOT have the Ohio Rizz 😭 My sigma can't be this fanum tax 💯",
  "language": "English"
}
`;

const vibeProfileSchema = z.object({
    voice_summary: z.string(),
    vibe_keywords: z.array(z.string()),
    stylistic_tags: z.array(z.string()),
    formality: z.enum(["Academic", "Standard", "Casual", "Shitpost"]),
    pacing: z.enum(["Contemplative", "Steady", "Urgent"]),
    complexity: z.enum(["Minimalist", "Standard", "World-building"]),
    humor_style: z.array(z.enum(["None", "Dry", "Absurdist", "Slapstick", "Meme-based", "Satire", "Pun"])),
    aesthetic: z.string(),
    sample_text: z.string(),
    language: z.string(),
});

async function main(sample: string) {
    try {
        // Input validation
        if (sample.trim().length === 0) {
            return NextResponse.json({
                error: "Sample text cannot be empty",
                code: "EMPTY_SAMPLE"
            }, { status: 400 });
        }

        // API key validation
        if (!process.env.GEMINI_API_KEY) {
            console.error("GEMINI_API_KEY not configured");
            return NextResponse.json({
                error: "Service temporarily unavailable",
                code: "CONFIGURATION_ERROR"
            }, { status: 500 });
        }

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite-preview-06-17",
            contents: sample,
            config: {
                responseMimeType: "application/json",
                systemInstruction: systemInstruction,
                responseSchema: vibeProfileSchema,
                temperature: 0.5
            },
        });

        // Validate AI response
        if (!response.text) {
            return NextResponse.json({
                error: "AI service returned empty response",
                code: "AI_EMPTY_RESPONSE"
            }, { status: 500 });
        }

        // Parse and validate JSON response
        let parsedResponse;
        try {
            parsedResponse = JSON.parse(response.text);
            console.log("Raw AI response:", JSON.stringify(parsedResponse, null, 2));
        } catch (parseError) {
            console.error("Failed to parse AI response:", parseError);
            console.error("Raw response text:", response.text);
            return NextResponse.json({
                error: "Invalid response format from AI service",
                code: "AI_PARSE_ERROR"
            }, { status: 500 });
        }

        // Validate against schema with fallback values
        const validatedResponse = vibeProfileSchema.safeParse(parsedResponse);
        if(!validatedResponse.success) {
            return NextResponse.json({
                error: "Invalid response format from AI service",
                code: "AI_INVALID_RESPONSE",
                details: validatedResponse.error
            }, { status: 500 });
        }

        return NextResponse.json({
            vibe: parsedResponse,
            success: true
        });

    } catch (error) {
        console.error("Vibe extraction error:", error);
        return NextResponse.json({
            error: "Internal server error",
            code: "INTERNAL_ERROR",
            details: error
        }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        // Validate request method
        if (request.method !== 'POST') {
            return NextResponse.json({
                error: "Method not allowed",
                code: "METHOD_NOT_ALLOWED"
            }, { status: 405 });
        }

        // Parse request body
        let body;
        try {
            body = await request.json();
        } catch (parseError) {
            return NextResponse.json({
                error: "Invalid JSON in request body",
                code: "INVALID_JSON"
            }, { status: 400 });
        }

        // Validate body structure
        if (typeof body !== 'object' || typeof body.sample !== 'string') {
            return NextResponse.json({
                error: "Request body must be an object with a 'sample' property of type string",
                code: "INVALID_BODY"
            }, { status: 400 });
        }

        return await main(body.sample);

    } catch (error) {
        console.error("Request handling error:", error);
        return NextResponse.json({
            error: "Internal server error",
            code: "INTERNAL_ERROR"
        }, { status: 500 });
    }
}