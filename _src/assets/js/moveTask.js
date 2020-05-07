'use-strict';

const allTasks = document.querySelectorAll('.js-card.app-card.m-1.mb-2.p-2.bg-white.rounded-sm.app-cursor-pointer.shadow-sm');

const moveUp = (card, event) => {
    if(card.previousElementSibling.classList.contains('js-card')){
        card.parentElement.insertBefore(card, card.previousElementSibling); 
    }
    event.stopPropagation();
}

const moveDown = (card, event) => {
    if(card.nextElementSibling.classList.contains('js-card')){
        card.parentElement.insertBefore(card.nextElementSibling, card);   
    }
    event.stopPropagation();  
}

const moveTask = (card) => {
    const buttonUp = card.querySelector('.btn.btn-light.text-muted.border.shadow-sm.app-card-move-up');
    const buttonDown = card.querySelector('.btn.btn-light.text-muted.border.shadow-sm.app-card-move-down');
    buttonUp.addEventListener('click', (event) => moveUp(card, event));
    buttonDown.addEventListener('click', (event) => moveDown(card, event));
}

allTasks.forEach(task => {
    moveTask(task);
});


export { moveUp, moveDown };