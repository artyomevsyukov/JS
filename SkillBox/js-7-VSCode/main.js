// let zag = document.createElement("h1");
// zag.textContent = "text";
// document.body.append(zag);
// zag.classList.add("title");

// let oll = document.createElement("ol");
// oll.textContent = "buy list";
// document.body.append(oll);
// oll.classList.add("main_list");

// let list = [
//     document.createElement("li"),
//     document.createElement("li"),
//     document.createElement("li"),
// ];
// // list.classList.add("main__item");
// list[0].textContent = "pila";
// list[1].textContent = "drel";
// list[2].textContent = "otvertka";

// oll.append(...list);

// const btn = document.querySelector(".btn");

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".increment-btn");
    const countDisplay = document.querySelector(".count-display");

    function onClick() {
        console.log("Вы нажали на кнопку");
    }
    function incrementCount() {
        let currentCount = parseInt(countDisplay.textContent);
        countDisplay.textContent = currentCount + 1;
    }

    btn.addEventListener("click", incrementCount);
    // btn.addEventListener("click", () => {
    //     let currentCount = parseInt(countDisplay.textContent);
    //     countDisplay.textContent = currentCount + 1;
    // });

    // ============================================

    const colorInput = document.querySelector(".color-input");
    const colorBlock = document.querySelector(".color-block");
    const clearColorButton = document.querySelector(".clear-color-button");

    function paintBlock() {
        colorBlock.style.backgroundColor = colorInput.value;
    }

    colorInput.addEventListener("input", paintBlock);
    paintBlock();

    clearColorButton.addEventListener("click", () => {
        // colorBlock.style.backgroundColor = "";
        colorBlock.style.removeProperty("background-color");
        colorInput.value = "";
    });
});

//===================================================

const counterTime = document.querySelector(".counter-time");
const startCounterTime = document.querySelector(".start-counter-time-button");
const counterTimeDisplay = document.querySelector(".counter-time-display");
// const time = counterTime.value;
// const time = counterTime.textContent;
const delay = 1000;

function getCounterValue() {
    // counterTimeDisplay.innerHTML = counterTime.value;
    counterTimeDisplay.textContent = counterTime.value;
    counterTime.addEventListener("input", getCounterValue);
}
getCounterValue();

// function startTimer() {
//     counterTime.value = counterTime.value - 1;
//     counterTimeDisplay.innerHTML = counterTime.value;
// }
// setInterval(startTimer(), 1000);

// startCounterTime.addEventListener("click", startTimer);
// startCounterTime.addEventListener("click", startTimer);
// let timerId = setInterval(startTimer, time * daley);
// setTimeout(() => {
//     clearInterval(timerId);
//     alert("stop");
// }, time * 1000);

function printNumbers(from = time, to = 0, delay = 1000) {
    let current = parseInt(counterTime.value);

    let timerId = setInterval(function () {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
            // counterTimeDisplay.innerHTML = "";
        }
        current--;
        if (current != to) {
            // counterTime.textContent = counterTime.textContent - 1;
            // counterTimeDisplay.innerHTML = counterTime.textContent;
        }

        // counterTime.value = "";
    }, delay);
}

// использование:
startCounterTime.addEventListener("click", printNumbers);

// printNumbers();
