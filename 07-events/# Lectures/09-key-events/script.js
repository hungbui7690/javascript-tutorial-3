/*
  Keyboard Events & Key Properties
  - keyCode: https://www.toptal.com/developers/keycode/table-of-all-keycodes
    >> we can use e.key || e.keyCode || e.code
*/

const itemInput = document.getElementById('item-input')

// Press (Tap)
const onKeyPress = (e) => {
  console.log('keypress')
  console.log('////////////////')
}

// Release
const onKeyUp = (e) => {
  console.log('keyup')
  console.log('////////////////')
}

// Press and Hold
const onKeyDown = (e) => {
  // key: enter, ' '...
  if (e.key === ' ') {
    alert('You pressed space-bar')
  }

  if (e.keyCode === 13) {
    alert('You pressed enter')
  }

  // code
  if (e.code === 'Digit1') {
    console.log('You pressed 1')
  }

  // repeat: use to check when users hold controls or shift keys...
  if (e.repeat) {
    console.log('You are holding down ' + e.key)
  }

  //////////////////////////////
  // Special Keys: shiftKey, ctrlKey & altKey
  //////////////////////////////
  console.log('Shift: ' + e.shiftKey)
  console.log('Control: ' + e.ctrlKey)
  console.log('Alt: ' + e.altKey)

  if (e.shiftKey && e.key === 'K') {
    console.log('You hit shift + K')
  }
}

// Event Listeners
itemInput.addEventListener('keypress', onKeyPress)
itemInput.addEventListener('keyup', onKeyUp)
itemInput.addEventListener('keydown', onKeyDown)
