/*
  AJAX & XHR Object
  - movies.json

*/

const xhr = new XMLHttpRequest()

// *** fetch data from API is not different
xhr.open('GET', 'https://api.github.com/users/bradtraversy/repos')

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // ***
    const data = JSON.parse(this.responseText)

    // ***
    data.forEach((repo) => {
      console.log(repo)
      const li = document.createElement('li')
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`
      document.querySelector('#results').appendChild(li)
    })
  }
}

// Send request
xhr.send()
