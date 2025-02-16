// const planets = {
//     mercury: 3.7,
//     venus: 8.87,
//     earth: 9.8,
//     moon: 1.625,
//     mars: 3.71,
//     jupiter: 24.79,
//     saturn: 10.44,
//     uranus: 8.69,
//     neptune: 11.15,
//     pluto: 0.62,
// };

// const input = document.querySelector(`#mass`);
// const dropdown = document.querySelector(`#dropdown`);
// const errorText = document.querySelector(`#errorText`);
// const panels = document.querySelector(`.panels`);
// const img = document.querySelector(`#img`);
// const infoText = document.querySelector(`#infoText`);
// const weightText = document.querySelector(`#weightText`);

// for (const planet in planets) {
//     let option = document.createElement(`option`);
//     option.value = planet;
//     option.text = planet.toUpperCase();
//     dropdown.add(option);
// }

// let massInput = ``;
// let planetInput = ``;

// input.addEventListener(`input`, e => {
//     massInput = e.target.value;
// });

// dropdown.addEventListener("change", () => {
//     planetInput = dropdown.value;
// });

// const calculate = () => {
//     errorText.style.display = `none`;
//     panels.style.display = `none`;

//     if(checkErrors())
//     {
//         errorText.style.display = `inline-block`;
//         return;
//     }

//     doMath();
// };

// const checkErrors = () =>
// {
//     if(massInput === ``)
//     {
//         errorText.textContent = `Mass is required`;
//         return true;
//     }

//     if(planetInput === `` || planetInput === `none`)
//     {
//         errorText.textContent = `Planet is required`;
//         return true;
//     }

//     return false;
// }

// const doMath = () =>
// {
//     const weight = (massInput * planets[planetInput]).toFixed(2);

//     img.src = `./images/${planetInput}.png`;
//     infoText.textContent = `The weight of the object on ${planetInput.toUpperCase()}`;
//     weightText.textContent = `${weight} N`;

//     errorText.style.display = `none`;
//     panels.style.display = `flex`;
// }

// // const errorText = document.querySelector(`#error`);
// // const input = document.querySelector(`#nums`);
// // const bttn = document.querySelector(`#bttn`);
// // const grid = document.querySelector(`.grid`);

// // let str = ``;

// // input.addEventListener(`input`, e => {
// //     e.target.value = e.target.value.replace(/\s/g, ``);
// //     str = e.target.value;
// // });

// // const submitNum = () =>
// // {
// //     if(str === ``)
// //     {
// //         errorText.textContent = `Enter number value to generate numbers`;
// //         return;
// //     }

// //     if(!checkNum(str))
// //     {
// //         errorText.textContent = `Input value must be a number`;
// //         return;
// //     }

// //     generateGrid(parseInt(str));
// // }

// // const checkNum = (input) =>
// // {
// //     return !isNaN(input);
// // }

// // const generateGrid = (num) =>
// // {
// //     grid.innerHTML = ``;
// //     errorText.textContent = ``;

// //     for(let i = 0; i < num; i++)
// //     {
// //         let item = document.createElement(`div`);
// //         item.className = `item`;

// //         let p = document.createElement(`p`);
// //         p.className = `itemText`;
// //         p.textContent = i;

// //         item.style.backgroundColor = `#ff9f43`;

// //         if(isPrime(i))
// //         {
// //             item.style.backgroundColor = `#ee5253`;
// //         }
// //         else if(isEven(i))
// //         {
// //             item.style.backgroundColor = `#10ac84`;
// //         }

// //         grid.appendChild(item);
// //         item.appendChild(p);
// //     }
// // }

// // const isPrime = (num) =>
// // {
// //     if(num < 2)
// //         return false;

// //     for(let i = 2; i <= Math.sqrt(num); i++)
// //     {
// //         if(num % i === 0)
// //         {
// //             return false;
// //         }
// //     }

// //     return true;
// // }

// // const isEven = (num) =>
// // {
// //     if(num % 2 === 0)
// //         return true;

// //     return false;
// // }