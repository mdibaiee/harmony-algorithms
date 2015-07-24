'use strict';

import _ from '../utils';

export class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class List {
  constructor(root) {
    this.root = root;
    this.length = 1;
  }

  append(value) {
    let node = this.root;

    while (node.next !== null) {
      node = node.next;
    }

    this.length++;
    let newNode = new Node(value);
    node.next = newNode;

    return newNode;
  }

  delete(value, node = this.root) {
    if (node === this.root && node.value === value) {
      this.root = this.root.next;
      return;
    }

    while (node.next) {
      if (node.next.value === value) {
        node.next = node.next.next;
        this.length--;
      }
      node = node.next;
    }
  }

  // Cracking the Coding Interview challenges
  deleteDuplicates() {
    let node = this.root;

    do {
      this.delete(node.value, node.next);
      node = node.next;
    } while (node.next !== null)
  }

  last(n) {
    let target = this.length - n;

    let i = 0;
    let node = this.root;

    while (i < target && node.next !== null) {
      node = node.next;
      i++;
    }

    return node;
  }

  partition(x) {
    let less = [],
        greater = [];

    let node = this.root;

    while (node !== null) {
      if (node.value < x) {
        less.push(node.value);
      } else {
        greater.push(node.value);
      }

      node = node.next;
    }

    this.root = new Node(less[0]);
    less.slice(1).concat(greater).reduce((a, b) => {
      a.next = new Node(b);
      return a.next;
    }, this.root);
  }
}

// Cracking the Coding Interview 2.5
// Numbers are reversed (617 == 7 -> 1 -> 6 )
const addLists = (first, last) => {
  let num = 0;

  let nodes = [first.root, last.root];
  let place = 1;
  while (nodes[0] !== null) {
    let currentSum = (nodes[0].value + nodes[1].value) * place;
    place *= 10;

    num += currentSum;

    nodes = [nodes[0].next, nodes[1].next];
  }

  return num;
};

let test = new List(new Node(10, new Node(5)));

test.append(20);
test.append(8);

test.delete(10);
test.delete(20);

// Test deleteDuplicates
test.append(21);
let testNode = test.append(32);
test.append(21);
test.append(42);
test.append(21);
test.append(7);

test.deleteDuplicates();

// Test last-nth
_.log(test.last(2).value === 42);

// Test partition
_.log('Partition around 8');
test.partition(8);

_.log('Sum 7 -> 1 -> 6 AND 5 -> 9 -> 2');
let n1 = new List(new Node(7, new Node(1, new Node(6))));
let n2 = new List(new Node(5, new Node(9, new Node(2))));
_.log(addLists(n1, n2) === 912);

_.inspect(test);
