/*
  Number Challenge
  - Create a variable called x that is a random number between 1 and 100 along with a variable called y that is a random number between 1 and 50.
  - Create a variable for the sum, difference, product, quotient and remainder of x and y. Log the output in a string that shows the two numbers of x and y along with the operator and result.


*/

let x = Math.round(Math.random() * 100 + 1)
let y = Math.round(Math.random() * 50 + 1)

console.log(`x = ${x}`)
console.log(`y = ${y}`)
console.log(`sum = ${x + y}`)
console.log(`difference = ${x - y}`)
console.log(`product = ${x * y}`)
console.log(`quotient = ${x / y} `)
console.log(`remainder = ${x % y}`)
