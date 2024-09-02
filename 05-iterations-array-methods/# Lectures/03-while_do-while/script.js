/*
  While - Do While


*/

let i = 0

while (i <= 5) {
  console.log('Number ' + i)
  i++
}
console.log('********************')

// Loop over arrays
i = 0
const arr = [10, 20, 30, 40, 50]

while (i < arr.length) {
  console.log(arr[i])
  i++
}
console.log('********************')

// Nesting while loops
i = 0
while (i <= 5) {
  console.log('Number ' + i)

  let j = 1
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`)
    j++
  }
  i++
}
console.log('********************')

// Do While Loop - Always runs once
i = 0
do {
  console.log('Number ' + i)
  i++
} while (i <= 20)
