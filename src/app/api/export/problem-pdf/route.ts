import { prisma } from "@/lib/prisma";
import { sessionValidation } from "@/app/actions/serverActions";
import puppeteer from "puppeteer";

function escapeHtml(input: string): string {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function mdToHtml(markdown?: string | null): string {
    if (!markdown) return "";
    markdown = replaceTexToUnicode(markdown);
    // Split by fenced code blocks ```lang?\n...\n```
    const parts = markdown.split(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g);
    let html = "";
    for (let i = 0; i < parts.length;) {
        const text = parts[i++];
        html += blockifyInline(text);
        if (i < parts.length) {
            const lang = parts[i++] || "";
            const code = parts[i++] || "";
            html += `<pre class="mono"><code class="language-${escapeHtml(lang)}">${escapeHtml(code)}</code></pre>`;
        }
    }
    return html;
}

function blockifyInline(text: string): string {
    if (!text) return "";
    const lines = text.replace(/\r\n/g, "\n").split("\n");
    const out: string[] = [];
    let i = 0;
    while (i < lines.length) {
        // Skip leading blanks
        if (!lines[i].trim()) {
            i++;
            continue;
        }

        // Headings ###### .. #
        const hMatch = /^(#{1,6})\s+(.*)$/.exec(lines[i]);
        if (hMatch) {
            const level = hMatch[1].length;
            out.push(`<h${level}>${inline(hMatch[2])}</h${level}>`);
            i++;
            continue;
        }

        // Ordered list
        if (/^\d+\.\s+/.test(lines[i])) {
            const items: string[] = [];
            while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
                items.push(`<li>${inline(lines[i].replace(/^\d+\.\s+/, ""))}</li>`);
                i++;
            }
            out.push(`<ol>${items.join("")}</ol>`);
            continue;
        }

        // Unordered list
        if (/^[*-]\s+/.test(lines[i])) {
            const items: string[] = [];
            while (i < lines.length && /^[*-]\s+/.test(lines[i])) {
                items.push(`<li>${inline(lines[i].replace(/^[*-]\s+/, ""))}</li>`);
                i++;
            }
            out.push(`<ul>${items.join("")}</ul>`);
            continue;
        }

        // Paragraph: collect until blank line; preserve single newlines with <br/>
        const para: string[] = [];
        while (i < lines.length && lines[i].trim()) {
            para.push(lines[i++]);
        }
        const paragraphHtml = para.map((ln) => inline(ln)).join("<br/>");
        out.push(`<p>${paragraphHtml}</p>`);
    }
    return out.join("\n");
}

function inline(s: string): string {
    const esc = escapeHtml(s);
    // inline code `code`
    let r = esc.replace(/`([^`]+)`/g, (_m, g1) => `<code class="mono">${escapeHtml(String(g1))}</code>`);
    // bold **text**
    r = r.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    // italics *text*
    r = r.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    return r;
}

function replaceTexToUnicode(input: string): string {
    return input
        .replace(/\\\(/g, "")
        .replace(/\\\)/g, "")
        .replace(/\\le\b/g, "≤")
        .replace(/\\ge\b/g, "≥")
        .replace(/\\times\b/g, "×")
        .replace(/\\cdot\b/g, "·")
        .replace(/\\neq\b/g, "≠")
        .replace(/\\to\b|\\rightarrow\b/g, "→")
        .replace(/\\leftarrow\b/g, "←")
        .replace(/\\ldots\b|\\dots\b/g, "…")
        .replace(/\\pm\b/g, "±");
}

export const runtime = "nodejs";

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

        const formalized: any = problem.formalizedProblem || null;
        const proposal: any = problem.problemProposal || null;
        const vibe: any = problem.vibeProfile || null;

        const safe = (s?: string | null) => (s ? String(s) : "");

        const html = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${safe(problem.title)}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif; margin: 32px; color: #111; }
          h1 { font-size: 28px; margin: 0 0 8px; }
          h2 { font-size: 18px; margin: 24px 0 8px; }
          h3 { font-size: 16px; margin: 18px 0 6px; }
          p, li, pre, code { font-size: 12px; line-height: 1.6; }
          p { white-space: pre-wrap; }
          pre { white-space: pre-wrap; background: #f5f5f5; padding: 10px; border-radius: 6px; }
          .meta { color: #555; font-size: 11px; }
          .section { margin-bottom: 16px; }
          .mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; white-space: pre-wrap; }
          .hr { height: 1px; background: #ddd; margin: 16px 0; }
          ul { padding-left: 16px; }
          .small { font-size: 11px; color: #444; }
        </style>
      </head>
      <body>
        <h1>${safe(formalized?.problemTitle) || safe(problem.title)}</h1>
        <div class="meta">Theme: ${safe(problem.theme)} | Vibe: ${safe(vibe?.vibeProfile?.vibe_name || vibe?.vibe_name)} | Difficulty: ${safe(proposal?.difficulty)}</div>
        <div class="hr"></div>

        <div class="section">
          <h2>Problem Statement</h2>
          ${mdToHtml(formalized?.problemStatement)}
        </div>

        <div class="section">
          <h2>Constraints</h2>
          ${mdToHtml(formalized?.constraints)}
        </div>

        <div class="section">
          <h2>Input Format</h2>
          ${mdToHtml(formalized?.inputFormat)}
        </div>

        <div class="section">
          <h2>Output Format</h2>
          ${mdToHtml(formalized?.outputFormat)}
        </div>

        ${Array.isArray(formalized?.subtasks) ? `
          <div class="section">
            <h2>Subtasks</h2>
            <ul>
              ${formalized.subtasks
                    .map(
                        (s: any, i: number) => `<li>
                    <div class="small">[${s.points ?? "?"} pts] ${safe(s.description)}</div>
                    ${s.constraints ? `<div class="small">Constraints: ${safe(s.constraints)}</div>` : ""}
                  </li>`
                    )
                    .join("")}
            </ul>
          </div>
        ` : ""}

        ${Array.isArray(formalized?.exampleTestcases) ? `
          <div class="section">
            <h2>Example Testcases</h2>
            ${formalized.exampleTestcases
                    .map(
                        (ex: any, i: number) => `
                <div style="margin-bottom: 8px">
                  <div class="small"><strong>Case ${i + 1}</strong></div>
                  <div class="mono small"><strong>Input</strong>\n${safe(ex.input)}</div>
                  <div class="mono small" style="margin-top: 4px"><strong>Output</strong>\n${safe(ex.output)}</div>
                  ${ex.explanation ? `<div class="small" style="margin-top: 4px"><strong>Explanation</strong> ${safe(ex.explanation)}</div>` : ""}
                </div>`
                    )
                    .join("")}
          </div>
        ` : ""}

        ${formalized?.notes ? `
          <div class="section">
            <h2>Notes</h2>
            ${mdToHtml(formalized.notes)}
          </div>
        ` : ""}
      </body>
      </html>`;

        const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: "networkidle0" });
        const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
        await browser.close();

        const filename = `${(formalized?.problemTitle || problem.title || "problem").replace(/[^a-z0-9\-_]+/gi, "_")}.pdf`;

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


