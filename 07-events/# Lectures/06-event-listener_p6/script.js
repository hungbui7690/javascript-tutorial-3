/*
  Event Listeners
  
*/

const clearBtn = document.querySelector('#clear')

// *** 1st method
// function onClear() {
//   const list = document.querySelector('ul')

//   list.innerHTML = ''
// }

// *** 2nd method
// function onClear() {
//   const list = document.querySelector('ul')
//   const items = list.querySelectorAll('li')

//   items.forEach((item) => item.remove())
// }

// *** 3rd method
function onClear() {
  const list = document.querySelector('ul')
  const items = list.querySelectorAll('li')

  while (list.firstChild) {
    list.removeChild(list.firstChild)
  }
}

clearBtn.addEventListener('click', onClear)
