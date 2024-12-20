export default class Goblin {
    constructor(imgUrl) {
      this.imgUrl = imgUrl;
      this.cells = document.querySelectorAll('.cell');
      this.currentPosition = null;
      this.imgElement = this.createImageElement();
    };

    createImageElement() {
      const img = document.createElement('img');
      img.src = this.imgUrl;
      img.alt = "Гоблин";
      img.classList.add('goblin');
      return img;
    };

    getRandomCell() {
      let newPosition;
      do {
          newPosition = Math.floor(Math.random() * this.cells.length);
      } while (newPosition === this.currentPosition);
      this.currentPosition = newPosition;
      return newPosition;
    };

    move() {
      const newPosition = this.getRandomCell();
      const targetCell = this.cells[newPosition];
      targetCell.appendChild(this.imgElement);
    };
}
