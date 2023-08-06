import Character from '../character';

test('Test creating Daemon', () => {
  const bowman = new Character('John', 'Daemon');
  expect(typeof bowman).toBe('Daemon');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(10);
  expect(bowman.defense).toBe(40);
});
