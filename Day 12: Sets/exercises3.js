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

// How many languages are there in the countries object file.

/*
const set = new Set();
countries_data.forEach(item => { item.languages.forEach(lang => { set.add(lang) }) });
console.log(set.size);
*/

// Use the countries data to find the 10 most spoken languages:

/*
const mostSpokenLangs = (num) =>
{
    const langs = [];
    countries_data.forEach(item => { item.languages.forEach(lang => { langs.push(lang) }) });

    const set = new Set(langs);
    const counter = [];

    set.forEach(item => {
        const filteredLangs = langs.filter(lang => lang === item);
        counter.push( {lang: item, count: filteredLangs.length} );
    });

    counter.sort((a, b) => {
        return b.count - a.count;
    });

    const top = counter.slice(0, num);

    return top;
}
console.log(mostSpokenLangs(10));
*/