// Calculate the total annual income of the person from the following text.

/*
const str = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`;
let pattern = /\d+/g;
const result = str.match(pattern);

let sum = 0;
for (const num of result)
{
    sum += parseFloat(num);
}

console.log(sum);
*/

// Extract these numbers and find the distance between the two furthest particles.

/*
const str = `The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.`;
let pattern = /\-?\d+/g;
const result = str.match(pattern);

const copy = result.map(item => parseFloat(item));
console.log(`points = ${copy}`);

copy.sort((a, b) => a - b);
console.log(`sortedPoints = ${copy}`);

let distance = Math.abs(copy[0] - copy[copy.length - 1]);
console.log(`distance = ${distance}`);
*/

// Write a pattern which identify if a string is a valid JavaScript variable

/*
const var1 = `myVar`;
const var2 = `$myVar`;
const var3 = `_myVar`;
const var4 = `my Var`;
const var5 = `my-Var`;
const var6 = `123myVar`;

const isValidVariable = (str) =>
{
    let pattern = /^[0-9]|\s|\-/g;
    return !Boolean(str.match(pattern));
}

console.log(isValidVariable(var1));
console.log(isValidVariable(var2));
console.log(isValidVariable(var3));
console.log(isValidVariable(var4));
console.log(isValidVariable(var5));
console.log(isValidVariable(var6));
*/