/*
  Object Literals


*/

let x

// Creating an object
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  'main-job': 'dev',
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
}
console.log('person', person)

// Accessing object properties
x = person.name // Dot notation
x = person['main-job'] // Bracket notation
x = person.address.state // Nested
x = person.hobbies[0]

// Updating properties
person.name = 'Jane Doe'
person['isAdmin'] = false

// Deleting properties
delete person.age

// Create new properties
person.hasChildren = true

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`)
}
person.greet()

// Keys with multiple words -> use quotes
const person2 = {
  'first name': 'Joe',
  'last name': 'Larson',
}
x = person2['first name'] // Joe
