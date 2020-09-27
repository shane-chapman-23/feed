const pdfDocument = require('pdfkit')

const fs = require('fs');
const { Socket } = require('dgram');

// Create a document
const doc = new pdfDocument()

// save the PDF file in root directory

//Pipe output to file or HTTP response
doc.pipe(fs.createWriteStream('shoppingList.pdf'));

//Embed a font, set the font size and render some text
doc.fontSize(25)
  .text('Shopping List', 100, 100);

//Add an image, constrain it to a given size and center vertically and horizontally
doc,image('../../logo.png', {
  fit: [250,300],
  align: 'center',
  valign: 'center'
});

//Add another page
doc.addPage()
  .fontSize(25)
  .text('Vector Graphics ...', 100, 100);

//Draw a triangle
doc.save()
  .moveTo(100, 150)
  .lineTo(100, 250)
  .lineTo(200, 250)
  .fill("#FF3300");

//Apply transforms and render an SVG path with the 'even-odd' fill rule
doc.scale(0.6)
  .translate(470, -380)
  .path('M 250,75 L 323,301 131,161 177, 301 z')
  .fill('red', 'even-odd')
  .restore();

//Add text with annotations
doc.addPage()
  .fillColor("blue")
  .text('Link', 100, 100)
  .underline(100, 100, 160, 27, {color: "#0000FF"})
  .link(100, 100, 160, 27, 'https://tea-time-recipes.herokuapp.com');

//Finalise PDF file
doc.end();