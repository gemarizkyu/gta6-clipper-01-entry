// gta6-clipper-01 entry: the video is the entry.
// This program only copies VIDEO.json from the repo root into the
// output directory, where the gate reads the video's address.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, 'VIDEO.json'), join(outDir, 'VIDEO.json'));
} catch (err) {
  console.error(`could not copy VIDEO.json: ${(err as Error).message}`);
  process.exit(1);
}
