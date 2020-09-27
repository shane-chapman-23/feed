const pdfDocument = require('pdfkit')
const fs = require('fs');

// Create a document
const doc = new pdfDocument()

// save the PDF file in root directory

//Pipe output to file or HTTP response
doc.pipe(fs.createWriteStream('shoppingList.pdf'));

//Embed a font, set the font size and render some text
doc.fontSize(25)
  .text('Shopping List', 100, 100);

//Draw a triangle
doc.save()
  .moveTo(100, 150)
  .lineTo(100, 250)
  .lineTo(200, 250)
  .fill("#FF3300");

//Finalise PDF file
doc.end();