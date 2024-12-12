import Cursor from '../cursor';

describe('Cursor class', () => {
    let cursor;
    let element;
    let customCursor;

    beforeEach(() => {
        element = document.createElement('div');
        customCursor = document.createElement('div');
        customCursor.classList.add('custom-cursor');
        element.appendChild(customCursor);
        
        cursor = new Cursor(element);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should initialize with correct elements', () => {
        expect(cursor._element).toBe(element);
        expect(cursor._customCursor).toBe(customCursor);
    });

    test('should customize cursor on mousemove', () => {
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: 100,
            clientY: 150
        });

        element.dispatchEvent(mouseEvent);

        expect(customCursor.style.left).toBe('100px');
        expect(customCursor.style.top).toBe('150px');
        expect(element.style.cursor).toBe('none');
        expect(customCursor.classList.contains('hidden')).toBe(false);
    });

    test('should uncustomize cursor on mouseleave', () => {
        element.dispatchEvent(new MouseEvent('mouseleave'));

        expect(customCursor.classList.contains('hidden')).toBe(true);
        expect(element.style.cursor).toBe('auto');
    });

    test('should add hit class on mousedown', () => {
        element.dispatchEvent(new MouseEvent('mousedown'));

        expect(customCursor.classList.contains('hit')).toBe(true);
    });

    test('should remove hit class on mousemove after mousedown', () => {
        element.dispatchEvent(new MouseEvent('mousedown'));

        element.dispatchEvent(new MouseEvent('mousemove'));

        expect(customCursor.classList.contains('hit')).toBe(false);
    });

    test('should not remove hit class if not present', () => {
        expect(customCursor.classList.contains('hit')).toBe(false);

        element.dispatchEvent(new MouseEvent('mousemove'));

        expect(customCursor.classList.contains('hit')).toBe(false);
    });
});
