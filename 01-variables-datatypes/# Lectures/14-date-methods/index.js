/*
  Date Methods & DateTimeFormat API


*/

let x
let d = new Date() // Fri Aug 23 2024 21:04:11 GMT-0600 (Mountain Daylight Time)

// Date methods
x = d.toString() // Fri Aug 23 2024 21:03:53 GMT-0600 (Mountain Daylight Time)
console.log(x)

x = d.getTime() // 1724468651980
x = d.valueOf() // 1724468651980

x = d.getFullYear() // 2024

x = d.getMonth() // 7
x = d.getMonth() + 1 // 8

x = d.getDate() // 23
x = d.getDay() // 5 -> returns the day of the week -> Sunday = 0

x = d.getHours()
x = d.getMinutes()
x = d.getSeconds()
x = d.getMilliseconds()

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}` // 2024-8-23

// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d) // 8/23/2024
x = Intl.DateTimeFormat('en-GB').format(d) // 23/08/2024
x = Intl.DateTimeFormat('default').format(d) // 8/23/2024

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d) // August

x = d.toLocaleString('default', { month: 'short' }) // Aug

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
}) // Friday, August 23, 2024 at 11:05:27 PM
