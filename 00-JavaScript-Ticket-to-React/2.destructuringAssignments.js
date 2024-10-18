const arr = [1,2,3,4,5]

console.log(arr[1]);


const [a,b,c,d,e,f] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);



// object destructuring

const person= {
    name:"Suyash",
    age:21,
    gender:"Male"
}

const {name,gender,age} = person

console.log(gender); // gives undefined if you write gend

// in arrays while destructuring , it refers position , by interchanging the position , value changes
// In objects , keyword should be same as the one written in the object irrespective of its position
