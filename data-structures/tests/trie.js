import chai from 'chai';
import {Node, Trie} from '../trie';

chai.should();

test('Construct new Trie', () => {
  let trie = new Trie();

  trie.root.children.length.should.equal(0);
});

test('Add new parent values', () => {
  let trie = new Trie();

  trie.add('a');
  trie.add('b');
  trie.add('c');
  trie.add('t');

  trie.root.children.length.should.equal(4);
});

test('Adding values with existing parents', () => {
  let trie = new Trie();

  trie.add('a');
  trie.add('ab');
  trie.add('aba');
  trie.add('abas');

  let parent = trie.root;
  for (let i = 0; i < 3; i++) {
    parent.children.length.should.equal(1);
    parent = parent.children[0];
  }

  parent.children.length.should.equal(0);
});
