// const a = 10;
// a = 20;
// console.log(a);

let b = 100;
b = 200;
console.log(b);

var x = 20;
x = 40;
console.log(x);


/*

Hoisting is a JavaScript mechanism where variable and function declarations are moved ("hoisted") to the top of their containing scope (global or function) during the compile phase, before the code is executed. This means that you can use functions and variables before they are declared in the code, though the way hoisting works differs for different kinds of declarations.

How Hoisting Works with Different Declarations:
var:

Hoisted: Yes, var declarations are hoisted.
Initial Value: undefined. Even though the declaration is hoisted, the assignment remains in its original place.
Behavior: This is why you can access a var variable before its declaration, but it will be undefined until it is assigned a value later in the code.
javascript
Copy code
console.log(a); // undefined (due to hoisting)
var a = 10;
console.log(a); // 10
let:

Hoisted: Yes, let is hoisted, but it is not initialized.
Initial Value: The variable is placed in a "temporal dead zone" (TDZ) until the declaration is encountered, meaning you cannot access it before its declaration.
Behavior: If you try to access it before it is initialized, you will get a ReferenceError.
javascript
Copy code
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
const:

Hoisted: Yes, const is hoisted, but like let, it is not initialized.
Initial Value: Same as let, it is in the "temporal dead zone" until it is initialized.
Behavior: If you try to access it before declaration, you'll get a ReferenceError. Also, const must be initialized at the time of declaration.
javascript
Copy code
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
Key Differences:
var is hoisted and initialized with undefined immediately, making it accessible before declaration (but still undefined).
let and const are hoisted but not initialized until their declaration is encountered, which is why accessing them before declaration throws a ReferenceError.




1. Global Execution Context:
When JavaScript code is run, the Global Execution Context (GEC) is created. This context has two phases:

Creation Phase (also known as the "Memory Allocation Phase"): During this phase, the JavaScript engine:

Sets up the scope chain.
Initializes the this keyword.
Allocates memory for variables and functions declared in the code.
In this phase, all variables and function declarations are "hoisted" to the top of their scope (global or function).
For variables:

var is hoisted and initialized as undefined.
let and const are hoisted but not initialized (they are placed in the Temporal Dead Zone or TDZ).
For functions:

Function declarations (not function expressions) are fully hoisted and initialized, meaning you can call the function before its declaration in the code.
Execution Phase: After memory allocation, JavaScript enters the execution phase, where it:

Executes the code line by line.
Assigns values to the variables based on their code position (for example, executing a = 10).
Runs function calls.
This is where things like console.log are executed. If the variable is not yet initialized, you'll see an error (for let/const) or undefined (for var).

Example to Illustrate:
javascript
Copy code
console.log(x); // undefined (because 'var x' is hoisted and initialized as undefined)
console.log(y); // ReferenceError (because 'let y' is hoisted but not initialized)
console.log(z); // ReferenceError (because 'const z' is hoisted but not initialized)

var x = 10;
let y = 20;
const z = 30;

function foo() {
  console.log("Function foo called!");
}

foo(); // Function foo called! (function declarations are hoisted fully)
Breakdown:
Creation Phase (Global Execution Context):

var x is hoisted and set to undefined.
let y and const z are hoisted but are in the Temporal Dead Zone (TDZ), meaning they cannot be accessed until the declaration line is reached.
The function foo() is fully hoisted and available.
Execution Phase:

console.log(x) prints undefined because x is hoisted but not yet assigned a value.
console.log(y) throws a ReferenceError because y is in the TDZ.
console.log(z) throws a ReferenceError because z is in the TDZ.
The variables are assigned values at the lines where x = 10, y = 20, and z = 30 appear.
The foo() function can be called at any point because function declarations are fully hoisted.
Key Concept:
The creation phase sets up variables and functions in memory, while the execution phase runs the code.
console.log and other commands are part of the execution phase.











*/
