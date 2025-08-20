import { prisma } from "@/lib/prisma";
import { sessionValidation } from "@/app/actions/serverActions";
import { marked } from "marked";
import { NextResponse } from "next/server";
import core, { Browser } from "puppeteer-core";
import { executablePath } from "puppeteer"; // Import only the function we need
import chromium from "@sparticuz/chromium";

export const runtime = "nodejs";

const createHtmlTemplate = (data: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>${data.title || "Problem Document"}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Sans+Thai:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0KOVEMeaFPmpkH3tgZsEvoBCHmJQeadlKaI9GigYreqgIPACpmM55" crossorigin="anonymous">
    <style>
        :root {
            --font-family-sans: 'Inter', 'Noto Sans Thai', 'Noto Sans JP', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            --font-family-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
            --color-text-primary: oklch(0.3074 0.0394 292.2592);
            --color-text-secondary: oklch(0.5358 0.0343 293.5446);
            --color-border: oklch(0.8 0.02 286.3189);
            --color-background-light: oklch(0.9757 0.0061 137.7734);
            --color-background-white: #ffffff;
            --color-secondary: oklch(0.6336 0.1396 12.3054);
            --color-accent: oklch(0.7657 0.1137 50.2881);
            --border-radius-md: 0.325rem;
        }

        * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact;
            margin: 0;
        }

        body {
            font-family: var(--font-family-sans);
            font-size: 10pt;
            line-height: 1.5;
            color: var(--color-text-primary);
            background-color: var(--color-background-white);
            padding: 2.25rem;
        }

        h1, h2 {
            line-height: 1.3;
            margin-bottom: 0.75em;
            break-after: avoid;
        }

        h1 {
            font-size: 20pt;
            font-weight: 700;
        }

        h2 {
            font-size: 16pt;
            font-weight: 600;
            margin-top: 1.8em;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 0.2em;
        }
    
        p, li { margin-bottom: 1em; }
        ul, ol { padding-left: 1.5em; margin-bottom: 1em; }
        li:last-child, p:last-child { margin-bottom: 0; }

        .problem-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            gap: var(--spacing-unit);
            border-bottom: 2px solid var(--color-border);
            margin-bottom: 1.75em;
            padding-bottom: 0.6em;
        }
        
        .problem-header > h1, .problem-header > p {
            margin-bottom: 0;
        }

        .meta-info {
            display: flex; flex-wrap: wrap; gap: 8px 16px; margin-top: 1rem;
            padding: 1rem; background-color: var(--color-background-light);
            border: 1px solid var(--color-border); border-radius: var(--border-radius-md);
        }

        .meta-item { font-size: 10pt; color: var(--color-text-secondary); }
        .meta-label { font-weight: 600; color: var(--color-text-primary); margin-right: 0.5em; }

        .section { margin-bottom: 1.5rem; break-inside: avoid; }

        .section h2 { margin-top: 0; }

        pre, .code-block {
            font-family: var(--font-family-mono); font-size: 10pt; line-height: 1.5;
            background-color: var(--color-background-light); border: 1px solid var(--color-border);
            border-radius: var(--border-radius-md); padding: 1em; white-space: pre-wrap;
            word-wrap: break-word;
        }

        .example-case {
            border: 1px solid var(--color-border); border-radius: var(--border-radius-md);
            margin-bottom: 1.5rem; background: var(--color-background-white);
            padding: 1.5rem; break-inside: avoid;
        }

        .example-header { font-size: 12pt; font-weight: 600; color: var(--color-text-primary); margin-bottom: 1rem; }
        .example-content:not(:last-child) { margin-bottom: 1rem; }
        .example-label { display: block; font-size: 10pt; font-weight: 600; color: var(--color-text-primary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.5rem; }

        .subtask-item { padding: 1rem; border: 1px solid var(--color-border); border-radius: var(--border-radius-md); }
        .subtask-item:not(:last-child) { margin-bottom: 1rem; }
        .subtask-points { font-weight: 600; color: var(--color-text-primary); font-size: 10pt; }
        .subtask-constraints { font-size: 10pt; color: #6b7280; font-style: italic; color: var(--color-text-primary); }
    </style>
</head>
<body>
    <div class="problem-header">
    <h1>${data.title || "Untitled Problem"}</h1>
    <p>${data.difficulty || "Unknown Difficulty"}</p>
    </div>

    ${data.problemStatement ? `<div class="section"><h2>Problem Statement</h2><div>${data.problemStatement}</div></div>` : ''}
    ${data.constraints ? `<div class="section"><h2>Constraints</h2><div>${data.constraints}</div></div>` : ''}
    ${data.inputFormat ? `<div class="section"><h2>Input Format</h2><div>${data.inputFormat}</div></div>` : ''}
    ${data.outputFormat ? `<div class="section"><h2>Output Format</h2><div>${data.outputFormat}</div></div>` : ''}

    ${(data.subtasks && data.subtasks.length > 0) ? `
        <div class="section">
        <h2>Subtasks</h2>
        ${data.subtasks.map((s: any) => `
            <div class="subtask-item">
                <span class="subtask-points">[${s.points ?? "N/A"} points]</span>
                ${s.constraints ? `<span class="subtask-constraints">${s.constraints}</span>` : ""}
            </div>
        `).join("")}
    </div>
    ` : ''}

    ${(data.examples && data.examples.length > 0) ? `
        <div class="section">
        <h2>Example Test Cases</h2>
            ${data.examples.map((ex: any, i: number) => `
            <div class="example-case">
                <div class="example-header">Example ${i + 1}</div>
                ${ex.input != null ? `<div class="example-content"><span class="example-label">Input</span><pre class="code-block">${ex.input}</pre></div>` : ''}
                ${ex.output != null ? `<div class="example-content"><span class="example-label">Output</span><pre class="code-block">${ex.output}</pre></div>` : ''}
                ${ex.explanation ? `<div class="example-content"><span class="example-label">Explanation</span><div>${data.mdToHtml(ex.explanation)}</div></div>` : ""}
            </div>
            `).join("")}
        </div>
    ` : ''}

    ${data.notes ? `<div class="section"><h2>Notes</h2><div>${data.notes}</div></div>` : ''}
</body>
</html>
`;

export async function GET(req: Request) {
    // This declaration is now 100% type-safe
    let browser: Browser | null = null;
    try {
        const session = await sessionValidation();
        if (session instanceof Error) {
            console.error(session)
            return new NextResponse("Session Validation Error", { status: 400 });;
        }
        const userId = session.user.id;
        const { searchParams } = new URL(req.url);
        const problemId = searchParams.get("problemId");

        if (!problemId) return new NextResponse("Missing problemId", { status: 400 });

        const problem = await prisma.problemGeneration.findUnique({
            where: { id: problemId, userId },
        });

        if (!problem) return new NextResponse("Not found", { status: 404 });

        const formalized = problem.formalizedProblem as any;
        const proposal = problem.problemProposal as any;
        const vibe = problem.vibeProfile as any;

        const mdToHtml = (text?: string | null) => text ? marked(text) : "";
        const sanitizeForHtml = (text: string) => text.replace(/</g, '&lt;').replace(/>/g, '&gt;');

        const data = {
            title: formalized?.problemTitle || "Problem",
            difficulty: proposal?.difficulty || "",
            problemStatement: mdToHtml(formalized?.problemStatement),
            constraints: mdToHtml(formalized?.constraints),
            inputFormat: mdToHtml(formalized?.inputFormat),
            outputFormat: mdToHtml(formalized?.outputFormat),
            subtasks: Array.isArray(formalized?.subtasks) ? formalized.subtasks.map((subtask) => (
                {
                    ...subtask,
                    constraints: mdToHtml(subtask.constraints),
                    description: mdToHtml(subtask.description),
                }
            )) : null,
            examples: Array.isArray(formalized?.exampleTestcases) ? formalized.exampleTestcases : null,
            notes: formalized?.notes ? mdToHtml(formalized.notes) : null,
            mdToHtml
        };

        const html = createHtmlTemplate(data);

        if (process.env.NODE_ENV === 'production') {
            // VERCEL
            browser = await core.launch({
                args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
                executablePath: await chromium.executablePath(),
                headless: true,
            });
        } else {
            // LOCAL
            browser = await core.launch({
                args: [],
                executablePath: executablePath(),
                headless: true,
            });
        }

        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: "networkidle0" });

        const headerTemplate = `
            <div style="font-family: Inter, sans-serif; font-size: 12px; color: #6b7280; border-bottom: 1px solid #d1d5db; width: 100%; margin: 0 40px; padding-bottom: 5px; display:flex; justify-content:space-between;">
                ${sanitizeForHtml(data.title)}
            </div>
        `;

        const footerTemplate = `
            <div style="font-family: Inter, sans-serif; font-size: 12px; color: #6b7280; width: 100%; text-align: right; margin: 0 40px;">
                Page <span class="pageNumber"></span> of <span class="totalPages"></span>
            </div>
        `;

        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
            displayHeaderFooter: true,
            headerTemplate,
            footerTemplate,
            margin: { top: "60px", bottom: "60px", left: "40px", right: "40px" },
        });

        const filename = `${data.title.replace(/[^a-z0-g\-_]+/gi, "_")}.pdf`;

        return new NextResponse(pdfBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename="${filename}"`,
                "Cache-Control": "no-store",
            },
        });
    } catch (e) {
        console.error("PDF Generation Failed:", e);
        return new NextResponse("Failed to generate PDF", { status: 500 });
    } finally {
        if (browser !== null) {
            await browser.close();
        }
    }
}