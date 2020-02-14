setTimeout(function setTimeoutFun3sec() {
  console.log('first setTimeout with time 3');
}, 3000);
setTimeout(function setTimeoutFun0() {
  console.log('second setTimeout with time 0');
}, 0);
console.log('one');
console.log('two');
console.log('three');
