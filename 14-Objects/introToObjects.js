// two ways for declaring an object, first is literal and second is with literal.

/*

singleton -> Whenever you create an object using Constructor, then Singleton Object is made..Not by using literals

In programming, a Singleton is a design pattern used to ensure that only one instance of a class is created throughout 
the lifetime of a program. No matter how many times you try to create a new object of that class, you will always get the same
 instance. This is useful in situations where having multiple instances could lead to conflicts or incorrect behavior, like managing 
 configurations, logging, or database connections.

*/
// Object.create constructor method

// object literals

const mySymbol=Symbol('key1')

const JSuser = {

    name:"Suyash",
    "full name":"Suyash Kamath",
    [mySymbol]:"mykey1",
    age:18,
    location:'Mumbai',
    email:"suyash@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}

// Note : by default , System process this way "name":"Suyash", value can be of any datatype

console.log(JSuser.email)

console.log(JSuser["email"]);

console.log(JSuser["full name"]);

console.log( JSuser[mySymbol]);

JSuser.email="suyash@openai.com"

// Object.freeze(JSuser)

JSuser.email="suyash@microsoft.com"

console.log(JSuser);

// function in javaScript is a type1 citizen , you can also treat them as variable
// let's say you wanna add greeting in JSusers

JSuser.greet = function(){
    console.log('Hello JavaScript User');
    
}

JSuser.greet2 = function(){
    console.log(`Hello JS user,${this.name}`);
    // this is used for referencing the same object
    
}

console.log(JSuser);
console.log(JSuser.greet());
console.log(JSuser.greet2());


