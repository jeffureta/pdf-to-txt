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

    // Extract age, sex, dob, and patient ID from the extracted text
    const regex = /Age\/Sex: (\d+)\/(\w+)\s+DOB: (\d{2}\/\d{2}\/\d{4})\s+Patient ID: (\d+)/;
    const match = extractedText.match(regex);

    if (match) {
      const [, age, sex, dob, patientId] = match;

      const reportInfo = {
        age: age,
        sex: sex,
        dob: dob,
        patientId: patientId,
      };

      // Save reportInfo as JSON in dataset.json
      const datasetFilePath = `${__dirname}/dataset.json`;
      fs.writeFileSync(datasetFilePath, JSON.stringify(reportInfo, null, 2));
      console.log('Report information saved to dataset.json.');
    } else {
      console.log('No match found.');
    }

    rl.close();
  });
});
