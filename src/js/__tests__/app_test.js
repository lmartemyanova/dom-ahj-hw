/* eslint-disable-next-line no-unused-vars */
import { main } from '../app';
import Cursor from '../game-click/cursor';
import { createGameBoard } from '../game-board/game-board';
import GameClick from '../game-click/game-click';

jest.mock('../game-click/cursor');
jest.mock('../game-board/game-board');
jest.mock('../game-click/game-click');

describe('main function', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should create game board and initialize game and cursor on DOMContentLoaded', () => {
        const mockGameBoard = {};
        const mockCursorInstance = {};
        const mockGameClickInstance = {};

        createGameBoard.mockReturnValue(mockGameBoard);
        Cursor.mockReturnValue(mockCursorInstance);
        GameClick.mockReturnValue(mockGameClickInstance);

        document.dispatchEvent(new Event('DOMContentLoaded'));

        expect(createGameBoard).toHaveBeenCalled();

        expect(GameClick).toHaveBeenCalledWith(document.querySelector('.game-board'));

        expect(Cursor).toHaveBeenCalledWith(document.body);
    });
});
