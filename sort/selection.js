'use strict';

import _ from '../utils';

let arr = _.args.numbers();

for(let i = 0, len = arr.length; i < len-1; i++) {
  let min = i;

  for(let j = i+1; j < len; j++) {
    if(arr[j] < arr[min]) {
      min = j;
    }
  }

  let tmp = arr[min];
  arr[min] = arr[i];
  arr[i] = tmp;
}

_.log(arr.join(' '));
