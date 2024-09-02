/*
  Arrow Functions


*/

// # Normal function declaration
// function add(a, b) {
//   return a + b;
// }

// # Arrow function syntax
const add = (a, b) => {
  return a + b
}

// # Implicit Return -> no need return keyword
const subtract = (a, b) => a - b

// # Can leave off () with a single param
const double = (a) => a * 2

// # Returning an object -> need parenthesis
const createObj = () => ({
  name: 'Joe',
  age: 33,
})

const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function (n) {
  console.log('n = ', n)
})

// # Arrow function in a callback
numbers.forEach((x) => console.log('x', x))

console.log('add(1, 2)', add(1, 2))
console.log('subtract(10, 5)', subtract(10, 5))
console.log('double(10)', double(10))

const x = createObj()
console.log('createObj()', x)
