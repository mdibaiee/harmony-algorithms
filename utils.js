'use strict';

module.exports.print = process.stdout.write.bind(process.stdout);

module.exports.log = module.exports.debug = console.log.bind(console);

module.exports.inspect = object => {
  console.dir(object, {
    colors: true,
    depth: null,
    showHidden: false
  });
};

module.exports.args = process.argv.slice(2);

// module.exports.DEBUG = false;

module.exports.args.numbers = function() {
  return module.exports.args.map(function(a) {
    return parseInt(a, 10);
  });
};
