"use strict"; // treat all JS code as new version

/*
In JavaScript, "use strict"; is a directive introduced in ECMAScript 5 (ES5) that enforces
 stricter parsing and error handling in your code. Its main purposes are:

Prevents Common Errors: It catches common coding mistakes like using undeclared variables.
 For example, in strict mode, x = 3; would throw an error because x is not declared with var, let, or const.

Enhances Security: It disables certain potentially unsafe features. For instance, it restricts the use 
of eval() and prevents accidental creation of global variables.

Optimizes Performance: By enforcing stricter rules, JavaScript engines can optimize the code better,
 leading to potential performance improvements.

Disallows Duplicates: It disallows duplicate parameter names in functions, which can prevent unexpected behaviors.

Using "use strict"; at the beginning of a script or a function helps in writing cleaner,
 safer, and more predictable JavaScript code.  
 
 

 Yes, "use strict"; helps bridge the gap between older JavaScript versions and newer, more modern standards 
 by introducing a stricter set of rules that align with contemporary best practices. Specifically, it:

Introduces Consistency: It ensures a more uniform behavior across different 
JavaScript engines, making the code less prone to errors that arise from inconsistent interpretations.

Smooth Transition to Modern Standards: It acts as a transitional feature that 
makes old JavaScript code compatible with newer standards, encouraging developers to adopt modern coding practices.

Discourages Deprecated Features: It disables some outdated features and practices, 
nudging developers toward newer, more secure, and efficient alternatives.

Overall, "use strict"; helps in making JavaScript code more robust and future-proof
 by enforcing a stricter, more standardized coding environment.


JavaScript has evolved significantly since its creation, with various versions introducing 
new features and improvements. Here's a brief overview of the versions and how "use strict"; helps
 standardize JavaScript:

Key JavaScript Versions:
Old Version (Before ECMAScript 5):

JavaScript prior to ECMAScript 5 (ES5, released in 2009) had fewer rules and allowed many
 lenient coding practices.
Common problems included silent errors, accidental global variables, and inconsistencies across 
different browsers and environments.
Newer Versions (Starting from ECMAScript 5 onwards):

ES5 (2009): Introduced "use strict"; and several new features, marking a significant 
improvement in how JavaScript was written and executed.
ES6 (2015) and Later (ES2016+): Introduced modern syntax and features like let, const, arrow functions, 
classes, modules, and more.
How "use strict"; Helps Standardize JavaScript:
Enhanced Error Checking: By using "use strict";, ES5 and later versions enforce stricter rules,
 catching common mistakes that older versions allowed. This makes the code cleaner and more robust.

Consistent Behavior: "use strict"; reduces inconsistencies between JavaScript engines by removing
quirks from the language, leading to more predictable and standardized code execution.

Deprecation of Problematic Features: It disallows certain legacy features that are considered bad 
practice or potentially harmful, encouraging the use of modern alternatives.

Example with "use strict";
Here’s an example showing how "use strict"; standardizes JavaScript code:

Old JavaScript (Pre-ES5):

javascript
Copy code
// No strict mode
function oldVersion() {
  undeclaredVariable = 5; // Works, but creates a global variable
  return undeclaredVariable;
}

console.log(oldVersion()); // Outputs: 5 (but `undeclaredVariable` is global)
Modern JavaScript with "use strict";:

javascript
Copy code
"use strict";
function newVersion() {
  undeclaredVariable = 5; // Throws an error because it's not declared
  return undeclaredVariable;
}

console.log(newVersion()); // Throws: ReferenceError: undeclaredVariable is not defined
Significance of "use strict";:
Helps transition from old to new standards: It enforces rules that align with modern 
JavaScript practices, making old code safer and more maintainable.
Encourages best practices: Developers are nudged to use modern features like let, const, and 
strict error handling.
Improves compatibility: Code written with "use strict"; behaves consistently across different 
browsers and JavaScript engines, reducing cross-platform issues.
In summary, "use strict"; is a tool introduced in ES5 to standardize JavaScript by enforcing 
stricter rules, catching errors early, and encouraging the use of modern, safer coding practices.
*/

// alert(3+3) // we are using NodeJS not browser


let name  = "Suyash"
let age  = 18

let isLoggedIn = false
// number => 2^53
// bigInt : itna use nahi hota but can be used in Facebook
// string => ""
// boolean  => true or false
// null => Stand alone value , ek prakkar ka data ka type hai ..null is representation of empty value...matlab khali hai
// Symbol => Bohot components banate and then gives uniqueness.
// undefined => value define hi nahi ki hai bhai tumne 




// Object 


let state = null; // tempareture aaya hi nahi hai 
console.log(state);
console.log(typeof isLoggedIn);

console.log(typeof null); // object aaya 
console.log(typeof undefined); // undefined aaya 


/*
Here's an explanation of why typeof null returns "object" and typeof undefined returns "undefined":

1. typeof null Returns "object"
Reason: This is actually a well-known quirk in JavaScript. The typeof operator 
returning "object" for null is a historical bug from the early days of JavaScript 
that was never corrected for backward compatibility reasons.
Technical Detail: In JavaScript, null is a special value that represents "no value" or
 "empty." However, due to the way JavaScript was first implemented, null was given an 
 internal type tag of 0, which corresponds to objects. Changing this behavior now would break
  a lot of existing code, so it remains as "object".
2. typeof undefined Returns "undefined"
Reason: This behavior is straightforward and correct. undefined is a primitive value that
 represents the absence of a value or that a variable has been declared but not assigned a value.
Technical Detail: When using typeof on undefined, JavaScript correctly identifies it as "undefined", 
which is exactly what you would expect.
Key Points:
Historical Quirk: The typeof null being "object" is a bug, but it's kept for compatibility reasons.
Consistent with Primitive Types: undefined correctly returns "undefined" because it is designed to 
represent an undefined state in JavaScript.
This behavior is part of JavaScript's quirks, and understanding it helps avoid confusion when checking
 types in your code.




 In JavaScript, the concept of a "type tag" refers to the internal classification system used by 
 the JavaScript engine to identify the types of values.

What is Type Tag 0?
Type Tag System: Internally, JavaScript uses a type tag system to categorize the different types of
 values (e.g., numbers, strings, objects, etc.). 
Each type has a corresponding internal tag value.

Type Tag 0 for null: In the early implementation of JavaScript, null was assigned a type tag of 0. 
In the type tag system, the value 0 was also used to represent objects. As a result, null was identified 
as an object due to this type tag overlap, which led to typeof null returning "object".

Historical Context: This assignment was an early mistake in the language's design. Because it became part 
of the language’s behavior, changing it later would have broken existing code, so it was left as is.

Summary:
Type Tag 0 is an internal tag used by JavaScript to classify objects, but due to a historical quirk, null
 was also given this tag, causing typeof null to return "object".
This quirk is one of the known oddities of JavaScript and is a reminder of how programming languages evolve 
and sometimes retain legacy behaviors for compatibility reasons.
*/