const { Square, Triangle, Circle } = require("./shapes.js");

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const circle = new Circle();
    circle.setColor("green");
    circle.setText(""); 
    circle.setTextColor(""); 
    const actualSvg = circle.render();
    const expSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text>
</svg>`;
    expect(actualSvg).toEqual(expSvg);
  });
  test("should accept a fillColor param", () => {
    const circle = new Circle();
    circle.setColor("blue");
    circle.setText(""); 
    circle.setTextColor(""); 
    const actualSvg = circle.render();
    const expSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="blue" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text>
</svg>`;
    expect(actualSvg).toEqual(expSvg);
  });
});


describe("Triangle", () => {
  test("should render svg for a bisque polygon element", () => {
    const triangle = new Triangle();
    triangle.setColor("bisque");
    triangle.setText(""); 
    triangle.setTextColor(""); 
    const actualSvg = triangle.render();
    const expSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="bisque" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text>
</svg>`;
    expect(actualSvg).toEqual(expSvg);
  });
  test("should accept a fillColor param", () => {
    const triangle = new Triangle();
    triangle.setColor("purple");
    triangle.setText(""); 
    triangle.setTextColor(""); 
    const actualSvg = triangle.render();
    const expSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="purple" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text>
</svg>`;
    expect(actualSvg).toEqual(expSvg);
  });
});


describe("Square", () => {
  test("should render svg for a green rectangle element", () => {
    const square = new Square();
    square.setColor("dodgerblue");
    square.setText(""); 
    square.setTextColor(""); 
    const actualSvg = square.render();
    const expSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="dodgerblue" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text>
</svg>`;
    expect(actualSvg).toEqual(expSvg);
  });
  test("should accept a fillColor param", () => {
    const square = new Square();
    square.setColor("red");
    square.setText(""); 
    square.setTextColor(""); 
    const actualSvg = square.render();
    const expSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="red" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text>
</svg>`;
    expect(actualSvg).toEqual(expSvg);
  });
});