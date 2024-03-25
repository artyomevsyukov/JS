document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".increment-btn");
    const countDisplay = document.querySelector(".count-display");

    function onClick() {
        console.log("Вы нажали на кнопку");
    }
    // let timerId = setInterval(function incrementCount() {
    //     let currentCount = parseInt(countDisplay.textContent);
    //     countDisplay.textContent = currentCount + 1;
    //     console.log(countDisplay.textContent);
    //     if (countDisplay.textContent >= 10) {
    //         clearInterval(timerId);
    //     }
    // }, 100);

    btn.addEventListener("click", () => {
        let timerId = setInterval(function incrementCount() {
            let currentCount = parseInt(countDisplay.textContent);
            countDisplay.textContent = currentCount + 1;
            console.log(countDisplay.textContent);
            if (countDisplay.textContent >= 10) {
                clearInterval(timerId);
            }
        }, 1000);
    });
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

const counterTime = document.querySelector(".counter-time");
const startCounterTimeBtn = document.querySelector(
    ".start-counter-time-button"
);
const counterTimeDisplay = document.querySelector(".counter-time-display");
// const time = counterTime.value;
// const time = counterTime.textContent;
const delay = 1000;

const getTime = function () {
    let currentTime = parseInt(counterTime.value);
    counterTimeDisplay.textContent = currentTime;
};

function printNumbers(from = time, to = 0) {
    let current = parseInt(counterTime.value);
    clearInterval(timerId);
    console.log("1");
    let timerId = setInterval(function () {
        console.log(current);
        time = counterTime.textContent - 1;
        counterTimeDisplay.innerHTML = counterTime.textContent;
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
function stopTimer() {
    clearInterval(timerId);
}

function renderTimerDisplay() {
    for (let i = counterTime.value; i <= 0; i--) {
        counterTime.textContent = time - 1;
        counterTimeDisplay.innerHTML = counterTime.textContent;
    }
}

startCounterTimeBtn.addEventListener("click", stopTimer);
startCounterTimeBtn.addEventListener("click", getTime);
startCounterTimeBtn.addEventListener("click", printNumbers);
startCounterTimeBtn.addEventListener("click", renderTimerDisplay);
