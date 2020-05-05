'use-strict';

// obtener en cada momento el botón adecuado//
const listContainer = document.querySelectorAll('.app-list')// contenedor del formulario//

listContainer.forEach(list => {
    const contenedorArticles = list.querySelector('.p-1.rounded-sm.bg-primary.shadow');
    const buttonAddTask = list.querySelector('.ml-1.btn.btn-primary.btn-sm.text-white-50')//boton//
    buttonAddTask.addEventListener('click', addNewCard(contenedorArticles, buttonAddTask))


});

function addNewCard(contenedor, buttonAddTask) {
    return () => {
        const newCard = document.createElement('article');
        const cardSpanContainer = document.createElement('div');
        const cardTitle = document.createElement('h3');
        const spanCardOne = document.createElement('span');
        const spanCardTwo = document.createElement('span');
        const spanCardThree = document.createElement('span');
        spanCardOne.setAttribute('class','badge badge-secondary bg-success');
        spanCardTwo.setAttribute('class','badge badge-secondary bg-success');
        spanCardThree.setAttribute('class','badge badge-secondary bg-success');
        cardTitle.setAttribute('class','h6');
        const textJS=document.createTextNode('JS');
        const textCss=document.createTextNode('Css');
        const textHtml=document.createTextNode('Html');
        const textTitle=document.createTextNode('Necesito texto');
        cardTitle.appendChild(textTitle);
        spanCardOne.appendChild(textJS);
        spanCardTwo.appendChild(textCss);
        spanCardThree.appendChild(textHtml);
        cardSpanContainer.appendChild(spanCardOne);
        cardSpanContainer.appendChild(spanCardTwo);
        cardSpanContainer.appendChild(spanCardThree);
        cardSpanContainer.appendChild(cardTitle);
        newCard.setAttribute('class', 'js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm');
        newCard.setAttribute('title', 'Abrir la tarjeta');
        newCard.appendChild(cardSpanContainer);// añado el div con los span//
        newCard.appendChild(cardSpanContainer);// añado el div con el title//
        contenedor.appendChild(newCard);

        contenedor.insertBefore(newCard, buttonAddTask)
    }
}







