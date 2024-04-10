const fs = require('fs');

class Shapes {
    constructor(logoText, textColor, logoShape, shapeColor) {
        this.logoText = logoText,
        this.textColor = textColor,
        this.logoShape = logoShape,
        this. shapeColor = shapeColor
    }
    
    createSVG() {
        const SVG = this.render()
        fs.writeFile('./logos/logo.svg', SVG, (err) => {
            err ? console.log('Your logo was not created. Please try again.') : console.log('Your logo was created! Check out the Logos folder to view it.');
        });
    }
}

class Circle extends Shapes {
    render() {
        return `<svg width="300" height="200"><circle cx="150" cy="100" r="90" fill="${this.shapeColor}"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
    }
}

class Triangle extends Shapes{
    render() {
        return `<svg width="300" height="200"><polygon points="150,10 50,190 250,190" fill="${this.shapeColor}"/><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`
    }
}

class Square extends Shapes {
    render() {
        return `<svg width="300" height="200"><polygon points="60,10 60,190 240,190 240,10 " fill="${this.shapeColor}"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`
    }
}

module.exports = [
    Circle,
    Triangle,
    Square
]