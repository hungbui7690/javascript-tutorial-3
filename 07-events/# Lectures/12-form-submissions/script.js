/*
  Form Submissions

*/

const form = document.getElementById('item-form')

////////////////////////////////
// Basic Form Submission
////////////////////////////////
// function onSubmit(e) {
//   e.preventDefault()

//   // Get value with .value
//   const item = document.getElementById('item-input').value
//   const priority = document.getElementById('priority-input').value

//   // basic data validation
//   if (item === '' || priority === '0') {
//     alert('Please fill in all fields')
//     return
//   }

//   console.log(item, priority)
// }
// form.addEventListener('submit', onSubmit)

////////////////////////////////
// Using the FormData Object: new way
////////////////////////////////
function onSubmit2(e) {
  e.preventDefault()

  const formData = new FormData(form)
  console.log(formData) // this does not work the way we think >> in the FormData object, there is a "get" method which helps us get the data

  // *** Method 1: Get individual items >> formData.get("name attribute")
  const item = formData.get('item')
  const priority = formData.get('priority')

  console.log(item, priority)

  // *** Method 2: Get all entries as an Iterator
  const entries = formData.entries()
  console.log('entries: ', entries)

  // Loop through entries: entries[0] = [item, priority] = title, entries[1] = [milk, 1] = values
  for (let entry of entries) {
    console.log(entry[1])
  }
}
form.addEventListener('submit', onSubmit2)
