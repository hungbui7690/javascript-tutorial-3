/*
  Under The Hood - Thread Of Execution
  Under The Hood - How Async JS Works
  - pic

///////////////////////////////////
  setTimeout & clearTimeout Functions

*/

////////////////////////////
// setTimeout - takes in a callback and a time to wait until that callback is executed
// the callback will be put into the task queue and run when it completes
////////////////////////////
setTimeout(function () {
  console.log('Hello from callback')
}, 2000)
console.log('Hello from Global') // this will run first

///////////////////
// Named function
function changeText() {
  document.querySelector('h1').textContent = 'Hello from callback'
}
setTimeout(changeText, 5000)

////////////////////////////
// clearTimeout() will clear a timer >> we need the timer first
////////////////////////////
const timerId = setTimeout(changeText, 5000)

document.querySelector('#cancel').addEventListener('click', () => {
  console.log(timerId)
  clearTimeout(timerId)
  console.log('Timer Cancelled')
})
