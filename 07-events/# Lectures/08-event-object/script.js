/*
  The Event Object
  >>> check pic
  - `target` - The element that triggered the event
  - `currentTarget` - The element that the event listener is attached to (These are the same in this case)
  - `type` - The type of event that was triggered
  - `timeStamp` - The time that the event was triggered
  - `clientX` - The x position of the mouse click relative to the window
  - `clientY` - The y position of the mouse click relative to the window
  - `offsetX` - The x position of the mouse click relative to the element
  - `offsetY` - The y position of the mouse click relative to the element
  - `pageX` - The x position of the mouse click relative to the page
  - `pageY` - The y position of the mouse click relative to the page
  - `screenX` - The x position of the mouse click relative to the screen
  - `screenY` - The y position of the mouse click relative to the screen
  
*/

const logo = document.querySelector('img')

function onClick(e) {
  // Event properties
  // console.log('e.target', e.target) // the element that triggered the event >> check below to see the different (document.body.addEventListener)
  // console.log('e.currentTarget', e.currentTarget) // the element that event listener is attached to
  // console.log('e.type', e.type)
  // console.log('e.timeStamp', e.timeStamp) // time that event was triggered
  // console.log('e.clientX', e.clientX) // mouse click relative to window
  // console.log('e.clientY', e.clientY)
  // console.log('e.offsetX', e.offsetX) // mouse click relative to the element
  // console.log('e.offsetY', e.offsetY)
  // console.log('e.pageX', e.pageX) // mouse click relative to page
  // console.log('e.pageY', e.pageY)
  console.log('e.screenX', e.screenX) // mouse click relative to actual screen (our monitor)
  console.log('e.screenY', e.screenY)
}
logo.addEventListener('click', onClick)

////////////////////////////////////////
// *** when we click on <li> >> e.target is <li> >> e.currentTarget is <body>
// that is because of the bubbles up >> li bubbles up to ul >> ul bubbles up to body
////////////////////////////////////////
document.body.addEventListener('click', function (e) {
  console.log(e.target)
  console.log(e.currentTarget)
})

////////////////////////////////////////
document.querySelector('a').addEventListener('click', function (e) {
  // *** prevents the default behavior >> not reload the page >> also, if we set the href to go to google.com, this will block that behavior as well
  e.preventDefault()
  console.log('Link was clicked')
})

////////////////////////////////////////
function onDrag(e) {
  document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`
}
logo.addEventListener('drag', onDrag)
