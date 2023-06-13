const puppeteer = require('puppeteer');
const Handlebars = require('handlebars');
const path = require('path');

 async function generatePDF(employees, uniqueId) {
    const pdfPath = path.join(__dirname, '..', 'docs', `employee_data_${uniqueId}.pdf`);
    // Create a new browser instance
    const browser = await puppeteer.launch();
  
    // Create a new page
    const page = await browser.newPage();

    const templateSource = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                <h2>Desprendible de Nómina</h2>
                table {
                    border-collapse: collapse;
                    width: 100%;
                }

                th, td {
                    border: 1px solid black;
                    padding: 8px;
                }

                th {
                    background-color: #f2f2f2;
                }
                </style>
            </head>
            <body>
                <table>
                <tr>
                    <th>Nombre del empleado</th>
                    <th>Número de Documento</th>
                    <th>Salario pagado</th>
                </tr>
                {{#each employees}}
                <tr>
                    <td>{{nombre}}</td>
                    <td>{{documento}}</td>
                    <td>{{salario}}</td>
                </tr>
                {{/each}}
                </table>
            </body>
            </html>
            `;

    // Compile the template
    const template = Handlebars.compile(templateSource);
  
    // Generate the HTML content using the template and employee data
    const html = template({ employees });
  
    // Set the HTML content of the page
    await page.setContent(html);
  
    // Generate the PDF file
    await page.pdf({ path: pdfPath , format: 'A4' });
  
    // Close the browser
    await browser.close();
  
    console.log('PDF generated successfully.');

    return pdfPath;

}


module.exports = {
    generatePDF: generatePDF
  };

