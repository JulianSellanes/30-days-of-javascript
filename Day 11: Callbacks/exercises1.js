const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Ei']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Use forEach to console.log each country in the countries array.
// Use forEach to console.log each name in the names array.
// Use forEach to console.log each number in the numbers array.

/*
countries.forEach((item) => {
    console.log(item);
});

names.forEach((item) => {
    console.log(item);
});

numbers.forEach((item) => {
    console.log(item);
});
*/

// Use map to create a new array by changing each country to uppercase in the countries array.

/*
const a = countries.map((item) => {
    return item.toUpperCase(); 
});
console.log(a);
*/

// Use map to create an array of countries length from countries array.

/*
const a = countries.map((item) => {
    return item.length; 
});
console.log(a);
*/

// Use map to create a new array by changing each number to square in the numbers array

/*
const a = numbers.map((item) => {
    return item**2; 
});
console.log(a);
*/

// Use map to change to each name to uppercase in the names array

/*
const a = names.map((item) => {
    return item.toUpperCase(); 
});
console.log(a);
*/

// Use map to map the products array to its corresponding prices.

/*
const a = products.map((item) => {
    return item.price; 
});
console.log(a);
*/

// Use filter to filter out countries containing land.

/*
const a = countries.filter((item) => {
    return item.toLowerCase().includes(`land`); 
});
console.log(a);
*/

// Use filter to filter out countries having six character.

/*
const a = countries.filter((item) => {
    return item.length === 6; 
});
console.log(a);
*/

// Use filter to filter out countries containing six letters and more in the country array.

/*
const a = countries.filter((item) => {
    return item.length > 5; 
});
console.log(a);
*/

// Use filter to filter out country start with 'E';

/*
const a = countries.filter((item) => {
    return item.startsWith(`E`); 
});
console.log(a);
*/

// Use filter to filter out only prices with values.

/*
const a = products.filter((item) => {
    return typeof item.price === `number`; 
});
console.log(a);
*/

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

/*
const b = [1, 2, `a`, `b`]
const getStringLists = (arr) =>
{
    return arr.filter((item) => {
        return typeof item === `string`; 
    });
}
const a = getStringLists(b);
console.log(a);
*/

// Use reduce to sum all the numbers in the numbers array.

/*
let sum = numbers.reduce((acc, cur) => {
    return acc + cur;
}, 0);
console.log(sum);
*/

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

/*
let a = countries.reduce((acc, cur, index) => {
    let space = `, `;
    if(index === countries.length - 1)
    {
        space = ` and `;
    }

    return acc + space + cur;
});
console.log(a + ` are north European countries`);
*/

// Use some to check if some names' length greater than seven in names array

/*
let bool = names.some((item) => {
    return item.length > 7;
});
console.log(bool);
*/

// Use every to check if all the countries contain the word land

/*
let bool = countries.every((item) => {
    return item.toLowerCase().includes(`land`);
});
console.log(bool);
*/

// Use find to find the first country containing only six letters in the countries array

/*
let a = countries.find((item) => {
    return item.length === 6;
});
console.log(a);
*/

// Use findIndex to find the position of the first country containing only six letters in the countries array

/*
let a = countries.findIndex((item) => {
    return item.length === 6;
});
console.log(a);
*/

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

/*
let a = countries.findIndex((item) => {
    return item === `Norway`;
});
console.log(a);
*/

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

/*
let a = countries.findIndex((item) => {
    return item === `Russia`;
});
console.log(a);
*/