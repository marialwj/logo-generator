const { Shapes, Circle, Triangle, Square } = require('./shapes.js');

describe('Shapes', () => {
  test('should create a new Shapes instance', () => {
    const shape = new Shapes('#000', '#fff', 2, 'Hello');
    expect(shape.fill).toBe('#000');
    expect(shape.stroke).toBe('#fff');
    expect(shape.strokeWidth).toBe(2);
    expect(shape.text).toBe('Hello');
  });

  test('should set the text properly', () => {
    const circle = new Circle('#000', '#fff', 2, 'Hello', '#000', 5);
    expect(circle.fill).toBe('#000');
    expect(circle.stroke).toBe('#fff');
    expect(circle.strokeWidth).toBe(2);
    expect(circle.text).toBe('Hello');
    expect(circle.radius).toBe(5);
  });

  describe('Circle', () => {
    test('should create a new Circle instance', () => {
      const circle = new Circle('#000', '#fff', 2, 'Hello', '#000', 5);
      expect(circle.fill).toBe('#000');
      expect(circle.stroke).toBe('#fff');
      expect(circle.strokeWidth).toBe(2);
      expect(circle.text).toBe('Hello');
      expect(circle.textColor).toBe('#000');
      expect(circle.radius).toBe(5);
    });

    test('should render a circle', () => {
        const circle = new Circle('#000', '#fff', 2, 'Hello', '#000', 5);
        const expectedPatternCircle = /<svg.*<circle.*fill="#000".*\/>\s*<text.*>Hello<\/text>\s*<\/svg>/s;
        expect(circle.renderCircle()).toMatch(expectedPatternCircle);
      });
      

  describe('Triangle', () => {
    test('should render a triangle', () => {
      const triangle = new Triangle('#000', '#fff', 2, 'Hello', '#000', 5, 10);
      const expectedPatternTriangle = /<polygon.*fill="#000".*\/>\s*<text.*>Hello<\/text>\s*<\/svg>/;
      expect(triangle.renderTriangle()).toMatch(expectedPatternTriangle);
    });
  });

  describe('Square', () => {
    test('should render a square', () => {
      const square = new Square('#000', '#fff', 2, 'Hello', '#000', 5);
      const expectedPatternSquare = /<rect.*fill="#000".*\/>\s*<text.*>Hello<\/text>\s*<\/svg>/;
      expect(square.renderSquare()).toMatch(expectedPatternSquare);
    });
  });
})});
