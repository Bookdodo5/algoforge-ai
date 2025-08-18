import { prisma } from "@/lib/prisma";
import { sessionValidation } from "@/app/actions/serverActions";
import puppeteer from "puppeteer";
import { marked } from "marked";

export const runtime = "nodejs";

const createHtmlTemplate = (data: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${data.title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Sans+Thai:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; }
    
    body { 
      font-family: 'Noto Sans Thai', 'Noto Sans JP', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans KR', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
      margin: 0; 
      padding: 40px; 
      color: #1a1a1a; 
      line-height: 1.6;
      background: #ffffff;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .header {
      border-bottom: 3px solid #2563eb;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    
    h1 { 
      font-size: 32px; 
      font-weight: 700;
      margin: 0 0 12px 0; 
      color: #1e40af;
      line-height: 1.2;
    }
    
    .meta-info {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }
    
    .meta-item {
      background: #f1f5f9;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      color: #475569;
    }
    
    .meta-label {
      font-weight: 600;
      color: #334155;
    }
    
    h2 { 
      font-size: 20px; 
      font-weight: 600;
      margin: 32px 0 16px 0; 
      color: #1e293b;
      border-left: 4px solid #2563eb;
      padding-left: 16px;
    }
    
    h3 { 
      font-size: 16px; 
      font-weight: 500;
      margin: 24px 0 12px 0; 
      color: #334155;
    }
    
    p, li { 
      font-size: 14px; 
      line-height: 1.7; 
      margin: 0 0 12px 0;
    }
    
    ul, ol {
      margin: 16px 0;
      padding-left: 24px;
    }
    
    li {
      margin-bottom: 8px;
    }
    
    .section { 
      margin-bottom: 24px; 
      padding: 20px;
      background: #fafafa;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
    }
    
    .section h2 {
      margin-top: 0;
      border-left: none;
      padding-left: 0;
    }
    
    .code-block {
      background: #f8fafc; 
      padding: 16px; 
      border-radius: 6px; 
      border: 1px solid #e2e8f0;
      font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Monaco', 'Consolas', monospace;
      font-size: 13px;
      line-height: 1.5;
      overflow-x: auto;
    }
    
    .mono { 
      font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Monaco', 'Consolas', monospace; 
      background: #f1f5f9;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 13px;
    }
    
    .example-case {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 16px;
      margin-bottom: 16px;
    }
    
    .example-header {
      font-weight: 600;
      color: #1e40af;
      margin-bottom: 12px;
      font-size: 14px;
    }
    
    .example-content {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 4px;
      padding: 12px;
      margin: 8px 0;
    }
    
    .example-label {
      font-weight: 600;
      color: #475569;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    
    .subtask-item {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 12px;
      margin-bottom: 8px;
    }
    
    .subtask-points {
      font-weight: 600;
      color: #059669;
      font-size: 12px;
    }
    
    .subtask-description {
      margin: 4px 0;
    }
    
    .subtask-constraints {
      font-size: 12px;
      color: #64748b;
      font-style: italic;
      margin-top: 4px;
    }
    
    .notes-section {
      background: #fef3c7;
      border: 1px solid #f59e0b;
      border-radius: 6px;
      padding: 16px;
    }
    
    .notes-section h2 {
      color: #92400e;
      border-left: 4px solid #f59e0b;
    }
    
    @media print {
      body { margin: 20px; }
      .section { break-inside: avoid; }
      .example-case { break-inside: avoid; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${data.title}</h1>
      <div class="meta-info">
        <div class="meta-item"><span class="meta-label">Theme:</span> ${data.theme}</div>
        <div class="meta-item"><span class="meta-label">Vibe:</span> ${data.vibe}</div>
        <div class="meta-item"><span class="meta-label">Difficulty:</span> ${data.difficulty}</div>
      </div>
    </div>

    <div class="section">
      <h2>Problem Statement</h2>
      ${data.problemStatement}
    </div>

    <div class="section">
      <h2>Constraints</h2>
      ${data.constraints}
    </div>

    <div class="section">
      <h2>Input Format</h2>
      ${data.inputFormat}
    </div>

    <div class="section">
      <h2>Output Format</h2>
      ${data.outputFormat}
    </div>

    ${data.subtasks ? `
      <div class="section">
        <h2>Subtasks</h2>
        ${data.subtasks.map((s: any, i: number) => `
          <div class="subtask-item">
            <div class="subtask-points">[${s.points ?? "?"} points]</div>
            <div class="subtask-description">${s.description}</div>
            ${s.constraints ? `<div class="subtask-constraints">Constraints: ${s.constraints}</div>` : ""}
          </div>
        `).join("")}
      </div>
    ` : ""}

    ${data.examples ? `
      <div class="section">
        <h2>Example Test Cases</h2>
        ${data.examples.map((ex: any, i: number) => `
          <div class="example-case">
            <div class="example-header">Test Case ${i + 1}</div>
            <div class="example-content">
              <div class="example-label">Input</div>
              <div class="code-block">${ex.input}</div>
            </div>
            <div class="example-content">
              <div class="example-label">Output</div>
              <div class="code-block">${ex.output}</div>
            </div>
            ${ex.explanation ? `
              <div class="example-content">
                <div class="example-label">Explanation</div>
                <div>${data.mdToHtml(ex.explanation)}</div>
              </div>
            ` : ""}
          </div>
        `).join("")}
      </div>
    ` : ""}

    ${data.notes ? `
      <div class="notes-section">
        <h2>Notes</h2>
        ${data.notes}
      </div>
    ` : ""}
  </div>
</body>
</html>`;

export async function GET(req: Request) {
    try {
        const userId = await sessionValidation();
        const { searchParams } = new URL(req.url);
        const problemId = searchParams.get("problemId");

        if (!problemId) return new Response("Missing problemId", { status: 400 });

        const problem = await prisma.problemGeneration.findUnique({
            where: { id: problemId, userId },
        });

        if (!problem) return new Response("Not found", { status: 404 });

        const formalized = problem.formalizedProblem as any;
        const proposal = problem.problemProposal as any;
        const vibe = problem.vibeProfile as any;

        const mdToHtml = (text?: string | null) => text ? marked(text) : "";

        const data = {
            title: formalized?.problemTitle || "Problem",
            theme: problem.theme || "",
            vibe: vibe?.vibeProfile?.vibe_name || "",
            difficulty: proposal?.difficulty || "",
            problemStatement: mdToHtml(formalized?.problemStatement),
            constraints: mdToHtml(formalized?.constraints),
            inputFormat: mdToHtml(formalized?.inputFormat),
            outputFormat: mdToHtml(formalized?.outputFormat),
            subtasks: Array.isArray(formalized?.subtasks) ? formalized.subtasks : null,
            examples: Array.isArray(formalized?.exampleTestcases) ? formalized.exampleTestcases : null,
            notes: formalized?.notes ? mdToHtml(formalized.notes) : null,
            mdToHtml
        };

        const html = createHtmlTemplate(data);

        // Generate PDF
        const browser = await puppeteer.launch({
            args: ["--no-sandbox", "--disable-setuid-sandbox"]
        });
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: "networkidle0" });
        const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
        await browser.close();

        const filename = `${data.title.replace(/[^a-z0-9\-_]+/gi, "_")}.pdf`;

        return new Response(pdfBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename="${filename}"`,
                "Cache-Control": "no-store",
            },
        });
    } catch (e) {
        console.error(e);
        return new Response("Failed to generate PDF", { status: 500 });
    }
}


