'use-strict';
import { addNewCard } from './addTask.js'

const tasksLists = document.querySelectorAll('.app-list');

const moveListToLeft = (lista) => {
    if (lista.previousElementSibling.classList.contains('app-list')) {
        lista.parentElement.insertBefore(lista, lista.previousElementSibling);
    }
}

const moveListToRight = (lista) => {
    if (lista.nextElementSibling.classList.contains('app-list')) {
        lista.parentElement.insertBefore(lista.nextElementSibling, lista);
    }
}

const addListListeners = (list) => {
    const firstNewListChild = list.children[0];
    const form = firstNewListChild.children[0];
    const optionsContainer = form.children[1];
    const buttonsContainer = optionsContainer.children[1];
    const buttonLeft = buttonsContainer.children[1];
    const buttonRight = buttonsContainer.children[2];
    const addCardButton = firstNewListChild.lastElementChild;
    buttonLeft.addEventListener('click', () => moveListToLeft(list));
    buttonRight.addEventListener('click', () => moveListToRight(list));
    addCardButton.addEventListener('click', addNewCard(firstNewListChild, addCardButton));
}


function moveColumn(lista) {
    const buttonLeft = lista.querySelector('.btn.btn-light.text-muted.border.shadow-sm.app-list-move-left')
    const buttonRigth = lista.querySelector('.btn.btn-light.text-muted.border.shadow-sm.app-list-move-right')

    buttonLeft.addEventListener('click',() => moveListToLeft(lista));
    buttonRigth.addEventListener('click',()=> moveListToRight(lista));

}

tasksLists.forEach(taskList => {
    moveColumn(taskList);
})

export {addListListeners as addMoveListListeners};
