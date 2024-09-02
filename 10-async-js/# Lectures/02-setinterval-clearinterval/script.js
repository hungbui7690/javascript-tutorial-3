/*
  setInterval & clearInterval Functions
  - repeatedly call a function

*/

//////////////////////////////////
// No Argument
//////////////////////////////////
// const intervalID = setInterval(myCallback, 1000) // this won't stop until we clear the interval

// function myCallback() {
//   console.log(a, Date.now())
// }

// function stopChange() {
//   clearInterval(intervalID)
// }

// document.getElementById('stop').addEventListener('click', stopChange)

//////////////////////////////////
// With Argument
//////////////////////////////////
// const intervalID = setInterval(myCallback, 1000, 'Hello') // add argument

// // parameter >> from the argument
// function myCallback(arg) {
//   console.log(arg, Date.now())
// }

// function stopChange() {
//   clearInterval(intervalID)
// }

// document.getElementById('stop').addEventListener('click', stopChange)

//////////////////////////////////
// Add Start Color Change
//////////////////////////////////
// let intervalID

// // (a)
// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black'
//     document.body.style.color = 'white'
//   } else {
//     document.body.style.backgroundColor = 'white'
//     document.body.style.color = 'black'
//   }
// }

// // (b)
// function startChange() {
//   if (!intervalID) {
//     intervalID = setInterval(changeColor, 1000)
//   }
// }

// function stopChange() {
//   clearInterval(intervalID)
// }

// document.getElementById('start').addEventListener('click', startChange)
// document.getElementById('stop').addEventListener('click', stopChange)

//////////////////////////////////
// Random Color Change
//////////////////////////////////
let intervalID

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  console.log(randomColor)
  document.body.style.backgroundColor = `#${randomColor}`
}

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000)
  }
}

function stopChange() {
  clearInterval(intervalID)
}

document.getElementById('start').addEventListener('click', startChange)
document.getElementById('stop').addEventListener('click', stopChange)
