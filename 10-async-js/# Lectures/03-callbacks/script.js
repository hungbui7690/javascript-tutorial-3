/*
  Callbacks
  - not always async 
    >> addEventListener(), setTimeout(), setInterval(), fetch()... are async
    >> but not always >> ie. forEach() is not async

*/

/////////////////////////////////////
// Recap Callbacks
/////////////////////////////////////
// function toggle(e) {
//   e.target.classList.toggle('danger')
// }
// document.querySelector('button').addEventListener('click', toggle)

//////////////////////////////////////
// Mimic Fetching Data
//////////////////////////////////////
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
]

function getPosts() {
  // fetching takes sometimes >> need to use setTimeout() to mimic the delay of getting data
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div')
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
      document.querySelector('#posts').appendChild(div)
    })
  }, 1000)
}
// getPosts()

/////////////////////////////////////
// Create Create a New Post
/////////////////////////////////////
// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post)
//   }, 2000)
// }

// createPost({ title: 'Post Three', body: 'This is post' })
// getPosts() // it does not show the new post >> since create post takes longer time than getPosts() >> that's why we need to have cb

/////////////////////////////////////
// Add Callback
/////////////////////////////////////
function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post)
    cb() // callback is run after post is created
  }, 2000)
}

createPost({ title: 'Post Three', body: 'This is post' }, getPosts)
