'use-strict';
const tasksLists = document.querySelectorAll('.app-list');

function moveColumn(lista) {
    const buttonLeft = lista.querySelector('.btn.btn-light.text-muted.border.shadow-sm.app-list-move-left')
    const buttonRigth = lista.querySelector('.btn.btn-light.text-muted.border.shadow-sm.app-list-move-right')

    const moveListToLeft = () => {
        if (lista.previousElementSibling.classList.contains('app-list')) {
            lista.parentElement.insertBefore(lista, lista.previousElementSibling);
        }
    }

    const moveListToRight = () => {
        if (lista.nextElementSibling.classList.contains('app-list')) {
            lista.parentElement.insertBefore(lista.nextElementSibling, lista);
        }
    }

    buttonLeft.addEventListener('click', moveListToLeft);
    buttonRigth.addEventListener('click', moveListToRight);


}

tasksLists.forEach(taskList => {
    moveColumn(taskList);
})

