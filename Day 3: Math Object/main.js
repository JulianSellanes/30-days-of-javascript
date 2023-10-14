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
let a = Math.random();
let b = Math.random() * 10; //between 0 and 10
let c = Math.random() * 100; //between 0 and 100
let d = Math.floor(Math.random()); //0
let e = Math.floor(Math.random() * 10); //whole number between 0 and 10
let f = Math.floor(Math.random() * 10) + 1; //whole number between 1 and 10
//console.log(f);