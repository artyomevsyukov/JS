// "use strict";
// setTimeout(function timeout() {
//     console.log("Таймаут");
// }, 0);

// let p = new Promise(function (resolve, reject) {
//     console.log("Создание промиса");
//     resolve();
// });

// p.then(function () {
//     console.log("Обработка промиса");
// });

// console.log("Конец скрипта");

//1. console.log("Создание промиса");
//2. console.log("Конец скрипта");
//3. console.log("Обработка промиса");
//4. console.log("Таймаут");

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

//1,7
//3,5
//2,6,4
//
//
//mic 3,5
//
//mac 2,6,4
//
//
//
//

// class TestClass {
//     static hello() {
//         console.log("hello class");
//     }
// }
// TestClass.hello();

// const testClass = new TestClass();
// // testClass.hello();

// const Test = function (name) {
//     this.name = name;
// };
// Test.hello = function () {
//     console.log("hello proto static");
// };
// Test.hello();

// const testNew = new Test("Mike");
// console.log(testNew);
// console.log(testNew.name);

// function slow(x) {
//     // здесь могут быть ресурсоёмкие вычисления
//     console.log(`Called with ${x}`);
//     return x;
// }

// function cachingDecorator(func) {
//     let cache = new Map();

//     return function (x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }

//         let result = func(x);

//         cache.set(x, result);

//         return result;
//     };
// }

// slow = cachingDecorator(slow);

// console.log(slow(1)); // slow(1) кешируем
// console.log("Again: " + slow(1)); // возвращаем из кеша

// console.log(slow(2)); // slow(2) кешируем
// console.log("Again: " + slow(2)); // возвращаем из кеша

// function f(x) {
//     console.log(x);
// }

// function delay(func, ms) {
//     return function (...arg) {
//         setTimeout(() => func.apply(this, arg), ms);
//     };
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test 1000"); // показывает "test" после 1000 мс
// f1500("test 1500"); // показывает "test" после 1500 мс

// ============================
// let worker = {
//     slow(min, max) {
//         console.log(`Called with ${min},${max}`);
//         return min + max;
//     },
// };

// function cachingDecorator(func, hash) {
//     let cache = new Map();
//     return function (...arg) {
//         console.log(arg);
//         let key = hash(arg); // (*)
//         if (cache.has(key)) {
//             return cache.get(key);
//         }

//         let result = func.call(this, ...arguments); // (**)

//         cache.set(key, result);
//         return result;
//     };
// }

// function hash(args) {
//     return args[0] + "," + args[1];
// }

// worker.slow = cachingDecorator(worker.slow, hash);

// console.log(worker.slow(3, 5)); // работает
// console.log("Again " + worker.slow(3, 5)); // аналогично (из кеша)

// console.log("arguments", worker.slow.arguments);

// ======================================
// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     console.log(arguments);
//     return total;
// }

// console.log(sum(1, 2, 3)); // Вывод: 6
// console.log(sum(10, 20, 30, 40)); // Вывод: 100

// Без использования строгого режима
// function sum() {
//     console.log(arguments);
// }

// sum(1, 2, 3); // Вывод: [1, 2, 3]

// // С использованием строгого режима
// ("use strict");

// function sum() {
//     console.log(arguments);
// }

// sum(1, 2, 3); // Вывод: null

// let user = {
//     firstName: "Вася",
//     sayHi() {
//         console.log(`Привет, ${this.firstName}!`);
//     },
// };

// setTimeout(user.sayHi, 1000); // Привет, undefined!
// setTimeout(user.sayHi.bind(user), 1000);
// setTimeout(() => user.sayHi(), 1000);
// setTimeout(function () {
//     user.sayHi();
// }, 1000);

// function mul(a, b) {
//     return a * b;
// }

// let double = mul.bind(null, 2);

// console.log(double(3)); // = mul(2, 3) = 6
// console.log(double(4)); // = mul(2, 4) = 8
// console.log(double(5)); // = mul(2, 5) = 10

// function askPassword(ok, fail) {
//     let password = "rockstar1";
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: "Вася",

//     loginOk() {
//         console.log(`${this.name} logged in`);
//     },

//     loginFail() {
//         console.log(`${this.name} failed to log in`);
//     },
// };

// askPassword(() => user.loginOk(), user.loginFail.bind(user));

// function askPassword(ok, fail) {
//     let password = "rockstar1";
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: "John",

//     login(result) {
//         console.log(this.name + (result ? " logged in" : " failed to log in"));
//     },
// };

// askPassword(
//     () => user.login(true),
//     () => user.login(false)
// );

// askPassword(user.login.bind(user, true), user.login.bind(user, false));

// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;

//     // возраст рассчитывается из текущей даты и дня рождения
//     // Object.defineProperty(this, "age", {
//     //     get() {
//     //         let todayYear = new Date().getFullYear();
//     //         return todayYear - this.birthday.getFullYear();
//     //     },
//     // });
//     Object.defineProperty(this, "age", {
//         get age() {
//             let todayYear = new Date().getFullYear();
//             return todayYear - this.birthday.getFullYear();
//         },
//     });
// }

// let john = new User("John", new Date(1992, 6, 1));

// console.log(john.birthday); // доступен как день рождения
// console.log(john.age); // ...так и возраст
// "use strict";
// var b = 7;
// function aaa3sum(a, b) {
//     return a + b;
// }
// const a = 10;
// if (a > b) {
//     function aaaa4sum(a, b) {
//         return a + b;
//     }
// }
// console.log(aaa3sum(3, 4));

// const user = {
//     name: "Вася",
//     age: 20,
//     getName: function () {
//         console.log(this.name);
//         // function canDrink() {
//         //     if (this.age > 18) {
//         //         console.log("yes");
//         //     } else {
//         //         console.log("no");
//         //     }
//         // }
//         const canDrink = () => {
//             const yes = () => {
//                 console.log(this.age, "yes");
//                 const test = () => {
//                     console.log(this.name);
//                 };
//                 test();
//             };
//             const no = () => {
//                 console.log(this.age, "no");
//             };
//             if (this.age > 18) {
//                 yes();
//             } else {
//                 no();
//             }
//         };
//         canDrink();
//     },
// };

// user.getName();

// const company = {
//     name: "AO SPB",
//     obj: {
//         name: "sdfsd",
//         ceo: {
//             name: "Artem",
//             getName: () => {
//                 console.log(this);
//                 console.log(this.name);
//             },
//             getName2() {
//                 console.log(this);
//                 console.log(this.name);
//             },
//         },
//     },
// };

// company.obj.ceo.getName();
// company.obj.ceo.getName2();

// let name = "Вася";
// function sayHi() {
//     console.log(name);
// }

// setTimeout(function () {
//     let name = "Петя";
//     sayHi();
// }, 500);

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// // i = ?
// console.log("i:", i);

// console.log([, [1]][1][0]);

// if (function f() {}) {
//     console.log(typeof f);
// }

// console.log("1"[0]);

// const controller = new AbortController();

// const { signal } = controller;
// console.log(signal);

// const arr = [2, 5, 10, -65, 100];

// const newArr = arr.map((e) => e * 60);
// console.log(arr);
// console.log(newArr);

// const newArrF = arr.forEach((e) => e * 60);
// console.log(arr);
// console.log(newArrF);

// let x = 1;

// function fun() {
//     console.log(x);
//     let x = 2;
// }
// fun();

// if (true) {
// var a = 2;
// let a = 2;
// }
// console.log(a);

const obj = {
    name: "obj",
    sum(a, b) {
        console.log(a + b);
        return a + b;
    },
    timer() {
        // setTimeout(() => this.sum(1, 2), 500);
        // setTimeout(this.sum.bind(this), 500, 2, 2);
        // setTimeout(this.sum.bind(this, 1, 2), 500);
        setTimeout(this.sum, 500, 1, 2);
        setTimeout(this.sum.bind(this, 1, 2), 500);
        setTimeout(() => this.sum(1, 2), 500);
    },
    timer2(a, b) {
        // setTimeout(() => this.sum(a, b), 500);
        // setTimeout(this.sum.bind(this), 500, a, b);
        // setTimeout(this.sum.bind(this, a, b), 500);
        setTimeout(this.sum, 500, a, b);
    },
};

// setTimeout(() => obj.sum(1, 2), 500);
// setTimeout(obj.sum, 500, 1, 2);
obj.timer();
obj.timer2(3, 3);
