const paragraphs = document.querySelectorAll(`p`);

// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

paragraphs.forEach(item => item.style.fontSize = `24px`);

// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

paragraphs.forEach((item, i) => i % 2 === 0 ? item.style.color = `green` : item.style.color = `red`);

// Set text content, id and class to each paragraph


for(let i = 0; i < paragraphs.length; i++)
{
    paragraphs[i].textContent = `${i + 1} P`;
    paragraphs[i].className = `paragraph`;
    paragraphs[i].id = `${i}`;
    console.log(paragraphs[i]);
}
