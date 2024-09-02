/*
  AJAX & XHR Object
  - movies.json

*/

const xhr = new XMLHttpRequest()

xhr.open('GET', './movies.json')

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // ***
    const movies = JSON.parse(this.responseText)

    // ***
    movies.forEach((movie) => {
      console.log(movie)
      const li = document.createElement('li')
      li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`
      document.querySelector('#results').appendChild(li)
    })
  }
}

// Send request
xhr.send()
