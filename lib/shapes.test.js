const Shapes = require('./shapes.js');
const Circle = Shapes[0];
const Triangle = Shapes[1];
const Square = Shapes[2];

describe('Circle class behavior', () => {
    it('should render a circle if the user selects a circle', () => {
        
        const logoText = "yay";
        const textColor = "blue";
        const logoShape = "circle";
        const shapeColor = "green";
        const testInputs = new Circle(logoText, textColor, logoShape, shapeColor)

        expect(testInputs.render()).toEqual(`<svg width="300" height="200"><circle cx="150" cy="100" r="90" fill="green"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">yay</text></svg>`);
    });
});

describe('Circle class behavior', () => {
    it('should render a circle if the user selects a circle', () => {
        
        const logoText = "yay";
        const textColor = "blue";
        const logoShape = "circle";
        const shapeColor = "green";
        const testInputs = new Circle(logoText, textColor, logoShape, shapeColor)

        expect(testInputs.render()).toEqual(`<svg width="300" height="200"><circle cx="150" cy="100" r="90" fill="green"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">yay</text></svg>`);
    });
});