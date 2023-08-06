import Character from '../character';

test('Test creating Zombie', () => {
  const bowman = new Character('John', 'Zombie');
  expect(typeof bowman).toBe('Zombie');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(40);
  expect(bowman.defense).toBe(10);
});
