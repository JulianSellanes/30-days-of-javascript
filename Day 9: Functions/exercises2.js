// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

/*
const solveQuadEquation = (a, b, c) =>
{
    if(a === undefined && b === undefined && c === undefined)
    {
        return `{0}`;
    }

    let sqrt = Math.sqrt((b**2) - (4*a*c));
    let result1 = (-b + sqrt) / (2*a);
    let result2 = (-b - sqrt) / (2*a);
    
    return `{${result1}, ${result2}}`;
}
console.log(solveQuadEquation(1, -1, 0));
*/

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

/*
const array = [0, 1, 2, 3, 4];
const printArray = (array) =>
{
    for(const element of array)
    {
        console.log(element);
    }
}
printArray(array);
*/

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08

/*
const showDateTime = () =>
{
    const now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hour = now.getHours();
    let min = now.getMinutes();

    console.log(`${day}/${month}/${year} ${hour}:${min}`);
}
showDateTime();
*/

// Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

/*
const swapValues = (x, y) =>
{
    return `x = ${y}, y = ${x}`;
}
console.log(swapValues(4, 5));
*/

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

/*
const reverseArray = (array) =>
{
    let newArray = [];
    for(let i = array.length - 1; i >= 0; i--)
    {
        newArray.push(array[i]);
    }
    return newArray;
}
console.log(reverseArray(['A', 'B', 'C']));
*/

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

/*
const capitalizeArray = (array) =>
{
    let newArray = [];
    for(const element of array)
    {
        newArray.push(element.toUpperCase());
    }
    return newArray;
}
console.log(capitalizeArray(['a', 'b', 'c']));
*/

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

/*
const addItem = (item) =>
{
    let array = [];
    array.push(item);
    return array;
}
console.log(addItem(1));
*/

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

/*
const removeItem = (array, item) =>
{
    let index = array.indexOf(item);
    array.splice(index, 1);
    return array;
}
console.log(removeItem([0, 1, 2, 3, 4, 5], 2));
*/

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

/*
const sumOfNumbers = (number) =>
{
    if(number === 0)
    {
        return 0;
    }
    
    number += sumOfNumbers(number - 1);

    return number;
}
console.log(sumOfNumbers(3));
*/

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

/*
const sumOfOdds = (number) =>
{
    let sum = 0;
    if(number > 0)
    {
        for(let i = 0; i <= number; i++)
        {
            if(i % 2 !== 0)
            {
                sum += i;
            }
        }

        return sum;
    }
    else if(number < 0)
    {
        for(let i = number; i <= 0; i++)
        {
            if(i % 2 !== 0)
            {
                sum += i;
            }
        }

        return sum;
    }

    return 0;
}
console.log(sumOfOdds(0));
*/

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

/*
const sumOfEven = (number) =>
{
    let sum = 0;
    if(number > 0)
    {
        for(let i = 0; i <= number; i++)
        {
            if(i % 2 === 0)
            {
                sum += i;
            }
        }

        return sum;
    }
    else if(number < 0)
    {
        for(let i = number; i <= 0; i++)
        {
            if(i % 2 === 0)
            {
                sum += i;
            }
        }

        return sum;
    }

    return 0;
}
console.log(sumOfEven(-5));
*/

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

/*
const evensAndOdds = (number) =>
{
    let sumEvens = 0;
    let sumOdds = 0;
    for(let i = 0; i <= number; i++)
    {
        if(i % 2 === 0)
        {
            sumEvens++;
        }
        else
        {
            sumOdds++;
        }
    }

    console.log(`The number of odds are ${sumOdds}`);
    console.log(`The number of evens are ${sumEvens}`);
}
evensAndOdds(100);
*/

// Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

/*
const sum = (...args) =>
{
    let sum = 0;
    for(const element of args)
    {
        sum += element;
    }

    return sum;
}
console.log(sum(1, 2, 3, 4));
*/

// Writ a function which generates a randomUserIp.

/*
const randomUserIp = () =>
{
    let a = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let c = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let d = Math.floor(Math.random() * (255 - 0 + 1) + 0);

    let ip = `${a}.${b}.${c}.${d}`;

    return ip;
}
console.log(randomUserIp());
*/

// Write a function which generates a randomMacAddress

/*
const randomMacAddress = () =>
{
    let address = ``;
    let characters = `0123456789ABCDEF`;
    for(let i = 0; i < 6; i++)
    {
        let randomIndex1 = Math.floor(Math.random() * ((characters.length - 1) - 0 + 1) + 0);
        let randomIndex2 = Math.floor(Math.random() * ((characters.length - 1) - 0 + 1) + 0);
        address += characters[randomIndex1] + characters[randomIndex2];

        if(i < 5)
        {
            address += `-`;
        }
    }

    return address;
}
console.log(randomMacAddress());
*/

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'

/*
const randomHexaNumberGenerator = () =>
{
    let randomIndex = 0;
    let hex = `#`;
    let characters = `0123456789abcdef`;
    for(let i = 0; i < 6; i++)
    {
        randomIndex = Math.floor(Math.random() * ((characters.length - 1) - 0 + 1) + 0);
        hex += characters[randomIndex];
    }

    return hex;
}
console.log(randomHexaNumberGenerator());
*/

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE

/*
const userIdGenerator = () =>
{
    let randomIndex = 0;
    let id = ``;
    let characters = `0123456789abcdefghijklmnopqrstuvwxyz`;
    for(let i = 0; i < 7; i++)
    {
        randomIndex = Math.floor(Math.random() * ((characters.length - 1) - 0 + 1) + 0);
        id += characters[randomIndex];
    }

    return id;
}
console.log(userIdGenerator());
*/