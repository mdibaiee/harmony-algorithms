'use strict';

import _ from '../utils';

let arr = _.args.numbers();

for(let i = 1, len = arr.length; i < len; i++) {
  let key = arr[i];
  let j = i - 1;
  _.debug(`on arr[${i}] = ${key}`);

  while(j > -1 && arr[j] > key) {
    _.debug(` - a[${j}] = ${arr[j]} > ${key}`);

    arr[j + 1] = arr[j];
    j--;
  }

  _.debug(` - moving key = ${key} to arr[${j+1}]`);
  arr[j + 1] = key;
}

_.log(arr.join(' '));