// varibles for the required modules
const fs = require('fs');
const inquirer = require('inquirer');

// function to handle inquirer prompts
handlePrompting = function() {                                      // WHEN the handlePrompting function is called
    let getLogoText = async function() {                                                                            // WHEN the getLogoText function is called
        let logoText = await inquirer.prompt(                                                                       // THEN the logoText will be saved when entered
            [
                {
                    name: 'logoText',
                    type: 'input',
                    message: 'What text would you like on your logo? Please enter up to three characters'
                }
            ]
        )
    
        if (logoText.logoText.length > 3) {                                                                         // IF the logo text entered is more than 3 characters
            console.log('please try again by entering 3 characters or less.')                                       // THEN the user will be asked to try again by entering 3 characters or less
            getLogoText();                                                                                          // THEN the user will be prompted to enter their logo text
        } else {                                                                                                    // IF the logo text entered is 3 characters or less
            getTextColor(logoText)                                                                                  // THEN the user will be prompted to pick the color of their text
        }
    }

    getLogoText();                                                  // THEN the user will be prompted to enter their logo text
    
    let getTextColor = async function(logoText) {                                                                   // WHEN the getTextColor function is called
        let textColor = await inquirer.prompt(                                                                      // THEN the textColor will be saved when entered
            [
                {
                    name: 'textColor',
                    type: 'input',
                    message: 'What color would you like the text to be? Please enter a color keyword.'
                }
            ]
        )
        getLogoShape(logoText, textColor)                                                                           // THEN the user will be prompted to pick their logo's shape
    }
    
    let getLogoShape = async function(logoText, textColor) {                                                        // WHEN the getLogoShape function is called
        let logoShape = await inquirer.prompt(                                                                      // THEN the logoShape will be saved when entered
            [
                {
                    name: 'logoShape',
                    type: 'list',
                    message: 'What shape would you like your logo to be?',
                    choices: ['circle', 'triangle', 'square']
                }
            ]
        )
        getShapeColor(logoText, textColor, logoShape);                                                              // THEN the user will be prompted to pick the shape's color
    }
    
    let getShapeColor = async function(logoText, textColor, logoShape) {                                            // WHEN the getShapeColor function is called
        let shapeColor = await inquirer.prompt(                                                                     // THEN the shapeColor will be saved when entered
            [
                {
                    name: 'shapeColor',
                    type: 'input',
                    message: 'What color would you like the shape to be? Please enter a color keyword.'
                }
            ]
        )
        createSVG(logoText, textColor, logoShape, shapeColor);                                                      // THEN the SVG file will be created
    }
}

// function to handle creating the SVG file
createSVG = function(logoText, textColor, logoShape, shapeColor) {                                                              // WHEN the createSVG function is called
    const Shapes = require('./lib/shapes.js');                                                                                  // THEN the shapes file module exports are referenced
    const Circle = Shapes[0];                                                                                                   // THEN the Circle class in the shapes file is referenced
    const Triangle = Shapes[1];                                                                                                 // THEN the Triangle class in the shapes file is referenced
    const Square = Shapes[2];                                                                                                   // THEN the Square class in the shapes file is referenced

    const userInputs = {                                                                                                        // THEN the userInputs from the handlePrompting function are stored in an object
        logoText: logoText.logoText,
        textColor: textColor.textColor,
        logoShape: logoShape.logoShape,
        shapeColor: shapeColor.shapeColor
    }

    if (userInputs.logoShape === "circle") {                                                                                    // IF the user picked for their shape to be a circle
        const logo = new Circle(userInputs.logoText, userInputs.textColor, userInputs.logoShape, userInputs.shapeColor);        // THEN a new Circle is created
        logo.render();                                                                                                          // THEN the SVG file text is rendered
        logo.createSVG();                                                                                                       // THEN the SVG is created
    } else if (userInputs.logoShape === "triangle") {                                                                           // IF the user picked for their shape to be a triangle
        const logo = new Triangle(userInputs.logoText, userInputs.textColor, userInputs.logoShape, userInputs.shapeColor);      // THEN a new Triangle is created
        logo.render();                                                                                                          // THEN the SVG file text is rendered
        logo.createSVG();                                                                                                       // THEN the SVG is created
    } else {                                                                                                                    // IF the user picked for their shape to be a square
        const logo = new Square(userInputs.logoText, userInputs.textColor, userInputs.logoShape, userInputs.shapeColor);        // THEN a new Square is created
        logo.render();                                                                                                          // THEN the SVG file text is rendered
        logo.createSVG();                                                                                                       // THEN the SVG is created
    }
}

// initializes the prompting when the file is run
handlePrompting();