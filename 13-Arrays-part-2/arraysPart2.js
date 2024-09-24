const marvel_heroes = ["Thor","Ironman","Spiderman"]

const dc_heroes = ["Superman","Flash","Batman"]

// marvel_heroes.push(dc_heroes) // it doesnt
// console.log(marvel_heroes);

// console.log(marvel_heroes[3][1]);
console.log(marvel_heroes);
// const new_marvel_heroes=marvel_heroes.concat(dc_heroes); // returns new array where push modifies the original array
// we can also use spread operators..means you mistakenly dropped a glass which got spread into pieces

// whenever you use spread operator , it is not an array , it's elements becomes individual elements
const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const realAnotherArray = anotherArr.flat(Infinity);

console.log(realAnotherArray);

// used while Data Scrapping that comes in different format 
console.log(Array.isArray("Suyash"));

console.log(Array.from("Suyash")); // converts into Array may it be strings , objects

// console.log(Array.from({name:"Suyash"})); // gives empty array as it cant be converted directly , so specify which array , keys or values

console.log(Array.from({name:"Suyash"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // Returns a new array from a set of elements.




