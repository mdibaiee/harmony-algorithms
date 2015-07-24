'use strict';

import _ from '../utils';

export class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

export class Trie {
  constructor() {
    this.root = new Node();
  }

  add(value, node = this.root, iteration = 0) {
    let parent = node.children.find(n => {
      return n.value[iteration] === value[iteration];
    });

    if (parent) {
      this.add(value, parent, iteration + 1);
    } else {
      node.children.push(new Node(value));
    }
  }
}
