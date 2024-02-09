import { Circle, Square, Triangle } from './lib/shapes.js';
import questions from './lib/questions.js';
import inquirer from 'inquirer';

function validateHexCode(input) {
  const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
  return hexColorRegex.test(input) ? true : 'Please enter a valid hex color code.';
}

async function generateShape() {
  const answers = await inquirer.prompt(questions);

  switch (answers.shape.toLowerCase()) {
    case 'circle':
      const circle = new Circle(answers.fill, answers.stroke, answers.strokeWidth, answers.text, answers.textColor, answers.radius);
      console.log(circle.renderCircle());
      break;
    case 'square':
      const square = new Square(answers.fill, answers.stroke, answers.strokeWidth, answers.text, answers.textColor, answers.sideLength);
      console.log(square.renderSquare());
      break;
    case 'triangle':
      const triangle = new Triangle(answers.fill, answers.stroke, answers.strokeWidth, answers.text, answers.textColor, answers.base, answers.height);
      console.log(triangle.renderTriangle());
      break;
    default:
      console.log('Invalid shape.');
      break;
  }
}

generateShape();
