
'use-strict';

export const getInfo = () => {
    return fetch('../api/board.json').then(response => response.json());
}
