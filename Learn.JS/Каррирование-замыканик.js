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

// const multiply = function (a, b, c) {
//     return a + b * c;
// };

// const partialMultiply = function (a) {
//     return function (b, c) {
//         return multiply(a, b, c);
//     };
// };

// // Создаем частично примененную функцию
// const partialMultiplyWithFixedValues = partialMultiply(10);

// // Вызываем функцию, передавая только значение a
// const result = partialMultiplyWithFixedValues(10, 5);

// console.log(result); // Выведет 100
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// function multiply(a, b, c) {
//     return a + b * c;
// }
// function fixA(a) {
//     return function (b, c) {
//         return a + b * c;
//         // return multiply(a, b, c);
//     };
// }

// let zam = fixA(2);
// let result = zam(10, 10);
// console.log(result);

//=============

// const multiply = function (a, b, c) {
//     return a * b + c;
// };

// // Каррированная функция с фиксированными значениями a и c
// let cor = function (a, c) {
//     return function (b) {
//         return multiply(a, b, c);
//     };
// };

// let part = cor(5, 5);
// // console.log(part(100));

// for (let i = 1; i <= 10; i++) {
//     console.log(`i: ${i}`, part(i));
// }
// ==========================================
