/*
  Page Loading & Window Events
  - We put the script tag at the head, but not the body
          <script src="./script.js"></script>
    >> then if we do this:
          document.querySelector('h1').textContent = 'Hello World'
          >> this will create err since 'h1' cannot be selected >> null 
          >> because we put the script on top >> script will be run before the DOM loaded
    >> the way we solve that is (1)

*/

///////////////////////////
// (1) On Page Load: wait until the DOM is loaded >> this is kind of a hack
///////////////////////////
window.onload = function () {
  document.querySelector('h1').textContent = 'Hello World'
}

// (2) load: wait for everything to be loaded (images, etc.) >> similar to onload above
window.addEventListener('load', () => console.log('Page Loaded'))

// ( 3) On DOM Load: as soon as the DOM is parsed
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'))

// (4) this will run before the above stuffs since we don't need to wait
console.log('Run me')

// *** add "defer" keyword >> this will make the script defers to run >> basically wait until all the DOM is parsed before running the script
{
  /* <script src="./script.js" defer></script> */
}

/////////////////////////////
// Resize Event: try to resize the window to see the changes
/////////////////////////////
window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`
})

/////////////////////////////
// Scroll Event
/////////////////////////////
window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`)

  // when we scroll down, we can see scrollY will be increased
  if (window.scrollY > 70) {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
  } else {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }
})

/////////////////////////////
// Focus & Blur Events
/////////////////////////////
window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue'
  })
})

window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black'
  })
})
