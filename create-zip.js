const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Files and directories to include in the ZIP
const filesToInclude = [
  'index.js',
  'package.json',
  'Procfile',
  '.env',
  'prompts/',
  'routes/',
  'schemas/',
  'services/',
  'public/'
];

const output = fs.createWriteStream('IntelliText-api.zip');
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', () => {
  console.log(`✅ ZIP created: ${archive.pointer()} total bytes`);
  console.log('Ready for AWS Elastic Beanstalk deployment!');
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Add files and directories
filesToInclude.forEach((item) => {
  const fullPath = path.join(__dirname, item);
  
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      archive.directory(fullPath, item.replace('/', ''));
    } else {
      archive.file(fullPath, { name: item });
    }
  }
});

archive.finalize();
