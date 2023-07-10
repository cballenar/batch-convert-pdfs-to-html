# Batch Convert PDFs to HTML

This script was built to aid in the migration of dozens of PDF files by converting them to HTML. It uses the [pdf2html](https://www.npmjs.com/package/pdf2html) package to do the conversion.

## Usage

1. Run `npm install` to install dependencies.
1. Place your PDF files in the `data` directory.
1. Run `npm start` to convert all the PDFs to HTML.
1. The HTML files will be placed in the `output` directory.

## Notes

- The script will attempt to convert all files in the directory. If a file is not a PDF, it may break.
- The script will overwrite any existing HTML files in the `output` directory.
