/*
  HTTP Requests Crash Course
  Devtools Network Tab
  - pic

////////////////////////////////////////

  AJAX & XHR Object
  - movies.json


*/

const xhr = new XMLHttpRequest()

xhr.open('GET', './movies.json')
// xhr.open('GET', 'https://api.github.com/users/bradtraversy/repos')

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready >> this is what we want
xhr.onreadystatechange = function () {
  console.log(this.readyState) // we want to see 4
  console.log(this.status) // 200 is what we want
}

// Send request
xhr.send()
