class Shapes {
    fill;
    stroke;
    strokeWidth;
    text;
    textColor;

    constructor(fill, stroke, strokeWidth, text, textColor) {
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.text = text;
        this.textColor = textColor;
    }

    setText() {
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Circle extends Shapes {
    radius;

    constructor(fill, stroke, strokeWidth, text, textColor, radius) {
        super(fill, stroke, strokeWidth, text, textColor);
        this.radius = radius;
    }

    renderCircle() {
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="${this.radius}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
            ${this.setText()}
        </svg>`;
    }
}

class Square extends Shapes {
    width;
    height;

    constructor(fill, stroke, strokeWidth, text, textColor, width, height) {
        super(fill, stroke, strokeWidth, text, textColor);
        this.width = width;
        this.height = height;
    }

    renderSquare() {
        const xEl = this.width * 2;
        const yEl = this.height * 2;
        return `<svg version="1.1" 
        width="500" height="500" 
        xmlns="http://www.w3.org/2000/svg">
        <rect x="250" y="250" width="${xEl}" height="${yEl}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
        ${this.setText()}
        </svg>`;
    }
}

class Triangle extends Shapes {

    renderTriangle() {
        return `<svg version="1.1"
        width="500" height="500"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="250,50 400,450 50,450" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
        ${this.setText()}
        </svg>`;
    }
}

module.exports = { Shapes, Circle, Square, Triangle };
