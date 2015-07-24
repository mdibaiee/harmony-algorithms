'use strict';
import _ from '../utils';

let arr = _.args.numbers();

function mergeSort(a, p, r) {
  if(r - p === 1) return;

  let q = Math.floor((r+p)/2);

  mergeSort(a, p, q);
  mergeSort(a, q, r);
  merge(a, p, q, r);
}

function merge(a, p, q, r) {
  let i = 0,
      j = 0;

  let left = a.slice(p, q),
      right = a.slice(q, r);

  left.push(Infinity);
  right.push(Infinity);

  for(let k = p; k < r; k++) {
    if(left[i] <= right[j]) {
      a[k] = left[i];
      i++;
    } else {
      a[k] = right[j];
      j++;
    }
  }
}

if (require.main === module) {
  mergeSort(arr, 0, arr.length);
  _.log(arr.join(' '));
}

module.exports = mergeSort;
