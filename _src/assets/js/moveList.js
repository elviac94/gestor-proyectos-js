'use-strict';
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


function moveColumn(lista) {
    const buttonLeft = lista.querySelector('.btn.btn-light.text-muted.border.shadow-sm.app-list-move-left')
    const buttonRigth = lista.querySelector('.btn.btn-light.text-muted.border.shadow-sm.app-list-move-right')

    buttonLeft.addEventListener('click',() => moveListToLeft(lista));
    buttonRigth.addEventListener('click',()=> moveListToRight(lista));

}

tasksLists.forEach(taskList => {
    moveColumn(taskList);
})

export {moveListToLeft,moveListToRight};
