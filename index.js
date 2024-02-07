const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const questions = require('./lib/questions');

const init = () => {
    inquirer.createPromptModule(questions)
    .then((data)) => {
        console.log("Processing SVG File...");
        switch ('${data.shape}') {
            case 'circle':
                console.log('Circle is being created...')
                const circle = 
        }