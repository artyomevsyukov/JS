/*
 В JavaScript у каждой выполняемой функции, блока кода {...} и скрипта есть связанный с ними внутренний (скрытый) объект, называемый лексическим окружением LexicalEnvironment.
LexicalEnvironment - лексическое окрыжение
Объект лексического окружения состоит из двух частей:

Environment - среда, окружающая среда, окружение
Environment Record (хранилище переменных)
Environment Record – объект, в котором как свойства хранятся все локальные переменные (а также некоторая другая информация, такая как значение this).

Ссылка на внешнее лексическое окружение – то есть то, которое соответствует коду снаружи (снаружи от текущих фигурных скобок).

Все функции помнят лексическое окружение, в котором они были созданы. Технически здесь нет никакой магии: все функции имеют скрытое свойство [[Environment]], которое хранит ссылку на лексическое окружение, в котором была создана функция:
*/

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
// function makeCounter() {
//     let count = 0;

//     return function () {
//         return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 1
// console.log(counter()); // 1
// console.log(counter()); // 1

// console.log(counter2()); // ?
// console.log(counter2()); // ?

// function sum(a) {
//     return function (b) {
//         return a + b;
//     };
// }

// console.log(sum(1)(2));
// console.log(sum(5)(-1));

// Фильтрация с помощью функции

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
// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let d = 3,
//     f = 6;
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

// function inBetweenFor(x, a, b) {
//     return x >= a && x <= b;
// }
// let reslt = [];
// for (let i = 0; i <= arr.length; i++) {
//     if (inBetweenFor(arr[i], d, f)) {
//         reslt.push(arr[i]);
//     }
// }
// console.log(reslt);

// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// console.log(arr.filter((x) => x >= d && x <= f));

// let users = [
//     { name: "Иван", age: 20, surname: "Иванов" },
//     { name: "Пётр", age: 18, surname: "Петров" },
//     { name: "Анна", age: 19, surname: "Каренина" },
// ];

// // по имени (Анна, Иван, Пётр)
// // console.log(users.sort((a, b) => (a.name > b.name ? 1 : -1)));

// // по возрасту (Пётр, Анна, Иван)
// // console.log(users.sort((a, b) => (a.age > b.age ? 1 : -1)));

// function byField(fieldName) {
//     return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
//     // return function (a, b) {
//     //     return a[fieldName] > b[fieldName] ? 1 : -1;
//     // };
// }

// console.log(users.sort(byField("name")));
// console.log(users.sort(byField("age")));

function makeArmy() {
    let shooters = [];

    // let i = 0;

    // while (i < 10) {

    for (let i = 0; i < 10; i++) {
        // let j = i;
        let shooter = function () {
            // функция shooter
            // console.log(j); // должна выводить порядковый номер
            console.log(i); // должна выводить порядковый номер
        };
        shooters.push(shooter); // и добавлять стрелка в массив
        // i++;
    }
    return shooters;

    // ...а в конце вернуть массив из всех стрелков
}

let army = makeArmy();
// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.
