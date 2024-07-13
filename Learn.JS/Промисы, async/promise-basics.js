"use strict";

// function delay(ms) {
//     return new Promise((resolve) => setTimeout(() => resolve("done"), ms));
// }

// delay(1000)
//     .then((text) => console.log("выполнилось через 3 секунды ", text))
//     .catch((e) => console.log(e.message));

// const delay = (ms) => {
//     return new Promise((resolve) => setTimeout(() => resolve(), ms * 1000));
// };
// delay(1).then(() => console.log("sdfsdfds"));

// function delay(ms, text) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(text);
//         }, ms * 1000);
//     });
// }

// delay(1, "dfs").then((t) => console.log(t));

// function timeOut(ms, text) {
//     return new Promise((resolve) => setTimeout(() => resolve(text), ms * 1000));
// }

// timeOut(1, "sasdg")
//     .then((t) => {
//         console.log(111, t);
//         return timeOut(2, "1111111111111");
//     })
//     .then((t) => {
//         console.log(222, t);
//         return timeOut(5, "22222222222");
//     })
//     .then((t) => {
//         console.log(333, t);
//         // return timeOut(1, "333333333333333");
//     });

// function timeOut(ms) {
//     return new Promise((resolve) => setTimeout(() => resolve(), ms * 1000));
// }

// timeOut(1)
//     .then(() => {
//         console.log(111);
//         return timeOut(5);
//     })
//     .then(() => {
//         console.log(222);
//         return timeOut(1);
//     })
//     .then(() => {
//         console.log(333);
//         // return timeOut(3);
//     });

const prom = new Promise((resolve) => {
    console.log("Constructor");
    setTimeout(() => resolve("Timer"), 1000);
});

prom.then((data) => console.log(data));
Promise.resolve("Instant").then((data) => console.log(data));
