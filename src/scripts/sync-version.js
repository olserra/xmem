import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pkgPath = path.resolve(__dirname, '../../package.json');
const versionFilePath = path.resolve(__dirname, '../version.ts');

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const version = pkg.version;

const content = `// This file is auto-generated by scripts/sync-version.js\nexport const version = '${version}';\n`;
fs.writeFileSync(versionFilePath, content);
console.log(`Synced version ${version} to src/version.ts`); 