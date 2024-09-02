/*
  Prototypical Inheritance & call()

*/

/////////////////////////////////
// parent class
/////////////////////////////////
function Shape(name) {
  this.name = name
}

Shape.prototype.logName = function () {
  console.log(`Shape Name: ${this.name}`)
}

////////////////////////////////////
// sub class
////////////////////////////////////
function Rectangle(name, height, width) {
  Shape.call(this, name) // *** inherits Shape constructor

  this.height = height
  this.width = width
}

function Circle(name, radius) {
  Shape.call(this, name)

  this.radius = radius
}

////////////////////////////////////
// Inherits Shape prototypes
////////////////////////////////////
Rectangle.prototype = Object.create(Shape.prototype) // from previous lecture

Rectangle.prototype.logName = function () {
  // *** overwrite the method of Shape
  console.log(`Rectangle Name: ${this.name}`)
}

Circle.prototype = Object.create(Shape.prototype) // from previous lecture

////////////////////////////////////
// Set prototype constructors
// *** if we don't have these 2 lines, when we check the rect and cir objects below >> we will see the Shape constructor, but not the Rectangle and Circle constructors
////////////////////////////////////
Rectangle.prototype.constructor = Rectangle
Circle.prototype.constructor = Circle

////////////////////////////////////
// Create Instances
////////////////////////////////////
const rect = new Rectangle('Rectangle 1', 20, 20)
const cir = new Circle('Circle 1', 30)

console.log(rect, cir)

rect.logName()
cir.logName()
