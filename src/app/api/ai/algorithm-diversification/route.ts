import { z } from "zod";
import { ALGORITHM_DIVERSIFICATION_SYSTEM_INSTRUCTION } from "@/lib/prompts";
import { NextResponse } from "next/server";
import { generateAiResponse } from "@/lib/ai";

const problemProposalSchema = z.object({
    proposals: z.array(z.object({
        coreAlgorithm: z.string(),
        coreConcept: z.string(),
        detailedDescription: z.string(),
        narrativeJustification: z.string(),
        originalityNotes: z.string(),
        difficulty: z.enum(["Straightforward", "Tricky", "Challenging"])
    }))
});

export async function POST(request: Request) {
    try {
        const { narrative, algorithms } = await request.json();
        if (!narrative || !algorithms || algorithms.length === 0) {
            throw new Error("Narrative and at least one algorithm are required");
        }

        const message = `Develop 5 fully-fleshed-out Problem Proposals using the following narrative and algorithms:\n\nNarrative:\n${narrative}\n\nAlgorithms:\n${JSON.stringify(algorithms, null, 2)}`;

        const result = await generateAiResponse(
            ALGORITHM_DIVERSIFICATION_SYSTEM_INSTRUCTION,
            message,
            problemProposalSchema
        );

        return NextResponse.json(result);
    }
    catch (error) {
        console.error("Algorithm diversification error:", error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
} 