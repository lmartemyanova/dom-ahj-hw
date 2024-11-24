import Goblin from '../img-moving/img-moving';

/* eslint-disable-next-line no-unused-vars */
import main from '../app'


jest.mock('../img-moving/img-moving');

describe('Goblin movement on DOMContentLoaded', () => {

  beforeEach(() => {
      jest.clearAllMocks(); 
      document.body.innerHTML = ''; 
  });

  test('should create a Goblin instance on DOMContentLoaded', () => {
      document.dispatchEvent(new Event('DOMContentLoaded'));

      expect(Goblin).toHaveBeenCalledTimes(1);
      expect(Goblin).toHaveBeenCalledWith('https://github.com/netology-code/ahj-homeworks/blob/video/dom/pic/goblin.png?raw=true');
  });

  test('should call move method on DOMContentLoaded', () => {
      document.dispatchEvent(new Event('DOMContentLoaded'));

      expect(Goblin.mock.instances[0].move).toHaveBeenCalledTimes(1);
  });

  test('should call move method every second', () => {
      jest.useFakeTimers(); 
      document.dispatchEvent(new Event('DOMContentLoaded'));

      expect(Goblin.mock.instances[0].move).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(1000);
      expect(Goblin.mock.instances[0].move).toHaveBeenCalledTimes(2);

      jest.advanceTimersByTime(2000);
      expect(Goblin.mock.instances[0].move).toHaveBeenCalledTimes(4);

      jest.useRealTimers(); 
  });
});
