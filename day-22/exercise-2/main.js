const countText = document.querySelector(`#counter`);
countText.textContent = `Total Number of Countries: ${countries.length}`;

for(let i = 0; i < countries.length; i++)
{
    let item = document.createElement(`div`);
    item.className = `item`;

    let p = document.createElement(`p`);
    p.textContent = countries[i].toUpperCase();

    document.querySelector(`.grid`).appendChild(item);
    item.appendChild(p);
}