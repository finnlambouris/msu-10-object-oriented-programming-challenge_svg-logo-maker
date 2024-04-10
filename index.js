const fs = require('fs');
const inquirer = require('inquirer');

// function to handle inquirer prompts
handlePrompting = function() {
    let getLogoText = async function() {                                                                                                                                        // WHEN the getProjectTitle function is called
        let logoText = await inquirer.prompt(                                                                                                                                   // THEN the projectTitle will be saved when entered
            [
                {
                    name: 'logoText',
                    type: 'input',
                    message: 'What text would you like on your logo? Please enter up to three characters'
                }
            ]
        )
        console.log(logoText);
    
        if (logoText.logoText.length > 3) {                                                                                                                                            // IF the project title is left empty
            console.log('please try again by entering 3 characters or less.')
            getLogoText();                                                                                                                             // THEN it will be titled "untitled project"
        } else {
            getTextColor(logoText)
        }                                                                                                                                   // THEN the user is prompted to enter their project description
    }

    getLogoText();
    
    let getTextColor = async function(logoText) {
        let textColor = await inquirer.prompt(                                                                                                                                   // THEN the projectTitle will be saved when entered
            [
                {
                    name: 'textColor',
                    type: 'input',
                    message: 'What color would you like the text to be? Please enter a color keyword.'
                }
            ]
        )
        console.log(textColor);
        getLogoShape(logoText, textColor)
    }
    
    let getLogoShape = async function(logoText, textColor) {
        let logoShape = await inquirer.prompt(
            [
                {
                    name: 'logoShape',
                    type: 'list',
                    message: 'What shape would you like your logo to be?',
                    choices: ['circle', 'triangle', 'square']
                }
            ]
        )
        getBackgroundColor(logoText, textColor, logoShape);
    }
    
    let getBackgroundColor = async function(logoText, textColor, logoShape) {
        let shapeColor = await inquirer.prompt(
            [
                {
                    name: 'shapeColor',
                    type: 'input',
                    message: 'What color would you like the shape to be? Please enter a color keyword.'
                }
            ]
        )
        createSVG(logoText, textColor, logoShape, shapeColor);
    }
}

// function to handle creating the SVG file
createSVG = function(logoText, textColor, logoShape, shapeColor) {
    const userInputs = {
        logoText: logoText.logoText,
        textColor: textColor.textColor,
        logoShape: logoShape.logoShape,
        shapeColor: shapeColor.shapeColor
    }
    console.log(userInputs);

    let SVG = ''
    if(userInputs.logoShape === "circle") {
        SVG =
        `<svg width="300" height="200">
            <circle cx="150" cy="100" r="90" fill="${userInputs.shapeColor}"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="${userInputs.textColor}">${userInputs.logoText}</text>
        </svg>`
    } else if(userInputs.logoShape === "triangle") {
        SVG =
        `<svg width="300" height="200">
            <polygon points="150,10 50,190 250,190" fill="${userInputs.shapeColor}"/>
            <text x="150" y="160" font-size="60" text-anchor="middle" fill="${userInputs.textColor}">${userInputs.logoText}</text>
        </svg>`
    } else {
        SVG =
        `<svg width="300" height="200">
            <polygon points="60,10 60,190 240,190 240,10 " fill="${userInputs.shapeColor}"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="${userInputs.textColor}">${userInputs.logoText}</text>
        </svg>`
    }
    console.log(SVG);

    fs.writeFile('./logos/logo.svg', SVG, (err) => {
        err ? console.log('Your logo was not created. Please try again.') : console.log('Your logo was created! Check out the Logos folder to view it.');
    });
}

handlePrompting();