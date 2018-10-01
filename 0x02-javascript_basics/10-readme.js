#!/usr/bin/node
// reads and prints the content of a file
var fs = require('fs');
fs.readFile('cisfun', 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
}
);
