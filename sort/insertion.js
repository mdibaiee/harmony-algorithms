'use strict';

import _ from '../utils';

let arr = _.args.numbers();

for(let i = 1, len = arr.length; i < len; i++) {
  let key = arr[i];
  let j = i - 1;

  while(j > -1 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }

  arr[j + 1] = key;
}

_.log(arr.join(' '));