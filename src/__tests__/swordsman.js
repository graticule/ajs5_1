import Character from '../character';

test('Test creating Swordsman', () => {
  const bowman = new Character('John', 'Swordsman');
  expect(typeof bowman).toBe('Swordsman');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(40);
  expect(bowman.defense).toBe(10);
});
