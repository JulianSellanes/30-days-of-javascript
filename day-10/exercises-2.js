const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// Find a union b

/*
let c = [...a, ...b];
let C = new Set(c);
console.log(C);
*/

// Find a intersection b

/*
let B = new Set(b);
let c = a.filter(num => B.has(num));
let C = new Set(c);
console.log(C);
*/

// Find a with b

/*
let B = new Set(b);
let c = a.filter(num => !B.has(num));
let C = new Set(c);
console.log(C);
*/