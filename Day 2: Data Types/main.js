/*

Primitive: Non-modifiable
-Numbers
-Strings
-Booleans
-Null
-Undefined
-Symbol

Non-primitive: Modifiable
-Objects
-Arrays

*/



let string = `Hello`;
string[0] = `Y`;
//console.log(string);



let numOne = 3;
let numTwo = 3;

//console.log(numOne == numTwo); //true

let js = `javascript`;
let py = `python`;

//console.log(js == py); //false

let on = true;
let off = false;

//console.log(on == off); //false



let nums = [1, 2, 3];
nums[0] = 10;

//console.log(nums);



//Non-primitive data types cannot be compared by value, they are compared by reference

//No / false:

/*
let nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums == numbers);

let userOne = {
    name: `Noa`
}

let userTwo = {
    name: `Noa`
}

console.log(userOne == userTwo);
*/



//Yes / true:

/*
let nums = [1, 2, 3];
let numbers = nums;

console.log(nums == numbers);

let userOne = {
    name: `Noa`
}

let userTwo = userOne;

console.log(userOne == userTwo);
*/