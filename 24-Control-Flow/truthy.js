const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}
// returns an array Object.keys(emptyObj)
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): All the story are based on  null ,undefined


// val1 = 5 ?? 10 : ans is 5
// val1 = null ?? 10
// val1 = undefined ?? 15


/*

What is the sense of using this operator if the value is to be 5 in this case

// val1 = 5 ?? 10 : ans is 5

When you call databases , you dont get the response directly , 2 values are received , chances of receiving null
or undefined as response

In this case, whole code structure is disturbed , 

The Nullish Coalescing Operator (??) is perfect for setting a default value if the original 
value is null or undefined. 



The Nullish Coalescing Operator (??) is designed to handle null or undefined values specifically.
It’s ideal when you simply want to provide a default value if the variable is null or undefined.

*/


let val1= null ?? 10 ?? 20

let val2= 5 ?? 10 

let val3=  null ?? 10

let val4 = undefined ?? 15

let val5 = null ?? undefined

let val6 = undefined?? null

let val7 = 9??null

let val8 = 100??undefined

let val9 = null ?? undefined ?? 100

let val10 = undefined ?? null ?? 2380

let val11 = null ?? undefined ??null

let val12 = undefined ?? null ?? undefined

console.table([val1,val2,val3,val4,val5,val6,val7,val8,val9,val10,val11,val12])

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


/*

The Ternary Operator (? :) evaluates a condition and chooses between two options based on whether the condition is true or false.
It’s more flexible, as it allows for any kind of condition.

*/
