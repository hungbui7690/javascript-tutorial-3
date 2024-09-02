/*
  Nesting, Concat & The Spread Operator


*/

let x

const fruits = ['apple', 'pear', 'orange']
const berries = ['strawberry', 'blueberry', 'raspberry']

// Nesting berries inside of fruits
fruits.push(berries) // ['apple', 'pear', 'orange', Array(3)]
x = fruits[3][1] // blueberry

// Create a new variable and nest both arrays
const allFruits = [fruits, berries] // [Array(4), Array(3)]

x = allFruits[1][2] // raspberry

// concat() -> Concatenate arrays
x = fruits.concat(berries) // ['apple', 'pear', 'orange', Array(3), 'strawberry', 'blueberry', 'raspberry']

// concat -> using spread operator (...)
x = [...fruits, ...berries] // ['apple', 'pear', 'orange', Array(3), 'strawberry', 'blueberry', 'raspberry']

// flat() -> Flatten an array -> only 1 level deep
const arr = [1, 2, [3, 4, 5], 6, [7, 8]]
x = arr.flat() // [1, 2, 3, 4, 5, 6, 7, 8]

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Static methods of Array object
// isArray() - Check is is an array
x = Array.isArray(fruits) // true

// from() - Create an array from an array like value
x = Array.from('12345') // ['1', '2', '3', '4', '5']

// of() - Create an array from a set of values
const a = 1
const b = 2
const c = 3

x = Array.of(a, b, c)
console.log('of', x)
