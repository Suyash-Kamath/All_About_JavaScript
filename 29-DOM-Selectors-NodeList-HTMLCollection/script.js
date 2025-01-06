// Explanation for a 5-year-old:
// A NodeList is like a bag of toys that has all the toys you ask for, but you can only play with them one at a time.
// An HTMLCollection is like a bag of blocks that only gives you the blocks it thinks are special.
// You can turn the blocks into toys (convert to an array) to play with them in cool ways.

// Explanation in technical jargon:
// NodeList is a collection of nodes (elements, text, etc.) that supports iteration and the forEach method.
// HTMLCollection is a collection of only element nodes and does not have iteration methods like forEach.
// Both are "array-like" but not actual arrays, so methods like map are not directly available.


// https://www.freecodecamp.org/news/dom-manipulation-htmlcollection-vs-nodelist/



// ---------------- DOM Manipulation ----------------

// Selecting elements by ID
const title = document.getElementById('title');

// Getting properties
console.log(title.id); // Outputs: title
console.log(title.className); // Outputs: heading
console.log(title.getAttribute('id')); // Outputs: title
console.log(title.getAttribute('class')); // Outputs: heading

// Setting properties

title.setAttribute('class', 'test');
title.setAttribute('class', 'test heading');

// Styling the element
title.style.backgroundColor = 'green';
title.style.padding = '15px';
title.style.borderRadius = '15px';

// Adding content
title.textContent = 'Learning DOM is fun!';
console.log(title.innerText); // Outputs visible text only
console.log(title.textContent); // Outputs all text, even hidden ones
console.log(title.innerHTML); // Outputs the complete HTML inside the element

// Difference between innerText and textContent:
// innerText gives only visible content.
// textContent gives all text, even hidden ones.
// innerHTML gives the complete HTML content.

// ---------------- Working with Classes ----------------

const elementsByClass = document.getElementsByClassName('heading'); // HTMLCollection
console.log(elementsByClass);

const firstHeading = document.querySelector('h1'); // First matching element
const selectById = document.querySelector('#title'); // Select by ID
const selectByClass = document.querySelector('.heading'); // Select by class
const selectByInputType = document.querySelector('input[type="password"]'); // Input element with type password

// Using CSS selectors
document.querySelector('p:first-child'); // First paragraph in the document

// ---------------- Querying Lists ----------------

const myUL = document.querySelector('ul');
const firstLI = myUL.querySelector('li');

firstLI.style.backgroundColor = 'green';
firstLI.style.padding = '10px';
firstLI.innerText = 'five';

const allLIs = document.querySelectorAll('li'); // NodeList
console.log(allLIs);

// NodeList supports forEach
allLIs.forEach(li => {
  li.style.backgroundColor = 'green';
});

// HTMLCollection example
const classList = document.getElementsByClassName('list-item'); // HTMLCollection
console.log(classList);

// HTMLCollection does not support forEach directly. Convert to array:
const classListArray = Array.from(classList);
classListArray.forEach(li => {
  li.style.color = 'orange';
});











// const getById = document.getElementById('title')

// const getById = document.getElementById('title').id

// const getById = document.getElementById('title').className

// const getById = document.getElementById('title').getAttribute('id')

// const getById = document.getElementById('title').getAttribute('class')

// const setById = document.getElementById('title').setAttribute('class','test')

// const setById = document.getElementById('title').setAttribute('class','test heading ')

// const title = document.getElementById('title')

// title.style.backgroundColor = 'green'

// title.style.padding = '15px'

// title.style.borderRadius = "15px"


/******* Adding Content  *******/

// title.textContent

// title.innerHTML

// title.innerText

// diff between innerText and textContent is innerText me visible content is shown whereas in textContent , invisible text are also shown

// innerHTML poora html de raha hai , agar nested html tags likha to bhi degaa


// const getByClass = document.getElementsByClassName('heading')

// document.querySelector('h1') // first select karke deta hai

// document.querySelector('#title') select id

// select class // document.querySelector('.heading')

// document.querySelector('input[type="password"])

//document.querySelector('p:first-child') supports all css selector


// document.querySelector('ul');

// const myUL = document.querySelector('ul')
// myUL.querySelector('li')
// const turnGreen =myUL.querySelector('li')


// turnGreen.style.backgroundColor='green'


// turnGreen.style.padding='10px'

// turnGreen.innerText = 'five'

// document.querySelectorAll('li') =>Nodelist 

// const tempLIList = document.querySelectorAll('li')

// NodeList and HTMLCollections are not pure array , 
// arrays ke andhar map vagera milta hai bydefault in prototype

// so this will give me error tempLiList.style.color = 'green'

// nodelist array se milta julta hai

// tempLiList[0].style.color = 'green'

// / we have foreach 

// tempLiList.forEach(li => {
//     li.style.backgroundColor='green'
// });

// whenever dealing with NodeList , use foreach loop , as it is not array where you can use map

// const tempClassList=document.getElementsByClassName('list-item') => this gives HTMLCollection as return type

// HTMLCollection me konsa bhi looping nahi hoga , see prototype

// convert it into array

// Array.from(tempClassList) // tempClassList is converted into array

// const myConvertedArray = Array.from(tempClassList)

// myConvertedArray.forEach(li => {
//     li.style.color = 'orange'
// });

