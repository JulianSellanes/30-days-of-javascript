// Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(_name, _age, _color, _legs)
    {
        this.name = _name;
        this.age = _age;
        this.color = _color;
        this.legs = _legs;
    }

    getAnimalInfo()
    {
        console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`);
    }

    sound()
    {
        console.log(`Sound`);
    }
}

/*
const animal = new Animal(`Andrew`, 30, `Black`, 4);
animal.getAnimalInfo();
animal.sound();
*/

// Create a Dog and Cat child class from the Animal Class.
// Override the method you create in Animal class

class Dog extends Animal {
    constructor(_name, _age, _color, _legs, _food)
    {
        super(_name, _age, _color, _legs);
        this.food = _food;
    }

    sound()
    {
        console.log(`Woof Woof`);
    }
}

class Cat extends Animal {
    constructor(_name, _age, _color, _legs, _toy)
    {
        super(_name, _age, _color, _legs);
        this.toy = _toy;
    }

    sound()
    {
        console.log(`Meow Meow`);
    }
}

/*
const dog = new Dog(`Daniel`, 15, `Brown`, 4, `Meat`);
const cat = new Cat(`Bruno`, 6, `White`, 4, `Ball`);

dog.getAnimalInfo();
cat.getAnimalInfo();

dog.sound();
cat.sound();
*/