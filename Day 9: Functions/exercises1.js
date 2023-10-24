// Declare a function fullName and it print out your full name.

/*
const fullName = () =>
{
    console.log(`Noa Allen`);
}
fullName();
*/

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

/*
const fullName = (firstName, lastName) =>
{
    let name = firstName + ` ` + lastName;
    return name;
}
console.log(fullName(`Noa`, `Allen`));
*/

// Declare a function addNumbers and it takes two two parameters and it returns sum.

/*
const addNumbers = (num1, num2) =>
{
    let sum = num1 + num2;
    return sum;
}
console.log(addNumbers(1, 1));
*/

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

/*
const areaOfRectangle = (length, width) =>
{
    let area = length * width;
    return area;
}
console.log(areaOfRectangle(2, 2));
*/

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

/*
const perimeterOfRectangle = (length, width) =>
{
    let perimeter = 2 * (length + width);
    return perimeter;
}
console.log(perimeterOfRectangle(1, 1));
*/

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

/*
const volumeOfRectPrism = (length, width, height) =>
{
    let volume = length * width * height;
    return volume;
}
console.log(volumeOfRectPrism(1, 2, 3));
*/

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

/*
const areaOfCircle = (r) =>
{
    let area = Math.PI * (r**2);
    return area;
}
console.log(areaOfCircle(2));
*/

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

/*
const circumOfCircle = (r) =>
{
    let circumference = 2 * Math.PI * r;
    return circumference;
}
console.log(circumOfCircle(2));
*/

// Density of a substance is calculated as follows: density = mass/volume. Write a function which calculates density.

/*
const density = (mass, volume) =>
{
    let density = mass / volume;
    return density;
}
console.log(density(4, 2));
*/

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

/*
const calcSpeed = (distance, time) =>
{
    let speed = distance / time;
    return speed;
}
console.log(calcSpeed(4, 2));
*/

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

/*
const weight = (mass) =>
{
    let gravity = 9.81;
    let weight = mass * gravity;
    return weight;
}
console.log(weight(2));
*/

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

/*
const convertCelsiusToFahrenheit = (c) =>
{
    let f = (c * (9/5)) + 32;
    return f;
}
console.log(convertCelsiusToFahrenheit(1));
*/

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older. Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

/*
const calcBMI = (weight, height) =>
{
    let bmi = weight / (height**2);
    console.log(bmi);

    let answer = ``;

    if(bmi >= 30)
    {
        answer = `Obese`;
    }
    else if(bmi >= 25)
    {
        answer = `Overweight`;
    }
    else if(bmi >= 18.5)
    {
        answer = `Normal`;
    }
    else
    {
        answer = `Underweight`;
    }

    return answer;
}
console.log(calcBMI(40, 1.85));
*/

// Write a function called checkSeason, it takes a month parameter and returns the season: Autumn, Winter, Spring or Summer.

/*
const checkSeason = (month) =>
{
    let answer = ``;

    if(month === `september` || month === `october` || month === `november`)
    {
        answer = `The season is Autumn`;
    }
    else if(month === `december` || month === `january` || month === `february`)
    {
        answer = `The season is Winter`;
    }
    else if(month === `march` || month === `april` || month === `may`)
    {
        answer = `The season is Spring`;
    }
    else if(month === `june` || month === `july` || month === `august`)
    {
        answer = `The season is Summer`;
    }
    return answer;
}
console.log(checkSeason(`december`));
*/

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

/*
const findMax = (...args) =>
{
    let max = 0;
    for(const number of args)
    {
        if(number > max)
            max = number;
    }
    return max;
}
console.log(findMax(0, -10, -2));
*/