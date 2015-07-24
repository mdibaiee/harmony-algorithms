'use strict';

import _ from '../utils';

const AbstractFactory = (function() {
  let types = {};

  return {
    get(type, ...args) {
      let constructor = types[type];

      return constructor ? new constructor(...args) : null;
    },
    register(type, constructor) {
      // We can check if the constructor fulfills the required
      // pattern of types registered, for example
      if (!constructor.prototype.hi) {
        throw new Error('The provided constructor doesn\'t have the required `hi` method');
      }

      types[type] = constructor;

      return AbstractFactory;
    }
  };
}());

class Boss {
  constructor(name) {
    this.name = name;
  }

  hi() {
    return `Hello, ${this.name}`;
  }
}

class Employee extends Boss {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
}

class Invalid {
  constructor() {
    this.cantRegister = true;
  }
}

AbstractFactory.register('Boss', Boss);
AbstractFactory.register('Employee', Employee);
let boss = AbstractFactory.get('Boss', 'John');
_.log(boss.hi());

try {
  AbstractFactory.register('Invalid', Invalid);
} catch (e) {
  _.log('Caught error: ', e);
}
