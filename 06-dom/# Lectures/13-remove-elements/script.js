/*
  Remove Elements


*/

// remove() Method
function removeClearButton() {
  const clearBtn = document.querySelector('#clear') // (a) select the element
  clearBtn.remove() // (b) remove
}
removeClearButton()

// removeChild() Method
function removeFirstItem() {
  const ul = document.querySelector('ul')
  const li = document.querySelector('li:first-child')

  ul.removeChild(li)
}
// removeFirstItem()

// Other examples
function removeItem(itemNumber) {
  const ul = document.querySelector('ul')
  const li = document.querySelector(`li:nth-child(${itemNumber})`)

  ul.removeChild(li)
}

function removeItem2(itemNumber) {
  const ul = document.querySelector('ul')
  const li = document.querySelectorAll('li')[itemNumber - 1]

  ul.removeChild(li)
}
// removeItem(2);

function removeItem3(itemNumber) {
  const li = document.querySelectorAll('li')
  li[itemNumber - 1].remove()
}

const removeItem4 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove()

// removeItem4(2)
