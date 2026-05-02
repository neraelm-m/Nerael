const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.error('Source directory not found:', src);
    process.exit(1);
  }
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

const projectRoot = path.resolve(__dirname, '..');
const src = path.join(projectRoot, 'src', 'assets');
const dest = path.join(projectRoot, 'public', 'assets');

copyDir(src, dest);
console.log('Assets synced from', src, 'to', dest);
