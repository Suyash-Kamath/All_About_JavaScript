
// var c = 300

let a  =100

if(true){
    let a=10
    const b = 20
    // var c = 30
    // c =99
    console.log(a);
    

}
console.log(a);
// console.log(b);
// console.log(c);

// var is scope or block independent 
/*

In JavaScript, the behavior of variable declarations depends on the type of keyword used:
 var, let, and const. Here's an explanation of what happens in your code:

Scope of var, let, and const:

var: Variables declared with var have function scope or global scope (if outside a function), but
 they are not restricted by block scope. This means that even if you declare var inside a block (e.g., an if statement or a loop),
  the variable is accessible outside of that block.
let and const: Both let and const have block scope, meaning they are only accessible within the block 
in which they are declared (e.g., within the curly braces {}). Once the block is exited, these variables are not accessible anymore.
The Code Explained:

javascript
Copy code
if(true){
    let a=10
    const b = 20
    var c = 30
}
// console.log(a); // Uncaught ReferenceError: a is not defined
// console.log(b); // Uncaught ReferenceError: b is not defined
console.log(c);    // 30
Inside the if block:
let a = 10: This variable a is block-scoped, so it only exists within the if block. Trying to access it outside the 
block (as in the commented console.log(a);) would result in an error (ReferenceError).
const b = 20: Like let, const is also block-scoped. It cannot be accessed outside the if block. So, console.log(b); would 
also throw a ReferenceError.
var c = 30: Since var is not block-scoped, c will be accessible outside the block, which is why console.log(c); works and outputs 30.
Summary:

let and const are scoped to the block they are declared in and cannot be accessed outside of that block.
var is not bound by block scope. It is available either globally (if declared outside any function) or function-wide (if declared 
inside a function), but it is not limited by blocks like if statements or loops.
Thus, the comment "// var is scope or block independent" in your code refers to the fact that variables declared with var can be
 accessed outside of block-level scopes, whereas let and const are restricted to the block they are defined in.
*/

/*


The global scope behaves differently in browser environments and Node.js due to the distinct environments they run in and the global objects each uses. Here's a breakdown of why and how the global scope differs between the two:

### 1. **Global Object in Browsers vs. Node.js**
   - **Browser Environment:**
     - In browsers, the global object is `window`. Anything declared in the global scope (outside of any functions or blocks) becomes a property of the `window` object. For example:
       ```javascript
       var x = 10;
       console.log(window.x); // 10
       ```
       In the browser, `var` variables declared at the top level become properties of `window`.

     - `let` and `const` do not behave this way. They are global if declared at the top level but do not attach themselves to the `window` object.
       ```javascript
       let y = 20;
       console.log(window.y); // undefined
       ```

   - **Node.js Environment:**
     - In Node.js, the global object is `global`, not `window` (because there is no "window" in Node). However, in Node.js, variables declared with `var`, `let`, or `const` at the top level do **not** become properties of the `global` object.
       ```javascript
       var x = 10;
       console.log(global.x); // undefined
       ```

     - This is a key difference: in Node.js, top-level variables are local to the module (file), not global across the entire environment.

### 2. **Modules in Node.js**
   - In **Node.js**, each file is treated as a module with its own scope. Variables declared at the top level in a Node.js file are scoped to that module only, not the entire environment. This means they are not attached to the `global` object, even if declared with `var`.
   
   - Example:
     ```javascript
     var x = 10;
     console.log(global.x); // undefined (x is scoped to this module, not the global object)
     ```

   - In contrast, in the browser, there is no concept of modules by default (unless you're using ES6 modules or other module bundlers). Top-level variables can become part of the `window` object.

### 3. **Global Scope in Browser Consoles**
   - In browser developer consoles, when you type a variable name at the console’s top level, it is implicitly added to the `window` object. This is why you might observe that the global scope in the console behaves differently from when you write code in a script file.
   
   - For example:
     ```javascript
     // In the browser console
     x = 100;
     console.log(window.x); // 100
     ```
     Here, the console automatically assigns variables to the `window` object because it assumes a global context. This is slightly different from writing the same in a script, where `let` or `const` would not become part of `window`.

### 4. **`var` in Browsers and Node.js**
   - **In Browsers**: `var` variables declared at the global level become part of the `window` object.
   - **In Node.js**: `var` is function-scoped but not attached to the `global` object when declared at the top level in a module. This helps in maintaining better module isolation in Node.js.

### 5. **Module Behavior Differences**
   - In **browsers**, by default, all JavaScript code runs in the global scope unless wrapped in functions or explicitly managed using ES6 modules (`<script type="module">`), which restrict global variable sharing.
   - In **Node.js**, since every file is a module, variables declared in one module won’t be accessible in another unless explicitly exported and imported.

### Summary of Key Differences:
| Environment | Global Object  | Top-Level `var` Behavior            |      Top-Level `let`/`const` Behavior |
|-------------|----------------|-------------------------------------|---------------------------------------|
| **Browser** | `window`       | Becomes a property of `window`      | Scoped to the script but not `window` |
| **Node.js** | `global`       | Scoped to the module, not `global`  | Scoped to the module, not `global`    |

### Why This Difference Exists:
- **Browsers** are designed for web pages, and the `window` object represents the entire webpage environment. Scripts naturally attach global variables to the `window` because they're often interacting with the page and its global state.
- **Node.js** was built for server-side development, where modularity and isolation are more important. By avoiding attaching variables to the `global` object, Node.js ensures better encapsulation, preventing conflicts between different parts of the application. Each file (module) has its own scope, promoting the use of modular code.

This explains why the global scope and variable behavior differ between browser and Node.js environments.
*/