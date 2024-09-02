/*
  * Todos Mini-Project
  - https://jsonplaceholder.typicode.com/todos/
  - background gray === done
  - double click >> remove 

*/

const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

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
  div.setAttribute('data-id', todo.id)

  if (todo.completed) {
    div.classList.add('done')
  }

  document.getElementById('todo-list').appendChild(div)
}

//////////////////////////////////
// CREATE TODO
//////////////////////////////////
const createTodo = (e) => {
  e.preventDefault()

  const newTodo = {
    title: e.target.firstElementChild.value, // form >> firstElementChild === input
    completed: false,
  }

  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      addTodoToDOM(data)
      e.target.firstElementChild.value = ''
    })
}

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos)
  document.querySelector('#todo-form').addEventListener('submit', createTodo) // ***
}

init()
