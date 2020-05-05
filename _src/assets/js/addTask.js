'use-strict';

// obtener en cada momento el botón adecuado//
const listContainer = document.querySelectorAll('.app-list')// contenedor del formulario//

listContainer.forEach(list => {
    const contenedorArticles = list.querySelector('.p-1.rounded-sm.bg-primary.shadow');
    const buttonAddTask = list.querySelector('.ml-1.btn.btn-primary.btn-sm.text-white-50')//boton//
    buttonAddTask.addEventListener('click', addNewCard(contenedorArticles,buttonAddTask))
    

});

function addNewCard(contenedor,buttonAddTask){
    return () => {
        const newCard= document.createElement('article');
        newCard.setAttribute('class','js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm');
        contenedor.appendChild(newCard);

        contenedor.insertBefore(newCard,buttonAddTask)
    }
}







