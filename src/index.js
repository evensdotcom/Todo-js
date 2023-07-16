// import './styles.css';

import { Todo,TodoList } from './classes/index.js';

import { crearTodoHtml } from "./js/componentes.js";


export const todoList = new TodoList();

// console.log(todoList.todos);

todoList.todos.forEach(todo => {
    crearTodoHtml(todo)
});

// TodoList.todos.forEach( todo => crearTodoHtml(todo));
// const tarea = new Todo('Aprender Js');

// todoList.nuevoTodo( tarea );
// // tarea.completado = true

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key','okofkgofk')







