/*
  Declaration vs Expression


*/

// When using declarations, you can invoke the function before the declaration. With expressions, you can not
console.log(addDollarSign(100))

// Function Declaration
function addDollarSign(value) {
  return '$' + value
}

// Function Expression
const addPlusSign = function (value) {
  return '+' + value
}

console.log(addPlusSign(200)) // must to run after declare
