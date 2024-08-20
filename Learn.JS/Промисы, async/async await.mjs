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

// async function getData(url) {
//     try {
//         const res = await fetch(url);
//         console.log("res ok? ", res.ok, res.status);
//         // console.log(res);
//         const json = await res.json();
//         // const {products} = await res.json();
//         // console.log(json);

//         if (res.ok && json) {
//             return json;
//         }
//     } catch (error) {
//         throw new Error(
//             "Ошибка получения данных: " + error.status + " " + error.message
//         );
//     }
// }
// const url = "https://dummyjson.com/products!/1";

// try {
//     const data = await getData(url);
//     console.log(data.title);
// } catch (e) {
//     console.log(e.message);
// }
// console.log("sdfg");

// async function wait() {
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     return 10;
// }

// function f() {
//     wait().then((result) => console.log(result));
//     wait().then(console.log);
//     // ...что здесь написать?
//     // чтобы вызвать wait() и дождаться результата "10" от async–функции
//     // не забывайте, здесь нельзя использовать "await"
// }

// f();

// async function loadJson(url) {
//     const response = await fetch(url);
//     if (response.status == 200) {
//         return response.json();
//     } else {
//         throw new Error(response.status);
//     }
// }
// function loadJson(url) {
//     return fetch(url).then((response) => {
//         if (response.status == 200) {
//             return response.json();
//         } else {
//             throw new Error(response.status);
//         }
//     });
// }

// loadJson("no-such-user.json")
//     .then(console.log) // (3)
//     .catch(console.log); // Error: 404
// loadJson("https://jsonplaceholder.typicode.com/todos/1")
//     .then(console.log) // (3)
//     .catch(console.log); // Error: 404
// loadJson("https://jsonplaceholder.typicode.com/todos1/1")
//     .then(console.log) // (3)
//     .catch(console.log); // Error: 404

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = "HttpError";
        this.response = response;
    }
}

async function loadJson(url) {
    const response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

async function demoGithubUser() {
    let user;
    while (true) {
        // let name = "iliakan";
        let name = prompt("Введите логин?", "iliakan");
        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break; // ошибок не было, выходим из цикла
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                // после alert начнётся новая итерация цикла
                alert(
                    "Такого пользователя не существует, пожалуйста, повторите ввод."
                );
            } else {
                // неизвестная ошибка, пробрасываем её
                throw err;
            }
        }
    }

    console.log(`Полное имя: ${user.name}.`);
    return user;
}

demoGithubUser();
