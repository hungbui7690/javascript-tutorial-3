/*
  Event Delegation
  - we have many list item (<li>) >> and we want to click on the X button to remove that item >> there are many items, and we need to addEventListener to all of those items >> that's impossible
    >> so we need to use event delegation

*/

const listItems = document.querySelectorAll('li')
const list = document.querySelector('ul')

////////////////////////////////////
// Method 1: Bad >> NOT efficient >> Add an event listener on all items
////////////////////////////////////
// listItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     e.target.remove()
//   })
// })

////////////////////////////////////
// Method 2: Good >> Add a single event listener on the parent (Event Delegation)
////////////////////////////////////
list.addEventListener('click', (e) => {
  // we don't want to use the current target >> in this case, the currentTarget is the <ul>
  if (e.target.tagName === 'LI') {
    e.target.remove()
  }
})

//////////////////////////////////////
list.addEventListener('mouseover', (e) => {
  console.log(e.target)
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'red'
  }
})
