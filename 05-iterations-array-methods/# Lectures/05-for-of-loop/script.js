/*
  For..of Loop
  - use for loop through strings, arrays, maps, sets... 
    -> not for object


*/

// **********************
// Loop through arrays
// **********************
const items = ['book', 'table', 'chair', 'kite']

for (const item of items) {
  console.log(item)
}
console.log('********************')

const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }]
for (const user of users) {
  console.log(user.name)
}
console.log('********************')

// **********************
// Loop over strings
// **********************
const str = 'Hello World'

for (const letter of str) {
  console.log(letter)
}
console.log('********************')

// Loop over Maps
const map = new Map()
map.set('name', 'John')
map.set('age', 30)
console.log(map)

for (const [key, value] of map) {
  console.log(key, value)
}
