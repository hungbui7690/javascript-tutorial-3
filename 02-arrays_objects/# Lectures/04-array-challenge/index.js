/*
  Array Challenge
  - add elements to the front of array
    -> unshift()
    -> unshift(element1)
    -> unshift(element1, element2)
    -> unshift(element1, element2, ..., elementN)


*/

// Challenge 1: return [6, 5, 4, 3, 2, 1, 0]
const arr = [1, 2, 3, 4, 5]
arr.push(6) // [1, 2, 3, 4, 5, 6]
arr.unshift(0) // [0, 1, 2, 3, 4, 5, 6]
arr.reverse() //  [6, 5, 4, 3, 2, 1, 0]

// Challenge 2: both has value 5 -> return arr3 = [1,2,3,4,5,6,7,8,9,10]
// solution 1
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 6, 7, 8, 9, 10]

const arr3 = arr1.slice(0, 4).concat(arr2) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr3)

// solution 2
const arr4 = [...arr1, ...arr2] // [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]
arr4.splice(4, 1) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
