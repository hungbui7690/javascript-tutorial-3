/*
  Callback Hell (Nested Callbacks)
  - when we try to making multiple requests in order >> we will face this one 
  - movies > actors > directors

*/

// *** cb as param
function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', endpoint)

  xhr.onreadystatechange = function () {
    if ((this.readyState === 4) & (this.status === 200)) {
      cb(JSON.parse(this.responseText)) // (1) get data here
    }
  }

  // Math.floor(Math.random() * 3000) + 1000 >> 1000 to 4000
  setTimeout(() => {
    xhr.send()
  }, Math.floor(Math.random() * 3000) + 1000)
}

// (2) pass data to cb function here (data)
getData('./movies.json', (data) => {
  console.log('>> movies: ', data)
  getData('./actors.json', (data) => {
    console.log('>> actors: ', data)
    getData('./directors.json', (data) => {
      console.log('>> directors: ', data)
    })
  })
})
