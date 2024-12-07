import Cursor from './game-click/cursor'
import { createGameBoard } from './game-board/game-board'
import Goblin from './img-moving/img-moving'
import GameClick from './game-click/game-click'



export const main = document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = createGameBoard()
    const game = new GameClick(document.querySelector('.game-board'));
    const cursor = new Cursor(document.body);
})
