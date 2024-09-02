/*
  Working with Strings


*/

let x

const name = 'John'
const age = 31

//\\\\\\\\\\\\\\\\\\\\\\\\\\
// Concatenation
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old'
console.log(x)

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`
console.log(x)

//\\\\\\\\\\\\\\\\\\\\\\\\\\
// String Properties and Methods
// Creating a "string object" (JS does this automatically when using a property or method on a primitive string)
const s = new String('Hello World') // Method 1
const s1 = 'Hi' // Method 2

x = typeof s
console.log(x) // object

x = s.length
console.log(x) // 11

// Access value by key
x = s[0]
console.log(x) // H

// Shows the prototype of the string object. Shows the properties and methods
x = s.__proto__
console.log('__proto__', x)

// Change case
x = s.toUpperCase()
console.log(x)
x = s.toLowerCase()
console.log(x)

// charAt() - returns the character at the specified index
x = s.charAt(0)
console.log(x)

// indexOf - returns the index of the first occurrence of a specified value in a string
x = s.indexOf('d')
console.log(x)

// substring() - search a string for a specified value
x = s.substring(2, 5) // from index 2 to index 4
console.log('substring', x)
x = s.substring(7) // from index 7 to end
console.log('substring', x)

// slice() - extracts a part of a string and returns a new string >> copy string
x = s.slice(-11, -6)
console.log('slice', x)

// trim() - remove whitespace from beginning and end of string
x = '         Hello World'
x = x.trim()
x = x.trimStart()
console.log(x)

// replace() - replace all instances of a string
x = s.replace('World', 'John')
console.log('replace', x)

// includes() - returns true if the string is found
x = s.includes('Hell')
console.log('includes', x)

// valueOf() - returns the primitive value of a variable
x = s.valueOf()
console.log('valueOf', s) // String {'Hello World'}
console.log('valueOf', x) // Hello World

// split() - returns an array of strings
x = s.split('')

console.log('split', x)
