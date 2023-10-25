// Create an empty object called dog
const dog = {};

// Print the dog object on the console

//console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = `Noa`;
dog.legs = 4;
dog.color = `Black`;
dog.age = 10;
dog.bark = function() {
    return `woof woof`;
}

// Get name, legs, color, age and bark value from the dog object

/*
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
*/

// Set new properties the dog object: breed, getDogInfo

/*
dog.breed = `Doberman`;
dog.getDogInfo = function()
{
    console.log(this.name);
    console.log(this.legs);
    console.log(this.color);
    console.log(this.age);
    console.log(this.bark());
    console.log(this.breed);
}

dog.getDogInfo();
*/