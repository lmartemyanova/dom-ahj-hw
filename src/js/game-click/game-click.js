import Goblin from '../img-moving/img-moving';

export default class GameClick {
    constructor(element) {
        this._element = element;
        this.caughtGoblinCounter = 0;
        this.missedGoblinCounter = 0;
        this.clickMade = false;

        this.goblin = new Goblin('https://github.com/netology-code/ahj-homeworks/blob/video/dom/pic/goblin.png?raw=true');
        this.timer = null;

        this.clickGoblinCell = this.clickGoblinCell.bind(this);
        this.checkGameResult = this.checkGameResult.bind(this);
        this.checkGameOver = this.checkGameOver.bind(this);
        this.resetGame = this.resetGame.bind(this);

        this._element.addEventListener('click', this.clickGoblinCell);
        this.startGoblinMovement();
    }

    startGoblinMovement() {
      this.goblin.move();
      this.timer = setInterval(() => {
        
        if (!this.clickMade) {
          this.missedGoblinCounter += 1;
        } else {
          this.clickMade = false;
        }
        this.checkGameOver();
        this.goblin.move();
      }, 1000);
    }

    clickGoblinCell(e) {
      const target = e.target;
      this.clickMade = true;
      if (target.classList.contains('goblin')) {
        this.caughtGoblinCounter +=1;
        this.checkGameResult();
        this.goblin.move();
      } else {
        this.missedGoblinCounter +=1;
        this.checkGameOver();
      }
    }

    checkGameResult() {
      if (this.caughtGoblinCounter >= 5) {
        alert('Вы выиграли! Поздравляем!');
        this.resetGame();
      } 
    }

    checkGameOver() {
      if (this.missedGoblinCounter >= 5) {
        alert('Игра окончена! Вы проиграли!');
        this.resetGame();
      } 
    }

    resetGame() {
      this.caughtGoblinCounter = 0;
      this.missedGoblinCounter = 0;
      clearInterval(this.timer);
      this.startGoblinMovement();
    }
}
