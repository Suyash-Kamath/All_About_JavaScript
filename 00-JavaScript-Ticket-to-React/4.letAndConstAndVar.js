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





The reason why let and const are hoisted but not initialized is tied to how JavaScript handles scope and the Temporal Dead Zone (TDZ). This behavior was intentionally designed to avoid common bugs and make the language more predictable and secure. Here's a breakdown of the reasoning behind this:

1. Avoiding Unexpected Behavior with Hoisting:
In JavaScript, var has historically been used, but its hoisting behavior could lead to bugs. Since var variables are hoisted and initialized with undefined, this allows the following problematic situation:

javascript
Copy code
console.log(a); // undefined (due to hoisting)
var a = 10;
This can lead to confusion because the developer might expect a to throw an error when used before its declaration, but instead, it is silently undefined, masking potential bugs.

To improve upon this, let and const were introduced in ES6 (ES2015), and they were designed to avoid this problem by not initializing the variable until the execution reaches the line where the variable is declared. This design prevents accidental use of a variable before it is declared, helping to catch errors more easily.

2. Temporal Dead Zone (TDZ):
The Temporal Dead Zone (TDZ) is the time between the hoisting of the variable and its initialization. During this period, any attempt to access the variable will result in a ReferenceError. Both let and const are hoisted to the top of their block scope but are placed in the TDZ until they are initialized.

This ensures that you cannot access a let or const variable before its declaration in the code. Here's an example to demonstrate this:

javascript
Copy code
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
In this case, a is hoisted to the top of the block scope, but it is not initialized. Trying to access it before the line let a = 10 causes a ReferenceError.

3. Safety with Block Scope:
let and const are block-scoped, meaning they are confined to the nearest enclosing block (such as a function, loop, or an if-statement block). If they were initialized as undefined like var, it would allow you to use them before their declaration, which could lead to unpredictable code execution. By keeping them uninitialized, JavaScript enforces safer coding practices.

4. Design Choice:
The designers of ES6 (which introduced let and const) intentionally made this distinction for the following reasons:

Avoid "undefined" traps: With var, it was easy to accidentally use variables before their initialization due to hoisting, leading to bugs. By not initializing let and const, you get a clear error if you try to use the variable too early.
Encourage better coding practices: By ensuring that let and const are only usable after their declaration, developers are encouraged to write clearer, more predictable code.
5. Differences between let and const:
let: Can be reassigned after initialization but still follows TDZ rules.
const: Must be initialized at the time of declaration and cannot be reassigned. It also follows TDZ rules.
Example:
javascript
Copy code
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
const y = 10;
In Summary:
let and const are hoisted to the top of their block scope, but they remain uninitialized in the Temporal Dead Zone (TDZ) until the line of code where they are declared is reached.
This design prevents variables from being accessed before they are properly initialized, reducing errors and making JavaScript more predictable and safe to use.





*/
