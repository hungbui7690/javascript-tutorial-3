/*
  Fetch Basics
  - instead of using XHR way, we can use fetch() 
    > fetch() is a method that is available in window object
    > fetch() return promise >> we need to use .then()

*/

////////////////////////////
// Fetching a JSON file
////////////////////////////
fetch('./movies.json')
  .then((response) => {
    console.log(response) // contain response info: status, ok, statusText, url...
    response.json()
  })
  .then((data) => console.log(data))

////////////////////////////
// Fetching a text file
////////////////////////////
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data))

////////////////////////////
// Fetching from an API
////////////////////////////
fetch('https://api.github.com/users/bradtraversy')
  .then((response) => response.json())
  .then((data) => (document.querySelector('h1').textContent = data.login)) // instead of console.log(), we can do many things here!!
