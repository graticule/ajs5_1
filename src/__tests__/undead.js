import Character from '../character';

test('Test creating Undead', () => {
  const bowman = new Character('John', 'Undead');
  expect(typeof bowman).toBe('Undead');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defense).toBe(25);
});
