/*
  Block Scope
  - when we create variable using var -> it will be put in window object


*/

const x = 100

// An If statement is a block
if (true) {
  console.log(x) // 100
  const y = 200
  console.log(x + y) // 300
}

// console.log(y); // error -> block scope

// A loop is a block
for (let i = 0; i <= 5; i++) {
  console.log('-> i:', i)
}
// console.log(i); // error: ReferenceError: i is not defined -> error -> i is block scope

// Using var
if (true) {
  const a = 500
  let b = 600
  var c = 700 // #
}
console.log('var c', c) // # var is not block scope

// var IS function scoped
function run() {
  var d = 100
  console.log(d)
}

run()

console.log('d: ', d) // error since var is function scope

const foo = 1
var bar = 2 // Put on the window object
