#!/usr/bin/node
// method that prints the rectangle 'X'

exports.Rectangle = function Rectangle (w, h) {
  if (w < 1 || h < 1) {} else {
    this.width = w;
    this.height = h;
    this.print = function () {
      let NEWSTR = '';
      for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
          NEWSTR += 'X';
        }
        if (i < h - 1) {
          NEWSTR += '\n';
        }
      }
      console.log(NEWSTR);
    };
  }
};
