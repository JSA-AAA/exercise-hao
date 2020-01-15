const shuffleArray = require('../exercises/1-shuffleArray');

let a = [1, 2, 3, 4, 9, 8, 7, 6, 5];
const tempCheck = [...a];

describe('test shuffleArray function', () => {
  function testRandom(mockRandom){

    global.Math.random = mockRandom;

    test('shuffle should not modify input array', () => {
      shuffleArray(a);
      expect(a).toBe(a);
      expect(a.join('')).toEqual(tempCheck.join(''));
    });
    
    test('shuffle result should be same length', () => {
      expect(shuffleArray(a)).toHaveLength(a.length);
    });
    
    test('all original elements exist in shuffled array', () => {
      expect(shuffleArray(a).every(ele => a.includes(ele))).toBeTruthy();
    });
    
    test('shuffle result elements should be as expected', () => {
      if(Math.random() === 0.7){
        expect(shuffleArray(a).join('') !== a.join('')).toBeTruthy();
      } else {
        expect(shuffleArray(a).join('') !== a.join('')).toBeFalsy();
      }
    });
  }

  testRandom(() => 0.2);
  testRandom(() => 0.5);
  testRandom(() => 0.7);
});
