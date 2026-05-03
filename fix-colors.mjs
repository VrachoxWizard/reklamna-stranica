import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'src');

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = getAllFiles(SRC_DIR);

const shadesToReplace = ['50', '100', '200', '300', '400', '500', '600', '800', '900', '950'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  shadesToReplace.forEach(shade => {
    const regex = new RegExp(`emerald-${shade}(?![0-9])`, 'g');
    content = content.replace(regex, `stone-${shade}`);
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${path.relative(process.cwd(), file)}`);
  }
});

console.log('Color replacement finished!');