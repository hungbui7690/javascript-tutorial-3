/*
  Data Types
  - pic
  - typeof null === object
  - typeof undefined = 'undefined'


*/

// String
const firstName = 'Sara'
console.log(firstName, typeof firstName)

// Number
const age = 30
const temp = 98.9
console.log(temp, typeof temp)

// Boolean
const hasKids = true
console.log(hasKids, typeof hasKids)

// Null
const aptNumber = null
console.log(aptNumber, typeof aptNumber)

// Undefined
// let score;
const score = undefined
console.log(score, typeof score)

// Symbol
const id = Symbol('id')
console.log(id, typeof id)

// BigInt >> has "n" at the end
const n = 9007199254740991n
console.log(n, typeof n)

///////////////////////////
// Reference Types
// array
const numbers = [1, 2, 3, 4]
console.log(numbers, typeof numbers)

// object
const person = {
  name: 'Brad',
}
console.log(person, typeof person)

// function
function sayHello() {
  console.log('Hello')
}
const output = sayHello

console.log(output, typeof output)

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3
