/*
  Error Handling With Async & Await

*/

///////////////////////////////
// Method 1: try/catch
///////////////////////////////
const getUsers = async () => {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await fetch('http://httpstat.us/500')

    if (!response.ok) {
      throw new Error('Request Failed')
    }

    const data = await response.text()

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
// getUsers()

///////////////////////////////
// Method 2: .catch()
///////////////////////////////
const getPosts = async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await fetch('http://httpstat.us/500')

  if (!response.ok) {
    throw new Error('Request Failed')
  }

  const data = await response.text()

  console.log(data)
}

getPosts().catch((error) => console.log(error))
