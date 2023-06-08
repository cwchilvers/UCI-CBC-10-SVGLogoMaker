// Import modules
const inquirer = require('inquirer');
const fs = require('fs');
const createShape = require("./lib/shapes.js");
const createText = require("./lib/text.js");

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
        console.log('\x1b[34m%s\x1b[0m', 'Creating logo.svg...');
        const logoShape = createShape(data.shape, data.shapeColor);
        const logoText = createText(data.text, data.textColor);
        console.log(logoText);



        //const logoSVG = createSVG(logoShape, logoText);

        // Create SVG file
        //fs.writeFile('./output/README.md', markdown, (err) =>
            // Inform user if there was an error or else inform user if SVG file was successfully created
            //err ? console.error('\x1b[31m%s\x1b[0m', err) : console.log('\x1b[42m%s\x1b[0m', 'Successfully created logo.svg. File can be found inside the output folder')
        //);
    });