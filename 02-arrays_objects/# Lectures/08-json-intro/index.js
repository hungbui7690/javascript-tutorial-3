/*
  JSON Intro
  - Javascript Object Notation
  - https://api.github.com/users
    -> key have double quotes -> check demo-todo.json


******************************

  🎯 later, when we store data in the storage, we cannot store data like object, array -> need to convert to string to store -> and if we want to get back -> convert back to object


*/

const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
}

// Convert to JSON string
const str = JSON.stringify(post) // this will turn the object into String (it is also JSON String -> keys have double quotes)
console.log('str', str)

// Parse JSON
const obj = JSON.parse(str) // get initial data

console.log(obj.id)

// JSON & arrays
const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
]

const str2 = JSON.stringify(posts)

console.log(str2)
