/*
  Logical Operators

*/

console.log(10 < 20 && 30 > 15 && 40 > 30) // Must all be true to return true
console.log(10 > 20 || 30 < 15) // Only one has to be true to return true

// *** && - Will return first falsy value or the last value
let a

a = 10 && 20
console.log('a = ', a) // 20
a = 10 && 20 && 30
console.log('a = ', a) // 30
a = 10 && 0 && 30
console.log('a = ', a) // 0
a = 10 && '' && 0 && 30
console.log('a = ', a) // ''

const posts = ['Post One', 'Post Two']
posts.length > 0 && console.log(posts[0])

// *** || - Will return the first truthy value or the last value
console.log('==========================')
let b

b = 10 || 20 // 10
console.log(b)
b = 0 || 20 // 20
console.log(b)
b = 0 || null || '' || undefined // undefined
console.log(b)

// *** ?? - Returns the right side operand when the left is null or undefined

let c

c = 10 ?? 20 // 10
console.log(c)
c = null ?? 20 // 20
console.log(c)
c = undefined ?? 30 // 30
console.log(c)
c = 0 ?? 30 // 0
console.log(c)
c = '' ?? 30 // ''
console.log(c)
