/***************************** Javascript *****************************/
'use strict';

// classe di rappresentazione specifica di un todo
class Todo {
    title;
    check;
    //quando lo vado a istaziare mi passi il titolo:
    constructor(_title) {
        this.title = _title;
        //quando nasce il todo non è fatto
        this.check = false
    }
}
// classe di rappresentazione specifica del progetto app
class AppTodo {
    todos;

    constructor() {
        this.todos = []
    }
    //metodo dell'apptodo:
    getAllTodos() {
        return this.todos;
    }
    //metodo dell'apptodo:
    addTodo(todo) {
        this.todos.push(todo);
    }
}
//istanzio l'app ossia creo la nuova applicazione
const todoList = new AppTodo();

// aggiungo un nuovo to do ai todos
todoList.addTodo(new Todo('Imparare javascript'));
todoList.addTodo(new Todo('Imparare css'));
todoList.addTodo(new Todo('Imparare Html'));
todoList.addTodo(new Todo('Fare i regali di Natale'));

// lista todo
const result = todoList.getAllTodos();
console.log(result) 

// al click su button mostro i todo
const elementButton = document.getElementById('show-todos');
const elementUl = document.querySelector('.list-group');
elementButton.addEventListener('click', function() {
    //avendo già una lista di todo faccio un forEach
    result.forEach(todo => {
        //per ciascun elemento individuato creo un li
        const elementLi = document.createElement('li');
        //aggiungo la classe come quelli di Bootstrap
        elementLi.classList.add('list-group-item');
        //inserisco nell'elemento il titolo del todo
        elementLi.innerHTML = todo.title;
        //appendo all'ul il li
        elementUl.append(elementLi);
    });
});
