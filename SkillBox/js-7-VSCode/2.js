const counter = document.querySelector(".counter-time");
const btn = document.querySelector(".start-counter-time-button");
const countDisplay = document.querySelector(".counter-time-display");
// const time = counterTime.value;
// const time = counterTime.textContent;
const delay = 1000;

// const btn = document.querySelector(".increment-btn");
// const countDisplay = document.querySelector(".count-display");

btn.addEventListener("click", () => {
    let timerId = setInterval(function incrementCount() {
        let currentCount = parseInt(countDisplay.textContent);
        let finish = parseInt(counter.textContent);
        countDisplay.textContent = currentCount - 1;
        console.log(countDisplay.textContent);
        if (countDisplay.value >= finish) {
            clearInterval(timerId);
        }
    }, 100);
});
// btn.addEventListener("click", () => {
//     let timerId = setInterval(function incrementCount() {
//         let currentCount = parseInt(countDisplay.textContent);
//         countDisplay.textContent = currentCount + 1;
//         console.log(countDisplay.textContent);
//         if (countDisplay.textContent >= 10) {
//             clearInterval(timerId);
//         }
//     }, 1000);
// });
