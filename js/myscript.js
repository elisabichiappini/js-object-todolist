/***************************** Javascript *****************************/
'use strict';

/* FUNZIONI */

//per far scatenare all'add todo botton l'aprirsi della lista mostra todo 
function showTodos() {
    elementUl.innerHTML= '';
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
};

/* CLASSI */

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

/* ESECUZIONE PROGRAMMA */

//istanzio l'app ossia creo la nuova applicazione
const todoList = new AppTodo();

// aggiungo un nuovo to do ai todos
todoList.addTodo(new Todo('Imparare javascript'));
todoList.addTodo(new Todo('Imparare css'));
todoList.addTodo(new Todo('Imparare Html'));
todoList.addTodo(new Todo('Fare i regali di Natale'));

// lista todo
const result = todoList.getAllTodos();

// al click su button mostro i todo
const elementButtonShow = document.getElementById('show-todos');
const elementUl = document.querySelector('.list-group');

//svuota ogni volta al click la lista e la mostra per evitare che si aggiungano sempre liste ai click e richiamo il showtodo
elementButtonShow.addEventListener('click', showTodos);

//aggiungere il nuovo ToDo alla lista sopra
const elementButtonAdd = document.getElementById('button-add');
// essendo il bottone in un form al click aggiornerebbe la pagina quindi sotto aggiungo preventDefault()
elementButtonAdd.addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('aggiungo un nuovo todo');
    const todoText = document.getElementById('textTodo').value;
    todoList.addTodo( new Todo(todoText));
    // per svuotare il campo dopo che aggiungo il todo
    document.getElementById('textTodo').value = '';
    //anche qui richiamo il showtodo per mostrarlo allo statenarsi del bottone add lista
    showTodos();
})
