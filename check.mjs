import * as esbuild from 'esbuild';
import fs from 'fs';

const content = fs.readFileSync('src/app/data/catalog.tsx', 'utf8');

try {
  esbuild.transformSync(content, { loader: 'tsx' });
  console.log("No syntax errors found by esbuild in catalog.tsx");
} catch(e) {
  console.error("Syntax error:", e.message);
}
