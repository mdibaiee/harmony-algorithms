'use strict';

import _ from '../utils';

let input = _.args.numbers()[0];

let pascal = [];

for (let i = 0; i < input; i++) {
  let past = pascal[i - 1];
  let n = new Array(i + 1);
  n[0] = 1;
  n[i] = 1;

  for (let j = 1; j < i; j++) {
    n[j] = past[j - 1] + past[j];
  }
  pascal.push(n);
}


let single = pascal.reduce((a, b) => {
  return a.concat(b);
}, []);

_.log(single);
