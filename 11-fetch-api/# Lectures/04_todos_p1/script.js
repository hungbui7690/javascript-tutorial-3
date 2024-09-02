/*
  * Todos Mini-Project
  - https://jsonplaceholder.typicode.com/todos/
  - background gray === done
  - double click >> remove 

*/

const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

//////////////////////////////////
// GET TODOS
//////////////////////////////////
const getTodos = () => {
  fetch(apiUrl + '?_limit=5')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDOM(todo))
    })
}

const addTodoToDOM = (todo) => {
  const div = document.createElement('div')
  div.classList.add('todo')
  div.appendChild(document.createTextNode(todo.title))
  div.setAttribute('data-id', todo.id) // *** later, we want to double click to remove todo >> need to have this id

  if (todo.completed) {
    div.classList.add('done')
  }

  document.getElementById('todo-list').appendChild(div)
}

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos)
}

init()
