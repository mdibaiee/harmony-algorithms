var child = require('child_process'),
    args = process.argv.slice(1);

if (args.indexOf('test') > -1) {
  var path = args[2];

  var tmp = '.tmp/test.js';
  child.execSync('babel ' + path + ' > ' + tmp);
  child.execSync('mocha ' + tmp);
}
