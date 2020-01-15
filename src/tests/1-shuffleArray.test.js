const shuffleArray = require('../exercises/1-shuffleArray');

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

global.Math.random = (() => 1);

test('shuffle should not modify input array', () => {
  shuffleArray(a);
  expect(a).toBe(a);
});

test('shuffle result should be same length', () => {
  expect(shuffleArray(a)).toHaveLength(a.length);
});

test('shuffle result should contain all original elements', () => {
  expect(shuffleArray(a).sort()).toEqual(a);
});

test('shuffle result elements should not be in the same order as original', () => {
  expect(shuffleArray(a).join('') === a.join('')).toBeTruthy();
});

console.log(shuffleArray(a).join('') === a.join(''));
console.log(shuffleArray(a).join(''));