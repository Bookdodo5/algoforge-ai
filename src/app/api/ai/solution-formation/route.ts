import { z } from "zod";
import { SOLUTION_FORMATION_SYSTEM_INSTRUCTION } from "@/lib/prompts";
import { NextResponse } from "next/server";
import { generateAiResponse } from "@/lib/ai";

const solutionSchema = z.object({
    cpp_code: z.string().describe("A well-structured implementation written in C++"),
});

export async function POST(request: Request) {
    try {
        const { fullProblem, technicalOutline } = await request.json();
        if (!fullProblem || !technicalOutline) {
            throw new Error("Full problem and technical outline are required");
        }

        const message = `
Solve the problem using the following technical outline:

Problem: ${JSON.stringify(fullProblem, null, 2)}

Technical Outline: ${technicalOutline}

The output should be a valid JSON object with a single field, "cpp_code", which is a string written in C++ format.

**IMPORTANT:**
- The output MUST be a valid, compact, single-line JSON object with a single field "cpp_code".
- The value of "cpp_code" must be a C++ code as a string, with ALL special characters (including newlines, quotes, and backslashes) properly escaped for JSON.
- Do NOT include any extra text, markdown, or code fences. Output ONLY the JSON object.
`;

        const result = await generateAiResponse(
            SOLUTION_FORMATION_SYSTEM_INSTRUCTION,
            message,
            solutionSchema
        );

        return NextResponse.json(result);
    }
    catch (error) {
        console.error("Solution formation error:", error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}