#!/usr/bin/node
// prints a message depending of the # of args passed
if (isNaN(parseInt(process.argv[2]))) {
  console.log('Missing size');
} else {
  let _len = process.argv[2];
  let NEWSTR = '';
  for (let i = 0; i < _len; i++) {
    for (let j = 0; j < _len; j++) {
      NEWSTR += 'X';
    }
    if (i < (_len - 1)) {
      NEWSTR += '\n';
    }
  }
  console.log(NEWSTR);
}
