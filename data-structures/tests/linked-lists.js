import chai from 'chai';
import {Node, List} from '../linked-lists';

chai.should();

test('Constructing new Lists', () => {
  let list = new List(new Node(10, new Node(5)));

  list.root.value.should.equal(10);
  list.root.next.value.should.equal(5);
});
