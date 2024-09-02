/*
  KeyCode Mini-Project
  - https://www.toptal.com/developers/keycode

*/

///////////////////////////////////
// *** Method 1: use innerHTML
///////////////////////////////////
window.addEventListener('keydown', (e) => {
  const insert = document.getElementById('insert')

  insert.innerHTML = `
    <div class="key">
      ${e.key === ' ' ? 'Space' : e.key}
      <small>e.key</small>
    </div>

    <div class="key">
      ${e.keyCode}
      <small>e.keyCode</small>
    </div>

    <div class="key">
      ${e.code}
      <small>e.code</small>
    </div>
  `
})

///////////////////////////////////
// *** Method 2: DO NOT use innerHTML
///////////////////////////////////
// function showKeyCodes(e) {
//   const insert = document.getElementById('insert')
//   const keyCodes = {
//     'e.key': e.key === ' ' ? 'Space' : e.key,
//     'e.keyCode': e.keyCode,
//     'e.code': e.code,
//   }

//   /**
//    * insert
//    * > div.key
//    *   > valueText
//    *   > small
//    */
//   for (let key in keyCodes) {
//     const div = document.createElement('div')
//     div.className = 'key'
//     const small = document.createElement('small')

//     const keyText = document.createTextNode(key)
//     const valueText = document.createTextNode(keyCodes[key])

//     small.appendChild(keyText)
//     div.appendChild(valueText)
//     div.appendChild(small)

//     insert.appendChild(div)
//   }
// }
// window.addEventListener('keydown', showKeyCodes)
