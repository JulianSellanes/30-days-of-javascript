const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Iceland',
    'Japan',
    'Kenya'
]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Develop a small script which generate any number of characters random id:
// fe3jo1gl124g
// xkqci4utda1lmbelpkm03rba

/*
let randomIndex = 0;
let id = ``;
let max = Math.floor(Math.random() * (30 - 5 + 1) + 5);
let characters = `0123456789abcdefghijklmnopqrstuvwxyz`;
for(let i = 0; i < max; i++)
{
    randomIndex = Math.floor(Math.random() * ((characters.length - 1) - 0 + 1) + 0);
    id += characters[randomIndex];
}
console.log(id);
*/

// Write a script which generates a random hexadecimal number.
// '#ee33df'

/*
let randomIndex = 0;
let hex = `#`;
let characters = `0123456789abcdef`;
for(let i = 0; i < 6; i++)
{
    randomIndex = Math.floor(Math.random() * ((characters.length - 1) - 0 + 1) + 0);
    hex += characters[randomIndex];
}
console.log(hex);
*/

// Write a script which generates a random rgb color number.
// rgb(240,180,80)

/*
let random = 0;
let rgb = [];
for(let i = 0; i <= 2; i++)
{
    random = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    rgb.push(random);
}
console.log(rgb);
*/

// Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

/*
let array = [];
for(const country of countries)
{
    array.push(country.toUpperCase());
}
console.log(array);
*/

// Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

/*
let array = [];
for(const country of countries)
{
    array.push(country.length);
}
console.log(array);
*/

// Use the countries array to create the following array of arrays:
// [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]

/*
let array = [];
for(const country of countries)
{
    array.push(`${country}, ${country.slice(0, 3).toUpperCase()}, ${country.length}`);
}
console.log(array);
*/

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']

/*
let arrayWithLand = [];
let arrayWithoutLand = [];
for(const country of countries)
{
    if(country.includes(`land`) === true)
    {
        arrayWithLand.push(country);
    }
    else
    {
      arrayWithoutLand.push(country);
    }
}
console.log(`Countries with \'land\': ${arrayWithLand}`);
console.log(`All these countries are without \'land\': ${arrayWithoutLand}`);
*/

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']

/*
let arrayWithIA = [];
let arrayWithoutIA = [];
for(const country of countries)
{
    if(country.endsWith(`ia`) === true)
    {
        arrayWithIA.push(country);
    }
    else
    {
        arrayWithoutIA.push(country);
    }
}
console.log(`Countries that end with \'ia\': ${arrayWithIA}`);
console.log(`These are countries ends without \'ia\': ${arrayWithoutIA}`);
*/

// Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia

/*
let bigger = ``;
for(const country of countries)
{
    if(country.length > bigger.length)
    {
      bigger = country;
    }
}
console.log(bigger);
*/

// Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']

/*
let array = [];
for(const country of countries)
{
    if(country.length === 5)
    {
        array.push(country);
    }
}
console.log(array);
*/

// Find the longest word in the webTechs array

/*
let longest = ``;
for(const webTech of webTechs)
{
    if(webTech.length > longest.length)
    {
        longest = webTech;
    }
}
console.log(longest);
*/

// Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

/*
let array = [];
for(const webTech of webTechs)
{
    let newArray = [webTech, webTech.length];
    array.push(newArray);
}
console.log(array);
*/

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

/*
let array = [];
for(const mern of mernStack)
{
    array.push(mern[0]);
}
console.log(array.join(``));
*/

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

/*
for(const webTech of webTechs)
{
    console.log(webTech);
}
*/

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

/*
let fruits = ['banana', 'orange', 'mango', 'lemon'];
let array = [];
for(let i = fruits.length - 1; i >= 0; i--)
{
    array.push(fruits[i]);
}
console.log(array);
*/

// Print all the elements of array as shown below.
// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
// ]
// HTML
// CSS
// JS
// REACT
// NODE
// EXPRESS
// MONGODB

/*
const fullStack = [['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB']];

for(const stack of fullStack)
{
    for(let i = 0; i < stack.length; i++)
    {
        console.log(stack[i]);
    }
}
*/