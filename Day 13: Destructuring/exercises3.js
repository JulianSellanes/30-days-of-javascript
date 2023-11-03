// Destructure the countries object print name, capital, population and languages of all countries
const countries_data = [
    {
        name: 'Afghanistan',
        capital: 'Kabul',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: 27657145,
        flag: 'https://restcountries.eu/data/afg.svg',
        currency: 'Afghan afghani'
    },
    {
        name: 'Åland Islands',
        capital: 'Mariehamn',
        languages: ['Swedish'],
        population: 28875,
        flag: 'https://restcountries.eu/data/ala.svg',
        currency: 'Euro'
    },
    {
        name: 'Albania',
        capital: 'Tirana',
        languages: ['Albanian'],
        population: 2886026,
        flag: 'https://restcountries.eu/data/alb.svg',
        currency: 'Albanian lek'
    },
    {
        name: 'Algeria',
        capital: 'Algiers',
        languages: ['Arabic'],
        population: 40400000,
        flag: 'https://restcountries.eu/data/dza.svg',
        currency: 'Algerian dinar'
    },
    {
        name: 'American Samoa',
        capital: 'Pago Pago',
        languages: ['English', 'Samoan'],
        population: 57100,
        flag: 'https://restcountries.eu/data/asm.svg',
        currency: 'United State Dollar'
    },
    {
        name: 'Andorra',
        capital: 'Andorra la Vella',
        languages: ['Catalan'],
        population: 78014,
        flag: 'https://restcountries.eu/data/and.svg',
        currency: 'Euro'
    },
    {
        name: 'Angola',
        capital: 'Luanda',
        languages: ['Portuguese'],
        population: 25868000,
        flag: 'https://restcountries.eu/data/ago.svg',
        currency: 'Angolan kwanza'
    },
    {
        name: 'Anguilla',
        capital: 'The Valley',
        languages: ['English'],
        population: 13452,
        flag: 'https://restcountries.eu/data/aia.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Antarctica',
        capital: '',
        languages: ['English', 'Russian'],
        population: 1000,
        flag: 'https://restcountries.eu/data/ata.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Antigua and Barbuda',
        capital: "Saint John's",
        languages: ['English'],
        population: 86295,
        flag: 'https://restcountries.eu/data/atg.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Armenia',
        capital: 'Yerevan',
        languages: ['Armenian', 'Russian'],
        population: 2994400,
        flag: 'https://restcountries.eu/data/arm.svg',
        currency: 'Armenian dram'
    },
]

/*
for (const { name, capital, population, languages } of countries_data)
{
    console.log(`Name: ${name}`);
    console.log(`Capital: ${capital}`);
    console.log(`Population: ${population}`);
    console.log(`Languages: ${languages}`);
    console.log(`\n`);
}
*/

// A junior developer structure student name, skills and score in array of arrays which may not easy to read.
// Destructure the following array name to name, skills array to skills, scores array to scores,
// JavaScript score to jsScore and React score to reactScore variable in one line.

/*
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

let [name, skills, scores] = student;
let [, , jsScore, reactScore] = scores;
console.log(name, skills, jsScore, reactScore);
*/

// Write a function called convertArrayToObject which can convert the array to a structure object.

/*
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = (array) =>
{
    const newArray = [];
    for (const [nameVar, skillsVar, scoresVar] of array)
    {
        const newObj = { name: nameVar, skills: skillsVar, scores: scoresVar };
        newArray.push(newObj);
    }
    return newArray;
}

console.log(convertArrayToObject(students))
*/

// Copy the student object to newStudent without mutating the original object. In the new object add the following?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets

/*
const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

let newStudent = { ...student };
newStudent.skills.frontEnd.push( { skill: 'Bootstrap', level: 8 } );
newStudent.skills.backEnd.push( { skill: 'Express', level: 9 } );
newStudent.skills.dataBase.push( { skill: 'SQL', level: 8 } );
newStudent.skills.dataScience.push(`SQL`);
console.log(newStudent);
*/