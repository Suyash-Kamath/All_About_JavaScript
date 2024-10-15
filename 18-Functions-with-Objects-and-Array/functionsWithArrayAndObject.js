// function calculateCartPrice(...num1){  //lets tweak this
function calculateCartPrice( value1,value2,...num1){
return num1;


}

console.log(calculateCartPrice(2,3,3,4,5))

// rest/spread operator

/*

The rest and spread operators in JavaScript (both represented by ...) allow 
for flexible handling of arrays and function arguments.

Rest Operator (...):
The rest operator is used in function parameters to collect all remaining arguments into an array.
 In your example, ...num1 is gathering all the arguments passed to calculateCartPrice into the array num1.

Spread Operator (...):
The spread operator is used to spread out elements of an array or object. It can be used, for example, 
to pass elements of an array as individual arguments to a function.

*/


const user = {
    username:"Suyash",
    price:199
}

function handleObject(anyObject){


    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)

handleObject({
    username:"Sam",
    price:3887
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){

    return getArray[1];

}

console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([87,9903,82]));
