# PDF to text

This is a Node.js script that allows you to extract specific information from a PDF report and save it as a JSON file. It utilizes the `pdf-parse` library to parse the PDF file and extract its text content.

## Dependencies

The following dependencies are required to run this script:

- fs
- PDFParser
- readline

Make sure to install these dependencies using npm before running the script.

```bash
npm install fs pdf-parse readline
```

## Usage

1. Clone or download the script and navigate to its directory in your terminal.
2. Run the script using the following command:

```bash
node script.js
```

3. You will be prompted to enter the filename of the PDF report (including the extension).
4. The script will read the PDF file, extract its text content, and save it as a TXT file in the same directory.
5. The script will then extract the age, sex, date of birth, and patient ID from the extracted text using regular expressions.
6. Next, it will extract the complete blood count data dynamically using a separate regular expression.
7. The extracted information will be stored in a JavaScript object called `reportInfo`.
8. The `reportInfo` object will be saved as a JSON file named `dataset.json` in the same directory.
9. A success message will be displayed in the console indicating that the report information has been saved.
