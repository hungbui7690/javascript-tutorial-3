/*
  Adding Methods to the Prototype

*/

function Rectangle(name, width, height) {
  this.name = name
  this.width = width
  this.height = height
}

////////////////////////////////////
// These function will be added to Prototype
Rectangle.prototype.area = function () {
  return this.width * this.height
}

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height)
}

Rectangle.prototype.isSquare = function () {
  return this.width === this.height
}

Rectangle.prototype.changeName = function (newName) {
  return (this.name = newName)
}

const rect1 = new Rectangle('Rect', 10, 20)
const rect2 = new Rectangle('Rect 2', 30, 40)

console.log('**', rect1)
console.log('@@ area', rect1.area())
console.log('@@ perimeter', rect1.perimeter())
console.log('@@ isSquare', rect1.isSquare())
rect1.changeName('Test')
console.log('@@', rect1.name)

console.log('>> area', rect2.area())
