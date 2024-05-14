"use strict";
// const str = "привет что ты здесь делаешь?";
// console.log(str);
// console.log(str.split("е").join("ё"));

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newNumbers = [...numbers];
// while (newNumbers.length) {
//     console.log(`На каждой итерации цикла ${newNumbers.pop()}`);
// }
// console.log(numbers);

// function parseEmpoyeesDate(dataString) {
//     return dataString.split("\n").filter((line) => line.lengrh > 0);
// }
// console.log(
//     parseEmpoyeesDate(`Тиунов Тимофей    Сергеевич,    системный архитектор
// Иванов Иван Иванович  .  Frontend-разработчик
// `)
// );

// const purchase = [
//     { name: "Laptop", price: 1500 },
//     { name: "Keyboard", price: 100 },
//     { name: "Mouse", price: 50 },
//     { name: "Mic", price: 15 },
// ];
// const re = purchase.find((item) => item.name === "Mic");
// console.log(re);

// const factorial = (n) => {
//     console.log({ n });
//     if (n == 0) {
//         console.log(`${n}! = 1`);
//         return 1;
//     } else {
//         const result = n * factorial(n - 1);
//         console.log(`${n}! = ${result}`);
//         return result;
//     }
// };
// console.log(factorial(5));

// const getMaxCallStackSize = (i) => {
//     // try {
//     //     return getMaxCallStackSize(++i);
//     // } catch () {
//     //     return i;
//     // }
//     try {
//         return getMaxCallStackSize(++i);
//     } catch (error) {
//         return i;
//     }
// };

// console.log(getMaxCallStackSize(0));

// function countDown(i) {
//     // console.log(i);
//     if (i <= 0) {
//         return;
//     }
//     countDown(i - 1);
//     console.log(i);
// }
// countDown(5);

// let x = 2 + 4;
// let z = 2;

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const res = arr.reduce((acc, el) => {
//     return acc + el;
// });

// console.log(res);

//=================================================

// const arr = [1, 2, 3, 4, 5, 6, 7];
// Array.prototype.myReduce = function (array, callback, initialValue) {
//     let accumulator = initialValue;
//     for (let i = 0; i < array.length; i++) {
//         if (accumulator === undefined && i === 0) {
//             accumulator = array[0];
//             continue;
//         }
//         accumulator = callback(accumulator, array[i], i, array);
//     }

//     return accumulator;
// };

// console.log(arr.myReduce((acc, el) => acc + el));

//===============================================================
//
//
// const arr = [1, 2, 3, 4, 5, 6, 7];

// Array.prototype.myReduce = function (callback, initialValue) {
//     let accumulator = initialValue;

//     if (initialValue === undefined && this.length > 0) {
//         accumulator = this[0];
//     }
//     let startIndex = initialValue !== undefined ? 0 : 1;

//     for (let i = startIndex; i < this.length; i++) {
//         accumulator = callback(accumulator, this[i], i, this);
//     }

//     return accumulator;
// };

// // Пример использования:
// const numbers = [1, 2, 3, 4, "fg"];
// const sumReducer = (accumulator, currentValue) => accumulator + currentValue;

// const total = numbers.myReduce((acc, el) => acc + el, 33);
// const total2 = numbers.myReduce(sumReducer, 33);
// console.log(total); // Выведет 10
// console.log(total2); // Выведет 10

// let options = {
//     title: "Menu",
//     // width: 100,
//     height: 200,
// };

// function w() {
//     let width = 0;
//     return (width = 200);
// }

// // взять только title, игнорировать остальное
// let { width = w() } = options;

// console.log(width); // Menu

/* boj1
1 undefined
2 20

obj2 call
 
30
undefined


30
20



*/

// const a = { x: 1 };
// console.log(a.hasOwnProperty("__proto__"));
// console.log(a.__proto__.hasOwnProperty("__proto__"));

// function print(fn) {
//     console.log(fn);
//     console.log(fn());
// }

// function x() {
//     return 2 + 2;
// }

// // print(x);
// print(x)();
// // print(x());
// let user = {
//     name: "John",
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, "name");

// console.log(descriptor);
// console.log(JSON.stringify(descriptor, null, 2));

// gulp

// let users = [
//     { id: 1, name: "Вася" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" },
// ];

// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter((item) => item.id < 3);

// console.log(someUsers);

// let salaries = {
//     John: 100,
//     Pete: 300,
//     Pete2: 1300,
//     Mary1: 350,
//     Mary: 1350,
//     Anna: 1350,
//     Mary3: 1350,
// };
// let max = 0;
// let maxName = null;

// for (const [name, salary] of Object.entries(salaries)) {
//     if (salary > max) {
//         max = salary;
//         maxName = name;
//     }
// }

// let arr = Object.entries(salaries);

// arr.filter((item) => item[1] == max);
// console.log(arr);

// function Sum(a) {
//     return function (b = 7) {
//         return console.log(a * b);
//         return a + b;
//     };
// }

// Sum(7)();

// let company = {
//     // тот же самый объект, сжатый для краткости
//     sales: [
//         { name: "John", salary: 1000 },
//         { name: "Alice", salary: 600 },
//     ],
//     development: {
//         sites: [
//             { name: "Peter", salary: 2000 },
//             { name: "Alex", salary: 1800 },
//         ],
//         internals: [{ name: "Jack", salary: 1300 }],
//     },
// };
// // subdep
// // Функция для подсчёта суммы зарплат
// function sumSalaries(department) {
//     if (Array.isArray(department)) {
//         return department.reduce((acc, current) => acc + current.salary, 0);
//     } else {
//         let sum = 0;
//         for (const subdep of Object.values(department)) {
//             sum += sumSalaries(subdep);
//         }
//         return sum;
//     }
// }

// console.log(sumSalaries(company)); // 6700

// function sayHi() {
//     console.log("Hi");

//     // давайте посчитаем, сколько вызовов мы сделали
//     sayHi.counter++;
// }
// sayHi.counter = 0; // начальное значение

// sayHi(); // Hi
// sayHi(); // Hi
// sayHi(); // Hi
// sayHi(); // Hi

// console.log(`Вызвана ${sayHi.counter} раза`); // Вызвана 2 раза

// function makeCounter() {
//     // вместо
//     // let count = 0
//     counter.count = 0;

//     function counter() {
//         return counter.count++;
//     }

//     return counter;
// }

// let counter = makeCounter();
// let counter2 = makeCounter();
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 1
// console.log(counter()); // 1

// console.log(counter2()); // 1
// console.log(counter2()); // 1
// console.log(counter2()); // 1

// let sayHi = function func(who) {
//     // let sayHi = function func(who='111') {
//     if (who) {
//         console.log(`Hello, ${who}`);
//     } else {
//         // func("Guest"); // использует func, чтобы снова вызвать себя же
//         sayHi("Guest"); // использует func, чтобы снова вызвать себя же
//     }
// };

// sayHi(); // Hello, Guest

// А вот так - не cработает:
// func(); // Ошибка, func не определена (недоступна вне функции)

// function Cat(type) {
//     this.__proto__.type = type;
// }

// const cat = new Cat("кот");
// console.log(cat.type); // кот
// const cat2 = new Cat("кот2");
// console.log(cat.type); // кот2
// console.log(cat2.type); // кот2

// function CatTwo(type) {}
// CatTwo.prototype.type = "тоже кот";

// const catTwo = new CatTwo("тоже кот");
// console.log(catTwo.type); // тоже кот
// const catTwo2 = new CatTwo("тоже кот2");
// console.log(catTwo.type); // тоже кот
// console.log(catTwo2.type); // тоже кот

// function Book(title) {
//     cover: "paper";
//     this.title = title;
// }
// let myBook = new Book("The Hobbit");

// console.log(myBook);
// console.log(myBook.cover);

// function makeCounter() {
//     let count = 0;
//     function counter() {
//         return count++;
//     }
//     counter.set = (value) => (count = value);
//     counter.decrease = () => count--;

//     return counter;
// }

// let welcome = makeCounter();

// console.log(welcome());
// console.log(welcome.set(12));
// console.log(welcome.decrease());
// console.log(welcome.decrease());
// console.log(welcome.decrease());
// console.log(welcome());
// =========================================================
// function sum(a) {
//     let currentSum = a;

//     function f(b) {
//         currentSum += b;
//         return f;
//     }

//     f.toString = function () {
//         return currentSum;
//     };

//     return f;
// }

// // console.log(sum(1)(2)); // 3
// // console.log(sum(5)(-1)(2)); // 6
// // console.log(sum(6)(-1)(-2)(-3)); // 0
// // console.log(sum(0)(1)(2)(3)(4)(5)); // 15

// // Неявно приведём к строке:
// console.log(sum(1)(2) + ""); // Вывод: '3'
// // Явно приведём к строке:
// console.log(String(sum(1)(2))); // Вывод: '3'

// // Неявно приведём к числу:
// console.log(+sum(1)(2)(3)); // Вывод: 6
// // Явно приведём к числу:
// console.log(Number(sum(1)(2)(3))); // Вывод: 6

// // Явно вызовем метод [[toPrimitive]]
// // console.log(sum(6)(-1)(-2)(-3)[Symbol.toPrimitive]()); // Вывод: 0

// // Используем оператор сравнения:
// console.log(sum(0)(1)(2)(3)(4)(5) == 15); // Вывод: true

// =========================================================

// function sayHi() {
//     console.log("Hi");
//     sayHi.value = 0; // начальное значение

//     // давайте посчитаем, сколько вызовов мы сделали
//     sayHi.counter++;
//     sayHi.value++;
// }
// sayHi.counter = 0; // начальное значение
// let c = sayHi;
// sayHi(); // Hi
// sayHi(); // Hi
// sayHi(); // Hi
// c();
// c();
// c();

// console.log(`Вызвана ${sayHi.value} раза`); // Вызвана 2 раза
// console.log(`Вызвана ${sayHi.counter} раза`); // Вызвана 2 раза
// console.log(`Вызвана ${c.value} раза`); // Вызвана 2 раза
// console.log(`Вызвана ${c.counter} раза`); // Вызвана 2 раза

// say();
// function say() {
//     console.log("say");
// }
// console.log(say2());

// {
//     function say2() {
//         console.log("say");
//     }
//     function makeCounter() {
//         let count = 0;

//         return function () {
//             return count++; // есть доступ к внешней переменной "count"
//         };
//     }

//     let counter = makeCounter();

//     console.log(counter()); // 0
//     console.log(counter()); // 1
//     console.log(counter()); // 2

//     let counter2 = makeCounter();

//     console.log(counter2()); // 0
//     console.log(counter2()); // 1
//     console.log(counter2()); // 2
// }

// function makeCounter() {
//     let count = 0;
//     return function () {
//         return ++count;
//     };
// }

// let counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
