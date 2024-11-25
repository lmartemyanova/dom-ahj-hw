import Goblin from './img-moving/img-moving'

export function createGameBoard() {
  const gameBoard = document.createElement('div');
  gameBoard.classList.add('game-board');
  for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gameBoard.appendChild(cell);
  }
  document.body.appendChild(gameBoard);
}

createGameBoard()

export const main = document.addEventListener('DOMContentLoaded', () => {
    const goblinImgUrl = 'https://github.com/netology-code/ahj-homeworks/blob/video/dom/pic/goblin.png?raw=true';
    const goblin = new Goblin(goblinImgUrl);
    goblin.move();

    setInterval(() => {
        goblin.move();
    }, 1000)
})
