/*
  Traversing The DOM - Elements
  - div.container
      h1
      div.parent
        div.child
        div.child
        div.child


*/

let output

// Get child elements from a parent
const parent = document.querySelector('.parent')
console.log('parent: ', parent)

output = parent.children // returns HTMLCollection
console.log(output)

output = parent.children[1].innerText
console.log('>>>', output)
output = parent.children[1].className
console.log('>>>', output)
output = parent.children[1].nodeName
console.log('>>>', output)

parent.children[1].innerText = 'Child Two'
parent.children[1].style.color = 'red'

console.log('firstElementChild: ', parent.firstElementChild)
parent.firstElementChild.innerText = 'Child One'
parent.lastElementChild.innerText = 'Child Three'

// Get parent elements from a child
const child = document.querySelector('.child')

output = child.parentElement // get parent element
child.parentElement.style.border = '1px solid #ccc'
child.parentElement.style.padding = '10px'

// Get sibling elements
const secondItem = document.querySelector('.child:nth-child(2)')

output = secondItem
output = secondItem.nextElementSibling

secondItem.nextElementSibling.style.color = 'green'
secondItem.previousElementSibling.style.color = 'orange'

console.log(output)
