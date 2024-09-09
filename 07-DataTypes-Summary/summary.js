// Data is classified how they are stored in memory and accessed

// Primitive -> Call by Value

//  7 Categories : String, Number, Boolean , null (Ekdum Khaali not empty string) , undefined, Symbol (kisi bhi value ko unique banane keliye use hota hai )

// BigInt 


// Non-primitve => call by referenece type

// Array , Objects, Functions






/*

1. Primitive Data Types (Call by Value)
These data types are stored directly in the memory location associated with the variable. 
When you copy a primitive value, you copy the actual value.
7 Categories:
String: Represents text (e.g., "hello").
Number: Represents numbers (e.g., 42, 3.14).
Boolean: Represents logical values (true or false).
null: Represents "nothing" or "empty" (but not an empty string).
undefined: Represents a variable that has been declared but not yet assigned a value.
Symbol: Represents a unique and immutable identifier (used for creating unique values).
BigInt: Represents large integers that exceed the safe limit of the Number type.
2. Non-Primitive Data Types (Call by Reference)
These data types store references to the memory location where the data is held. 
When you copy a non-primitive value, you copy the reference, not the actual value.
Examples:
Array: A collection of values (e.g., [1, 2, 3]).
Object: A collection of key-value pairs (e.g., {name: "John", age: 30}).
Function: A block of code that can be executed (e.g., function() { return 1; }).
Let me know if you need more details!

*/


// JavaScript is Dynamically typed -> Matlab int hai ki bool hai , wo hum nahi batate 

/*

JavaScript is dynamically typed, which means that the interpreter assigns a variable's type at runtime 
based on the variable's value at the time. 
 
Here are some other things to know about dynamic typing in JavaScript: 
 
Flexibility: Dynamic typing allows variables to hold values of different types during runtime 
without requiring type annotations or declarations. 
 
Type checking: In dynamic typing, type checking occurs at runtime, which means that the compiler
will ignore issues that the runtime will detect later. 
 
Comparison to static typing: In static typing, type checking occurs at compile time. 
 


*/

const score = 100
const scoreValue = 100.3

const isLoggedIn  = false

const outsideTemp = null;

let userEmail;


const id = Symbol('123') //return type is Symbol Data Type

const anotherId= Symbol('123')

console.table([id,anotherId])
console.log(id===anotherId);


const bigNumber = 839812983129836926398163n // aage n laga dege toh BigInt ho jata hai






// Reference  (Non Primitive)

const heroes = ["Shaktiman","Naagraj","Doga"];

let myObject ={
    name:"Suyash",
    age:22,
}

const myFunction = function(){
    console.log('Hi from Function');
    
}

myFunction();


console.log(typeof bigNumber);



// Function ka return type function hi aata hai lekin we call them as Object function

//  So jitna bhi Non Primitive ka return type hai woh sabhi Object hi aata hai
// function ka Function Object


console.log(typeof myObject);
console.log(typeof myFunction);

/*

In JavaScript, non-primitive types include objects, arrays, functions, and other complex structures. 
These are all treated as objects. So, when dealing with non-primitive return types, the typeof operator 
will generally return "object" for most of them, except for functions, which will return "function".
 Here’s a summary:

Object: typeof returns "object"
Array: typeof returns "object" (Arrays are a special type of object)
Function: typeof returns "function"



In JavaScript, functions are a type of object, which is why typeof returns "object" for most non-primitive types. 
Here's a more detailed explanation:

Objects: Objects in JavaScript are collections of key-value pairs. This includes arrays, functions, and regular
 objects. They are essentially more complex data structures that can hold multiple values.

Functions: Functions are also objects in JavaScript. This means they can have properties and methods, just like
 regular objects. However, functions are special because they can be called to execute code. The typeof operator 
 returns "function" for functions to distinguish them from other objects.

Other Non-Primitive Types: Arrays and regular objects are considered non-primitive types and are categorized as
 objects. The typeof operator returns "object" for these types because they share the core characteristics of 
 objects—collections of properties.




*/



