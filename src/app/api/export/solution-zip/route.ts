import { prisma } from "@/lib/prisma";
import { sessionValidation } from "@/app/actions/serverActions";

export const runtime = "nodejs";

function encodeUtf8(text: string): Uint8Array {
  return new TextEncoder().encode(text);
}

function crc32(buf: Uint8Array): number {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  return ~c >>> 0;
}

// Minimal ZIP (no compression). Returns Uint8Array of the zip file.
function zipFiles(files: { name: string; content: string }[]): Uint8Array {
  const encoder = new TextEncoder();
  const entries: { name: string; data: Uint8Array; crc: number; size: number; offset: number }[] = [];
  let offset = 0;
  const chunks: Uint8Array[] = [];

  const sigLocal = new Uint8Array([0x50, 0x4b, 0x03, 0x04]);
  const sigCentral = new Uint8Array([0x50, 0x4b, 0x01, 0x02]);
  const sigEnd = new Uint8Array([0x50, 0x4b, 0x05, 0x06]);

  for (const f of files) {
    const nameBytes = encoder.encode(f.name);
    const data = encodeUtf8(f.content);
    const crc = crc32(data);
    const size = data.length;

    const local = new Uint8Array(30 + nameBytes.length);
    local.set(sigLocal, 0);
    local.set(new Uint8Array([0x14, 0x00, 0x00, 0x00, 0x00, 0x00]), 4); // ver, flags, method=0
    local.set(new Uint8Array([0x00, 0x00, 0x00, 0x00]), 10); // time/date
    const view = new DataView(local.buffer);
    view.setUint32(14, crc, true);
    view.setUint32(18, size, true);
    view.setUint32(22, size, true);
    view.setUint16(26, nameBytes.length, true);
    view.setUint16(28, 0, true);
    local.set(nameBytes, 30);

    entries.push({ name: f.name, data, crc, size, offset });
    offset += local.length + data.length;
    chunks.push(local, data);
  }

  const centralChunks: Uint8Array[] = [];
  let centralSize = 0;
  let centralOffset = offset;
  for (const e of entries) {
    const nameBytes = encoder.encode(e.name);
    const central = new Uint8Array(46 + nameBytes.length);
    central.set(sigCentral, 0);
    central.set(new Uint8Array([0x14, 0x00, 0x14, 0x00, 0x00, 0x00, 0x00, 0x00]), 4);
    central.set(new Uint8Array([0x00, 0x00, 0x00, 0x00]), 12); // time/date
    const view = new DataView(central.buffer);
    view.setUint32(16, e.crc, true);
    view.setUint32(20, e.size, true);
    view.setUint32(24, e.size, true);
    view.setUint16(28, nameBytes.length, true);
    view.setUint16(30, 0, true);
    view.setUint16(32, 0, true);
    view.setUint16(34, 0, true);
    view.setUint16(36, 0, true);
    view.setUint32(42, e.offset, true);
    central.set(nameBytes, 46);
    centralChunks.push(central);
    centralSize += central.length;
  }

  const end = new Uint8Array(22);
  end.set(sigEnd, 0);
  const endView = new DataView(end.buffer);
  endView.setUint16(8, entries.length, true);
  endView.setUint16(10, entries.length, true);
  endView.setUint32(12, centralSize, true);
  endView.setUint32(16, centralOffset, true);

  const sizeTotal = chunks.reduce((s, c) => s + c.length, 0) + centralSize + end.length;
  const out = new Uint8Array(sizeTotal);
  let pos = 0;
  for (const c of chunks) { out.set(c, pos); pos += c.length; }
  for (const c of centralChunks) { out.set(c, pos); pos += c.length; }
  out.set(end, pos);
  return out;
}

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

    const solution = problem.solutionCode || "";
    const tests = problem.testGenerator || "";
    const outline = problem.technicalOutline || "";
    const title = (problem.formalizedProblem as any)?.problemTitle || problem.title || "problem";

    const files = [
      { name: "README.txt", content: `${title}\n\nIncludes:\n- solution.cpp\n- test_generator.py\n- implementation_outline.md\n` },
      { name: "solution.cpp", content: solution },
      { name: "test_generator.py", content: tests },
      { name: "implementation_outline.md", content: outline },
    ];

    const zipBytes = zipFiles(files);
    const filename = `${title.replace(/[^a-z0-9\-_]+/gi, "_")}.zip`;

    return new Response(zipBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response("Failed to create ZIP", { status: 500 });
  }
}


