/*
  InnerHTML vs createElement()
  - innerText: This property focuses on the RENDERED text content. When you use innerText to read the content of an element, it returns the text as it appears on screen. It ignores HTML tags. And it also does not include text that is hidden with CSS styles.
  - textContent: Whiles innerText reads text as it is rendered on screen, textContent reads text as it is in the MARKUP. It also returns all text, whether it's rendered on screen or not.


*/

// Quick & Dirty
function createListItem(item) {
  const li = document.createElement('li')

  li.innerHTML = `${item}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`

  document.querySelector('.items').appendChild(li)
}

// Clean & Performant
function createNewItem(item) {
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(item))

  const button = document.createElement('button')
  button.className = 'remove-item btn-link text-red'

  const icon = document.createElement('i')
  icon.className = 'fa-solid fa-xmark'

  button.appendChild(icon)
  li.appendChild(button)

  document.querySelector('.items').appendChild(li)
}

createListItem('Eggs') // dirty
createNewItem('Cheese') // clean
