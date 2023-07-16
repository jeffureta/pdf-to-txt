const fs = require('fs');
const PDFParser = require('pdf-parse');

// Specify the PDF file path
const pdfFilePath = '/Users/jeffureta/Downloads/file.pdf';

// Specify the TXT file path for saving the extracted text
const txtFilePath = '/Users/jeffureta/Downloads/text-output.pdf';

// Read the PDF file and extract the text
const pdfData = fs.readFileSync(pdfFilePath);

PDFParser(pdfData).then(function (data) {
    // Extracted text from the PDF
    const extractedText = data.text;
  
    // Save the extracted text as a TXT file
    const newTxtFilePath = txtFilePath.replace(/\.[^/.]+$/, '.txt');
    fs.writeFileSync(newTxtFilePath, extractedText);
  
    console.log('Text extracted and saved successfully as a TXT file!');
  });




