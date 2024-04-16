const fs = require('fs');

// Shapes class with all the information that will be present in the circle, triangle, and square classes
class Shapes {
    constructor(logoText, textColor, logoShape, shapeColor) {
        this.logoText = logoText,
        this.textColor = textColor,
        this.logoShape = logoShape,
        this. shapeColor = shapeColor
    }
    
    // function to create the SVG file
    createSVG() {
        const SVG = this.render()
        fs.writeFile('./logos/logo.svg', SVG, (err) => {
            err ? console.log('Your logo was not created. Please try again.') : console.log('Your logo was created! Check out the Logos folder to view it.');
        });
    }
}

// Circle class that uses all the information from the Shapes class and adds a function to render the text in the SVG file
class Circle extends Shapes {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="90" fill="${this.shapeColor}"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
    }
}

// Triangle class that uses all the information from the Shapes class and adds a function to render the text in the SVG file
class Triangle extends Shapes{
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150,10 50,190 250,190" fill="${this.shapeColor}"/><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`
    }
}

// Square class that uses all the information from the Shapes class and adds a function to render the text in the SVG file
class Square extends Shapes {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="60,10 60,190 240,190 240,10 " fill="${this.shapeColor}"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`
    }
}

// Information to be used in the index.js file and the test file
module.exports = [
    Circle,
    Triangle,
    Square
]