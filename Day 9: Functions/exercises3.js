// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '

/*
const userIdGeneratedByUser = (numOfChars, numOfIds) =>
{
    let array = [];
    let characters = `0123456789abcdefghijklmnopqrstuvwxyz`;
    for(let i = 0; i < numOfIds; i++)
    {
        let id = ``;
        for(let i = 0; i < numOfChars; i++)
        {
            let randomIndex = Math.floor(Math.random() * ((characters.length - 1) - 0 + 1) + 0);
            id += characters[randomIndex];
        }
        array.push(id);
    }

    return array;
}
console.log(userIdGeneratedByUser(10, 10));
*/

// Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)

/*
const rgbColorGenerator = () =>
{
    let a = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let c = Math.floor(Math.random() * (255 - 0 + 1) + 0);

    console.log(`${a},${b},${c}`);
}
rgbColorGenerator();
*/

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

/*
const arrayOfHexaColors = () =>
{
    let numOfColors = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    let array = [];
    let characters = `0123456789abcdef`;

    for(let i = 0; i < numOfColors; i++)
    {
        let hex = `#`;
        for(let i = 0; i < 6; i++)
        {
            let randomIndex = Math.floor(Math.random() * ((characters.length - 1) - 0 + 1) + 0);
            hex += characters[randomIndex];
        }

        array.push(hex);
    }

    return array;
}
console.log(arrayOfHexaColors());
*/

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.

/*
const arrayOfRgbColors = () =>
{
    let numOfColors = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    let array = [];

    for(let i = 0; i < numOfColors; i++)
    {
        let a = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let c = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let rgb = `${a},${b},${c}`;

        array.push(rgb);
    }

    return array;
}
console.log(arrayOfRgbColors());
*/

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

/*
const shuffleArray = (array) =>
{
    for(let i = 0; i < array.length; i++)
    {
        let random = Math.floor(Math.random() * ((array.length - 1) - 0 + 1) + 0);
        let temp = array[i];
        array[i] = array[random];
        array[random] = temp;
    }

    console.log(array);
}
shuffleArray([0, 1, 2, 3, 4, 5, 6]);
*/

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

/*
const factorial = (num) =>
{
    if(num <= 1)
        return 1;
    else
        return num * factorial(num - 1);
}
console.log(factorial(4));
*/

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

/*
const average = (array) =>
{
    let sum = 0;
    let notNumbs = 0;
    for(const element of array)
    {
        if(typeof element === `number`)
        {
            sum += element;
        }
        else
        {
            console.log(`${element} is not a number`);
            notNumbs++;
        }
    }
    
    let avg = 0;
    if(array.length - notNumbs > 0)
    {
        avg = sum / (array.length - notNumbs);
    }

    return avg;
}
console.log(average([1, 2, 3, 4, 5, `Hi`]));
*/

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
// 'Not Found'

/*
const modifyArray = (array) =>
{
    if(array[4] === undefined)
    {
        return 'Not Found';
    }
    else
    {
        array[4] = array[4].toUpperCase();
    }

    return array;
}
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));
*/

// Write a function called isPrime, which checks if a number is prime number.

/*
const isPrime = (num) =>
{
    for(let i = 2, k = Math.sqrt(num); i <= k; i++)
    {
        if(num % i === 0)
        {
            return false;
        }
    }
    
    return num > 1;
}
console.log(isPrime(12));
*/

// Write a functions which checks if all items are unique in the array.

/*
const check = (array) =>
{
    let tempArray = [];
    for(const element of array)
    {
        if(tempArray.includes(element) === true)
        {
            return false;
        }
        else
        {
            tempArray.push(element);
        }
    }

    return true;
}
console.log(check([0, 1, 2, 3, 4, 0]));
*/

// Write a function which checks if all the items of the array are the same data type.

/*
const check = (array) =>
{
    let firstType = typeof array[0];
    for(const element of array)
    {
        if(typeof element !== firstType)
        {
            return false;
        }
    }

    return true;
}
console.log(check([0, 1, 2, 3, `Hi`, 0]));
*/

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

/*
const sevenRandomNumbers = () =>
{
    let array = [];
    for(let i = 0; i < 7; i++)
    {
        let num = Math.floor(Math.random() * (9 - 0 + 1) + 0);

        if(array.includes(num) === true)
        {
            i--;
        }
        else
        {
            array.push(num);
        }
    }
    return array;
}
console.log(sevenRandomNumbers());
*/

// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

/*
let countries = [`A`, `B`, `C`];
const reverseCountries = (array) =>
{
    let copy = [];
    for(let i = array.length - 1; i >= 0; i--)
    {
        copy.push(array[i]);
    }

    return copy;
}
console.log(reverseCountries(countries));
*/