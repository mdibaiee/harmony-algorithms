'use strict';
import _ from '../utils';

let arr = _.args.numbers();

mergeSort(arr, 0, arr.length);
_.log(arr.join(' '));

function mergeSort(a, p, r) {
  if(r - p === 1) return;

  let q = Math.floor((r+p)/2);
  _.debug(`mergeSort(${[p, q, r]})`);

  mergeSort(a, p, q);
  mergeSort(a, q, r);
  merge(a, p, q, r);
}

function merge(a, p, q, r) {
  _.debug(`- merge(${[p, q, r]})`);

  let i = 0,
      j = 0;

  let left = a.slice(p, q),
      right = a.slice(q, r);

  _.debug(`  - left = [${left}]`);
  _.debug(`  - right = [${right}]`);

  left.push(Infinity);
  right.push(Infinity);

  for(let k = p; k < r; k++) {
    if(left[i] <= right[j]) {
      a[k] = left[i];
      _.debug(`  - set a[${k}] = (left[${i}]=${left[i]})`);

      i++;
    } else {
      a[k] = right[j];
      _.debug(`  - set a[${k}] = (right[${j}]=${right[j]})`);

      j++;
    }
  }
  _.debug(`a = [${a}]`);
}
