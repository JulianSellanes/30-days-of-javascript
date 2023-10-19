// Declare an empty array;
const empty = [];

// Declare an array with more than 5 number of elements
const arr = [1, 2, 3, 4, 5, 6, 7];

// Find the length of your array
//console.log(arr.length);

// Get the first item, the middle item and the last item of the array
//console.log(arr[0]);
//console.log(arr[parseInt(arr.length/2)]);
//console.log(arr[arr.length - 1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 4.5, false, `Hi`, null, undefined, [1, 2, 3]];
//console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`];

// Print the array using console.log()
//console.log(itCompanies);

// Print the number of companies in the array
//console.log(itCompanies.length);

// Print the first company, middle and last company
//console.log(itCompanies[0]);
//console.log(itCompanies[parseInt(itCompanies.length/2)]);
//console.log(itCompanies[itCompanies.length - 1]);

// Print out each company

/*
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
*/

// Change each company name to uppercase one by one and print them out

/*
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
*/

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
//console.log(`${itCompanies.toString()} are big IT companies`);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

/*
let company = `Facebook`;
if(itCompanies.includes(company) === true)
{
    console.log(company);
}
else
{
    console.log(`Company is not found`);
}
*/

// Sort the array using sort() method
//console.log(itCompanies.sort());

// Reverse the array using reverse() method
//console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
//console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the arra
//console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

// Slice out the middle IT company or companies from the array
//let mid = parseInt(itCompanies.length/2);
//console.log(itCompanies.slice(mid, mid + 1));

// Remove the first IT company from the array
//itCompanies.shift();
//console.log(itCompanies);

// Remove the middle IT company or companies from the array
//let mid = parseInt(itCompanies.length/2);
//itCompanies.splice(mid, 1);
//console.log(itCompanies);

// Remove the last IT company from the array
//itCompanies.pop();
//console.log(itCompanies);

// Remove all IT companies
//itCompanies.splice(0, itCompanies.length);
//console.log(itCompanies);