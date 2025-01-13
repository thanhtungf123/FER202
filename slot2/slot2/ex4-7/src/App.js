class Shape {
  constructor(color) {
    this.color = color;
  }

  getArea() {
    throw new Error("getArea() must be implemented in subclasses");
  }

  toString() {
    return `Shape with color: ${this.color}`;
  }
}

class Rectangle extends Shape {
  constructor(color, length, width) {
    super(color);
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  toString() {
    return `Rectangle with color: ${this.color}, length: ${this.length}, width: ${this.width}, area: ${this.getArea()}`;
  }
}

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }

  toString() {
    return `Triangle with color: ${this.color}, base: ${this.base}, height: ${this.height}, area: ${this.getArea()}`;
  }
}

const rectangle = new Rectangle("red", 5, 10);
console.log(rectangle.toString());

const triangle = new Triangle("blue", 4, 8);
console.log(triangle.toString());
