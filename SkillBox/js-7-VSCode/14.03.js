//Задача 1
function incrementBtn() {
    // const btn = document.querySelector(".increment-btn");
    const countDisplay = document.querySelector(".count-display");
    countDisplay.textContent++;
}
// btn.addEventListener("click", onClick);
// btn.addEventListener("click", () => onClick());

//Задача 2
//================================================
const colorInput = document.querySelector(".color-input");
const colorBlock = document.querySelector(".color-block");

function clearBlock() {
    colorBlock.style.backgroundColor = "";
}
function paintBlock() {
    colorBlock.style.backgroundColor = colorInput.value;
}
paintBlock();

// document.querySelector(".clear-color-button").onclick = clearBlock;
// document
//     .querySelector(".clear-color-button")
//     .addEventListener("click", clearBlock);
// document
//     .querySelector(".clear-color-button")
//     .addEventListener("click", () => clearBlock());
// colorInput.addEventListener("input");

//Задача 3
//================================================================================

const inputCounterTime = document.querySelector(".counter-time");
const start = document.querySelector(".start-counter-time-button");
const counterTimeDisplay = document.querySelector(".counter-time-display");
// let timerId;

// function timer() {
//     clearInterval(timerId);
//     console.log("Start timer");
//     counterTimeDisplay.textContent = inputCounterTime.value;

//     timerId = setInterval(function () {
//         if (parseInt(counterTimeDisplay.textContent) == 0) {
//             clearInterval(timerId);
//         } else {
//             console.log(--counterTimeDisplay.textContent);
//         }
//     }, 1000);
// }
let timerId;
function timer() {
    clearTimeout(timerId);
    console.log("Start timer");
    counterTimeDisplay.textContent = inputCounterTime.value;

    (function go() {
        console.log(--counterTimeDisplay.textContent);
        if (parseInt(counterTimeDisplay.textContent) == 0) {
            clearTimeout(timerId);
            console.log("Stop timer");
        } else {
            timerId = setTimeout(go, 1000);
        }
    })();
}

//Задача 4
//================================================================================
// const h2input = document.querySelector(".h2input");
// const h2 = document.querySelector(".h2");
// let timerH2;
// function inputRender() {
//     clearTimeout(timerH2);
//     timerH2 = setTimeout(function run() {
//         h2.textContent = h2input.value;
//     }, 300);
// }
//
//
//

//
const h2input = document.querySelector(".h2input");
const h2 = document.querySelector(".h22");
let timerH2;
function inputRender() {
    clearTimeout(timerH2);
    timerH2 = setTimeout(() => {
        h2.textContent = h2input.value;
    }, 300);
}

// h2input.addEventListener("input", inputRender);
