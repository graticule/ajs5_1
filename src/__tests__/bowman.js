import Character from '../character';

test('Test creating Bowman', () => {
  const bowman = new Character('John', 'Bowman');
  expect(typeof bowman).toBe('Bowman');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defense).toBe(25);
});
