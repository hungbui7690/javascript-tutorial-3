/*
  Promises
  - object that represents success for failure
  - prevent callback hell

*/

//////////////////////////////
// Create a promise
//////////////////////////////
// const promise = new Promise((resolve, reject) => {
//   // simulate async task
//   setTimeout(() => {
//     console.log('Async task complete')
//     resolve()
//   }, 1000)
// })

// promise.then(() => {
//   console.log('Promise consumed..')
// })

// console.log('Hello from global scope') // this will run first

//////////////////////////////
// Short Way
//////////////////////////////
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Async task complete')
//     resolve()
//   }, 1000)
// }).then(() => {
//   console.log('Promise consumed..')
// })

// console.log('Hello from global scope')

//////////////////////////////
// Return Data
//////////////////////////////
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: 'John', age: 30 })
//   }, 1000)
// }).then((data) => {
//   console.log(data)
// })

//////////////////////////////
// xxxxxxxxxxxxxxxxxxxxxxxxxx
//////////////////////////////
// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: 'John', age: 30 })
//   }, 1000)
// })

// getUser.then((user) => console.log(user))

//////////////////////////////
// xxxxxxxxxxxxxxxxxxxxxxxxxx
//////////////////////////////
const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false // ***

    if (!error) {
      resolve({ name: 'John', age: 30 })
    } else {
      reject('Error: Something went wrong')
    }
  }, 1000)
})

getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log('The promise has been resolved or rejected'))
