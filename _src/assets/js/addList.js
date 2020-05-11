'use-strict';

import { addMoveListListeners } from './moveList.js'

const menu = document.querySelector('.app-board')
const addListButton = document.querySelector('.btn.btn-light.btn-outline-primary.btn-sm.mr-5.shadow-sm');

const addNewList = () => {
    const listToAdd = document.querySelector('.app-list');
    const newList = listToAdd.cloneNode(true);
    addMoveListListeners(newList);
    menu.insertBefore(newList, addListButton.parentElement);
}
addListButton.addEventListener('click', addNewList);