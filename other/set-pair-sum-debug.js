'use strict';

let _ = require('../utils'),
    mergeSort = require('../sort/merge');

let args = _.args.numbers(),
    set = args.slice(0, -1),
    key = args[args.length-1];

function findPair(arr, key) {
  _.debug(`findPair(arr, ${key})`);
  mergeSort(arr, 0, arr.length);

  let i = 0,
      j = arr.length-1;
  for(let x = 0, len = arr.length-1; x < len; x++) {
    let sum = arr[i] + arr[j];
    _.debug(`sum = (arr[${i}]=${arr[i]}) + (arr[${j}]=${arr[j]}) = ${sum}`);

    if(sum === key) return true;
    if(sum > key) j--;
    if(sum < key) i++;
  }

  return false;
}

if(require.main === module) {
  _.log(findPair(set, key));
}

module.exports = findPair;
