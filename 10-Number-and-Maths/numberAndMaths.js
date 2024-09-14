const score = 400
// console.log(score);

// const balance = new Number(100);

// console.log(balance);


// console.log(balance.toString().length);

const fixed = new Number(100);
// console.log(fixed.toFixed(2)); // it helps reducing the precision value , 

// const otherNumber = 23.8966
const otherNumber = 123.8966 // 123 to  focus and .8 to be  round off
// const otherNumber = 1123.8966 // take care here
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// ************************************* Maths *************************************


console.log(Math.abs(-4));
console.log(Math.round(4.5));

console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));

// Mostly you use Round


console.log(Math.min(4,2,3,4,5,7));
console.log(Math.max(4,2,3,4,5,7));

console.log(Math.random()); // The value lies in the range of 0-1

console.log(Math.random()*10); // 0 to 10 range

// what if the value is 0 as 0.04 could also be there

console.log((Math.random()*10)+1); // Value will be minimum 1 

console.log(Math.floor(Math.random()*10)+1); // Value will be minimum 1 

// trick  to define the min and max

const min = 10;
const max = 20
// I want value from 10 to 20

console.log(Math.floor(Math.random()* (max-min +1))+min) // 1 is added to avoid the 0 case


