/*
  Destructuring & Naming


*/

// Setting object properties with the same name as a variable
const firstName = 'John'
const lastName = 'Doe'
const age = 30

const person = {
  firstName, // key and value are same >> no need :
  lastName,
  age,
}
console.log(person.age)

// Destructuring object properties
const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
}

// const id = todo.id
const { id } = todo // destructure

// this is destructure, not create new object !!!
const {
  id: todoId, // take id out and rename to todoId
  title,
  user: { name }, // destructuring multiple levels
} = todo
console.log('todoId, title, name: ', todoId, title, name)

// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52]

const [first, second, ...rest] = numbers // rest operator

console.log(first, second, rest)
