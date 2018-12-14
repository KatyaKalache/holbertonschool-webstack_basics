#!/usr/bin/node
// prints a message depending of the # of args passed
if (process.argv[2]) {
  console.log(process.argv[2]);
} else {
  console.log('No argument');
}
