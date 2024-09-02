/*
  Promise Chaining

*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true

    if (!error) {
      resolve({ name: 'John', age: 30 })
    } else {
      reject('Error: Something went wrong')
    }
  }, 1000)
})

promise
  .then((user) => {
    console.log(user)
    return user.name
  })
  .then((name) => {
    console.log(name)
    return name.length
  })
  .then((nameLength) => {
    console.log(nameLength)
  })
  .catch((error) => {
    console.log(error)
    return 123 // will pass to .then() below if there's error
  })
  .then((x) => console.log('This will run no matter what', x)) // then, NOT finally
