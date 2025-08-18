import { prisma } from "@/lib/prisma";
import { sessionValidation } from "@/app/actions/serverActions";
import JSZip from "jszip";

export async function GET(req: Request) {
  try {
    const session = await sessionValidation();
    const userId = session.user.id;
    const { searchParams } = new URL(req.url);
    const problemId = searchParams.get("problemId");

    if (!problemId) {
      return new Response("Missing problemId", { status: 400 });
    }

    const problem = await prisma.problemGeneration.findUnique({
      where: { id: problemId, userId },
    });

    if (!problem) {
      return new Response("Not found", { status: 404 });
    }

    const solution = problem.solutionCode || "";
    const tests = problem.testGenerator || "";
    const outline = problem.technicalOutline || "";
    const title = (problem.formalizedProblem as any)?.problemTitle || "problem";

    const zip = new JSZip();

    zip.file("solution.cpp", solution);
    zip.file("test_generator.py", tests);
    zip.file("implementation_outline.md", outline);

    const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });

    const filename = `${title.replace(/[^a-z0-9\-_]+/gi, "_")}.zip`;

    return new Response(zipBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Failed to create ZIP:", error);
    return new Response("Failed to create ZIP", { status: 500 });
  }
}