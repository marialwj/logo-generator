const { Shapes, Circle, Triangle, Square } = require('./shapes');

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
        test('should render a circle', () => {
        const circle = new Circle('#000', '#fff', 2, 'Hello', '#000', 5);
        expect(circle.fill).toBe('#000');
        expect(circle.stroke).toBe('#fff');
        expect(circle.strokeWidth).toBe(2);
        expect(circle.text).toBe('Hello');
        expect(circle.textColor).toBe('#fff');
        expect(circle.radius).toBe(50);
    });

     test('should render a circle', () => {
        const circle = new Circle('#000', '#fff', 2, 'Hello', '#000', 5);
        expect(circle.render()).toBe('<circle cx="50" cy="50" r="50" fill="#000" stroke="#fff" stroke-width="2" /><text x="50" y="50" text-anchor="middle" dominant-baseline="central" fill="#fff">Hello</text>');
    });
    });

    describe('Triangle', () => {
        test('should render a triangle', () => {
            const triangle = new Triangle('#000', '#fff', 2, 'Hello', '#000', 5, 10);
            expect(triangle.fill).toBe('#000');
            expect(triangle.stroke).toBe('#fff');
            expect(triangle.strokeWidth).toBe(2);
            expect(triangle.text).toBe('Hello');
            expect(triangle.textColor).toBe('#fff');
            expect(triangle.base).toBe(5);
            expect(triangle.height).toBe(10);
        });
    });

    test('should render a triangle', () => {
        const trinangle = new Triangle('#000', '#fff', 2, 'Hello', '#000', 5, 10);
        expect (triangle.render()).toBe('<polygon points="50,0 100,100 0,100" fill="#000" stroke="#fff" stroke-width="2" /><text x="50" y="50" text-anchor="middle" dominant-baseline="central" fill="#fff">Hello</text>');    
    });
});

describe('Square', () => {
    test('should render a square', () => {
        const square = new Square('#000', '#fff', 2, 'Hello', '#000', 5);
        expect(square.fill).toBe('#000');
        expect(square.stroke).toBe('#fff');
        expect(square.strokeWidth).toBe(2);
        expect(square.text).toBe('Hello');
        expect(square.sideLength).toBe(5);
    });


test('should render a square', () => {
    const square = new Square('#000', '#fff', 2, 'Hello', '#000', 5);
    expect(square.render()).toBe('<rect x="0" y="0" width="100" height="100" fill="#000" stroke="#fff" stroke-width="2" /><text x="50" y="50" text-anchor="middle" dominant-baseline="central" fill="#fff">Hello</text>');
});
});