// One-shot mechanical sweep: wrap "Last updated: April 2026" with a real
// <time> element so Google can parse the date for SERP snippet prefixes,
// and refresh dateModified on Article schema to today (2026-04-11).
//
// Run with: node scripts/fix-dates.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APP_DIR = path.resolve(__dirname, "..", "app");

const TODAY_ISO = "2026-04-11";
const TODAY_HUMAN = "April 11, 2026";

const PLAIN_DATE = "Last updated: April 2026";
const SEMANTIC_DATE = `Last updated <time dateTime="${TODAY_ISO}">${TODAY_HUMAN}</time>`;

// Refresh any dateModified that isn't already today.
const DATE_MODIFIED_RE = /dateModified:\s*"2026-\d{2}-\d{2}"/g;
const DATE_MODIFIED_NEW = `dateModified: "${TODAY_ISO}"`;

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && entry.name === "page.tsx") out.push(full);
  }
  return out;
}

const files = walk(APP_DIR);

let filesTouched = 0;
let dateReplacements = 0;
let modifiedReplacements = 0;

for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  let next = original;

  if (next.includes(PLAIN_DATE)) {
    const before = next;
    next = next.split(PLAIN_DATE).join(SEMANTIC_DATE);
    dateReplacements += (before.length - next.length === 0 ? 0 : (before.match(new RegExp(PLAIN_DATE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length);
  }

  next = next.replace(DATE_MODIFIED_RE, (match) => {
    if (match === DATE_MODIFIED_NEW) return match;
    modifiedReplacements++;
    return DATE_MODIFIED_NEW;
  });

  if (next !== original) {
    fs.writeFileSync(file, next);
    filesTouched++;
    const rel = path.relative(path.resolve(__dirname, ".."), file);
    console.log(`updated ${rel}`);
  }
}

console.log("");
console.log(`files touched: ${filesTouched}`);
console.log(`<time> wraps inserted: ${dateReplacements}`);
console.log(`dateModified refreshes: ${modifiedReplacements}`);
