/*
  For...in Loop
  - use to loop through object


*/

// **********************
// Loop through objects
// **********************
const colors = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
}

for (const key in colors) {
  console.log(key, colors[key])
}

console.log('******************')

// **********************
// Loop through arrays
// **********************
const colorPallette = ['red', 'green', 'blue', 'yellow']

for (const key in colorPallette) {
  console.log(colorPallette[key])
}
