/*
  Document Element Properties
  - there are some differences between our codes and from the instructor 
    -> check pic


*/

let output

// document.all -> deprecated -> return HTMLCollection: array
output = document.all
console.log(output)
output = document.all[2]
console.log(output)
output = document.all.length
console.log(output)

console.log('**********************')

// Everything in the html tags
output = document.documentElement
console.log('documentElement: ', output)

console.log('**********************')

// Head and body tags
output = document.head
console.log('head: ', output)
output = document.body
console.log('body: ', output)

console.log('**********************')

// HTMLCollection of everything in head/body
output = document.head.children
console.log('head.children: ', output)
output = document.body.children
console.log('body.children: ', output)

console.log('**********************')

// Random properties
output = document.doctype
output = document.domain // deprecated
output = document.URL
output = document.characterSet
output = document.contentType

// Get all forms
output = document.forms // return HTMLCollection
output = document.forms[0]
output = document.forms[0].id
output = document.forms[0].method
output = document.forms[0].action // return the link where our code will be sent to

// Change a form id
document.forms[0].id = 'new-id'

// Get all links -> a tags
// output = document.links
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// Get all images
output = document.images
output = document.images[0]
output = document.images[0].src

// # Turn an HTMLCollection into an array -> later, querySelectors() will return node list, so that we can use forEach() right away -> but now, we need to convert to array before using forEach
const forms = Array.from(document.forms)
forms.forEach((form) => console.log(form))

console.log(output)
