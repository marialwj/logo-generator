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

     


});
