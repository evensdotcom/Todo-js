import { Todo } from "./todo.class.js";

export class TodoList{

    constructor(){
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push( todo );
        this.guardarLocalStorago();
    }

    // Metodo para eliminar todo
    eliminarTodo(id){
        this.todos = this.todos.filter( todo => this.id != id );
        this.guardarLocalStorago();
    }

    // Metodo para completar todo
    marcarCompletado(id) {
        for(const todo of this.todos){
            if (todo.id == id ){ 
                todo.completado = !todo.completado;
                this.guardarLocalStorago();
                break;
            }
        }
    }

    // Metodo para eliminar completado 
    eliminarCompletado(){
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorago();
    }

    guardarLocalStorago() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){

        this.todos = ( localStorage.getItem('todo') ) ? JSON.parse( localStorage.getItem('todo')) : [];

        this.todos = this.todos.map(obj => Todo.fromJson(obj));
    //     if(localStorage.getItem('todo')) {
    //         this.todos = JSON.parse( localStorage.getItem('todo'));
    //         console.log('Cargar: ', this.todos)
    //     }else {
            
    //     }
     }
}