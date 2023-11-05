// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

/*
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

const mostFrequentWords = (str, num) =>
{
    let pattern = /\./g;
    const result = str.replace(pattern, ``).split(` `);

    const set = new Set(result);
    const counter = [];

    set.forEach(item => {
        const filteredWords = result.filter(word => word === item);
        counter.push( {word: item, count: filteredWords.length} );
    });

    counter.sort((a, b) => b.count - a.count);

    const top = counter.slice(0, num);

    return top;
}

console.log(mostFrequentWords(paragraph, 10));
*/