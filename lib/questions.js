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

module.export = questions;