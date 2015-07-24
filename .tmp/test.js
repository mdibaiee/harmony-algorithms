"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var chai = _interopRequire(require("chai"));

var _dataStructuresTrie = require("../data-structures/trie");

var Node = _dataStructuresTrie.Node;
var Trie = _dataStructuresTrie.Trie;

chai.should();

test("Construct new Trie", function () {
  var trie = new Trie();

  trie.root.children.length.should.equal(0);
});

test("Add new parent values", function () {
  var trie = new Trie();

  trie.add("a");
  trie.add("b");
  trie.add("c");
  trie.add("t");

  trie.root.children.length.should.equal(4);
});

test("Adding values with existing parents", function () {
  var trie = new Trie();

  trie.add("a");
  trie.add("ab");
  trie.add("aba");
  trie.add("abas");

  var parent = trie.root;
  for (var i = 0; i < 3; i++) {
    parent.children.length.should.equal(1);
    parent = parent.children[0];
  }

  parent.children.length.should.equal(0);
});

