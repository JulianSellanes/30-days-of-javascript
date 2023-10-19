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
    'Japan',
    'Kenya'
];
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

// First remove all the punctuations and change the string to array and count the number of words in the array

/*
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text;
words = words.replace(/\./gi, ``);
words = words.replace(/\,/gi, ``);
words = words.split(` `);
console.log(words);
console.log(words.length);
*/

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

/*
if(shoppingCart.includes(`Meat`) === false)
{
    shoppingCart.unshift(`Meat`);
}

if(shoppingCart.includes(`Sugar`) === false)
{
    shoppingCart.push(`Sugar`);
}

let honeyIndex = shoppingCart.indexOf(`Honey`);
shoppingCart.splice(honeyIndex, 1);

let teaIndex = shoppingCart.indexOf(`Tea`);
shoppingCart[teaIndex] = `Green Tea`;

console.log(shoppingCart);
*/

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

/*
let ethiopiaIndex = countries.indexOf(`Ethiopia`);
if(ethiopiaIndex === -1)
{
    countries.push(`Ethiopia`);
    console.log(countries);
}
else
{
    console.log(countries[ethiopiaIndex].toUpperCase());
}
*/

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

/*
let sassIndex = webTechs.indexOf(`Sass`);
if(sassIndex === -1)
{
    webTechs.push(`Sass`);
    console.log(webTechs);
}
else
{
    console.log(`Sass is a CSS preprocess`);
}
*/

// Concatenate the following two variables and store it in a fullStack variable.

/*
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
*/