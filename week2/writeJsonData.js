const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'user.json');

const userData = [{
    name: "John Doe",
    age: 30,
    email: "nXUwI@example.com"
}];
const jsonData = JSON.stringify(userData, null, 2); // Pretty print with 2 spaces
try {
    fs.writeFileSync(filePath, jsonData, 'utf8');
    console.log('JSON data written  syncronously successfully to', filePath);
} catch (error) {
    console.error('Error writing JSON data to file:', error);
}