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
  