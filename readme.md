```markdown
# PDF to TXT Extraction

This script extracts text from a PDF file and saves it as a TXT file. It utilizes the Node.js `fs`, `pdf-parse`, and `readline` libraries to perform the extraction. The extracted text can be useful for various purposes, such as further analysis or processing of the textual content.

## Prerequisites

- Node.js installed on your machine

## Installation

1. Clone or download this repository to your local machine.

2. Open a terminal or command prompt and navigate to the project directory.

3. Install the required dependencies by running the following command:

   ```
   npm install fs pdf-parse readline
   ```

## Usage

1. Run the script by executing the following command in the terminal or command prompt:

   ```
   node script.js
   ```

2. The script will prompt you to enter the filename of the PDF you want to extract text from, including the extension. Make sure the PDF file is in the same directory as the script or provide the full file path.

3. The script will read the specified PDF file, extract the text content, and save it as a new TXT file in the same directory. The TXT file will have the same name as the PDF file but with the .txt extension.

4. Once the script finishes running, you will see a success message indicating that the text has been extracted and saved as a TXT file.

## Dependencies

This project relies on the following dependencies:

- [fs](https://nodejs.org/api/fs.html) - a Node.js module for interacting with the file system.
- [pdf-parse](https://www.npmjs.com/package/pdf-parse) - a library for extracting text from PDF files.
- [readline](https://nodejs.org/api/readline.html) - a Node.js module for reading input from the command line.

These dependencies are automatically installed when you run `npm install`.

## License

This project is licensed under the [MIT License](LICENSE).
```