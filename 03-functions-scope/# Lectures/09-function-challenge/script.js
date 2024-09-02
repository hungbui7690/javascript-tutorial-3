/*
  Function Challenges


*/

// Challenge 1
const getCelsius = (f) => (((f - 32) * 5) / 9).toFixed(2)
console.log(`The temperature is ${getCelsius(99)} \xB0C`)

// Challenge 2
const minMax = (arr) => {
  return { min: Math.min(...arr), max: Math.max(...arr) }
}
console.log(minMax([3, 1, 9, 12, 99, 32]))

// Challenge 3
;(function (length, width) {
  console.log(
    `The area of a rectangle with a length of ${length} and a width of ${width} is ${
      length * width
    }`
  )
})(10, 5)
;((length, width) => {
  console.log(
    `The area of a rectangle with a length of ${length} and a width of ${width} is ${
      length * width
    }`
  )
})(10, 9)
