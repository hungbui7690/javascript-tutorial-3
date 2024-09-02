/*
  DOM Selectors - Single Elements


*/

// document.getElementById() -> return the element element
console.log(document.getElementById('app-title'))

// Get attributes
console.log('id:', document.getElementById('app-title').id)
console.log('className:', document.getElementById('app-title').className)
console.log(
  'getAttribute(id):',
  document.getElementById('app-title').getAttribute('id')
)

// Set attributes
document.getElementById('app-title').title = 'Shopping List'
document.getElementById('app-title').setAttribute('class', 'title')
console.log('-> className:', document.getElementById('app-title').className)

const title = document.getElementById('app-title')

// Get/change content
console.log(title.textContent)
title.textContent = 'Hello World'
title.innerText = 'Hello Again'
title.innerHTML = '<strong>Shopping List</strong>'

// Change styles
title.style.color = 'red'
title.style.backgroundColor = 'black'
title.style.padding = '10px'
title.style.borderRadius = '10px'

// document.querySelector()
// Use any CSS selector
console.log('h1', document.querySelector('h1'))
console.log('#app-title', document.querySelector('#app-title'))
console.log('.container', document.querySelector('.container'))
console.log('input[type="text"]', document.querySelector('input[type="text"]'))
console.log(
  'li:nth-child(2)',
  document.querySelector('li:nth-child(2)').innerText
)

const secondItem = document.querySelector('li:nth-child(2)')
secondItem.innerText = 'Apple Juice'
secondItem.style.color = 'red'

// Use these methods on other elements
const list = document.querySelector('ul')
console.log(list)
const firstItem = list.querySelector('li')
firstItem.style.color = 'blue'
