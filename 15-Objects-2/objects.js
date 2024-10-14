// const tinderUser = new Object()

const tinderUser={}

tinderUser.id = "123abc"

tinderUser.name="Suyash"

tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser = {
    email:"suyash@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Amit",
            lastName:"Khurana"
        }
    }
}

// console.log(regularUser.fullname?.userFullName.firstName);

const obj1 = {1:"a",2:"b"}

const obj2 = {3:"a",4:"b"}



// const obj3 = {obj1,obj2} // Wont combine , but will form Object inside Object   

// console.log(obj3);

// const obj3=Object.assign({},obj1,obj2)


// lets say we have more than two objects

const obj4 = {5:"a",6:"b"}
// const obj3=Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2} // you all be using this spread operator
// console.log(obj3);

// How value comes from DataBase , arrays of objects

const users = [
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    }
]

const userEmail=users[1].email
console.log(userEmail);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); 
// output value's datatype is an array , so you can loop it , it is used when working with database

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser)); // converts every key value pairs in an array

// Sometimes , when looping on objects for finding a value , if it not exists then it crashes , to fix that

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //returns boolean property



//Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

