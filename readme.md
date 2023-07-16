# PDF to TXT Extraction

This script extracts text from a PDF file and saves it as a TXT file. It utilizes the following dependencies:

- fs: Node.js built-in module for file system operations.
- PDFParser: A library for parsing PDF files and extracting text content.
- readline: A library for reading input from the command-line interface.

## Prerequisites

- Node.js installed on your machine.

## Installation

1. Clone or download this repository to your local machine.

2. Open a terminal or command prompt and navigate to the project directory.

3. Install the required dependencies by running the following command:

   ```shell
   npm install fs pdf-parse readline
   ```

## Usage

1. Run the script by executing the following command in the terminal or command prompt:

   ```shell
   node script.js
   ```

2. The script will prompt you to enter the PDF filename, including the extension.

3. Provide the filename and press Enter. The script will read the specified PDF file, extract the text content, and save it as a new TXT file in the same directory. The TXT file will have the same name as the PDF file but with the .txt extension.

4. Once the script finishes running, you will see a success message indicating that the text has been extracted and saved as a TXT file.

5. Additionally, the script extracts specific information from the extracted text, such as age, sex, date of birth, and patient ID. It saves this information as a JSON object in a file named "dataset.json" in the same directory as the script.

## Dependencies

This project depends on the following Node.js packages:

- fs: For file system operations.
- pdf-parse: A library for parsing PDF files and extracting text content.
- readline: A library for reading input from the command-line interface. 

You can install these dependencies using npm by running the command:

```shell
npm install fs pdf-parse readline
```