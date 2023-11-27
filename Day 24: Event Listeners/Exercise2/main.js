const text1 = document.querySelector(`#text1`);
const text2 = document.querySelector(`#text2`);
const key = document.querySelector(`#key`);
const middleDiv = document.querySelector(`.middleDiv`);
const codeText = document.querySelector(`#codeText`);

document.body.addEventListener(`keypress`, e => {
    updateTexts(e);
});

const updateTexts = (event) =>
{
    key.textContent = event.key;
    codeText.textContent = event.keyCode;

    text1.style.display = `none`;
    text2.style.display = `block`;
    middleDiv.style.display = `inline-block`;
}