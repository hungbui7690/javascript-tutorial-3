/*
  Object Challenge


*/

// Step 1
const library = [
  {
    title: 'The Choice',
    author: 'Max Gardner',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Matrix',
    author: 'XXX',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The Capital',
    author: 'Night Owl',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
]
console.log(library)

// Step 2
library[0].status.read = true
library[1].status.read = true
library[2].status.read = true
console.log(library)

// Step 3
const { title: firstBook } = library[0]
console.log(firstBook)

// Step 4
const libraryJSON = JSON.stringify(library)
console.log(libraryJSON)
