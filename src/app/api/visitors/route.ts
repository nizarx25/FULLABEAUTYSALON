import { NextResponse } from "next/server";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const COUNTER_FILE = join(process.cwd(), ".visitors", "count.json");

function getCount(): number {
  try {
    if (!existsSync(COUNTER_FILE)) return 0;
    const data = JSON.parse(readFileSync(COUNTER_FILE, "utf-8"));
    return typeof data.count === "number" ? data.count : 0;
  } catch {
    return 0;
  }
}

function saveCount(count: number): void {
  const dir = join(process.cwd(), ".visitors");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(COUNTER_FILE, JSON.stringify({ count }), "utf-8");
}

export async function GET() {
  const count = getCount() + 1;
  saveCount(count);
  return NextResponse.json({ count }, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
