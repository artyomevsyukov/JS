// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let anna = { name: "Анна", age: 20 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha, anna];

// function sortByAge(arr) {
//     return arr.sort((a, b) => a.name.localeCompare(b.name));
//     return arr.sort((a, b) => a.age - b.age);
//     return arr.sort((a, b) => (a.name > b.name ? 1 : -1));
//     return arr.sort((a, b) => (a.age > b.age ? 1 : -1));
// }

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя
// console.log(arr[3].name); // Петя

// let str = "qwr       wegfg342     rfsd fsdg";
// // console.log(Array.from(str));
// // Array.from(str).join("");
// let newStr = str.split(" ").join("");
// // newStr.join(";");
// console.log(newStr);
// // console.log(str);

// function delSpace(str) {
//     let arr = Array.from(str);
//     let newArr = [];
//     let stroka = "";
//     for (const el of arr) {
//         if (el == " ") continue;
//         newArr.push(el);
//         stroka = newArr.join("");
//         // console.log(newArr);
//         // console.log(stroka);
//     }
//     return console.log(stroka);
// }
// // return console.log(arr);

// delSpace(str);

// ==================================

// function f() {
//     return Array.from(arguments);
// }

// f(1, 2, 3);
// // [1, 2, 3]
// ==================================================
// function hash(...args) {
//     let sum = 0;
//     for (const arg of args) {
//         sum += arg;
//     }
//     return sum;
// }
// console.log(hash(3, 7, 5, 10, 5));

// function hash(...args) {
//     let arr = [];
//     let str = "";
//     for (const arg of args) {
//         arr.push(arg);
//         str = arr.join(",");
//     }
//     return str;
// }
// console.log(hash(3, 2, 45, 654, 7, 568, 78, 67, 68));
// let key = hash();
// console.log(key);

// function sayHi(firstName = "") {
//     console.log(this.name, firstName);
// }

// let user = { name: "John" };
// let admin = { name: "Admin" };

// // используем 'call' для передачи различных объектов в качестве 'this'
// sayHi.call(user, "Pashkov"); // John
// sayHi.call(admin); // Admin

// =====================================================================
// const multiply = function (a, b, c) {
//     return a * b * c;
// };

// const double = multiply.bind(null, 2); // Создание каррированной функции
// const result = double(10, 10); // 2 * 5

// console.log(result);

// function curryAdd(x) {
//     return function (y) {
//         return function (z) {
//             return x * y + z;
//         };
//     };
// }

// // Частичное применение аргументов
// const partialAdd = curryAdd(x)(10)(10);

// // Проход по значениям x от 1 до 10
// for (let x = 1; x <= 10; x++) {
//     const result = partialAdd(x);
//     console.log(`For x=${x}, result=${result}`);
// }

// function curryAdd(x) {
//     return function (y) {
//         return function (z) {
//             return x + y * z;
//         };
//     };
// }

// // Частичное применение аргументов
// const partialAdd = curryAdd(10);

// // Проход по значениям x от 1 до 10
// for (let x = 1; x <= 10; x++) {
//     const result = partialAdd(x)(10);
//     console.log(`For x=${x}, result=${result}`);
// }
// function curryAdd(x) {
//     return function (y) {
//         return function (z) {
//             return x * y * z;
//         };
//     };
// }

// // Частичное применение аргументов
// const partialAdd = curryAdd(10);

// // Проход по значениям x от 1 до 10
// for (let i = 1; i <= 10; i++) {
//     const result = partialAdd(i)(1);
//     console.log(`For x=${i}, result=${result}`);
// }
// ===============================================
// const multiply = function (a, b, c) {
//     return a * b * c;
// };

// const double = multiply.bind(null, 2, 2); // Создание каррированной функции
// const result = double(10); // 2 * 5

// console.log(result);
// ===============================================
// function add(x, y, z) {
//     return x + y * z;
// }

// // Частичное применение аргументов
// const partialAdd = (x) => add(x, 10, 10);

// // Проход по значениям x от 1 до 10
// for (let i = 1; i <= 10; i++) {
//     const result = partialAdd(i);
//     console.log(`For x=${i}, result=${result}`);
// }

// =============================================== фиксируем a c
// const multiply = function (a, b, c) {
//     return a * b * c;
// };

// // Каррированная функция с фиксированными значениями a и c
// const curryMultiply = function (a, c) {
//     return function (b) {
//         return multiply(a, b, c);
//     };
// };

// // Создаем каррированную функцию с фиксированными значениями a=2 и c=10
// const partialMultiply = curryMultiply(2, 10);

// // Вызываем функцию, передавая только значение b
// const result = partialMultiply(5);

// console.log(result); // Выведет 100

// =============================================== фиксируем b c

// const multiply = function (a, b, c) {
//     return a * b * c;
// };

// // Каррированная функция с фиксированными значениями b и c
// const curryMultiply = function (b, c) {
//     return function (a) {
//         return multiply(a, b, c);
//     };
// };

// // Создаем каррированную функцию с фиксированными значениями b=2 и c=10
// const partialMultiply = curryMultiply(2, 10);

// // Вызываем функцию, передавая только значение a
// const result = partialMultiply(5);

// console.log(result); // Выведет 100

// const multiply = function (a, b, c) {
//     return a + b * c;
// };

// // Используем метод bind для фиксации значений b=2 и c=10
// const partialMultiply = multiply.bind(null, 10, 10);

// // Вызываем функцию, передавая только значение a
// const result = partialMultiply(5);

// console.log(result); // Выведет 100

// =============================================== фиксируем а через замыкание

const multiply = function (a, b, c) {
    return a + b * c;
};

const partialMultiply = function (a) {
    return function (b, c) {
        return multiply(a, b, c);
    };
};

// Создаем частично примененную функцию
const partialMultiplyWithFixedValues = partialMultiply(10);

// Вызываем функцию, передавая только значение a
const result = partialMultiplyWithFixedValues(10, 5);

console.log(result); // Выведет 100
