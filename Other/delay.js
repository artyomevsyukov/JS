function delay(f, ms) {
    return function (...args) {
        setTimeout(() => f(...args), ms);
    };
}
const f = delay((...args) => console.log(...args), 1000);
const f2 = delay(console.log, 500);
f("12312312312312312", "sdfgsdfgsdfgsdf");
f2("anl;asjdoipfjanewlrkvnlksdnvs", "32141234", "fdsgdfjhnsfg");

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(1000).then(() => console.log("выполнилось через 3 секунды"));

// function print(text) {
//     console.log(text);
// }

// const f = delay((...args) => console.log(...args), 1000);
// f("12312312312312312", print(123));

// const print = delay

// function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }
// delay(1000).then(() => console.log("выполнилось через 1 секунды"));

// function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function execute() {
//     await delay(1000);
//     console.log("выполнилось через 2 секунды");
// }

// execute();

// function delayDecorator(fn, ms) {
//     return function (...args) {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(fn(...args));
//             }, ms);
//         });
//     };
// }

// function logMessage(...args) {
//     console.log("выполнилось через 3 секунды");
//     const result = args.reduce((acc, curr) => acc + curr, 0);
//     console.log(result);
//     return result;
// }

// // Создаем функцию с задержкой
// const delayedLog = delayDecorator((...args) => logMessage(...args), 1000);

// // Вызываем функцию с задержкой
// delayedLog(1, 2, 3, 23423);
