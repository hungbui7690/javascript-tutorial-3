/*
  Array Methods


*/

let x

const arr = [28, 38, 44, 29, 109]
console.log('arr', arr)

// push -> Push a value on to the end of the array
arr.push(100)
console.log('push', arr)

// pop -> Take the last value off
arr.pop()
console.log('pop', arr)

// unshift -> Add a value to the beginning of the array
arr.unshift(99)
console.log('unshift', arr)

// shift -> Remove first value
arr.shift()
console.log('shift', arr)

// reverse -> Reverse an array -> mutate the array
arr.reverse()
console.log('reverse', arr)

// includes -> Check to see if something is in the array
x = arr.includes(445)
console.log('includes', x)

// indexOf -> Return the index of the first match
x = arr.indexOf(28)
console.log('indexOf', x)

// Return array as a string (2 ways)
x = arr.toString()
console.log('toString', x)
x = arr.join()
console.log('join', x)

// # slice returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
x = arr.slice(1, 4)
console.log('slice', x)

// # splice works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
x = arr.splice(1, 4)
console.log('splice', x)

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
x = arr.splice(4, 1) // index 4, 1 element
console.log('splice', x)
console.log('arr', arr)

// Chaining methods - Some methods can be chained depending on the return value.
x = arr.slice(1, 4).reverse().toString().charAt(0)
console.log(x)
