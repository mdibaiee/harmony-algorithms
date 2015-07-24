'use strict';

import _ from '../utils';

let args = _.args.numbers(),
    arr = args.slice(0, -1),
    key = args[args.length-1];

function binarySearch(key, arr, p, q) {
  _.debug(`binarySearch(${[key, 'arr', p, q]})`);

  if(q - p < 2) {
    if(arr[q] === key) return q;
    else if(arr[p] === key) return p;
    else return -1; // not found
  }
  let middle = p + Math.floor((q - p)/2);
  _.debug(`arr[${middle}]=${arr[middle]}, key = ${key}`);
  if(arr[middle] < key) {
    _.debug(`splitting, searching in arr[${Math.floor(q/2)}...${q}]`);
    return binarySearch(key, arr, middle, q);
  } else {
    _.debug(`splitting, searching in arr[${p}...${Math.floor(q/2)}]`);
    return binarySearch(key, arr, p, middle);
  }
}

_.log(binarySearch(key, arr, 0, arr.length-1));
