const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const questions = require('./lib/questions');

const init = () => {
    inquirer.createPromptModule(questions)
    .then((data) => {
        console.log("Processing SVG File...");
        switch (data.shape) {
            case 'circle':
                console.log('Circle is being created...');
                const circle = new Circle(data.fill, data.stroke, data.strokeWidth, data.text, data.textColor, data.width);
                fs.writeFile('circle.svg', circle.render(), (err) => { 
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Congratulations! Circle SVG File created successfully!');
                    }
                });
                break;
            case 'triangle':
                console.log('Triangle is being created...');
                const triangle = new Triangle(data.fill, data.stroke, data.strokeWidth, data.text, data.textColor, data.width);
                fs.writeFile('triangle.svg', triangle.render(), (err) => { 
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Congratulations! Triangle SVG File created successfully!');
                    }
                });
                break;
            case 'square':
                console.log('Square is being created...');
                const square = new Square(data.fill, data.stroke, data.strokeWidth, data.text, data.textColor, data.width);
                fs.writeFile('square.svg', square.render(), (err) => { 
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Congratulations! Square SVG File created successfully!');
                    }
                });
                break;
            default:
                console.log('Invalid shape.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};
                                               
