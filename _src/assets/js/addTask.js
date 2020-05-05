'use-strict';

// obtener en cada momento el botón adecuado//
const listContainer = document.querySelectorAll('.app-list')// contenedor del formulario//

listContainer.forEach(list => {
    //const formList = list.querySelector('.app-list-form');//formulario//
    //const input = document.querySelector('.app-list-input');//input//
    const contenedorArticles = list.querySelector('div.p-1');
    const buttonAddTask = list.querySelector('.ml-1.btn.btn-primary.btn-sm.text-white-50')//boton//
    buttonAddTask.addEventListener('click', () => {
        console.log('Añado un nuevo article');
        console.log(contenedorArticles);
    });
});



/*function addIdButton(){
if(input.value==='Backlog'){
    buttonAddTask.setAttribute('id','Backlog');
}
if(input.value==='Por hacer'){
    buttonAddTask.setAttribute('id','toDo');
}
}

addIdButton();*/
    

