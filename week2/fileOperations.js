const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'output.txt');

// create new directory
const dirPath = path.join(__dirname, 'newDir');
if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
    console.log('Directory created successfully at', dirPath);
} else {
    console.log('Directory already exists at', dirPath);
}
    
// Get file stats
fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error('Error getting file stats:', err);
        return;
    }
    console.log('File Size:', stats.size, 'bytes');
    console.log('File Type:', stats.isFile() ? 'File' : 'Directory');
});