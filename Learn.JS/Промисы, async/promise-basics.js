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

// const prom = new Promise((resolve) => {
//     console.log("Constructor");
//     setTimeout(() => resolve("Timer"), 1000);
// });

// prom.then((data) => console.log(data));
// Promise.resolve("Instant").then((data) => console.log(data));

// function loadScript(src) {
//     return new Promise(function (resolve, reject) {
//         let script = document.createElement("script");
//         script.src = src;

//         script.onload = () => resolve(script);
//         script.onerror = () =>
//             reject(new Error(`Ошибка загрузки скрипта ${src}`));

//         document.head.append(script);
//     });
// }

// loadScript("/article/promise-chaining/one.js")
//     .then((script) => loadScript("/article/promise-chaining/two.js"))
//     .then((script) => loadScript("/article/promise-chaining/three.js"))
//     .then((script) => {
//         // скрипты загружены, мы можем использовать объявленные в них функции
//         one();
//         two();
//         three();
//     });
// ===============
// function loadScript(url) {
//     return new Promise(function (resolve, reject) {
//         fetch(url)
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 resolve(data);
//             })
//             .then(console.log);
//     });
// }

// loadScript("https://dummyjson.com/products/1")
//     .then(() => loadScript("https://dummyjson.com/products/2"))
//     .then(() => loadScript("https://dummyjson.com/products/3"));
// =============================

// function loadScript(url) {
//     return new Promise(function (resolve, reject) {
//         fetch(url)
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error(`HTTP error! status: ${res.status}`);
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 console.log(data);
//                 resolve(data); // Завершаем промис и передаем данные
//             })
//             .catch((error) => {
//                 console.error("Ошибка при загрузке скрипта:", error);
//                 reject(error); // Завершаем промис с ошибкой
//             });
//     });
// }

// loadScript("https://dummyjson.com/products/1")
//     .then(() => loadScript("https://dummyjson.com/products/2"))
//     .then(() => loadScript("https://dummyjson.com/products/3"))
//     .catch((error) => console.error("Ошибка в цепочке промисов:", error));

function loadScripts(baseUrl, count) {
    let promiseChain = Promise.resolve();

    for (let i = 1; i <= count; i++) {
        promiseChain = promiseChain.then(() => {
            const url = `${baseUrl}/${i}`;
            return fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error(`Ошибка при загрузке продукта ${i}:`, error);
                    throw error; // Прерываем цепочку промисов при ошибке
                });
        });
    }

    return promiseChain;
}

// Пример вызова функции для загрузки 10 продуктов
loadScripts("https://dummyjson.com/products", 10)
    .then(() => console.log("Все продукты загружены"))
    .catch((error) =>
        console.error("Ошибка в процессе загрузки продуктов:", error)
    );
