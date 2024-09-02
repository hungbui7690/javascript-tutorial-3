/*
  Date Methods & DateTimeFormat API

*/

let x
let d = new Date()

// Date methods

x = d.toString()

x = d.getTime()
x = d.valueOf()

x = d.getFullYear()
console.log('getFullYear()', x)

x = d.getMonth()
x = d.getMonth() + 1
console.log('getMonth()', x)

x = d.getDate()
console.log('getDate()', x)

x = d.getDay()
console.log('getDay()', x)

x = d.getHours()
console.log('getHours()', x)

x = d.getMinutes()
console.log('getMinutes()', x)

x = d.getSeconds()
console.log('getSeconds()', x)

x = d.getMilliseconds()
console.log('getMilliseconds()', x)

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
console.log('specific format: ', x)

// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d)
console.log(x)
x = Intl.DateTimeFormat('en-GB').format(d)
console.log(x)
x = Intl.DateTimeFormat('default').format(d)
console.log(x)

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d)
console.log(x)

x = d.toLocaleString('default', { month: 'short' })
console.log(x)

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
})
console.log(x)
