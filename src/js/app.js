import Cursor from './game-click/cursor'
import { createGameBoard } from './game-board/game-board'
import GameClick from './game-click/game-click'


export const main = document.addEventListener('DOMContentLoaded', () => {
    createGameBoard()
    new GameClick(document.querySelector('.game-board'));
    new Cursor(document.body);
})
