const errorText = document.querySelector(`#error`);
const input = document.querySelector(`#nums`);
const bttn = document.querySelector(`#bttn`);
const grid = document.querySelector(`.grid`);

let str = ``;

input.addEventListener(`input`, e => {
    e.target.value = e.target.value.replace(/\s/g, ``);
    str = e.target.value;
});

const submitNum = () =>
{
    if(str === ``)
    {
        errorText.textContent = `Enter number value to generate numbers`;
        return;
    }

    if(!checkNum(str))
    {
        errorText.textContent = `Input value must be a number`;
        return;
    }

    generateGrid(parseInt(str));
}

const checkNum = (input) =>
{
    return !isNaN(input);
}

const generateGrid = (num) =>
{
    grid.innerHTML = ``;
    errorText.textContent = ``;

    for(let i = 0; i < num; i++)
    {
        let item = document.createElement(`div`);
        item.className = `item`;

        let p = document.createElement(`p`);
        p.className = `itemText`;
        p.textContent = i;

        item.style.backgroundColor = `#ff9f43`;

        if(isPrime(i))
        {
            item.style.backgroundColor = `#ee5253`;
        }
        else if(isEven(i))
        {
            item.style.backgroundColor = `#10ac84`;
        }

        grid.appendChild(item);
        item.appendChild(p);
    }
}

const isPrime = (num) =>
{
    if(num < 2)
        return false;

    for(let i = 2; i <= Math.sqrt(num); i++)
    {
        if(num % i === 0)
        {
            return false;
        }
    }

    return true;
}

const isEven = (num) =>
{
    if(num % 2 === 0)
        return true;

    return false;
}