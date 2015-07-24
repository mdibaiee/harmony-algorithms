'use strict';

import _ from '../utils';

let args = _.args.numbers(),
    arr = args.slice(0, -1),
    key = args[args.length-1];

function binarySearch(key, arr, p, q) {
  if(q - p < 2) {
    if(arr[q] === key) return q;
    else if(arr[p] === key) return p;
    else return -1; // not found
  }
  let middle = p + Math.floor((q - p)/2);
  if(arr[middle] < key)
    return binarySearch(key, arr, middle, q);
  else
    return binarySearch(key, arr, p, middle);
}

if(require.main === module) _.log(binarySearch(key, arr, 0, arr.length-1));

module.exports = binarySearch;
