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
    const Shapes = require('./lib/shapes.js');
    const Circle = Shapes[0];
    const Triangle = Shapes[1];
    const Square = Shapes[2];

    const userInputs = {
        logoText: logoText.logoText,
        textColor: textColor.textColor,
        logoShape: logoShape.logoShape,
        shapeColor: shapeColor.shapeColor
    }

    if (userInputs.logoShape === "circle") {
        const logo = new Circle(userInputs.logoText, userInputs.textColor, userInputs.logoShape, userInputs.shapeColor);
        logo.render();
        logo.createSVG();
    } else if (userInputs.logoShape === "triangle") {
        const logo = new Triangle(userInputs.logoText, userInputs.textColor, userInputs.logoShape, userInputs.shapeColor);
        logo.render();
        logo.createSVG();
    } else {
        const logo = new Square(userInputs.logoText, userInputs.textColor, userInputs.logoShape, userInputs.shapeColor);
        logo.render();
        logo.createSVG();
    }
}

handlePrompting();