import Character from '../character';

test('Test creating Magician', () => {
  const bowman = new Character('John', 'Magician');
  expect(typeof bowman).toBe('Magician');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(10);
  expect(bowman.defense).toBe(40);
});
