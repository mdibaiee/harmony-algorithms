'use strict';

import _ from '../utils';

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
    this.length = 1;
  }

  search(key, node = this.root) {
    if (!node || node.value === key) {
      return node;
    } else if (node.value > key) {
      return this.search(key, node.left);
    } else {
      return this.search(key, node.right);
    }
  }

  insert(value, node = this.root, parent = null, dir) {
    if (!node) {
      parent[dir] = new Node(value);
    } else if (node.value > value) {
      this.insert(value, node.left, node, 'left');
    } else {
      this.insert(value, node.right, node, 'right');
    }
  }

  remove(value, node = this.root, parent = null) {
    if (!node) {
      return null;
    }

    // specified parent means we're recursing to delete, and
    // checking has been already done
    if (node.value === value || parent) {

      // number of children, !! converts to boolean, + converts to number
      // false yields 0, true yields 1
      const children = +!!node.left + +!!node.right;
      if (!children) {
        parent.right = null;
      } else if (children === 1) {
        node = node.left || node.right;
      } else {
        node.value = node.right.value;
        return this.remove(value, node.right, node, true);
      }
    } else if (node.value > value) {
      return this.remove(value, node.left);
    } else {
      return this.remove(value, node.right);
    }
  }
  // in-order
  traverse(cb, node = this.root) {
    if (!node) {
      return;
    }

    // left
    this.traverse(cb, node.left);
    // parent
    cb(node.value);
    // right
    this.traverse(cb, node.right);
  }
}

let test = new BinaryTree(10);

test.insert(6);
test.insert(18);
test.insert(4);
test.insert(8);
test.insert(15);
test.insert(21);

_.inspect(test);

_.log('Traverse: ');

test.traverse(value => {
  _.print(value + ' ');
});
