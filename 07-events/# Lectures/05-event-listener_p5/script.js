/*
  Event Listeners
  
*/

const clearBtn = document.querySelector('#clear')

function onClear() {
  console.log('Clear Items')
}

clearBtn.addEventListener('click', onClear)

// *** we want to use removeEventListener() everytime we remove the element >> we need to remove the listener first, then remove the element
// setTimeout(() => {
//   clearBtn.removeEventListener('click', onClear) // after 5s, when we click on the button, it won't work anymore
// }, 5000)

// *** this script will create the click after 5s
setTimeout(() => {
  clearBtn.click()
}, 5000)
