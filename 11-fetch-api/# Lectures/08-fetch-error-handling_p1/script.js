/*
  Fetch API Error Handling
  - pic 
  - https://httpstat.us/

  - to check for 404 error >> use "response.ok"

  >> after know how to handle error >> we will fix the random user project 

*/

//////////////////////////////
// Success
//////////////////////////////
// fetch('http://httpstat.us/200')
//   .then((response) => {
//     return response
//   })
//   .then(() => {
//     console.log('success')
//   })

//////////////////////////////
// *** The issue here is that the 'success' shows and the .catch() does NOT run for an error status like 404 or 500
// for axios, it will return error if we hit the 404 >> but for the fetch api, it does not work like that >> we need to check error ourselves
//////////////////////////////
// fetch('http://httpstat.us/404')
//   .then((response) => {
//     return response
//   })
//   .then(() => {
//     console.log('success')
//   })
//   .catch((error) => {
//     // *** cannot catch the error >> .catch() cannot run on 404 error
//     console.log(error)
//   })

//////////////////////////////
// Catch ONLY runs on a network error
//////////////////////////////
// fetch('http://hello123.net') // for not existed address >> 'success' is not run, and .catch() will work
//   .then((response) => {
//     return response
//   })
//   .then(() => {
//     console.log('success')
//   })
//   .catch((error) => {
//     console.log(error)
//   })

/////////////////////////////
// Test with response.ok
/////////////////////////////
// fetch('http://httpstat.us/404')
//   .then((response) => {
//     console.log(response)
//     if (!response.ok) {
//       throw new Error('Request Failed') // *** we check error ourselves
//     }
//     return response
//   })
//   .then(() => {
//     console.log('success')
//   })
//   .catch((error) => {
//     console.log(error)
//   })

////////////////////////////
// Check for specific codes
////////////////////////////
fetch('http://httpstat.us/500')
  .then((response) => {
    if (response.status === 404) {
      throw new Error('Not Found')
    } else if (response.status === 500) {
      throw new Error('Server Error')
    } else if (response.status !== 200) {
      throw new Error('Request Failed')
    }
    return response
  })
  .then(() => {
    console.log('success')
  })
  .catch((error) => {
    console.log(error)
  })
