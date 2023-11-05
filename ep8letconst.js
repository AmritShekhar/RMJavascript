let a = 1;

console.log(a);

console.log(b);

var b = 2;

console.log(window.b);

console.log(this.b);

console.log(window.a);

console.log(this.a);

var x = 10;

var x = 20;

console.log(x);

let y = 100;

y = 200;

console.log(y);

//! Below code results in SyntaxError
// var z = 71;

// let z = 73;

// console.log(z);