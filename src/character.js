import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';
import Daemon from './daemon';
import Undead from './undead';
import Zombie from './zombie';

export default class Character {
  constructor(name, type) {
    switch (type) {
      case 'Bowman':
        return new Bowman(name);
      case 'Swordsman':
        return new Swordsman(name);
      case 'Magician':
        return new Magician(name);
      case 'Daemon':
        return new Daemon(name);
      case 'Undead':
        return new Undead(name);
      case 'Zombie':
        return new Zombie(name);
      case undefined:
        if (typeof name !== 'string') {
          throw new Error('name must be a string variable');
        }
        if (name.length < 2 || name.length > 10) {
          throw new Error('name must have 2-10 symbols');
        }
        this.name = name;
        this.health = 100;
        this.level = 1;
        break;
      default:
        throw new Error('wrong type');
    }
  }
}
