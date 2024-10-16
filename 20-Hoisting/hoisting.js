function one(){
    const username = "Suyash"

    function two(){
        const website ="https://youtube.com"
        console.log(username);
        
    }
    // console.log(website);
    two()   
}
// one()

if(true){
    const username = "suyash"
    if(username==="suyash"){
        const website = " youtube"
        console.log(username+website);
        
    }
    // console.log(website);
    
}

// console.log(username);

// ================== INTERESTING =================//

console.log(addOne(5)) // no error , Only function declaration is done
function addOne(num){
    return num+1;
}


console.log(addTwo(5)) //  error occurred because  after  function declaration  , variable is used for holding  ,  so error
const addTwo = function(num){
    return num+2
}
// This is also a function , Sometimes called as Expression , in JavaScript ,Variables are too powerful and can do anything or hold anything
// be it JSON values,functions
