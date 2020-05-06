'use-strict';

const allTasks = document.querySelectorAll('.js-card.app-card.m-1.mb-2.p-2.bg-white.rounded-sm.app-cursor-pointer.shadow-sm');

function moveTask(card) {

    const buttonUp = card.querySelector('.btn.btn-light.text-muted.border.shadow-sm.app-card-move-up');
    const buttonDown = card.querySelector('.btn.btn-light.text-muted.border.shadow-sm.app-card-move-down');


    const moveUp = () => {
        card.parentElement.insertBefore(card, card.previousElementSibling);
    }

    const moveDown = () => {
        card.parentElement.insertBefore(card.nextElementSibling, card);
    }

    buttonUp.addEventListener('click', moveUp);
    buttonDown.addEventListener('click', moveDown);

}

allTasks.forEach(task => {
    moveTask(task);
})


