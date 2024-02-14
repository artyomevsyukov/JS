// "use strict";
// function sayHi() {
//     return console.log("Привет");
// }

// setTimeout(sayHi(), 1000);

// function printTime() {
//     console.log(new Date());
// }

// let timer = setInterval(printTime, 1000);
// setTimeout(() => clearInterval(timer), 5000);
// console.log("dsf");
// function sayHi() {
//     console.log("Привет");
//     function func(a = 2, b = 3) {
//         return console.log("asfdf");
//     }
//     return func();
// }

// let x = sayHi();
// let z = sayHi;
// console.log(x);
// console.log(z);
// // setTimeout(sayHi, 1000);

function sum(a = 2, b = 3) {
    return a + b;
    return console.log(a + b);
}
// let x = sum(2, 3);
// console.log(sum());
setTimeout(sum, 1000);
// setTimeout(sum(), 1000, 2, 3);
