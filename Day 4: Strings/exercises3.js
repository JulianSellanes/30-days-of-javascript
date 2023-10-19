// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let string11 = `Love is the best thing in this world. Some found their love and some are still looking for their love.`;
let words = string11.match(/love/gi);
console.log(words);
console.log(`Count: ` + words.length);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let string2 = `You cannot end a sentence with because because because is a conjunction`;
let words2 = string2.match(/because/gi);
console.log(words2);
console.log(`Count: ` + words2.length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let string12 = sentence;
string12 = string12.replace(/\%/gi, ``);
string12 = string12.replace(/\$/gi, ``);
string12 = string12.replace(/\@/gi, ``);
string12 = string12.replace(/\#/gi, ``);
string12 = string12.replace(/\&/gi, ``);
string12 = string12.replace(/\;/gi, ``);
console.log(string12);

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let string13 = `He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.`;
let count = string13.match(/\d+/g);
let income = parseInt(count[0]);
let income2 = parseInt(count[1]);
let income3 = parseInt(count[2]);
console.log(`Total income: ${income + income2 + income3}`);