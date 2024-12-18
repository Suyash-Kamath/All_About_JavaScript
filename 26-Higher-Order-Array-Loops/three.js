// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps
/*

A Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. 
The keys in a Map are unique, meaning no duplicate keys are allowed. If a duplicate key is added, it will 
overwrite the existing key-value pair with the new value instead of creating a new entry. This ensures that 
each key in a Map is associated with only one value.

*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
// destructure it , else array will be printed
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// error , myObject is not iteratable using this for of loop
