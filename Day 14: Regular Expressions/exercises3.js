// Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

/*
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = (str) =>
{
    let pattern = /[%$@&#;!,.?]/gi;
    const result = str.replace(pattern, ``);
    return result;
}

const cleanedText = cleanText(sentence);
console.log(cleanedText);

const mostFrequentWords = (str, num) =>
{
    const result = str.split(` `);

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

console.log(mostFrequentWords(cleanedText, 3));
*/