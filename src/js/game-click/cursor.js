export default class Cursor {
    constructor(element) {
        this._element = element;

        this._customCursor = this._element.querySelector('.custom-cursor');

        this.customizeCursor = this.customizeCursor.bind(this);
        this.uncustomizeCursor = this.uncustomizeCursor.bind(this);
        this.bringDown = this.bringDown.bind(this);

        this._element.addEventListener('mousemove', this.customizeCursor);
        this._element.addEventListener('mouseleave', this.uncustomizeCursor);
        this._element.addEventListener('mousedown', this.bringDown);
        this._element.addEventListener('mouseup', this.customizeCursor);
    }

    customizeCursor(e) {
        this._customCursor.style.left = `${e.clientX}px`;
        this._customCursor.style.top = `${e.clientY}px`;
        this._element.style.cursor = 'none';
        this._customCursor.classList.remove('hidden');
        if (this._customCursor.classList.contains('hit')) {
          this._customCursor.classList.remove('hit');
        };
    }

    uncustomizeCursor() {
        this._customCursor.classList.add('hidden');
        this._element.style.cursor = 'auto';
    }

    bringDown() {
        this._customCursor.classList.add('hit');
    }
}
