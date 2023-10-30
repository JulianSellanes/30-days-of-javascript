const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'Armenia', 'Marshall Islands', 'Pakistan', 'Argentina', 'Afghanistan', 'Australia']
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

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

/*
let totalPrice = products.filter((item) => {
    return typeof item.price !== `string`;
});
totalPrice = totalPrice.reduce((acc, cur) => {
    return acc + cur.price;
}, 0);

console.log(totalPrice);
*/

// Find the sum of price of products using only reduce reduce(callback))

/*
let totalPrice = products.reduce((acc, cur) => {
    if(typeof cur.price !== `string`)
        return acc + cur.price;
    
    return acc;
}, 0);
console.log(totalPrice);
*/

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

/*
const categorizeCountries = (arr) =>
{
    return arr.filter((item) => {
        return item.toLowerCase().includes(`land`);
    });
}
console.log(categorizeCountries(countries));
*/

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

/*
const a = (arr) =>
{
    let array = arr.map(item => item[0]);

    let counter = {};
    array.forEach(item => {
        if(counter[item] !== undefined)
            counter[item]++;
        else
            counter[item] = 1;
    });

    return counter;
}
console.log(a(countries));
*/

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

/*
const getFirstTenCountries = (arr) =>
{
    let array = arr.filter(item => arr.indexOf(item) < 10);
    return array;
}

console.log(getFirstTenCountries(countries));
*/

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

/*
const getLastTenCountries = (arr) =>
{
    let array = arr.filter(item => arr.indexOf(item) > arr.length - 11);
    return array;
}

console.log(getLastTenCountries(countries));
*/

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

/*
const a = (arr) =>
{
    let array = arr.map(item => item[0]);

    let counter = {};
    array.forEach(item => {
        if(counter[item] !== undefined)
            counter[item]++;
        else
            counter[item] = 1;
    });

    let letter;
    let letterValue = 0;
    Object.keys(counter).forEach(item => {
        if(counter[item] > letterValue)
        {
            letter = item;
            letterValue = counter[item];
        }
    });

    return `${letter}: ${letterValue}`;
}
console.log(a(countries));
*/