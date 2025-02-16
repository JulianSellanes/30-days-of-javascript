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

let a = [1, 2, 3];
let b = [1, 2, 3];

//console.log(a == b);

let userA = {
    name: `Noa`
}

let userB = {
    name: `Noa`
}

//console.log(userA == userB);




//Yes / true:

let c = [1, 2, 3];
let d = c;

//console.log(c == d);

let userC = {
    name: `Noa`
}

let userD = userC;

//console.log(userC == userD);

const PI = Math.PI;
//console.log(PI);


//Math.round: round values to the nearest number
/*
console.log(Math.round(PI));  //3
console.log(Math.round(1.2)); //1
console.log(Math.round(1.7)); //2
console.log(Math.round(1.5)); //2
*/


//Math.floor: round values down
/*
console.log(Math.floor(1.3));  //1
console.log(Math.floor(1.8));  //1
*/


//Math.ceil: round values up
/*
console.log(Math.ceil(1.3));  //2
console.log(Math.ceil(1.8));  //2
*/


//Math.min: returns the minimum value
//console.log(Math.min(-5, 3, 20, 4, 5, 10));  //-5


//Math.max: returns the maximum value
//console.log(Math.max(-5, 3, 20, 4, 5, 10));  //20


//Math.abs: returns absolute value
//console.log(Math.abs(-10));  //10


//Math.sqrt: returns square root
//console.log(Math.sqrt(100));  //10


//Math.pow: returns power
//console.log(Math.pow(3, 2));  //9


//Math.random: returns a random number between 0 to 0.9999
let aa = Math.random();
let bb = Math.random() * 10; //between 0 and 10
let cc = Math.random() * 100; //between 0 and 100
let dd = Math.floor(Math.random()); //0
let ee = Math.floor(Math.random() * 11); //whole number between 0 and 10
let ff = Math.floor(Math.random() * 10 + 1); //whole number between 1 and 10
      //Math.floor(Math.random() * (max - min + 1) + min)
//console.log(ff);