'use strict';
const toggleEdit = ev => {
  ev.stopPropagation();
  document.querySelector('.js-edit').classList.toggle('show');
  document.querySelector('.js-edit').classList.remove('d-none');
};

const preventEditClosing = ev => {
  ev.stopPropagation();
};

const addEditListeners = (element) => {
  element.querySelectorAll('.js-card, .js-edit-close').forEach(card => {
    card.addEventListener('click', toggleEdit);
  });
  //element.querySelector('.js-edit-modal').addEventListener('click', preventEditClosing);
}

export{ toggleEdit, addEditListeners }
