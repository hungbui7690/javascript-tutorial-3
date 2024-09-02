/*
  Fetch Options
  - pic
  - method: HTTP method you want to use
  - body: Data you want to send. Usually to be put in a database, etc
  - headers: Any HTTP headers you want to send

*/

function createPost({ title, body }) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
      token: 'abc123',
      hello: 'world', // we can send anything we want
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data)) // data that we get back depends on the server
}

createPost({ title: 'My Post', body: 'This is my Post' })
