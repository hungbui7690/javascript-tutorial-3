/*
  Async & Await
  - use to consume promise 
  - similar to .then()

*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'John', age: 20 }) // ***
  }, 1000)
})

//////////////////////////////////
// Method 1: .then()
//////////////////////////////////
// promise.then((data) => console.log(data))

//////////////////////////////////
// Method 2: Async / Await
//////////////////////////////////
// async function getPromise() {
//   const response = await promise
//   console.log(response)
// }
// getPromise()

//////////////////////////////////
// xxxxxx: With async/await, it looks cleaner, looks like sync code
//////////////////////////////////
// async function getUsers() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json()

//   console.log(data)
// }
// getUsers()

//////////////////////////////////
// arrow function
//////////////////////////////////
const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  throw new Error('Hello')

  console.log(data)
}

getPosts().catch((error) => console.log(error)) // catch error
