```markdown
# PDF to TXT Extraction

This script extracts text from a PDF file and saves it as a TXT file. It uses the Node.js `fs` and `pdf-parse` libraries to perform the extraction. The extracted text can be useful for various purposes, such as further analysis or processing of the textual content.

## Prerequisites

- Node.js installed on your machine
- PDF file you want to extract text from

## Installation

1. Clone or download this repository to your local machine.

2. Open a terminal or command prompt and navigate to the project directory.

3. Install the required dependencies by running the following command:

   ```
   npm install pdf-parse
   ```

## Usage

1. Specify the path to the PDF file you want to extract text from by updating the `pdfFilePath` variable in the `pdfToTxt.js` file. Make sure to provide the full file path, including the file extension.

2. Specify the desired path and filename for the output TXT file by modifying the `txtFilePath` variable in the `pdfToTxt.js` file. Ensure that the directory exists and that you have write permissions.

3. Run the script by executing the following command in the terminal or command prompt:

   ```
   node pdfToTxt.js
   ```

4. The script will read the specified PDF file, extract the text content, and save it as a new TXT file with the same name in the specified location.

5. Once the script finishes running, you will see a success message indicating that the text has been extracted and saved as a TXT file.

## Customization

- If you want to extract text from a different PDF file, update the `pdfFilePath` variable in the `pdfToTxt.js` file with the correct file path.

- To change the output TXT file path and filename, modify the `txtFilePath` variable in the `pdfToTxt.js` file.

## License

This project is licensed under the [MIT License](LICENSE).
```