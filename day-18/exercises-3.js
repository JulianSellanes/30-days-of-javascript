const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the cats api and find the average weight of cat in metric unit.

/*
fetch(catsAPI)
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            const str = item.weight.metric;
            const nums = str.match(/\d+/g);
            const avg = ( parseFloat(nums[0]) + parseFloat(nums[1]) ) / 2;
            console.log(`Name: ${item.name}, Avg Weight: ${avg}`);
        });
    })
    .catch(error => console.log(error));
*/

// Read the countries api and find out the 10 largest countries

/*
fetch(countriesAPI)
    .then(res => res.json())
    .then(data => {
        data.sort((a, b) => b.area - a.area);
        const top = data.slice(0, 10);
        top.forEach(item => {
            console.log(`Name: ${item.name}, Area: ${item.area}`);
        });
    })
    .catch(error => console.log(error));
*/

// Read the countries api and count total number of languages in the world used as officials.

/*
fetch(countriesAPI)
    .then(res => res.json())
    .then(data => {
        const langs = [];
        data.forEach(item => item.languages.forEach(lang => langs.push(lang.name)));

        const set = new Set(langs);
        const counter = [];

        set.forEach(item => {
            const filteredLangs = langs.filter(lang => lang === item);
            counter.push( {lang: item, count: filteredLangs.length} );
        });

        counter.sort((a, b) => b.count - a.count);

        console.log(counter);
    })
    .catch(error => console.log(error));
*/