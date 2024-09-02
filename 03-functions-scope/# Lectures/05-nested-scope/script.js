/*
  Nested Scope


*/

// In JS, we create define a function inside the function
function first() {
  const x = 100

  function second() {
    const y = 200
    console.log('x + y = ', x + y)
  }

  // console.log(y) // error

  second()
}

first()

if (true) {
  const x = 100

  if (x === 100) {
    const y = 200
    console.log('x + y = ', x + y)
  }

  // console.log('y in if block', y) // error
}
