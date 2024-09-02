/*
  What Is JavaScript
  - pic


**************************

  Console
  - pic
  - alt + shift + right: select the row



*/

// Log number
console.log(100)

// Log string
console.log('Hello World')

// Log multiple values
console.log(20, 'Hello', true)

// Log a variable
const x = 100
console.log(x)

// Console error & warning
console.error('Alert')
console.warn('Warning') // this one does not work

// Log object as table -> input = object
console.table({ name: 'Brad', email: 'brad@gmail.com' })

// Group console commands -> things below will be in this group
console.group('simple')
console.log(x)
console.error('Alert')
console.warn('Warning')
console.groupEnd()

// Add CSS to logs -> not use too much -> %c
const styles = 'padding: 10px; background-color: white; color: green'
console.log('%cHello World', styles)
