import { character, extractData } from '../app';

let result = extractData(character);

let correct = [ 8, 'Двойной выстрел', 'http://...', 'Двойной выстрел наносит двойной урон'];

test('destructuring test', () => {
  expect(result).toEqual(correct);
})