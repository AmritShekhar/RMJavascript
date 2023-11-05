//! Global Space: Global Space is any code 
//! written in Javascript which is not inside
//! a function.

var a = 10;

function f1() {

    var x = 20;

    console.log(x);
}

f1();

console.log(window.a);

console.log(a);

console.log(this.a);

console.log(x);