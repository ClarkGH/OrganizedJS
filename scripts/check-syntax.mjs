// Syntax-check every .js lesson with `node --check` (parse only, nothing runs).
// Usage: pnpm check            -> checks JS/
//        pnpm check some/dir   -> checks that folder instead
import { readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.argv[2] ?? 'JS';

function findJsFiles(dir) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch (error) {
    console.error(`Can't read ${dir}: ${error.message}`);
    process.exit(2);
  }

  return entries.flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      return entry.name === 'node_modules' ? [] : findJsFiles(path);
    }
    return entry.name.endsWith('.js') ? [path] : [];
  });
}

const files = findJsFiles(root);
const failures = [];

for (const file of files) {
  // node --check only checks its first file argument, so run it once per file
  const result = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });

  if (result.error) {
    failures.push({ file, message: result.error.message });
  } else if (result.status !== 0) {
    const message = result.stderr.split('\n').find((line) => /Error/.test(line)) ?? result.stderr.trim();
    failures.push({ file, message });
  }
}

for (const { file, message } of failures) {
  console.error(`✗ ${relative('.', file)}\n    ${message}`);
}

console.log(`${files.length - failures.length}/${files.length} files parse`);
process.exit(failures.length > 0 ? 1 : 0);
