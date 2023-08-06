import Character from '../character';

test('Test name is not a string', () => {
  const name = 1;
  const type = 'Bowman';
  expect(() => new Character(name, type)).toThrow(Error);
});

test.each([
  ['a'],
  ['abcdefghijk'],
])('Test name %s of wrong length', (name) => {
  const type = 'Bowman';
  expect(() => new Character(name, type)).toThrow(Error);
});

test.each([['bowman'], ['Bow man'], ['Killer']])('Test wrong type %s', (type) => {
  const name = 'John';
  expect(() => new Character(name, type)).toThrow(Error);
});
