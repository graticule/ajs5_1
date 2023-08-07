export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('name must have 2-10 symbols');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
