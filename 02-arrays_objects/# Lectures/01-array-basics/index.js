/*
  Array Basics


*/

let x

// Method 1: Array Literal
const numbers = [12, 45, 33, 29, 39, 102] // [12, 45, 33, 29, 39, 102]

// Mixed
const mixed = [12, 'Hello', true, null] // [12, 'Hello', true, null]

// Method 2: Array Constructor
const fruits = new Array('apple', 'grape', 'orange') // ['apple', 'grape', 'orange']
console.log(fruits)

// Get value by index
x = numbers[0] // 12
x = numbers[0] + numbers[3] // 41
x = `My favorite fruit is an ${fruits[2]}` // My favorite fruit is an orange

x = numbers.length // 6
fruits[2] = 'pear' // ['apple', 'grape', 'pear']

// length is not read-only
// fruits.length = 2;

// add item to array
fruits[3] = 'strawberry'
fruits[5] = 'lemon' // ['apple', 'grape', 'pear', 'strawberry', empty, 'lemon']

// Using the length as the index will always add on the the end
// ['apple', 'grape', 'pear', 'strawberry', empty, 'lemon', 'blueberry']
fruits[fruits.length] = 'blueberry'

// ['apple', 'grape', 'pear', 'strawberry', empty, 'lemon', 'blueberry', 'peach']
fruits[fruits.length] = 'peach'

// ['apple', 'grape', 'pear', 'strawberry', empty, 'lemon', 'blueberry', 'peach']
x = fruits
