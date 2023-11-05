f1();

var x = 1;

f2();

console.log(x);

a();

b();

c();

console.log(x);

function a() {

    var x = 10;

    console.log(x);
}

function b() {

    var x = 100;

    console.log(x);
}

function c() {
    
    console.log(x);
}

function f1() {

    console.log(x);
}

function f2() {

    console.log(x);
}