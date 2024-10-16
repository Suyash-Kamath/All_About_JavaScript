/*

this keyword => tells about the current context( values , what variables are holding) or refers to current context
https://chatgpt.com/share/670f653b-9288-8006-bc2a-4da57fa84215
*/

const user = {
    username:"Suyash",
    price:999,
    welcomeMessage: function(){
        // console.log(`${username} , Welcome to webite`);
        console.log(`${this.username} , Welcome to webite`);
        console.log(this);
        
    }


    
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);
// as we are in node environment , this keyword refers to empty object and in console tab you get many stuffs , you get to see window

/*
In old times , to execute JavaScript, use Browser, Global object in browser is Window object , which is why you can capture events of window , may it be click , form submit, helpful in DOM
In Node , we have standalone engine , 
*/




/*

The this keyword in JavaScript refers to the object on which the function is being called, allowing you to dynamically refer to the properties of that object within methods. In your example, you used user.username instead of this.username, and both seem to work, but they behave differently under certain conditions.

Why both user.username and this.username give the same result in your current code:
In your example, since user.username is directly referencing the user object, it works because the method welcomeMessage is being called from the user object. However, this.username provides a more dynamic way to refer to the object context.

Key Differences Between user.username and this.username:
Hardcoded Reference (user.username):

When you use user.username, you're directly referencing the user object.
This means that even if you assign the welcomeMessage method to another object or change the context of the function, it will still refer to the user object, not the new object or the current context.
javascript
Copy code
const user = {
    username: "Suyash",
    price: 999,
    welcomeMessage: function () {
        console.log(`${user.username} , Welcome to website`);
    }
};

const anotherUser = { username: "Sam" };
anotherUser.welcomeMessage = user.welcomeMessage;
anotherUser.welcomeMessage(); // Outputs "Suyash, Welcome to website" (still uses user.username)
In this case, the output is "Suyash, Welcome to website", even though anotherUser.welcomeMessage() is called. This happens because user.username is hardcoded and always refers to the user object, regardless of the context in which the function is called.

Dynamic Reference (this.username):

When you use this.username, you're referring to the username of the object that is currently invoking the method.
The this keyword dynamically refers to the context in which the method is called, allowing it to adjust to the object that is calling it.
javascript
Copy code
const user = {
    username: "Suyash",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , Welcome to website`);
    }
};

const anotherUser = { username: "Sam" };
anotherUser.welcomeMessage = user.welcomeMessage;
anotherUser.welcomeMessage(); // Outputs "Sam, Welcome to website"
In this case, the output is "Sam, Welcome to website", because this.username now refers to anotherUser.username. This is the power of using this—it dynamically refers to the object calling the method, allowing for more flexible and reusable code.

When to Use this:
For reusability: If you want the method to work with any object that may call it, use this. This makes the method more reusable and context-aware.
Avoid hardcoded references: Using user.username hardcodes the object name, making it less flexible and tied to that specific object.
In Summary:
user.username: Always refers to the user object directly, making it less flexible. It will always look up the username property of the user object, even if you call the method from a different object.
this.username: Refers to the object that is invoking the method, making the function more dynamic and reusable.
Using this is generally better for methods inside objects because it allows the method to adapt to the context of the object that calls it, making the code more flexible and reusable.




The behavior of `console.log(this)` in different environments (Node.js vs. browser) reflects the way **global context** is managed in each environment. Here’s why you see different outputs:

### 1. **In Node.js:**

When you log `this` in Node.js (outside of any function or object), it does **not** refer to the global object (`global`). Instead, it refers to the **module scope**, and in the module scope, `this` is an **empty object** (`{}`) by default.

```javascript
console.log(this); // Outputs: {}
```

This is because Node.js uses the CommonJS module system, and every file in Node.js is treated as a **module**. So, `this` in the top-level of a file in Node refers to the **exports object** (which is initially an empty object `{}`), not the global object (`global`).

- If you want to access the global object in Node.js, you explicitly use `global`.

```javascript
console.log(global); // Outputs the global object in Node.js
```

#### Why is `this` empty in Node.js?
In Node, when outside any function, `this` refers to the current module, which is represented as an empty object (`{}`). The `this` keyword does **not** point to the global scope as it does in the browser. The reason for this is that Node.js modules have their own scope (each file/module is self-contained), so `this` is local to the module.

### 2. **In the Browser:**

When you log `this` in the browser (in the global scope), it refers to the `window` object.

```javascript
console.log(this); // Outputs: Window {...}
```

#### Why is `this` equal to `window` in the browser?
In the browser's global context, the global object is `window`, and `this` refers to the global object in the global execution context. Therefore, `console.log(this)` gives you the `window` object when executed in the global scope in the browser.

### 3. **Differences Explained:**

| **Context**            | **Node.js**             | **Browser**             |
|------------------------|-------------------------|-------------------------|
| **Global scope (`this`)** | Refers to the current module's exports object (initially `{}`) | Refers to the `window` object |
| **Global object**       | `global`                | `window`                |
| **Inside functions**    | In non-strict mode: `global`<br> In strict mode: `undefined` | In non-strict mode: `window`<br> In strict mode: `undefined` |

### 4. **`this` Inside Functions**:

- In **non-strict mode**:
  - In both the browser and Node.js, if you log `this` inside a regular function (not an arrow function), it refers to the global object.
  - In the browser, this will be `window`.
  - In Node.js, this will be `global`.

- In **strict mode** (`'use strict';`):
  - In both the browser and Node.js, if you log `this` inside a regular function, it will be `undefined` because strict mode prevents `this` from automatically referring to the global object in functions.

#### Example:
```javascript
function test() {
    console.log(this);
}

test(); // Node.js: Outputs 'global' (non-strict mode), Browser: Outputs 'window'
```

In **strict mode**, `this` is `undefined` inside a regular function:
```javascript
'use strict';
function test() {
    console.log(this); // Outputs: undefined (in both Node.js and browser)
}

test();
```

### Conclusion:
- In **Node.js**, `this` at the top level refers to the module's exports object (initially `{}`), not the global object. To access the global object, you must use `global`.
- In **browsers**, `this` in the global scope refers to the `window` object, the global object for the browser environment.
- The behavior of `this` inside functions can vary depending on whether you're using strict mode or not, but it follows the same rules in both environments.


In non-strict mode, when you call a function in the global scope without specifying an explicit context (like an object), JavaScript automatically assigns the global object to `this`. The reason for this is rooted in how **default binding** of `this` works in non-strict mode.

### How `this` Works in Non-Strict Mode:

#### 1. **Global Object in JavaScript**:
   - In a **browser**, the global object is `window`.
   - In **Node.js**, the global object is `global`.

When a regular function is invoked (not as a method of an object), JavaScript automatically assigns the global object (`window` in browsers, `global` in Node.js) to `this`.

#### Example:
```javascript
function sayHello() {
    console.log(this); // In non-strict mode, `this` is the global object
}

sayHello();  // Outputs: `window` in browser, `global` in Node.js
```

Here’s how it works:
- **In browsers**: When the function `sayHello` is called, `this` inside the function refers to the `window` object because no specific object was used to call the function.
- **In Node.js**: `this` would refer to `global` because that’s the global object in Node.

### Why Does This Happen?

This is part of JavaScript's original design for **backward compatibility** and **ease of use**. In the early days, JavaScript wasn’t very strict about enforcing object-oriented principles, and it was common to write functions in the global scope that worked with the global environment.

JavaScript uses four rules to determine the value of `this`, and one of them is the **default binding** rule. In non-strict mode, if no other rule applies, the default behavior is to bind `this` to the global object.

#### **The Default Binding Rule (Non-Strict Mode)**:
If a function is invoked without any explicit context (no `obj.function()`), JavaScript defaults to binding `this` to the global object.

- **Global invocation**: If you call a function globally, like `sayHello()`, `this` will automatically be set to the global object.
  
   ```javascript
   function greet() {
       console.log(this); // In non-strict mode, this = window/global
   }

   greet(); // Outputs the global object (window in browsers, global in Node)
   ```

#### Example in Browser:
```javascript
function sayHello() {
    console.log(this);  // `this` will be the global object `window`
}
sayHello(); // Outputs `window`
```

In this example:
- Since there is no object calling `sayHello()`, the function is executed in the global context. By default, in non-strict mode, `this` refers to `window`.

#### Example in Node.js:
```javascript
function sayHello() {
    console.log(this);  // `this` will be the global object `global`
}
sayHello(); // Outputs `global` in Node.js
```

In Node.js, the global object is called `global`, and so the function will log `global`.

### 2. **Method Invocation Context**:
When you call a function as a method of an object, `this` refers to the object that called the method. The key point here is **how** the function is called.

```javascript
const person = {
    name: "Alice",
    greet: function() {
        console.log(this);  // `this` refers to the `person` object
    }
};

person.greet(); // Outputs the `person` object
```

Here, `person.greet()` sets the context of `this` to the `person` object, and so `this` inside the `greet` function will refer to the `person` object.

### 3. **How it Works in Non-Strict Mode**:
In non-strict mode, if no context (like an object) is explicitly provided when calling a function, the **global object** becomes the default context for `this`.

Here’s what happens behind the scenes:
- When `sayHello()` is called in the global context, JavaScript doesn't have an object to bind `this` to.
- So, the engine assigns `this` to the global object (i.e., `window` in browsers, `global` in Node.js).

### 4. **Strict Mode Behavior**:
In **strict mode** (`'use strict';`), JavaScript changes this behavior to prevent accidental global object manipulation. In strict mode, `this` remains `undefined` if the function is called without a specific context (i.e., not as a method of an object).

```javascript
'use strict';

function sayHello() {
    console.log(this);  // In strict mode, `this` is `undefined`
}

sayHello(); // Outputs: `undefined` in both browser and Node.js
```

### Why Strict Mode Changes This:
Strict mode was introduced to avoid certain "loose" behaviors in JavaScript, one of which is the automatic binding of `this` to the global object in non-strict mode. This can lead to unexpected behavior when writing large applications, as you might unintentionally modify the global object.

### Summary of Why `this` Refers to the Global Object in Non-Strict Mode:

- **Global scope**: In non-strict mode, if you invoke a function without an explicit object context (i.e., not as a method), JavaScript assigns the global object to `this`.
- **Backward compatibility**: This behavior was implemented in JavaScript to allow older code to work as expected without needing to manually bind `this` in simple functions.
- **Strict mode changes**: In strict mode, `this` is `undefined` when the function is invoked without a context, which prevents unintended modifications to the global object.


Yes, that's correct! In **Node.js** (and in non-strict mode), when you call a function in the **global scope** without any explicit context (such as an object), Node.js automatically assigns the **global object** to `this`. That's why, when you log `this` inside the function, it refers to the global object (`global` in Node.js).

### Here's how it works step by step:

1. **Non-strict mode**: When a function is called in **non-strict mode** in the global scope, if no explicit object is calling the function (like `obj.function()`), JavaScript uses the **default binding rule**.

2. **Default binding in Node.js**: In Node.js, the global object is called `global`. In non-strict mode, when you invoke a function without an explicit context, `this` inside the function is automatically assigned to `global`.

3. **Function Call in the Global Scope**: When you invoke a function like `myFunction()` in Node.js without an object or any specific context, Node.js binds `this` to the `global` object.

### Example:
```javascript
function myFunction() {
    console.log(this); // In non-strict mode, this refers to the global object
}

myFunction();  // Outputs: `global`
```

#### Why does this happen?

- Since `myFunction()` is called without any explicit object, **Node.js defaults to assigning `this` to the `global` object**.
- In Node.js, the global object is `global`, so `this` refers to `global`, and the output of `console.log(this)` is the `global` object.

### Comparison with Browser:

- In a **browser**, the global object is `window`. So, in non-strict mode, calling a function like `myFunction()` would make `this` refer to the `window` object.

### Key Points:

- **Non-strict mode**: By default, `this` refers to the global object (`global` in Node.js, `window` in the browser).
- **Strict mode**: In strict mode (`'use strict';`), `this` is `undefined` when the function is called globally, and it doesn't automatically bind to the global object.

### Summary:

Yes, in non-strict mode, Node.js assigns the **global object** (`global`) to the function when it's called in the global scope. That's why `console.log(this)` inside the function prints `global` in Node.js.


In **strict mode** (`'use strict';`), JavaScript changes the behavior of `this` to avoid some of the problematic or confusing aspects that occur in **non-strict mode**, particularly with functions called in the **global scope**.

### Why `this` Doesn't Refer to the Global Object in Strict Mode:

In **strict mode**, JavaScript **prevents the default binding of `this` to the global object** when a function is called without an explicit context. Instead, `this` remains **`undefined`** unless it's explicitly set.

### Here's why:

1. **Strict mode is designed to avoid mistakes**:
   - One of the issues with **non-strict mode** is that `this` is automatically set to the global object when a function is called without an explicit object. This can lead to bugs where global variables are accidentally modified.
   - **Strict mode** was introduced to prevent these unintentional side effects. If a function is called in the global scope (i.e., without an object or explicit context), **strict mode ensures that `this` is `undefined`**, instead of defaulting to the global object.

2. **Safety and Better Practices**:
   - Allowing `this` to point to the global object can make it easy to accidentally pollute the global namespace (e.g., by assigning properties to `this` and unknowingly adding them to the global object).
   - Strict mode avoids this issue by keeping `this` as `undefined` when no context is provided, forcing developers to write clearer and safer code.

### Example in Strict Mode:

```javascript
'use strict';

function myFunction() {
    console.log(this);  // `this` is undefined in strict mode
}

myFunction();  // Outputs: `undefined`
```

### Explanation:
- In **non-strict mode**, when `myFunction()` is called without any explicit object, `this` would default to the **global object** (`global` in Node.js or `window` in browsers).
- But in **strict mode**, JavaScript prevents this automatic global binding. If `myFunction()` is called without an object, `this` inside the function remains `undefined`.

### Why is `this` `undefined`?

- In strict mode, JavaScript is enforcing a stricter rule: **if you don't explicitly define what `this` refers to, it won't be set automatically**.
- This behavior prevents accidental changes to the global object, which could happen in non-strict mode.

### How Strict Mode Prevents Bugs:

In **non-strict mode**, consider the following example where `this` refers to the global object, leading to unexpected behavior:

```javascript
function updateGlobalVariable() {
    this.someGlobalVar = 42; // In non-strict mode, `this` refers to the global object
}

updateGlobalVariable();

console.log(global.someGlobalVar);  // 42, global variable is unintentionally created
```

In **non-strict mode**, calling `updateGlobalVariable()` accidentally creates a global variable `someGlobalVar` because `this` is pointing to the global object.

However, in **strict mode**:

```javascript
'use strict';

function updateGlobalVariable() {
    this.someGlobalVar = 42; // `this` is undefined, so this throws an error
}

updateGlobalVariable(); // Error: Cannot set property 'someGlobalVar' of undefined
```

Here, `this` is `undefined` in strict mode, so JavaScript throws an error instead of creating a global variable, which helps prevent accidental global object pollution.

### Summary:

- **Non-strict mode**: If you call a function in the global scope without an explicit object, `this` defaults to the global object (`window` in browsers, `global` in Node.js).
- **Strict mode**: To avoid accidental modification of the global object, `this` remains **`undefined`** unless it's explicitly set. This makes your code safer and reduces unintended side effects.

Strict mode is designed to prevent the common pitfalls of `this` in non-strict mode, ensuring that functions without a clear object context don't unexpectedly modify global state.




*/

// function chai(){
//     let username = "Suyash"
//     // console.log(this.username); //context works only on object, not in function
    
// }
// chai()


// function updateGlobalVariable() {
//     this.someGlobalVar = 42; // In non-strict mode, `this` refers to the global object
// }

// updateGlobalVariable();

// console.log(global.someGlobalVar);
// console.log(global);

// const chai = function(){
//     let user ="suyash"
//     console.log(this.user);
    
// }

const chai =()=>{
    let username = "Suyash"
    // console.log(this.username);
    console.log(this);
    
    
}
// chai();
/*


In JavaScript, the this keyword behaves differently in arrow functions compared to regular functions. Specifically, arrow functions do not have their own this. Instead, they inherit this from their surrounding (lexical) context. This is why you see unexpected behavior when using this inside an arrow function.

Why this Doesn't Work in Arrow Functions:
No Own this Binding:

Unlike regular functions, arrow functions don't have their own this. Instead, the value of this is lexically inherited from the surrounding scope (i.e., the scope in which the arrow function is defined).
This means that the value of this inside an arrow function is determined by the context in which the arrow function is declared, not where it's called.
Arrow Function Lexical Scoping:

Arrow functions capture the this value from their enclosing scope. If there is no explicit object as the enclosing scope, this inside an arrow function will refer to the this of the outer scope.
Example Explanation:
javascript
Copy code
const chai = () => {
    let username = "Suyash";
    console.log(this);  // Prints the value of `this` from the outer (global) scope
};

chai();
In this example:

chai is an arrow function.
Since arrow functions don't have their own this, they inherit it from the surrounding scope. Here, the surrounding scope is the global scope (or module scope in Node.js).
If you're running this in Node.js, the value of this will be an empty object {}, because in Node.js, the top-level this in a module is an empty object in strict mode.
If you're running this in a browser's global scope, this would refer to the global object (window in the browser).
Why this.username Doesn't Work:
javascript
Copy code
const chai = () => {
    let username = "Suyash";
    console.log(this.username);  // `this` doesn't refer to the function's context, so `this.username` is undefined
};

chai();
In this case, this.username doesn't work because arrow functions don't have their own this. Since this is inherited from the global scope, this.username tries to access username on the global object, where it doesn't exist.
The username defined inside the arrow function is a local variable and has no relationship with this.
Difference Between Arrow Functions and Regular Functions:
Regular Function Example:
javascript
Copy code
const chai = function () {
    let username = "Suyash";
    console.log(this);  // `this` refers to the global object (or undefined in strict mode)
};

chai();  // `this` refers to the global object
In a regular function, this is dynamically bound to the calling context. If the function is called in the global scope, this will refer to the global object (or undefined in strict mode).
Arrow Function Example:
javascript
Copy code
const chai = () => {
    console.log(this);  // `this` refers to the outer scope's `this`, not the global object
};

chai();  // `this` refers to the global context (inherited from the outer scope)
In an arrow function, this is lexically bound, meaning it takes the value of this from the surrounding context in which the function was defined, not from how or where it is called.
When to Use Arrow Functions:
Arrow functions are great for use cases where you want this to remain consistent with the outer context, such as when you're working inside methods or callbacks where this should refer to the parent object. However, if you need dynamic this binding (as in event handlers or object methods), regular functions are better suited.

Summary:
Arrow functions do not have their own this. They inherit this from the surrounding (lexical) scope in which they were defined.
Regular functions have their own this, which is dynamically bound based on how the function is called.
In your example, this inside the arrow function refers to the global object because it's inherited from the global scope.
This is why you don't get the username value with this.username in your arrow function.


*/
// const addTwo = (num1,num2)=>
// {
// return num1+num2
// }


// implicit return way

// const addTwo = (num1,num2)=> num1+num2
const addTwo = (num1,num2)=> (num1+num2)

// lets say you wanna return an object , for that  you should wrap in parenthesis

const returnObject = (num1,num2)=> ({username:"Suyash"})


 
// console.log(returnObject())
// console.log(addTwo(3,4))

const letsCheck = ()=>{
    console.log(this);
    
}
// letsCheck()


