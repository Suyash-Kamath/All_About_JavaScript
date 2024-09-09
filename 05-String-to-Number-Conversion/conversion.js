let someNumber =33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// ***** Operations *****


let value =3;
let negativeValue = -value;
console.log(negativeValue);

let str1= "Suyash";

let str2  = " Kamath"

console.log(str1+str2);


console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
console.log("1"+2+2);
console.log(1+2+"2");


/*

console.log("1" + 2);

Explanation: The string "1" is combined with the number 2.
Result: "12"
Reason: In JavaScript, the + operator with a string and a number will convert the number to a
 string and concatenate them.
console.log(1 + "2");

Explanation: The number 1 is combined with the string "2".
Result: "12"
Reason: Similar to the first example, the number 1 is converted to a string and concatenated with "2".
console.log("1" + "2");

Explanation: Two strings "1" and "2" are concatenated.
Result: "12"
Reason: Both operands are strings, so they are directly concatenated.
console.log("1" + 2 + 2);

Explanation: The string "1" is combined with the number 2, resulting in "12", and then combined with the next 2.
Result: "122"
Reason: The first operation "1" + 2 results in the string "12". Then, "12" + 2 concatenates the string 
"12" with "2", resulting in "122".
console.log(1 + 2 + "2");

Explanation: The numbers 1 and 2 are added first, resulting in 3, and then combined with the string "2".
Result: "32"
Reason: The addition 1 + 2 is performed first, giving 3. Then, 3 + "2" concatenates the number 3 with the
 string "2", resulting in "32".
Key Points
When a string is involved in addition with other types, JavaScript converts the other type to a string 
and concatenates.
Numerical addition happens first when only numbers are involved before a string appears.

*/


console.log(+true);

/*

In JavaScript, when you use the unary + operator on a non-number type, it tries to convert that type into a number.

For console.log(+true);:

true is a Boolean value.
When you apply the unary + operator to true, JavaScript converts it to the number 1.
So, console.log(+true); outputs 1 because true is coerced to 1 in numeric context. Similarly, 
+false would result in 0.



If you use the unary + operator with a string that represents a number, like +"33", JavaScript will convert that string into a number.

For console.log(+"33");:

The string "33" is converted to the number 33.
So, console.log(+"33"); will output 33 as a number, not a string.

This operation effectively converts the string "33" into the numeric value 33.
*/

console.log(+"");
console.log(+"33")




// let num1,num2,num3  // avoid this , bad practice

// num1=num2=num3 = 2+2 // avoid this 

let gameCounter =100;
++gameCounter;
console.log(gameCounter);

/*
link to study 

https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

*/

