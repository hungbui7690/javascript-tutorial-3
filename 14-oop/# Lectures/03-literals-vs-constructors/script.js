/*
  Literals vs Built-in Constructors

*/

const strLiteral = 'Hello' // literal
const strObject = new String('Hello') // object

console.log('>> strLiteral', strLiteral, typeof strLiteral)
console.log('>> strObject', strObject, typeof strObject)
console.log('1) ====================')

//////////////////////////////
// Boxing: Even though the strLiteral variable is a string literal for a primitive type, it can still use the toUpperCase() method because the string literal is converted to a String object behind the scenes. This is called boxing.
//////////////////////////////
console.log('@ ', strLiteral.toUpperCase())
console.log('@ ', strLiteral[0])

// Unboxing
console.log('><', strObject.valueOf(), typeof strObject.valueOf())

console.log(strLiteral.constructor)
console.log(strObject.constructor)

//////////////////////////////
// The instanceof operator returns true if an object is an instance of a constructor. It returns false if it is a literal.
//////////////////////////////
console.log(strLiteral instanceof String) // false
console.log(strObject instanceof String) // true
console.log('2) ====================')

// Other types
const numLiteral = 20
const numObject = new Number(20)

console.log('## numLiteral', numLiteral, typeof numLiteral)
console.log('## numObject', numObject, typeof numObject)

const boolLiteral = true
const boolObject = new Boolean(true)

console.log('- boolLiteral', boolLiteral, typeof boolLiteral)
console.log('- boolObject', boolObject, typeof boolObject)

const arrLiteral = [1, 2, 3, 4, 5]
const arrObject = new Array(1, 2, 3, 4, 5)

console.log(arrLiteral, typeof arrLiteral)
console.log(arrObject, typeof arrObject)
console.log('3) ====================')

const funcLiteral = function (x) {
  return x * x
}

console.log('$$', funcLiteral, typeof funcLiteral)
console.log('$$', funcLiteral(5))

const funcObject = new Function('x', 'return x * x')

// We can execute the function created with the Function constructor
console.log('$$', funcObject(3))

console.log('4) ====================')
const obj1 = {}
const obj2 = new Object() // Behind the scenes, JS does this for the previous line as well

console.log(obj1, typeof obj1)
console.log(obj2, typeof obj2)
