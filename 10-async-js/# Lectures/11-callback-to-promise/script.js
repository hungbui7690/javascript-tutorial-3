/*
  Callback to Promise
  - fix the previous callback hell problem

*/

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
]

///////////////////////////////////
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
///////////////////////////////////
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false

      if (!error) {
        posts.push(post)
        resolve()
      } else {
        reject('Something went wrong')
      }
    }, 2000)
  })
}

///////////////////////////////////
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
///////////////////////////////////
function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div')
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
      document.querySelector('#posts').appendChild(div)
    })
  }, 1000)
}

///////////////////////////////////
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
///////////////////////////////////
function showError(error) {
  const h3 = document.createElement('h3')
  h3.innerHTML = `<strong>${error}</strong>`
  document.getElementById('posts').appendChild(h3)
}

///////////////////////////////////
// Run
///////////////////////////////////
createPost({ title: 'Post Three', body: 'This is post' })
  .then(getPosts)
  .catch(showError)
