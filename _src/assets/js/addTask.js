'use-strict';

import {moveUp, moveDown} from './moveTask.js';
import { toggleEdit } from './edit.js';
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
        const subTaskContainer = document.createElement('div');
        const containerButton = document.createElement('div');
        const buttonDown = document.createElement('button');
        const buttonUp = document.createElement('button');
        const spanUp = document.createElement('span');
        const spanDown = document.createElement('span');
        const cardTitle = document.createElement('h3');
        const spanCardOne = document.createElement('span');
        const spanCardTwo = document.createElement('span');
        const spanCardThree = document.createElement('span');
        const subTaskSmallOne = document.createElement('small');
        const subTaskSmallTwo = document.createElement('small');
        const subTaskSmallThree = document.createElement('small');
        subTaskContainer.setAttribute('class', 'text-black-50');
        subTaskSmallOne.setAttribute('class', 'pr-2 fas fa-align-left');
        subTaskSmallTwo.setAttribute('class', 'far fa-check-square');
        subTaskSmallThree.setAttribute('title', 'Subtareas completadas: 3 de 5');
        containerButton.setAttribute('class', 'app-card-btns btn-group-vertical btn-group-sm');
        buttonDown.setAttribute('class', 'btn btn-light text-muted border shadow-sm app-card-move-down');
        buttonDown.setAttribute('type', 'button');
        buttonDown.setAttribute('title', ' mover hacia abajo');
        buttonUp.setAttribute('title', ' mover hacia arriba');
        buttonUp.setAttribute('class', 'btn btn-light text-muted border shadow-sm app-card-move-up');
        buttonUp.setAttribute('type', 'button');
        spanUp.setAttribute('class', 'fas fa-arrow-up');
        spanDown.setAttribute('class', 'fas fa-arrow-down');
        spanCardOne.setAttribute('class', 'badge badge-secondary bg-success');
        spanCardTwo.setAttribute('class', 'badge badge-secondary bg-success');
        spanCardThree.setAttribute('class', 'badge badge-secondary bg-success');
        cardTitle.setAttribute('class', 'h6');
        const textSubTaskSmall = document.createTextNode(' 3/5');
        const textJS = document.createTextNode('JS ');
        const textCss = document.createTextNode(' Css ');
        const textHtml = document.createTextNode(' Html');
        const textTitle = document.createTextNode('Necesito texto');
        subTaskSmallThree.appendChild(textSubTaskSmall);
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
        buttonUp.appendChild(spanUp);
        buttonDown.appendChild(spanDown);

        buttonUp.addEventListener('click', (event) => moveUp(newCard, event));
        buttonDown.addEventListener('click', (event) => moveDown(newCard, event));
        containerButton.appendChild(buttonUp);
        containerButton.appendChild(buttonDown);
        subTaskContainer.appendChild(subTaskSmallOne);
        subTaskContainer.appendChild(subTaskSmallTwo);
        subTaskContainer.appendChild(subTaskSmallThree);
        newCard.appendChild(containerButton);// añado el div con los span//
        newCard.appendChild(cardSpanContainer);// añado el div con los span//
        newCard.appendChild(cardSpanContainer);// añado el div con el title//
        newCard.appendChild(subTaskContainer);// div de las subtareas//
        newCard.addEventListener('click', toggleEdit)
        

        contenedor.insertBefore(newCard, buttonAddTask)
    }
}

export {addNewCard};







