#!/usr/bin/node
// class that defines a rectangle
exports.Rectangle = function Rectangle (w, h) {
  if ((w < 1 || h < 1) || (!w || !h)) {
  } else {
    this.width = w;
    this.height = h;
  }
};
