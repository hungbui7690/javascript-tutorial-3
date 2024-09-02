/*
  Replace Elements


*/

// replaceWith() Method
function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child') // select the item we want to replace

  const li = document.createElement('li') // create new element
  li.textContent = 'Replaced First'

  firstItem.replaceWith(li) // replace
}

// OuterHTML Property
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)')

  secondItem.outerHTML = '<li>Replaced Second</li>' // *** similar to innerHTML, this will replace the whole tag
}

// Replace All Items
function replaceAllItems() {
  const lis = document.querySelectorAll('li')

  // lis.forEach((item, index) => {
  //   // item.outerHTML = '<li>Replace All</li>';
  //   if (index === 1) {
  //     item.innerHTML = 'Second Item';
  //   } else {
  //     item.innerHTML = 'Replace All';
  //   }
  // });

  lis.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>')
  )
}

// replaceChild() Method
function replaceChildHeading() {
  const header = document.querySelector('header')
  const h1 = document.querySelector('header h1')

  const h2 = document.createElement('h2') // create new h2 element
  h2.id = 'app-title'
  h2.textContent = 'Shopping List'
  header.replaceChild(h2, h1) // replace h1 by h2
}

replaceFirstItem()
replaceSecondItem()
replaceAllItems()
// replaceChildHeading()
