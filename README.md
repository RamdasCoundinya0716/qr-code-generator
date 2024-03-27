# QR Code Generator

This is a simple command-line tool for generating QR codes from URLs. It uses Node.js with the `inquirer` package for user input and the `qr-image` package for generating QR codes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RamdasCoundinya0716/qr-code-generator.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the script:

   ```bash
   node index.js
   ```

2. Enter the URL you want to generate a QR code for when prompted.

3. The script will save the URL to a text file (`URL.txt`) and generate a QR code image (`qrcode.png`) in the same directory.

## Project Structure

- `index.js`: Main script for generating QR codes.
- `URL.txt`: Text file where the URL is saved.
- `qrcode.png`: Generated QR code image.

## Dependencies

- `inquirer`: For prompting the user for input.
- `fs`: For file system operations.
- `qr-image`: For generating QR codes.