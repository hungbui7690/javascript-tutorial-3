/*
  Event Bubbling
  - Event Propagation
  - pic

*/

const button = document.querySelector('form button')
const div = document.querySelector('form div:nth-child(2)')
const form = document.querySelector('form')

// *** when we click on the button, event will be bubbled up through all of its parents
button.addEventListener('click', (e) => {
  alert('Button was clicked')
  // e.stopPropagation() // with this line of code, it will stop event bubbling
})

div.addEventListener('click', () => {
  alert('Div was clicked')
})

form.addEventListener('click', () => {
  alert('Form was clicked')
})

document.body.addEventListener('click', () => {
  alert('Body was clicked')
})
