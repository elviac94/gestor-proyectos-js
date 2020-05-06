'use-strict';

const allTasks = document.querySelectorAll('.js-card.app-card.m-1.mb-2.p-2.bg-white.rounded-sm.app-cursor-pointer.shadow-sm');

const moveUp = (card, event) => {
    card.parentElement.insertBefore(card, card.previousElementSibling);
    event.preventDefault();
}

const moveDown = (card, event) => {
    card.parentElement.insertBefore(card.nextElementSibling, card);
    event.preventDefault();
}

const moveTask = (card) => {
    const buttonUp = card.querySelector('.btn.btn-light.text-muted.border.shadow-sm.app-card-move-up');
    const buttonDown = card.querySelector('.btn.btn-light.text-muted.border.shadow-sm.app-card-move-down');
    buttonUp.addEventListener('click', (event) => moveUp(card, event) );
    buttonDown.addEventListener('click', (event) => moveDown(card, event));
}

allTasks.forEach(task => {
    moveTask(task);
});


export { moveUp, moveDown };
