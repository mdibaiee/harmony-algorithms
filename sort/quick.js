'use strict';
import _ from '../utils';

let arr = _.args.numbers();

function quickSort(array, p = 0, r = array.length) {
  if (p >= r) return;

  let pivot = partition(array, p, r);

  // pivot is not included
  quickSort(array, p, pivot - 1);
  quickSort(array, pivot + 1, r);
}

function partition(array, p, r) {
  let q = p;

  // start at p, if any element is bigger than pivot, it will automatically
  // be added to RIGHT group as the u increases,
  // if it's less than pivot, it will be added to LEFT by swapping it
  // with the leftmost element of RIGHT group, and moving RIGHT's starting point
  // (q) one point to right
  for (let u = p; u < r; u++) {
    if (array[u] <= array[r]) {
      swap(array, u, q);

      q++;
    }
  }

  // after finding LEFT and RIGHT groups, move pivot to it's original position
  swap(array, r, q);

  return q;
}

function swap(array, a, b) {
  let tmp = array[b];
  array[b] = array[a];
  array[a] = tmp;
}

if (require.main === module) {
  quickSort(arr, 0, arr.length);
  _.log(arr.join(' '));
}

module.exports = quickSort;
