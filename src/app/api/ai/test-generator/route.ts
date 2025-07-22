import { z } from "zod";
import { TEST_GENERATOR_SYSTEM_INSTRUCTION } from "@/lib/prompts";
import { NextResponse } from "next/server";
import { generateAiResponse } from "@/lib/ai";

const testGeneratorSchema = z.object({
    python_code: z.string().describe("A well-structured test generator written in Python"),
});

export async function POST(request: Request) {
    try {
        const { fullProblem } = await request.json();
        if (!fullProblem) {
            throw new Error("Full problem is required");
        }

        const message = `
Generate a test generator for the following problem:

Problem: ${JSON.stringify(fullProblem, null, 2)}

The output should be a valid JSON object with a single field, "python_code", which is a string written in Python format.

**IMPORTANT:**
- The output MUST be a valid, compact, single-line JSON object with a single field "python_code".
- The value of "python_code" must be a Python script as a string, with ALL special characters (including newlines, quotes, and backslashes) properly escaped for JSON.
- Do NOT include any extra text, markdown, or code fences. Output ONLY the JSON object.
`;

        const result = await generateAiResponse(
            TEST_GENERATOR_SYSTEM_INSTRUCTION,
            message,
            testGeneratorSchema
        );

        return NextResponse.json(result);
    }
    catch (error) {
        console.error("Test generator error:", error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}