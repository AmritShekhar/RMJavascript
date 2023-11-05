//TODO When a Javascript program is run, an Execution Context is created.

//? Now the Execution Context is created in two phases:
//? 1. Memory Creation Phase
//? 2. Code Execution Phase

//! In Memory Creation Phase, Javascript allocates memory to all variables
//! and functions.

//* In Code Execution Phase, statements are executed one command at a time.

var a, b;

a = 2, b = 3;

function add(a, b) {

    var ans = a+b;

    return ans;
}

var result = add(a, b);

console.log(result);

//? Call Stack maintains the order of execution of Execution Contexts.