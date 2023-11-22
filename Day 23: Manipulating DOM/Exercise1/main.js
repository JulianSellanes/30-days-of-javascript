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

let item;
for(let i = 0; i < 102; i++)
{
    item = document.createElement(`div`);
    item.className = `item`;
    item.textContent = i;

    item.style.backgroundColor = `#ff9f43`;

    if(isPrime(i) === true)
    {
        item.style.backgroundColor = `#ee5253`;
    }
    else if(isEven(i) === true)
    {
        item.style.backgroundColor = `#10ac84`;
    }

    document.querySelector(`.container`).appendChild(item);
}