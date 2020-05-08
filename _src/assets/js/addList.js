'use-strict';
const menu = document.querySelector('.app-board')
const listToAdd = document.querySelector('.app-list');
const addListButton = document.querySelector('.btn.btn-light.btn-outline-primary.btn-sm.mr-5.shadow-sm');

const addNewList = () => {
const newList = listToAdd.cloneNode(true);
menu.appendChild(newList);
menu.insertBefore(newList, addListButton.parentElement );
console.log(newList);

}


addListButton.addEventListener('click', addNewList);