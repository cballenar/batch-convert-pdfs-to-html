const pdf2html = require('pdf2html');
const fs = require('fs');

// Set source and output directories
const sourceDir = 'data';
const outputDir = 'output';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

// Convert PDF to HTML
async function convert(filename) {
    const html = await pdf2html.html(`${sourceDir}/${filename}`);
    const outputName = filename.replace('.pdf','.html');
    fs.writeFile(`${outputDir}/${outputName}`, html, function(err) {
        if(err) return console.log(err);
        console.log(`${filename} was converted!`);
    }); 
}

// Read all files in source directory and convert them
const files = fs.readdirSync(sourceDir);
files.forEach(convert);
