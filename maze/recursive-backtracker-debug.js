'use strict';

import _ from '../utils';

let width = parseInt(_.args[0], 10) || 10,
    height = parseInt(_.args[1], 10) || 10;

// Generate the two-dimensional array
let grid = new Array(width);

for(let i = 0; i < width; i++) {
  grid[i] = new Array(height);
}

grid.width = width;
grid.height = height;

// define directions in bits so we can use bitwise flags
// to merge and compare
// left 1 right 2
// top 4 bottom 8
let directions = [1, 2, 4, 8];
let opposite = {
  1: 2,
  2: 1,
  4: 8,
  8: 4
};

// Used to sort randomly
const randomSort = () =>
  Math.random() > 0.5 ? 1 : -1;

function walker(cx, cy, grid) {
  _.debug(`walker running for ${cx}, ${cy}`);

  let destination = directions.sort(randomSort);

  destination.forEach(function(dir) {
  _.debug(` - direction: ${dir}`);

    // find the next block
    let nx = cx + (dir === 1 ? -1 : dir === 2 ? 1 : 0),
        ny = cy + (dir === 4 ? -1 : dir === 8 ? 1 : 0);

    _.debug(` - trying next block nx=${nx} ny=${ny}`);

    // Make sure the next block is in grid and we haven't visited it before
    if(nx < grid.width && nx >= 0 && ny < grid.height && ny >= 0 && !grid[nx][ny]) {
      _.debug(` - ${grid[cx][cy]} |= ${dir}`);
      _.debug(` - ${grid[nx][ny]} |= ${opposite[dir]}`);
      grid[cx][cy] |= dir;
      grid[nx][ny]  = opposite[dir];

      walker(nx, ny, grid);
    }
  });
}

walker(0, 0, grid);

_.debug(grid);

function draw(grid) {
  _.log('  ' + '_'.repeat(grid.width*2 - 1));

  for(let i = 0; i < grid.width; i++) {
    _.print('|');
    for(let j = 0; j < grid.height; j++) {
      let c = grid[i][j];

      // bottom lines
      if((c & 8) === 0) _.print(" ");
      else _.print("_");

      // right lines
      if((c & 2) === 0) _.print(" ");
      else _.print("|");
    }
    _.print('|');
    _.print('\n');
  }
}

draw(grid);
