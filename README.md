### SVG Logo Maker 🟣
Description
This Node.js command-line application enables users to create custom SVG logos by selecting colors, shapes, and inputting text. Perfect for freelance web developers looking to craft simple logos without the need for a graphic designer. The application is built with usability in mind, requiring only a few user inputs to generate a personalized logo saved as an SVG file.

## Table of Contents
1. Installation
2. Usage
3. Features
4. Walkthrough Video
5. Tests
6. Contributing

## Installation
- To get started, clone this repository to your local machine. You will need Node.js installed to run the application. Once cloned, navigate to the project directory and install the necessary dependencies by running:

"npm install"

- This will install Inquirer for user input and Jest for running the unit tests.

## Usage
To launch the application, run the following command in the terminal:

"node index.js"

- Follow the prompts to select your logo's text (up to three characters), text color (color keyword or hexadecimal), shape (circle, triangle, square), and the shape's color. Upon completion, the application generates an SVG file named logo.svg in the project directory.

## Features
1. Shape Selection: Choose from circle, triangle, or square shapes for your logo.
2. Color Customization: Specify colors for both text and shape using keywords or hex codes.
3. Text Input: Add up to three characters of text to your logo.
4. SVG Output: Automatically saves your custom logo as an SVG file.

Walkthrough Video
For a detailed demonstration of the application's functionality and its test suite, please refer to the walkthrough video.

## Tests
To ensure reliability, the application includes a suite of unit tests for the shape classes. Run these tests using Jest with the following command:

"npm test"
 - Ensure all tests pass to verify the application's integrity.