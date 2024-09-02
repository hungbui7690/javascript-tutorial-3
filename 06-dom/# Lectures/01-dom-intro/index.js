/*
  Intro to the DOM
  - uncomment one by one
  

*/

// Global window object
console.log(window)

// The document object is part of the window object
console.dir(window.document)

// We can access DOM elements directly with properties
console.log(document.body)
console.log(document.links[0])

// We can set properties of elements
document.body.innerHTML = '<h1>Hello from body</h1>'

// We also have methods to select elements more directly -> comment the one above -> since the line of code above remove the html we wrote in index.html -> no #main
document.getElementById('main').innerHTML = '<h1>Hello from main</h1>'
document.querySelector('#main h1').innerText = 'Hello'

// The document object has a ton of methods. One is `document.write()`, which will write something to the document
document.write('Hello from JS') // this method is removed by google -> do not use
