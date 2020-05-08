'use-strict';

import { moveListToLeft, moveListToRight } from './moveList.js'

const menu = document.querySelector('.app-board')
const listToAdd = document.querySelector('.app-list');
const addListButton = document.querySelector('.btn.btn-light.btn-outline-primary.btn-sm.mr-5.shadow-sm');

const addNewList = () => {
    const newList = listToAdd.cloneNode(true);
    const firstNewListChild = newList.children[0];
    const form = firstNewListChild.children[0];
    const optionsContainer = form.children[1];
    const buttonsContainer = optionsContainer.children[1];
    const buttonLeft = buttonsContainer.children[1];
    const buttonRight = buttonsContainer.children[2];
    buttonLeft.addEventListener('click', () => moveListToLeft(newList));
    buttonRight.addEventListener('click', () => moveListToRight(newList));
    menu.insertBefore(newList, addListButton.parentElement);
}


addListButton.addEventListener('click', addNewList);