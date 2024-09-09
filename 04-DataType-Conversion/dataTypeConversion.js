let score ="33abc"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

let tempareture = null;
console.log(typeof tempareture);

tempareture = Number(null);
console.log(tempareture);

tempareture  = Number(undefined)


console.log(tempareture);


let booleanValue = true;
booleanValue = Number(booleanValue);
console.log(booleanValue)

let nameKyaHai = "Suyash";
nameKyaHai = Number(nameKyaHai)
console.log(nameKyaHai);


/*

"33" => 33
"33abc" => NaN (Not a Number) par type toh Number hai
true =>1 and false => 0



*/

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

let emptyString =""
let boolEmptyString = Boolean(emptyString)

console.log(boolEmptyString); // false 

let filledString = "Suyash";
let boolFilledString = Boolean(filledString)

console.log(boolFilledString); // answer is True



/**
 
1 =>true
0 => false
"" => false
"Suyash" => true

 */


let someNumber = 33;

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));