export class Shapes {
  constructor(fill, stroke, strokeWidth, text) {
    this.fill = fill;
    this.stroke = stroke;
    this.strokeWidth = strokeWidth;
    this.text = text;
  }
}

export class Circle extends Shapes {
  constructor(fill, stroke, strokeWidth, text, textColor, radius) {
    super(fill, stroke, strokeWidth, text);
    this.textColor = textColor;
    this.radius = radius;
  }

  renderCircle() {
    return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
                <circle cx="250" cy="250" r="${this.radius}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="${this.textColor}">${this.text}</text>
            </svg>`;
}
}

export class Triangle extends Shapes {
  constructor(fill, stroke, strokeWidth, text, textColor, base, height) {
    super(fill, stroke, strokeWidth, text);
    this.textColor = textColor;
    this.base = base;
    this.height = height;
  }

  renderTriangle() {
    return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
                <polygon points="250,${250 - this.height / 2} ${250 + this.base / 2},${250 + this.height / 2} ${250 - this.base / 2},${250 + this.height / 2}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
                <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}">${this.text}</text>
            </svg>`;
  }
}

export class Square extends Shapes {
  constructor(fill, stroke, strokeWidth, text, textColor, sideLength) {
    super(fill, stroke, strokeWidth, text);
    this.textColor = textColor;
    this.sideLength = sideLength;
  }

  renderSquare() {
    return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
                <rect x="${250 - this.sideLength / 2}" y="${250 - this.sideLength / 2}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
                <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}">${this.text}</text>
            </svg>`;
  }
}
