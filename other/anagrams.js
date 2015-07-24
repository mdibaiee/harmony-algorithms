'use strict';

import _ from '../utils';

let words = _.args.length ? _.args : ['a gentleman', 'debit card',
                                      'bad credit', 'elegant man',
                                      'the eyes', 'they see',
                                      'mummy', 'my mum',
                                      'hello', 'lehol'];

function anagrams(words) {
  let pairs = [];

  for(let w of words) {
    let matched = pairs.some(a => {
      return a[0] === w || a[1] === w;
    });

    if(matched) continue;
    let sum = sumAscii(w);

    let other = words.find(a => {
      return w !== a && sumAscii(a) === sum;
    });

    if(other) pairs.push([w, other]);
  }

  return pairs;
}

_.log(anagrams(words));

function sumAscii(word) {
  return word.split('').reduce((a,b) => {
    return a + b.charCodeAt(0);
  }, 0);
}