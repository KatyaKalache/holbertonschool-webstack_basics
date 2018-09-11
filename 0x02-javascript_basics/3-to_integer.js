#!/usr/bin/node
// prints a message depending of the # of args passed
if (parseInt(process.argv[2])) {
  console.log('My number: ' + process.argv[2]);
} else {
  console.log('Not a number');
}
