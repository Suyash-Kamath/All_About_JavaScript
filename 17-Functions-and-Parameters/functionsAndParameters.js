


function sayMyName() {
    console.log('S');
    console.log('u');
    console.log('y');
    console.log('a');
    console.log('S');
    console.log('h');
    
}


// sayMyName()
/*
function addTwoNumbers(number1,number2){
    console.log(number1+number2)

}

*/
// addTwoNumbers(3,4)
// addTwoNumbers(3,'4') => returns 34
// addTwoNumbers(3,'a') => returns 3a
// addTwoNumbers(3,null) =>returns 3
// addTwoNumbers(3,undefined) => returns NaN

function addTwoNumbers(number1,number2){
    let result = number1+number2
    return result
}

const result = addTwoNumbers(3,5)
// console.log(result);

function loginUserMessage(username= "Sam"){

    // if(username===undefined){
    //     console.log('Please enter a username');
    //     return;
        
    // }
    //equivalent code

    if(!username){
        console.log('Please enter a username');
        return;

    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Suyash"))
console.log(loginUserMessage(''))
console.log(loginUserMessage());



