/*
  Static Methods
*/

class Rectangle {
  constructor(name, height, width) {
    this.name = name
    this.height = height
    this.width = width
  }

  // *** belong to the instance of the class
  area() {
    return this.height * this.width
  }

  static getClass() {
    return 'Rectangle'
  }
}

const rect = new Rectangle('Rect', 10, 10)
console.log(rect.area())
console.log(Rectangle.getClass()) // static method: cannot call using instance, but need to use class name
