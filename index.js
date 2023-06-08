// Import modules
const inquirer = require('inquirer');
const fs = require('fs');
const createShape = require("./lib/shapes.js");
const createText = require("./lib/text.js");
const createSVG = require("./lib/svg.js");

// Ask user for information
inquirer 
    .prompt([
        {
            type: 'input',
            message: 'Logo Text (3 Characters Max):',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Logo Text Color:',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Logo Shape:',
            name: 'shape',
            choices: [
                '● Circle',
                '■ Square',
                '▲ Triangle',
            ],
        },
        {
            type: 'input',
            message: 'Logo Shape Color:',
            name: 'shapeColor',
        }
    ])

    .then((data) => {
        console.log('\x1b[44m%s\x1b[0m', '\nCreating logo.svg...\n');
        const logoShape = createShape(data.shape, data.shapeColor);
        const logoText = createText(data.text, data.textColor);
        const logoSVG = createSVG(logoShape, logoText)

        // Create SVG file
        fs.writeFile('./output/logo.svg', logoSVG, (err) =>
            // Inform user if there was an error or else inform user if SVG file was successfully created
            err ? console.error('\x1b[41m%s\x1b[0m', err) : console.log('\x1b[32m%s\x1b[0m', 'Success! Logo.svg file can be found inside the output folder.')
        );
    });