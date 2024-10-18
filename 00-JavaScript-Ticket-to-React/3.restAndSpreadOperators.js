// spread operators applied on Object,Arrays and Functions

const arr = [1,2,3]
const duplicateArray = [...arr] // returns new array

// console.log(duplicateArray);



const modifyArray = [...arr,4,5,6]

// console.log(modifyArray);

const num1  = [1,2,3,4,5]
const num2 = [6,7,8,9,10]

const totalNum = [...num1,...num2];
// console.log(totalNum);



//Object

const obj1 = {
    a:1,
    b:2

}

const obj2 = {
    a:"Hello Jethalal",
    b:"Episode 175"
}

const result = {
    ...obj1,
    ...obj2
}

// console.log(result);
/*
function sum(a,b,c,d,e){
    return a+b+c+d+e
}

console.log(sum(1,2,3,4,5));

*/

// multiple element ka spread operator loge toh array generate hokey aayega..it is used to contain all the multiple arguments
function sum(...numbers){
    console.log(numbers);
    let sum =0;
    for(let i =0;i<numbers.length;i++){
        sum += numbers[i]
    }
    return sum
    
}

console.log(sum(1,2,3,4,5,6));
