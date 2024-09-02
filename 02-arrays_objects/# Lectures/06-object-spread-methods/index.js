/*
  Object Spread Operators & Methods


*/

let x

// Create object using the object constructor
const todo = new Object()
console.log('todo:', todo)

// Add properties to object
todo.id = 1
todo.name = 'Buy Milk'
todo.completed = false
console.log('todo:', todo)

x = todo
console.log('x:', x)

// Object Nesting
const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
}
console.log('>> person:', person)

x = person.address.coords.lat
console.log('x = ', x)

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

// Spread operator
const obj3 = { ...obj1, ...obj2 }
console.log('obj3 : ', obj3)

// Same as using ...
const obj4 = Object.assign({}, obj1, obj2)
console.log('obj4 : ', obj4)

const obj5 = Object.assign({ z: 5, t: 6 }, obj1, obj2)
console.log('obj5 : ', obj5)

// Array of objects
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
]
console.log('array todos: ', todos)

x = todos[0].name
console.log('todos[0].name', x)

// Get array of object keys
x = Object.keys(todo)
console.log('Object.keys(todo)', x)

// Get length of an object
x = Object.keys(todo).length
console.log(x)

// Get array of object values
x = Object.values(todo)
console.log('Object.values(todo)', x)

// Get array of object key/value pairs >> return array of array
x = Object.entries(todo)
console.log(x)

// Check if object has a property
x = todo.hasOwnProperty('age')
console.log(x)
