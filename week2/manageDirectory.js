const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'example.txt');

// Read current directory
fs.readdir(__dirname, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    console.log('Current directory files:', files);
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.error('Error getting file stats:', err);
            return;
        }
        console.log('File Size:', stats.size, 'bytes');
        console.log('File Type:', stats.isFile() ? 'File' : 'Directory');
        console.log('Creation Date:', stats.birthtime);
    });
});