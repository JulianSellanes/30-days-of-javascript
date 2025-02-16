// Iterate 0 to 10 using for loop, do the same using while and do while loop

/*
for(let i = 0; i <= 10; i++)
{
    console.log(i);
}

let i = 0;
while(i <= 10)
{
    console.log(i);
    i++;
}

let k = 0;
do
{
    console.log(k);
    k++;
} while (k <= 10)
*/

// Iterate 10 to 0 using for loop, do the same using while and do while loop

/*
for(let i = 10; i >= 0; i--)
{
    console.log(i);
}

let i = 10;
while(i >= 0)
{
    console.log(i);
    i--;
}

let k = 10;
do
{
    console.log(k);
    k--;
} while (k >= 0)
*/

// Iterate 0 to n using for loop

/*
let n = 4;
for(let i = 0; i <= n; i++)
{
    console.log(i);
}
*/

// Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######

/*
for(let i = 1; i <= 7; i++)
{
    console.log(`#`.repeat(i));
}
*/

// Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

/*
for(let i = 0; i <= 10; i++)
{
    console.log(`${i} x ${i} = ${i * i}`);
}
*/

// Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

/*
console.log(`i\ti^2\ti^3`);
for(let i = 0; i <= 10; i++)
{
    console.log(`${i}\t${i**2}\t${i**3}`);
}
*/

//  Use for loop to iterate from 0 to 100 and print only even numbers

/*
for(let i = 0; i <= 100; i++)
{
    if(i % 2 === 0)
    {
        console.log(i);
    }
}
*/

// Use for loop to iterate from 0 to 100 and print only odd numbers

/*
for(let i = 0; i <= 100; i++)
{
    if(i % 2 !== 0)
    {
        console.log(i);
    }
}
*/

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.

/*
let sum = 0;
for(let i = 0; i <= 100; i++)
{
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);
*/

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

/*
let sumEven = 0;
let sumOdd = 0;
for(let i = 0; i <= 100; i++)
{
    if(i % 2 === 0)
    {
        sumEven += i;
    }
    else
    {
        sumOdd += i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}`);
*/

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// [2550, 2500]

/*
let sumEven = 0;
let sumOdd = 0;
for(let i = 0; i <= 100; i++)
{
    if(i % 2 === 0)
    {
        sumEven += i;
    }
    else
    {
        sumOdd += i;
    }
}
let array = [sumEven, sumOdd];
console.log(array);
*/

// Develop a small script which generate array of 5 random numbers

/*
let random = 0;
let array = [];
for(let i = 0; i < 5; i++)
{
    random = Math.floor(Math.random() * (100 - 0 + 1) + 0);
    array.push(random);
}
console.log(array);
*/

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

/*
let random = 0;
let array = [];
let numbersUsed = [];
for(let i = 0; i < 5; i++)
{
    random = Math.floor(Math.random() * (100 - 0 + 1) + 0);
    if(numbersUsed.includes(random) === false)
    {
        array.push(random);
        numbersUsed.push(random);
    }
}
console.log(array);
*/

// Develop a small script which generate a six characters random id:
// 5j2khz

/*
let randomIndex = 0;
let id = ``;
let characters = `0123456789abcdefghijklmnopqrstuvwxyz`;
for(let i = 0; i < 6; i++)
{
    randomIndex = Math.floor(Math.random() * ((characters.length - 1) - 0 + 1) + 0);
    id += characters[randomIndex];
}
console.log(id);
*/