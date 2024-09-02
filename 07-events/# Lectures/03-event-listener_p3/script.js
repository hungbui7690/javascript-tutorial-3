/*
  Event Listeners


*/

const clearBtn = document.querySelector('#clear')

clearBtn.addEventListener('click', function () {
  alert('Clear Items')
})

// with addEventListener() -> both works -> because alert() is blocking & synchronous operation
clearBtn.addEventListener('click', function () {
  console.log('Clear Items')
})
