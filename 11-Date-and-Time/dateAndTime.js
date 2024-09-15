let myDate = new Date();

console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

console.log(typeof myDate); // It is an Object 

// let myCreatedDate  =  new Date(2023,0,23) // In JavaScript , month starts from 0

// let myCreatedDate = new Date(2023,0,23,5,3)

// let myCreatedDate = new Date("2023-01-14") // Month starts from 1 if you write in string format yy-mm-dd

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate);

// console.log(myCreatedDate.toLocaleString());



let myTimeStamp  = Date.now()

console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // convert into seconds

let newDate = new Date()

console.log(newDate);

console.log(newDate.getMonth()); // you can do getMonth() + 1 to avoid 0 

console.log(newDate.getDay()); // Monday-1 , Tuesday - 2 , Wednesday -3 , If Sunday then 0


console.log(newDate.toLocaleString('default',{
    weekday : "long" 
})); // most used , you define object in it and can define many parameters...you customize it












