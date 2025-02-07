/*
  Dates & Times
  - https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off


*/

let d

// Get today's date and time
d = new Date()
console.log(d)

// Set to a string
d = d.toString()
console.log('toString', d)

// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
d = new Date(2021, 0, 10, 12, 30, 0)
console.log(d)

// Pass in a string
d = new Date('2021-07-10T12:30:00')
console.log(d)
d = new Date('07/10/2021 12:30:00')
console.log(d)
d = new Date('2022-07-10')
console.log(d)
d = new Date('07-10-2022')
console.log(d)

// Get current timestamp
d = Date.now() // 1724468545519

// Get the timestamp of a specific date
d = new Date() // 1724468545519

d = d.getTime() // 1724468545519

d = d.valueOf() // 1724468545519

// Create a date from a timestamp
d = new Date(1666962049745) // Fri Oct 28 2022 07:00:49 GMT-0600 (Mountain Daylight Time)

// Convert from milliseconds to seconds
d = Math.floor(Date.now() / 1000) // 1724468545
