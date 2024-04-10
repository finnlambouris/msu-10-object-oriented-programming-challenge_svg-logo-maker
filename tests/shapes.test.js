// const createSVG = require('./logoGenerator.js');

// describe('createSVG function', () => {
//     it('should render a triangle if the user selects a triangle', () => {
//         const logoText = "KMS";
//         const textColor = "blue";
//         const logoShape = "circle";
//         const shapeColor = "green";
//         // const testInputs = new UserInputs(logoText, textColor, logoShape, shapeColor);
//         const testInputs2 = new UserInputs("KMS", "blue", "circle", "green");

//         expect(testInputs2).toEqual(`<svg width="300" height="200">
//         <circle cx="150" cy="100" r="90" fill="green"/>
//         <text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">KMS</text>
//     </svg>`);
//     });
// });

const createSVG = require('./logoGenerator');

describe('createSVG function', () => {
    test('should create SVG for a triangle logo', () => {
        const logoText = 'Hi';
        const textColor = 'black';
        const logoShape = 'triangle';
        const shapeColor = 'red';

        const expectedSVG = `<svg width="300" height="200">
                                <polygon points="150,10 50,190 250,190" fill="red"/>
                                <text x="150" y="160" font-size="60" text-anchor="middle" fill="black">Hello</text>
                            </svg>`;

        const generatedSVG = createSVG(logoText, textColor, logoShape, shapeColor);

        expect(generatedSVG).toEqual(expectedSVG);
    });
});