'use strict';

import _ from '../utils';

let arr = _.args.numbers();

for(let i = 0, len = arr.length; i < len-1; i++) {
  let min = i;

  _.debug(`on arr[${i}]; min=${arr[min]} minIndex=${min}`);

  for(let j = i+1; j < len; j++) {
    _.debug(` - comparing with arr[${j}] = ${arr[j]}`);

    if(arr[j] < arr[min]) {
      min = j;

      _.debug(` - found a new minimum; min=${arr[j]} minIndex=${min}`);
    }
  }

  _.debug(` - swapping arr[${min}]=${arr[min]} with arr[${i}]=${arr[i]}`);

  let tmp = arr[min];
  arr[min] = arr[i];
  arr[i] = tmp;
}

_.log(arr.join(' '));
