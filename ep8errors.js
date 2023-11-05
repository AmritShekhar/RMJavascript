var a = 1;
var a = 10;

//* SyntaxError (Identifier already declared)
// let b = 2;
// let b = 20;

//* SyntaxError (Identifier already declared)
// var c = 3;
// let c = 30;

//* SyntaxError (Identifier already declared)
// let d = 4;
// var d = 40;

let e = 5;
e = 50;

const f = 6;

//* SyntaxError (Missing initializer in const declaration)
// const g;

//* TypeError (Assignment to const variable)
// const h = 7;
// h = 70;

//* ReferenceError (Can't access variable before initialization)
// console.log(i);  //? Variable i is in the Temporal Deadzone
// let i = 8;

//* ReferenceError (Variable is not defined)
//console.log(x);
