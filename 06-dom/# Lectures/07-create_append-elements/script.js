/*
  Create & Append Elements
  - createTextNode():
    -> is a method and works just as its name says: it creates an element... then you must do something with it (like in your example, where you append it as a child)
      # so it is useful if you want to have a new element and place it somewhere
  - textContent:
    -> is a property you may get or set, with a unique statement and nothing else;
      # so it is useful when you only want to change the content of an already existing element


*/

const div = document.createElement('div')
div.className = 'my-element'
div.id = 'my-element'
div.setAttribute('title', 'My Element')

// # Method 1
// div.innerText = 'Hello World';
const text = document.createTextNode('Hello World')
div.appendChild(text)

// # Method 2
const div1 = document.createElement('div')
div1.style.color = 'skyblue'
div1.textContent = 'Good Morning'

// # textContent vs createTextNode() -> if we want to append text, we should use createTextNode()
const h1 = document.querySelector('h1')
// h1.textContent = 'Hello World' // this will change the whole text
const textH1 = document.createTextNode('Hello World')
h1.append(textH1)

// document.body.appendChild(div);
document.querySelector('ul').appendChild(div)
document.querySelector('ul').appendChild(div1)
