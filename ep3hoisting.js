
//! Hoisting is a feature in Javascript by virtue 
//! of which variables and functions can be accessed
//! without any error before they are even initialized
//! or defined.


//? The concept of Hoisting is based on the
//? memory creation phase of execution context. 

console.log(f1);

console.log(f2);

console.log(f3);

var f1 = function() {

    console.log("f1 function");
}

function f2() {

    console.log("f2 function");
}

var f3 = () => {

    console.log("f3 function");
}

f1();

f2();

f3();

console.log(f1);

console.log(f2);

console.log(f3);