/*
  Joke Generator
  
*/

const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')

const generateJoke = () => {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        // console.log(JSON.parse(this.responseText).value);
        jokeEl.innerHTML = JSON.parse(this.responseText).value
      } else {
        jokeEl.innerHTML = 'Something Went Wrong (Not Funny)' // try to make the url wrong to see
      }
    }
  }

  xhr.send()
}

jokeBtn.addEventListener('click', generateJoke)

// *** show the first joke after DOM is parsed
document.addEventListener('DOMContentLoaded', generateJoke)
