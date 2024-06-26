import { character, extractData } from '../app';

let result = extractData(character);

let correct =  [
  {
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон'
  },
  {
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
    description: 'Описание недоступно'
  }
];

test('destructuring test', () => {
  expect(result).toEqual(correct);
})