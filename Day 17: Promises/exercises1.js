const countriesAPI = 'https://restcountries.com/v2/all'

// Read the countries API using fetch and print the name of country, capital, languages, population and area.

/*
fetch(countriesAPI)
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            console.log(`Name: ${item.name}`);
            console.log(`Capital: ${item.capital}`);
            const langs = item.languages.map(lang => lang.name);
            console.log(`Languages: ${langs}`);
            console.log(`Population: ${item.population}`);
            console.log(`Area: ${item.area}\n`);
        });
    })
    .catch(error => console.log(error));
*/