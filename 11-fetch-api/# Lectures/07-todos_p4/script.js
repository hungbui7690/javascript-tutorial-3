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
  div.setAttribute('data-id', todo.id) // *** this is why we create the attribute

  if (todo.completed) {
    div.classList.add('done')
  }

  document.getElementById('todo-list').appendChild(div)
}

const createTodo = (e) => {
  e.preventDefault()

  const newTodo = {
    title: e.target.firstElementChild.value,
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

const updateTodo = (id, completed) => {
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

const toggleCompleted = (e) => {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('done')
    updateTodo(e.target.dataset.id, e.target.classList.contains('done'))
  }
}

///////////////////////////////////
// DELETE
///////////////////////////////////
const deleteTodo = (e) => {
  if (e.target.classList.contains('todo')) {
    const id = e.target.dataset.id // *** data-id >> to get the id >> use dataset.id
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE', // for deletion, we just need the method >> no need body
    })
      .then((res) => res.json())
      .then(() => e.target.remove())
  }
}

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos)
  document.querySelector('#todo-form').addEventListener('submit', createTodo)
  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleCompleted)
  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo) // we still add to the list
}

init()
