// async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

// async function renderData() {
//     const arr = await getData("https://dummyjson.com/products/categories");
//     const el = document.createElement("div");
//     el.innerHTML = ` ${arr.forEach((element) => {
//         <span>${element.name}</span>;
//     })}
//     `;
//     body.append(el);
// }

// // Вызываем асинхронную функцию
// renderData();

// console.log(1);
// setTimeout(() => console.log(2));
// setTimeout(() => {
//     console.log(3);
//     Promise.resolve().then(() => console.log(3.1));
// });
// setTimeout(() => console.log(5));

// Promise.resolve().then(() => console.log(4));
// Promise.resolve(4.1).then((res) => console.log(res));

// console.log(6);

//1,6
// 4
// 2
// 3
// 3.1
// 5

// async function loadJson(url) {
//     // (1)
//     let response = await fetch(url); // (2)

//     if (response.status == 200) {
//         let json = await response.json(); // (3)
//         return json;
//     }

//     throw new Error(response.status);
// }

// loadJson("no-such-user.json").catch(); // Error: 404 (4)

// async function loadScripts(baseUrl, count) {
//     try {
//         for (let i = 1; i <= count; i++) {
//             const url = `${baseUrl}/${i}`;
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             console.log(data);
//         }
//         console.log("Все продукты загружены");
//     } catch (error) {
//         console.error("Ошибка в процессе загрузки продуктов:", error);
//     }
// }

// // Пример вызова функции для загрузки 10 продуктов
// loadScripts("https://dummyjson.com/products", 10);

// const axios = require('axios');

// async function loadScripts(baseUrl, count) {
//     try {
//         for (let i = 1; i <= count; i++) {
//             const url = `${baseUrl}/${i}`;
//             const response = await axios.get(url);
//             console.log(response.data);
//         }
//         console.log("Все продукты загружены");
//     } catch (error) {
//         console.error("Ошибка в процессе загрузки продуктов:", error);
//     }
// }

// // Пример вызова функции для загрузки 10 продуктов
// loadScripts("https://dummyjson.com/products", 10);

// const axios = require("axios");

// async function loadScripts(baseUrl, count) {
//     const requests = [];
//     for (let i = 1; i <= count; i++) {
//         const url = `${baseUrl}/${i}`;
//         requests.push(axios.get(url));
//     }

//     try {
//         const responses = await Promise.all(requests);
//         responses.forEach((response) => console.log(response.data));
//     } catch (error) {
//         console.error("Ошибка в процессе загрузки продуктов:", error);
//     }
// }
// =================================================================
// const asyncFn = async () => {
//     return 10;
// };

// asyncFn().then((value) => console.log(value));

// let a = asyncFn();
// console.log(a);

// let a = await asyncFn(); // для .mjs
// console.log(a);

// const asyncFn = async () => {
//     throw new Error("Ошибка!!!!");
// };

// asyncFn()
//     .then((value) => console.log(value))
//     .catch((error) => console.log(error.message)); //2

// console.log("sdfsdfsd"); //1

// function timerPromise(name) {
//     return new Promise((resolve, reject) => {
//         console.log("Promise");
//         setTimeout(() => resolve(name), 500);
//         return 2;
//     });
// }

// const asyncFn = async (name) => {
//     console.log("Timer Start");
//     let a = await timerPromise(name);
//     console.log(`Timer ended ${a}`);
// };

// asyncFn("Jonh");

async function getData(url) {
    try {
        const res = await fetch(url);
        console.log("res ok? ", res.ok, res.status);
        // console.log(res);
        const json = await res.json();
        // const {products} = await res.json();
        // console.log(json);

        if (res.ok && json) {
            return json;
        }
    } catch (error) {
        throw new Error(
            "Ошибка получения данных: " + error.status + " " + error.message
        );
    }
}
const url = "https://dummyjson.com/products!/1";

try {
    const data = await getData(url);
    console.log(data.title);
} catch (e) {
    console.log(e.message);
}
console.log("sdfg");
