/*
  Input Events
  - check HTML 
    > add input, select list, checkbox
    > if we want submit the form to back-end >> we need to have "action" attribute in the form >> we also need to have the "name" attribute in the input as well
  - blur === NOT focus

*/

const itemInput = document.getElementById('item-input')
const priorityInput = document.getElementById('priority-input')
const checkbox = document.getElementById('checkbox')
const heading = document.querySelector('h1')

// ***
function onInput(e) {
  heading.textContent = e.target.value
}
itemInput.addEventListener('input', onInput) // here, we use the input event (this also uses for checkbox & selects as well) >> we need to use the e.target.value >> if we want to use the "keydown", we need to use e.key > but this just give us the single key
priorityInput.addEventListener('change', onInput)

/////////////////////////
// ***
/////////////////////////
function onChecked(e) {
  const isChecked = e.target.checked
  heading.textContent = isChecked ? 'Checked' : 'Not Checked'
}
checkbox.addEventListener('input', onChecked)

/////////////////////////
// ***
/////////////////////////
function onFocus() {
  console.log('Input is focused')
  itemInput.style.outlineStyle = 'solid'
  itemInput.style.outlineWidth = '1px'
  itemInput.style.outlineColor = 'red'
}
itemInput.addEventListener('focus', onFocus)

/////////////////////////
// *** blur === NOT focus
/////////////////////////
function onBlur() {
  console.log('Input is not focused')
  itemInput.style.outlineStyle = 'none'
}
itemInput.addEventListener('blur', onBlur)
