/*
  Classes
  - from ES2016
  - synthetic sugar 
*/

////////////////////////////////
// Blue-print: another way to
////////////////////////////////
class Rectangle {
  // everytime we create new instance >> this will run >> this also be put in prototype like we learn before
  constructor(name, width, height) {
    this.name = name
    this.width = width
    this.height = height
  }

  area() {
    return this.height * this.width
  }

  perimeter() {
    return 2 * (this.width + this.height)
  }

  isSquare() {
    return this.width === this.height
  }

  logArea() {
    console.log('Rectangle Area: ' + this.area())
  }
}

////////////////////////////////////
// create instance and use
const square = new Rectangle('Square', 20, 20)
console.log('area()', square.area()) // abstraction >> we just use, but we don't need to know the details
console.log('perimeter()', square.perimeter())
console.log('isSquare()', square.isSquare())
square.logArea()
console.log(square)
console.log(Object.getPrototypeOf(square)) // return the class of that instance
