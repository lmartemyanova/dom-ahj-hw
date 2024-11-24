import Goblin from '../img-moving';

describe('Goblin Class', () => {
  let goblin;
  let cells;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
    `;
    cells = document.querySelectorAll('.cell');
    goblin = new Goblin('goblin.png'); 
  });

  test('should create an image element with correct attributes', () => {
    const imgElement = goblin.imgElement;
    expect(imgElement.tagName).toBe('IMG');
    expect(imgElement.src).toContain('goblin.png');
    expect(imgElement.alt).toBe('Гоблин');
    expect(imgElement.classList.contains('goblin')).toBe(true);
  });

  test('should get a random cell that is not the current position', () => {
    const oldPosition = goblin.currentPosition; 
    const newPosition = goblin.getRandomCell(); 

    expect(newPosition).not.toBe(oldPosition); 
  });

  test('should move the goblin to a new cell', () => {
    goblin.currentPosition = 0; 
    goblin.move(); 

    const targetCell = cells[goblin.currentPosition];
    expect(targetCell.querySelector('.goblin')).toBe(goblin.imgElement);
  });

  test('should not move to the same cell', () => {
    goblin.currentPosition = 0; 
    goblin.move(); 
    const firstPosition = goblin.currentPosition;

    goblin.move(); 
    expect(goblin.currentPosition).not.toBe(firstPosition); 
  });

  test('should remove goblin from the old cell', () => {
    goblin.currentPosition = 0; 
    goblin.move(); 
    const oldCell = cells[0];

    expect(oldCell.querySelector('.goblin')).toBeNull();
  });
});
