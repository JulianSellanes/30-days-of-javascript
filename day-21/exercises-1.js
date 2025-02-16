// Create an index.html file and put four p elements as above:
// Get the first paragraph by using document.querySelector(tagname) and tag name

//const firstP = document.querySelector(`p`);
//console.log(firstP);

// Get each of the paragraph using document.querySelector('#id') and by their id

//const firstP = document.querySelector(`#first`);
//console.log(firstP);

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

const paragraphs = document.querySelectorAll(`p`);
//console.log(paragraphs);

// Loop through the nodeList and get the text content of each paragraph

//paragraphs.forEach(item => console.log(item));

// Set a text content to paragraph the fourth paragraph, Fourth Paragraph

//paragraphs[3].textContent = `Fourth Paragraph`;

// Set id and class attribute for all the paragraphs using different attribute setting methods

/*
paragraphs[1].className = `paragraph`;
paragraphs[1].id = `second`;

paragraphs[2].setAttribute(`class`, `paragraph`);
paragraphs[2].setAttribute(`id`, `third`);

paragraphs.forEach(item => console.log(item));
*/