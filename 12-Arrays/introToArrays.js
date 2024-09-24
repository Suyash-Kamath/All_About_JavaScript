// Array

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myMixedArr= [0,1,2,3,4,5,true,"Suyash"] ; // array can be this also
const myHeroes = ["Krishna","Naagraj","Shakthimaan"];

const myArr = new Array(0,1,2,3,4,5)
console.log(myMixedArr[0]);

// In Arrays , you get Prototype access



// Array methods
/**
 myArr.push(6)
 myArr.push(7)
 myArr.pop()
 
 */

myArr.unshift(0) // shifts all the value to right...can be used in ToDo if you wanna add new tasks first..might be bad practice
myArr.shift() //It vanishes the first number

console.log(myArr.includes(9)); // returns boolean values
console.log(myArr.indexOf(9)); // iF value not exists in an array , it returns -1

const newArr = myArr.join()


console.log(myArr);
console.log(newArr); // Type is changed , join binded and converted into string with comma seperated
console.log(typeof newArr);


// slice , splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3) // returns copy of section of an array

console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,3) // The difference between slice and splice is that splice cuts off the array and original array is manipulated
console.log("C",myArr);

console.log(myn2);



