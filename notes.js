//! Everything in Javascript happens inside the "Execution Context".

//TODO Execution Context can be thought of as a box having two components:
//TODO 1. Memory Component (also known as Variable Environment)
//TODO 2. Code Component (also known as Thread of Execution)

//? In Memory Component all the variables and functions are
//? stored as key value pairs.

//* Code Component is the place where whole Javascript code is executed one line at a time.

//! Javascript is a synchronous single threaded language.

//? Single threaded means Javascript can execute one command at a time.

//TODO Synchronous means code is executed in a specific order that means Javascript
//TODO can execute a command only when the previous command has been executed.

