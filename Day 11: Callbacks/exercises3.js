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

// Use the countries information, in the data folder. Sort countries by name, by capital, by population

/*
let byName = countries_data.sort((a, b) => {
    return a.name.localeCompare(b.name);
});
console.log(byName);
*/

/*
let byCapital = countries_data.sort((a, b) => {
    return a.capital.localeCompare(b.capital);
});
console.log(byCapital);
*/

/*
let byPopulation = countries_data.sort((a, b) => {
    return a.population - b.population;
});
console.log(byPopulation);
*/

// Find the 10 most spoken languages:

/*
let counter = {};
countries_data.forEach(item => {
    item.languages.forEach(item2 => {
        if(counter[item2] !== undefined)
          counter[item2]++;
        else
          counter[item2] = 1;
    });
});

const langArray = Object.keys(counter).map(item => ( {item, count: counter[item]} ));

langArray.sort((a, b) => {
    return b.count - a.count;
});

const top = langArray.slice(0, 10);

console.log(top);
*/

// Use countries_data.js file create a function which create the ten most populated countries

/*
const mostPopulatedCountries = () =>
{
    const array = countries_data.sort((a, b) => {
        return b.population - a.population;
    });

    const top = array.slice(0, 10).map(item => ( {country: item.name, population: item.population} ));

    return top;
}
console.log(mostPopulatedCountries());
*/