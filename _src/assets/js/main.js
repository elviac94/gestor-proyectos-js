'use strict';
import { getInfo } from './getJson.js';
import { addEditListeners } from './edit.js';
import { listHeader } from './partial-html/listHeader.js'
import { card } from './partial-html/card.js';
import { listFooter } from './partial-html/listFooter.js';
import { addMoveListListeners } from './moveList.js'
import { moveTask } from './moveTask.js'

// import './menu.js';
import './addList.js';

const dataInfo = getInfo();
const boardMenu = document.querySelector('.app-board');
const lastButton = document.querySelector('.btn.btn-light.btn-outline-primary.btn-sm.mr-5.shadow-sm');

const addEventsToTasks = (container) => {
    const allTasks = container.querySelectorAll('.js-card.app-card.m-1.mb-2.p-2.bg-white.rounded-sm.app-cursor-pointer.shadow-sm');
    allTasks.forEach(task => {
        moveTask(task);
    });
}

const generateHTML = (list) => {
    let listHTML = listHeader(list.title);
    list.cards.forEach(element => {
        listHTML += card(element.title);
    });
    listHTML += listFooter();
    return listHTML;
}

dataInfo.then(data => {
    let info = data.board.list;
    for (let list of info) {
        const appListContainer = document.createElement('div');
        appListContainer.setAttribute('class', 'app-list');
        const secondContainer = document.createElement('div');
        secondContainer.setAttribute('class', 'p-1 rounded-sm bg-primary shadow');

        secondContainer.innerHTML += generateHTML(list);

        addEditListeners(secondContainer);
        addEventsToTasks(secondContainer);

        appListContainer.appendChild(secondContainer);
        addMoveListListeners(appListContainer);

        boardMenu.insertBefore(appListContainer, lastButton.parentElement);
    }
});
