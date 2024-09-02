/*
  AJAX & XHR Object
  - movies.json


*/

const xhr = new XMLHttpRequest()

xhr.open('GET', './movies.json')

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(this.responseText)) // because it is JSON String >> we want to parse to JS Object
  }
}

// Send request
xhr.send()
