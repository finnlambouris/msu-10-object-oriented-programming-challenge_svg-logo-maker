const Shapes = require('./shapes.js');
const Circle = Shapes[0];
const Triangle = Shapes[1];
const Square = Shapes[2];

describe('shape behavior', () => {
    describe('Circle class behavior', () => {
        it('should render a circle if the user selects a circle', () => {
            const logoText = "yay";
            const textColor = "blue";
            const logoShape = "circle";
            const shapeColor = "green";
            const testInputs = new Circle(logoText, textColor, logoShape, shapeColor);

            expect(testInputs.render()).toEqual(`<svg width="300" height="200"><circle cx="150" cy="100" r="90" fill="green"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">yay</text></svg>`);
        });
    });

    describe('Triangle class behavior', () => {
        it('should render a circle if the user selects a circle', () => {
            const logoText = "yay";
            const textColor = "blue";
            const logoShape = "triangle";
            const shapeColor = "green";
            const testInputs = new Triangle(logoText, textColor, logoShape, shapeColor);

            expect(testInputs.render()).toEqual(`<svg width="300" height="200"><polygon points="150,10 50,190 250,190" fill="green"/><text x="150" y="160" font-size="60" text-anchor="middle" fill="blue">yay</text></svg>`);
        });
    });

    describe('Square class behavior', () => {
        it('should render a circle if the user selects a circle', () => {
            const logoText = "yay";
            const textColor = "blue";
            const logoShape = "square";
            const shapeColor = "green";
            const testInputs = new Square(logoText, textColor, logoShape, shapeColor);

            expect(testInputs.render()).toEqual(`<svg width="300" height="200"><polygon points="60,10 60,190 240,190 240,10 " fill="green"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">yay</text></svg>`);
        });
    });
});