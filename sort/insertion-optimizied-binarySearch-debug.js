'use strict';

let _ = require('../utils'),
    binarySearch = require('../search/binary-recursive');

let arr = _.args.numbers();

for(let i = 1, len = arr.length; i < len; i++) {
  let key = arr[i];
  let j = -1,
      x = 1;

  _.debug(`at ${key}`);
  do {
    let end = i - (x-1);
    _.debug(` - looking for ${key + x} in ${arr.slice(0, end)}`);
    j = binarySearch(key + x++, arr, 0, end);
  } while (j === -1 && end > -1);

  if(j === -1) {
    _.debug('j not found, continuing');
    continue;
  }

  for(let c = i-1; c >= j; c--) {
    arr[c+1] = arr[c];
    _.debug(` - arr[${c+1}] = arr[${c}]`);
  }

  arr[j] = key;
}

_.log(arr.join(' '));