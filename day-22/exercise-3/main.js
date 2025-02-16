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

const dateText = document.querySelector(`#date`);

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

const list = document.querySelectorAll(`.middle li`);

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