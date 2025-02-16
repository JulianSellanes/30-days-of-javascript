// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

/*
let userAge = prompt(`Enter your age:`);

if(userAge >= 18)
{
    console.log(`You are old enough to drive`);
}
else
{
    console.log(`You are left with ${18 - userAge} years to drive`);
}
*/

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

/*
let myAge = 25;
let yourAge = parseInt(prompt(`Enter your age:`));

if(yourAge > myAge)
{
    console.log(`You are ${yourAge - myAge} years older than me`);
}
else if(yourAge < myAge)
{
    console.log(`I am ${myAge - yourAge} years older than you`);
}
else if(yourAge === myAge)
{
    console.log(`We are equal`);
}
*/

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

/*
let a = parseInt(prompt(`Enter a:`));
let b = parseInt(prompt(`Enter b:`));

if(a > b)
{
    console.log(`a is greater than b`);
}
else if(a < b)
{
    console.log(`a is less than b`);
}
else if(a === b)
{
    console.log(`a is equal to b`);
}

a > b
    ? console.log(`a is greater than b`)
    : console.log(`a is less than b`)
*/

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

/*
let number = parseFloat(prompt(`Enter a number:`));

if (number % 2 === 0)
{
    console.log(`${number} is an even number`);
}
else
{
    console.log(`${number} is an odd number`);
}
*/