const fs = require("fs");
const path = require("path");

// Helper function to copy directory recursively
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

const root = __dirname;
const dist = path.join(root, "dist");
const files = ["index.html", "style.css", "script.js"];

fs.mkdirSync(dist, { recursive: true });
for (const file of files) {
  const src = path.join(root, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(dist, file));
  }
}

// Copy images directory
const imagesDir = path.join(root, "images");
if (fs.existsSync(imagesDir)) {
  copyDirRecursive(imagesDir, path.join(dist, "images"));
}
