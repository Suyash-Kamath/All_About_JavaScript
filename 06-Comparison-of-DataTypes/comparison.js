console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

console.log("2">1);
console.log("02">1);


console.log(null>0);
console.log(null >=0);
console.log(null ==0);



/*

The reason is that an equality check ==
and comaparisons > <>= <= work differently
Comparisons convert null to a number , treating as 0
That is why null >=0 is true and null >0 is false



console.log(null > 0);

Explanation: Here, null is compared with 0 using the > operator.
Result: false
Reason: In comparisons, JavaScript converts null to 0. However, when comparing null > 0, since 0 is not greater than 0, the result is false.
console.log(null >= 0);

Explanation: Here, null is compared with 0 using the >= operator.
Result: true
Reason: For comparisons, null is converted to 0. Since 0 is equal to 0, the condition null >= 0 evaluates to true.
console.log(null == 0);

Explanation: Here, null is compared with 0 using the == operator.
Result: false
Reason: The == operator checks for loose equality but does not perform numeric conversion between null and
 0. null is only loosely equal to undefined, not 0, 
so this evaluates to false.
Key Points:
Comparisons (>, <, >=, <=): These convert null to 0, so null >= 0 is true because 0 is equal to 0, while 
null > 0 is false because 0 is not greater than 0.

Equality (==): null is only equal to undefined under loose equality (==). It is not equal to 0 or any other 
number, hence null == 0 is false.

The core takeaway is that comparisons (>, <, >=, <=) involving null convert it to 0, but equality checks (==) 
do not perform this conversion and treat null as distinct from 0.




*/


console.log(null ==undefined);

let nullNumber = Number(null)
let undefinedNumber = Number(undefined)

console.log(nullNumber);
console.log(undefinedNumber);


/*


null == 0 is false because, in JavaScript, loose equality (==) does not convert null to 0 or any number.
 Instead, null has special behavior when compared with other values:

Key Points:
No Type Conversion with Numbers: When using ==, null is not converted to a number (like 0), a string, or 
any other type. Instead, null can only be loosely equal to undefined.

Comparison Rules for null:

null == undefined: true because null and undefined are considered equivalent in loose equality.
null == 0: false because null is not converted to 0 and is not considered equivalent to numbers, strings, or
 booleans.
Why null == 0 is false:
JavaScript does not attempt to convert null to a number when using ==. Instead, it only compares null directly
 with undefined, not with numbers.
Therefore, null == 0 is false because there's no type conversion that makes null equal to 0.
Example:
null == undefined is true because null and undefined are both treated as "empty" values in loose equality.
But null == 0 is false because null does not represent a number, and JavaScript does not coerce it to 0 in this 
comparison.

*/


console.log(null == undefined);
console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined>0);
console.log(undefined<0);
console.log(undefined<=0);


/*



console.log(null == undefined);

Result: true
Explanation: In JavaScript, null and undefined are considered loosely equal when using the == operator 
because they both represent "no value" or "empty" states.
console.log(undefined == 0);

Result: false
Explanation: undefined is not loosely equal to 0. The == operator does not convert undefined to a 
number in this comparison; instead, undefined is only equal to null in loose comparisons, not to any numbers, 
strings, or booleans.
console.log(undefined >= 0);

Result: false
Explanation: In comparisons (>=, <=, >, <), if one side is undefined, the result is always false
 because undefined cannot be meaningfully compared to a number. JavaScript doesn’t convert undefined to 0 in 
 comparisons; instead, it results in NaN (Not-a-Number), which makes any comparison with NaN return false.
console.log(undefined > 0);

Result: false
Explanation: Same reasoning as above: any comparison involving undefined results in NaN, and 
comparisons with NaN always return false.
console.log(undefined < 0);

Result: false
Explanation: Again, because undefined converts to NaN in comparisons, and comparisons with NaN 
are always false.
console.log(undefined <= 0);

Result: false
Explanation: Similarly, this comparison is false because undefined cannot be compared to numbers, 
resulting in NaN.
Key Points:
null == undefined is true due to loose equality rules where they are treated as equal.
undefined == 0 is false because undefined is not equal to 0 or any number.
Comparisons (>=, <=, >, <) with undefined always result in false because undefined is treated as NaN, 
and comparisons involving NaN always return false.
 */




/* Now let's talk about strict check , so Strict Check not only checks for equality but also it checks 
 whether they are of same datatypes
*/

console.log("2"===2);

console.log("2">"2");
console.log("2">="2");

console.log("2"=="2");
console.log("2"==="2");


console.log("2">true);
console.log("2"==true);
console.log("2"<=true);




