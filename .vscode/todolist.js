let input = document.getElementById('todo-input')
let button = document.getElementById('btn')
let todoContainer = document.getElementById('todos-container')

let total = document.getElementById('total')
let completed = document.getElementById('compl')
let uncompleted = document.getElementById('uncompl')

let todoList = [];

const addTodo = () => {

    if(input.value == '') {
       return alert('Buy something')
    }

    let todoObj = {task: input.value, isCompleted: false}

    todoList.push(todoObj)

    todoContainer.innerHTML += `<div class='flex items-center gap-x-2'> <input type='checkbox' /> <p>${input.value}</p> </div>`

    total.innerHTML = todoList.length


    input.value = ''
}

button.addEventListener('click', addTodo)

console.log(button)
