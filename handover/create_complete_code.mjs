import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const outputPath = path.join(root, 'handover', 'COMPLETE_CODE.md');
const exactFiles = [
  'client/index.html',
  'client/src/index.css',
  'client/src/main.tsx',
  'client/src/App.tsx',
  'client/src/pages/Home.tsx',
  'client/src/pages/NotFound.tsx',
  'client/src/pages/PrivacyPolicy.tsx',
  'client/src/pages/TermsOfService.tsx',
  'client/src/lib/utils.ts',
  'server/index.ts',
  'shared/const.ts',
  'vite.config.ts',
  'package.json',
  'pnpm-lock.yaml',
  'tsconfig.json',
  'tsconfig.node.json',
  'components.json',
];

const languageFor = (file) => {
  if (file.endsWith('.tsx')) return 'tsx';
  if (file.endsWith('.ts') || file.endsWith('.mjs')) return 'ts';
  if (file.endsWith('.css')) return 'css';
  if (file.endsWith('.html')) return 'html';
  if (file.endsWith('.json')) return 'json';
  if (file.endsWith('.yaml') || file.endsWith('.yml')) return 'yaml';
  return '';
};

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(absolute));
    } else if (/\.(tsx?|css)$/.test(entry.name)) {
      files.push(path.relative(root, absolute));
    }
  }
  return files;
}

const componentFiles = await walk(path.join(root, 'client', 'src', 'components'));
const sourceFiles = [...new Set([...exactFiles, ...componentFiles])].sort();
const lines = [
  '# InstaClient — Complete Source Snapshot',
  '',
  'This document is generated from the current project source by `handover/create_complete_code.mjs`.',
  'The editable source files in the archive remain authoritative; this file is a portable, one-document reading copy.',
  '',
  '---',
  '',
];

for (const relativeFile of sourceFiles) {
  const absolute = path.join(root, relativeFile);
  try {
    const content = await fs.readFile(absolute, 'utf8');
    lines.push(`## \`${relativeFile}\``, '', `\`\`\`${languageFor(relativeFile)}`, content.trimEnd(), '\`\`\`', '', '---', '');
  } catch {
    lines.push(`## \`${relativeFile}\``, '', '> File not present in this project snapshot.', '', '---', '');
  }
}

await fs.writeFile(outputPath, lines.join('\n'));
console.log(`Wrote ${outputPath} with ${sourceFiles.length} source/config files.`);
