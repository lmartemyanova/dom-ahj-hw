import { createGameBoard } from '../game-board';

describe('createGameBoard', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });
  
    test('must create game-board element with 16 cells', () => {
        createGameBoard();
        
        const gameBoard = document.querySelector('.game-board');
        expect(gameBoard).not.toBeNull(); 
        expect(gameBoard.children.length).toBe(16); 
  
        for (let i = 0; i < gameBoard.children.length; i++) {
            expect(gameBoard.children[i].classList.contains('cell')).toBe(true);
        }
    });
  });
  
  