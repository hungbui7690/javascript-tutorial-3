/*
  Working with Numbers


*/

let x

const num = new Number(5) // Number {5}

// toString() -> returns a string representation of the number
x = num.toString() // '5'

// To get the length
x = num.toString().length // 1

// toFixed() -> returns a string representation of the number with a specified number of decimals
x = num.toFixed(2) // 5.00

// toPrecision() -> returns a number with the specified length
x = num.toPrecision(4) // 5.000

// toExponential() ->  convert a number to exponential notation and return its value as a string
x = num.toExponential(2) // 5.00e+0

// toLocaleString() -> returns a string representation of the number, using the current locale
x = num.toLocaleString('en-US') // 5

// valueOf -> Get value
x = num.valueOf() // 5

// \\\\\\\\\\\\\\\\\\\\\\\\\
// The Number object itself has some properties and methods
// Largest and smallest possible number
x = Number.MAX_VALUE // 1.7976931348623157e+308
x = Number.MIN_VALUE // 5e-324
