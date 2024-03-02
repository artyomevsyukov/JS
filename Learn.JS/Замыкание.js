"use strict";
// function sum(a) {
//     return function (b) {
//         return a + b;
//     };
// }
// console.log(sum(1)(2));
// console.log(sum(5)(-1));

// let x = 1;

// function func() {
//     console.log(x); // ReferenceError: Cannot access 'x' before initialization
//     let x = 2;
// }

// func();
// ===========================================================
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 22, surname: "Hathaway" },
// ];

// function byField(fieldName) {
//     return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
// }

// console.log(users.sort(byField("age")));
// console.log(users.sort(byField("name")));

// ===========================================================

/* .. ваш код для inBetween и inArray */
// TODO
// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//     return function (x) {
//         return x >= a && x <= b;
//     };
// }
// function inArray(arr) {
//     return function (x) {
//         return arr.includes(x);
//     };
// }

// let bet = arr.filter((el) => el >= 3 && el <= 5);
// console.log(bet);
// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

// let inAr = arr.filter((el) => [1, 2, 10].includes(el));
// console.log(inAr);
// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// ==============================================================

// function f() {
//     let value = Math.random();

//     return function () {
//         console.log(value);
//     };
// }
// f();
// // Вызываем функцию f, которая возвращает другую функцию
// let returnedFunction = f();

// // // // Теперь вызываем возвращенную функцию, чтобы увидеть вывод значения в консоль
// returnedFunction();

// function add(x) {
//     return function (y, z) {
//         return x + y + z;
//     };
// }
// let addFive = add(5);
// console.log(addFive(1, 10)); // 8
// console.log(add(null)(null, 10)); // 8

// function makeCounter() {
//     let count = 0;

//     return function () {
//         return count++; // есть доступ к внешней переменной "count"
//     };
// }

// let counter = makeCounter();
// let counter1 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter1()); // 2
// console.log(counter1()); // 2
// console.log(counter1()); // 2
