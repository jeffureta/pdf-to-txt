## PDF to TXT Extraction

This script extracts text from a PDF file and saves it as a TXT file. It utilizes the Node.js `fs`, `pdf-parse`, and `readline` libraries to perform the extraction. The extracted text can be useful for various purposes, such as further analysis or processing of the textual content.

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone or download this repository to your local machine.

2. Open a terminal or command prompt and navigate to the project directory.

3. Install the required dependencies by running the following command:

   ```shell
   npm install fs pdf-parse readline
   ```

### Usage

1. Run the script by executing the following command in the terminal or command prompt:

   ```shell
   node script.js
   ```

2. The script will prompt you to enter the PDF filename, including the extension.

3. Provide the filename and press Enter. The script will read the specified PDF file, extract the text content, and save it as a new TXT file in the same directory. The TXT file will have the same name as the PDF file but with the .txt extension.

4. Once the script finishes running, you will see a success message indicating that the text has been extracted and saved as a TXT file.

### Extracted Information

The script also extracts specific information from the extracted text, such as age, sex, date of birth, and patient ID. It uses a regular expression pattern to match and extract this information. If the information is found, it will be displayed as a JSON object. If no match is found, a "No match found" message will be displayed.

### License

This project is licensed under the [MIT License](LICENSE).

---

Please note that this `README.md` assumes you have already installed the necessary dependencies and provides instructions on how to use the script. Additionally, modify any other parts of the `README.md` file to match your specific project setup and requirements.