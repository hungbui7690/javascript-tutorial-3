/*
  Break & Continue


*/

// Break: stop the loop
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log('Breaking...')
    break
  }
  console.log(i)
}
console.log('**********************')

// Continue: stop the round, then continue to the next round
for (let i = 0; i <= 10; i++) {
  if (i === 8) {
    console.log('Skipping 8...')
    continue
  }
  console.log(i)
}
