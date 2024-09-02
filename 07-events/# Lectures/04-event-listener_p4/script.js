/*
  Event Listeners
  
*/

const clearBtn = document.querySelector('#clear')

// (1)
function onClear() {
  console.log('Clear Items')
}

// (2) pass function >> no (), because it will make the function runs right way >> we pass the callback / function name
clearBtn.addEventListener('click', onClear)
