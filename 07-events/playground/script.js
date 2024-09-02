/*
  Event Listeners


*/

const clearBtn = document.querySelector('#clear')

clearBtn.onclick = function () {
  alert('Clear Items')
}

// same as above, but diff functionality -> this will run, the alert() above won't be run
clearBtn.onclick = function () {
  console.log('Clear Items')
}
