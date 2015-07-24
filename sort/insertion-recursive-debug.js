'use strict';

import _ from '../utils';

let arr = _.args.numbers();

function insertionSort(arr, n) {
  _.debug(`insertionSort(arr, ${n})`);

  if(n > 0) insertionSort(arr, n-1);

  _.debug(`sorting 0...${n}`);

  let o = arr[n],
      i = n-1;
  while(arr[i] > o) {
    arr[i+1] = arr[i];
    _.debug(` - moving arr[${i}] to arr[${i+1}]`);
    i--;
  }
  arr[i+1] = o;
  _.debug(` - arr[${i}] set to ${o}`);
}

insertionSort(arr, arr.length-1);

_.log(arr.join(' '));
