import GameClick from '../game-click';
import Goblin from '../../img-moving/img-moving';
import { createGameBoard } from '../../game-board/game-board';


describe('GameClick', () => {
  let game;

  beforeEach(() => {
    createGameBoard();
    game = new GameClick(document.querySelector('.game-board'));
    new Goblin('goblin.png'); 
  });

  afterEach(() => {
    document.body.removeChild(document.querySelector('.game-board'));
    clearInterval(game.timer);
  });

  test('должен увеличивать счетчик пойманных гоблинов при клике на гоблина', () => {
    const goblinElement = document.querySelector('.goblin');

    const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    goblinElement.dispatchEvent(clickEvent);

    expect(game.caughtGoblinCounter).toBe(1);
    expect(game.missedGoblinCounter).toBe(0);
  });

  test('должен увеличивать счетчик пропущенных гоблинов при клике вне гоблина', () => {
    const cellsWithoutGoblin = Array.from(document.querySelectorAll('.cell')).filter(cell => !cell.querySelector('.goblin'));

    const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
    cellsWithoutGoblin[1].dispatchEvent(clickEvent);

    expect(game.missedGoblinCounter).toBe(1);
    expect(game.caughtGoblinCounter).toBe(0);
  });

  test('должен увеличивать счетчик пропущенных гоблинов, если клик не был сделан', (done) => {
    expect(game.missedGoblinCounter).toBe(0);
    setTimeout(() => {
      expect(game.missedGoblinCounter).toBe(1); 
      expect(game.clickMade).toBe(false);
      done(); 
    }, 1100); 
  });

  test('не должен увеличивать счетчик пропущенных гоблинов, если клик был сделан', (done) => {
    const goblinElement = document.querySelector('.goblin');
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    goblinElement.dispatchEvent(clickEvent); 

    setTimeout(() => {
      expect(game.missedGoblinCounter).toBe(0); 
      expect(game.clickMade).toBe(false); 
      done(); 
    }, 1100); 
  });

  test('должен вызывать alert при выигрыше', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    game.caughtGoblinCounter = 4; 
    game.clickGoblinCell({ target: { classList: { contains: (cls) => cls === 'goblin' } } });

    expect(window.alert).toHaveBeenCalledWith('Вы выиграли! Поздравляем!');
    expect(game.caughtGoblinCounter).toBe(0);
    expect(game.missedGoblinCounter).toBe(0);
  });

  test('должен вызывать alert при проигрыше', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    game.missedGoblinCounter = 4; 
    game.clickGoblinCell({ target: { classList: { contains: () => false } } });

    expect(window.alert).toHaveBeenCalledWith('Игра окончена! Вы проиграли!');
    expect(game.caughtGoblinCounter).toBe(0);
    expect(game.missedGoblinCounter).toBe(0);
  });

  test('должен перезапускать игру', () => {
    game.caughtGoblinCounter = 1;
    game.missedGoblinCounter = 1;

    game.resetGame();

    expect(game.caughtGoblinCounter).toBe(0);
    expect(game.missedGoblinCounter).toBe(0);
  });
});
