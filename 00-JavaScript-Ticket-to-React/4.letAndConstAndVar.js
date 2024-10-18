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

*/
