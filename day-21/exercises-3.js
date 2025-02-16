// Develop the following application, use the following HTML elements to get started with.
// You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second


const yearText = document.querySelector(`year`);

const generateColor = () =>
{
    const a = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    const b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    const c = Math.floor(Math.random() * (255 - 0 + 1) + 0);

    return `rgb(${a}, ${b}, ${c})`;
}

const changeTitleColor = () =>
{
    yearText.style.color = generateColor();
}
setInterval(changeTitleColor, 1000);


// The date and time background color is changing every on seconds


const dateText = document.querySelector(`h3`);

const getDate = () =>
{
    const now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    sec < 10
        ? sec = `0` + sec
        : sec = sec

    min < 10
        ? min = `0` + min
        : min = min

    hour < 10
        ? hour = `0` + hour
        : hour = hour

    dateText.textContent = `${day}/${month}/${year} ${hour}:${min}:${sec}`;
    changeDateColor();
}

const changeDateColor = () =>
{
    dateText.style.backgroundColor = generateColor();
}
setInterval(getDate, 1000);


// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red


const list = document.querySelectorAll(`li`);

list.forEach((item, i) => {
    item.style.backgroundColor = `red`;

    if(i === 0)
    {
        item.style.backgroundColor = `lightgreen`;
    }
    else if(i === 1)
    {
        item.style.backgroundColor = `yellow`;
    }
});

const h1 = document.querySelector(`h1`);
h1.style.fontSize = `40px`;
h1.style.fontFamily = `arial`;
h1.style.textAlign = `center`;

yearText.style.fontSize = `45px`;

const h2 = document.querySelector(`h2`);
h2.style.fontSize = `20px`;
h2.style.textAlign = `center`;
h2.style.textDecoration = `underline`;

dateText.style.fontSize = `15px`;
dateText.style.textAlign = `center`;
dateText.style.padding = `10px 0px`;
dateText.style.margin = `0px 200px`;

for (const item of list) {
    item.style.padding = `15px`;
    item.style.margin = `3px 90px`;
    item.style.listStyleType = `none`;
}
