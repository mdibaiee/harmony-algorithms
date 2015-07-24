'use strict';

import _ from '../utils';

let arr = _.args.numbers();

function insertionSort(arr, n) {
  if(n > 0) insertionSort(arr, n-1);
  let o = arr[n],
      i = n-1;
  while(arr[i] > o) {
    arr[i+1] = arr[i];
    i--;
  }
  arr[i+1] = o;
}

insertionSort(arr, arr.length-1);

_.log(arr.join(' '));
