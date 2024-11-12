
document.addEventListener('DOMContentLoaded', () => {
    const goblinImgUrl = 'https://github.com/netology-code/ahj-homeworks/blob/video/dom/pic/goblin.png?raw=true';
    const goblin = new Goblin(goblinImgUrl);
    goblin.move();

    setInterval(() => {
        goblin.move();
    }, 1000)
})