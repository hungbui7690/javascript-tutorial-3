/*
  Try / Catch

*/

try {
  console.log(x)
} catch (error) {
  console.log('>> Error: ' + error)
}

///////////////////////////
// xxxxxxxxxxxxxxxx
///////////////////////////
function double(number) {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number')
  }

  return number * 2
}

///////////////////////////
// xxxxxxxxxxxxxxxx
///////////////////////////
try {
  const y = double('hello')
  console.log(y)
} catch (error) {
  console.log(error)
}
