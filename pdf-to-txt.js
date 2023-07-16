const fs = require('fs');
const PDFParser = require('pdf-parse');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the PDF filename (including the extension): ', (filename) => {
  // Specify the PDF file path
  const pdfFilePath = `${__dirname}/${filename}`;

  // Specify the TXT file path for saving the extracted text
  const txtFilePath = `${__dirname}/${filename.replace(/\.[^/.]+$/, '')}.txt`;

  // Read the PDF file and extract the text
  const pdfData = fs.readFileSync(pdfFilePath);

  PDFParser(pdfData).then(function (data) {
    // Extracted text from the PDF
    const extractedText = data.text;

    // Save the extracted text as a TXT file
    fs.writeFileSync(txtFilePath, extractedText);

    console.log('Text extracted and saved successfully as a TXT file!');
    rl.close();
  });
});
