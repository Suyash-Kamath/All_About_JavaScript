const name = "Suyash"; // behind the scene this will invoke the object itself

const repo = 50;

// console.log(name + repo + "Value"); // bad practice..use string interpolation

console.log(`Hello my name is ${name} and my repository count is ${repo}`);

const gameName = new String('Suyashk');

console.log(gameName[0]);

/*

String is object ..key value pairs hai , 0 is key value is S and so on ...


In JavaScript, a prototype is an object that is associated with every function and object.
 It allows you to add properties and methods to existing objects and functions.

Here's a basic rundown:

Prototype of Functions: When you create a function, it has a prototype property. 
This prototype property is used when you create instances of that function using the new keyword. 
Properties and methods added to this prototype are shared across all instances.

Prototype of Objects: Every object in JavaScript has a prototype object from which it inherits
 properties and methods. You can access this prototype using Object.getPrototypeOf() or modify it
  using Object.setPrototypeOf().

  function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person('John');
john.greet(); // Outputs: Hello, my name is John


In this example, greet is a method added to Person.prototype, so all instances of Person will have
 access to this method.

*/

/*

In JavaScript, a string is considered an object in terms of its behavior and methods. However,
 it is not an array.

Here’s how strings are handled:

Object-like Behavior: Strings have methods and properties like objects. For example, you can call
 methods such as .length, .toUpperCase(), and .substring() on a string.

Primitive Data Type: Strings are actually primitive values in JavaScript. When you access properties
 or methods on a string, JavaScript temporarily wraps the string in a String object to perform the
  operation.

Not an Array: Strings are not arrays, but they can be accessed with index notation similar to arrays. 
For example, "hello"[0] returns 'h'. However, strings do not have array methods like .push() or .pop().

In summary, strings are primitive data types with object-like methods and properties.



Actually, the term "primitive" in JavaScript refers to data types that are not objects and do not 
have methods. The main primitive types in JavaScript are number, string, boolean, undefined, null,
 symbol, and bigint.

Primitive Types: They are immutable (their values cannot be changed once created) and are compared by 
value. Strings are immutable primitives; you cannot change a character within a string directly. 
Instead, any modification creates a new string.

Referential Types: These include objects, arrays, and functions. They are compared by reference, 
meaning two variables are considered equal if they refer to the same object in memory.

Strings are not referential types; they are primitive and compared by value. Even though they have
 methods and properties, this is because JavaScript temporarily wraps them in a String object for
  operations.


 Imagine you have a toy box with a bunch of toys, and each toy is a 
 little bit different but has some things in common, like they all have a color or can make a sound.

Now, think of the toy box as a "prototype." If you add a new feature to the toy box, 
like a special button that makes a noise, all the toys that come from this toy box will
 have this button and make a noise. 

In JavaScript, a prototype works in a similar way. It's like a template or a base that
 objects can use. When you create a new object, it can use the features from its prototype. 
 So, if you add a new feature to the prototype, all the objects that use that prototype will
  get that feature too.

For example, if you have a prototype for a "Dog" and you add a new trick called "sit," all the 
dog objects created from this prototype will know how to "sit" because they inherit that feature
 from the prototype. 

*/

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // Original String ko change nahi kiya hai 

console.log(gameName.charAt(6));

console.log(gameName.indexOf('k'));

const nameChange = "suyash-sk";

const newString=nameChange.substring(0,4); // 0 -> 3

console.log(newString);


const anotherString = nameChange.slice(-9,4); // if you give -ve value ..then it will start from reverse

console.log(anotherString);

console.log(nameChange.slice(1,4));

const newStringOne = "   suyash   ";
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

const url = "https://suyash.com/suyash%20kamath"
/*
Broswers doesnt understand the space so it url encodes the space to %20
*/


console.log(url);
console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))


const splitStringBasedOnDash = new String('suyash-sk-com') ;

console.log(splitStringBasedOnDash.split('-'));




