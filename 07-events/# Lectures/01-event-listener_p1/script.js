/*
  Event Listeners
  - pic
  - should NOT do this: 1st method
      <button onclick="alert('Hello')" id="clear" class="btn-clear">Clear All</button>

*/

const clearBtn = document.querySelector('#clear')

// 1. 2nd method -> JavaScript Event Listener
clearBtn.onclick = function () {
  alert('Clear Items')
}

// 2. 3rd method ->  addEventListener()
// clearBtn.addEventListener('click', function () {
//   alert('Clear Items')
// })
