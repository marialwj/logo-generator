const {Circle, Square, Triangle} = require('./lib/shapes.js');
// const questions = require('./lib/questions.js');
const inquirer = require('inquirer');
const fs = require('fs');
const questions = [
  {
      type: "list",
      name: "shape",
      message: "What shape do you want to generate?",
      choices: ["Circle", "Square", "Triangle"],
  },

  {
      type: "input",
      name: "text",
      message: "What text do you want to add to the shape? (3 chars. max)",
  },

  {
      type: "input",
      name: "textColor",
      message: "What color do you want the text to be? (enter the Hex code)",
  }, 
  
  {
      type: "input",
      name: "fill",
      message: "What background color do you want the shape to have? (enter the Hex code)",
  },

  {
      type: "input",
      name: "stroke",
      message: "What color of the shape border should be? (enter the Hex code",
  },

  {
      type: "number",
      name: "strokeWidth",
      message: "What width of the shape border should be? (# between 1-5)",
  },

];

function validateHexCode(input) {
  const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
  return hexColorRegex.test(input) ? true : 'Please enter a valid hex color code.';
}

async function generateShape() {
  const answers = await inquirer.prompt(questions);
   let shape;
  
  switch (answers.shape.toLowerCase()) {
    case 'circle':
      shape = new Circle(answers.fill, answers.stroke, answers.strokeWidth, answers.text, answers.textColor, answers.radius);
      break;
    case 'square':
      shape = new Square(answers.fill, answers.stroke, answers.strokeWidth, answers.text, answers.textColor, answers.sideLength);
      break;
    case 'triangle':
      shape = new Triangle(answers.fill, answers.stroke, answers.strokeWidth, answers.text, answers.textColor, answers.base, answers.height);
      break;
    default:
      console.log('Invalid shape.');
      return;
  }

  shape.setColor(answers.fill);
   shape.setTextColor(answers.textColor);
   shape.setText(answers.text);
    const text = shape.render();


    fs.writeFile('logo.svg', text, (err) => {
      console.log(err);
    }
    )

  }


generateShape();
