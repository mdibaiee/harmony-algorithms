'use strict';

import _ from '../utils';

function addBinary(a, b) {
  let c = new Array(a.length + 1),
      d = new Array(c.length);

  _.debug(`inputs: ${a}, ${b}`);

  for (let i = c.length - 1; i >= 0; i--) {
    let sum = i > 0 ? a[i - 1] + b[i - 1] + (d[i] || 0) : d[i] || 0;

    _.debug(`i = ${i} sum = ${sum}`);

    if (sum >= 2) {
      d[i - 1] = 1;
      c[i] = sum - 2;
      _.debug(`sum was >= 2, d[${i - 1}] = 1 c[${i}] = ${sum - 2}`);
    } else {
      c[i] = sum;
      _.debug(`c[${i}] = ${sum}`);
    }
  }

  return c;
}

const argumentToArray = (arg) =>
  arg.split('').map(function(el) {
    return parseInt(el, 10);
  });

let i1 = argumentToArray(_.args[0]),
    i2 = argumentToArray(_.args[1]);

let result = addBinary(i1, i2);

_.log(result.join(''));
