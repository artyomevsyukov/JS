// const person = {
//     name: "Max",
//     age: 25,
//     greet: function () {
//         console.log("object");
//     },
// };

// person.greet();

// let worker = {
//     someMethod() {
//         return 1;
//     },

//     slow(x) {
//         // здесь может быть страшно тяжёлая задача для процессора
//         console.log("Called with " + x);
//         return x * this.someMethod(); // (*)
//     },
// };

// // тот же код, что и выше
// function cachingDecorator(func) {
//     let cache = new Map();
//     return function (x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func.call(this, x); // (**)
//         cache.set(x, result);
//         return result;
//     };
// }

// console.log(worker.slow(1)); // оригинальный метод работает

// // worker.slow = cachingDecorator(worker.slow); // теперь сделаем его кеширующим

// console.log(worker.slow(2)); // Ой! Ошибка: не удаётся прочитать свойство 'someMethod' из 'undefined'
// cachingDecorator(worker.slow(15));
// ==========================================

// function sayHi(a) {
//     console.log(this.name + " " + a);
// }

// let user = { name: "John" };
// let admin = { name: "Admin" };

// // используем 'call' для передачи различных объектов в качестве 'this'
// // sayHi.call(user); // John
// user.sayHi = sayHi.call(user, "efsdf");
// console.log(user.sayHi);

// user.sayHi = sayHi.call(user, "sdf");
// sayHi.call(admin); // Admin
// user.sayHi();

// const person1 = { name: "Artem", age: 22, job: "front" };
// const person2 = { name: "Lena", age: 32, job: "SMM" };
// const person3 = { 1: 10, 2: 20, 3: 30, 4: 40, 5: 50 };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function logPerson() {
//     console.group("Person info");
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
//     console.groupEnd;
// }
// function logSum(a = 2, b = 1, c = 3, d = 10) {
//     return console.log((a + b + c) * d);
// }
// logSum(1, 2, 3, 4);

// // const z = logPerson.call(person1);
// // const x = logPerson.bind(person2);

// // x();

// function bind(context, fn) {
//     return function (...args) {
//         fn.apply(context, args);
//     };
// }

// bind(arr, logSum)();
// bind(person3, logSum)();
// bind(person1, logPerson)();

// function bind(context, fn) {
//     return function (...args) {
//         fn.apply(context, args);
//     };
// }

// bind(person1, logPerson)();
// const per1 = bind(person2, logPerson);
// per1();

// function createCalcFunction(n) {
//     return function (z) {
//         console.log(1000 * n * z);
//     };
// }

// // let t = createCalcFunction(42);
// // t();
// let c = createCalcFunction(4);
// c(2);
// ==============================================================================
// function urGenerator(domain) {
//     return function (url) {
//         console.log(`https://www.${url}.${domain}`);
//     };
// }

// let urlCom = urGenerator("com");
// urlCom("google");
// let urlru = urGenerator("ru");
// urlru("yandex");

// ==================================Деструктуризация=================================

// function calc(a, b, c) {
//     return [a + b, a * b, a - c, a / c];
// }

// // let result = calc(3, 7);

// let [mult, sum, dec, del = "неизвестно"] = calc(3, 7, 1);
// // console.log(result);
// console.log(mult, sum, dec, del);

// ==============================================================================
// function calc(a, b, c) {
//     return {
//         mult: a * b * c,
//         sum: a + b + c,
//         dec: b - c - a,
//     };
// }

// // let result = calc(3, 7);

// let { mult, sum, dec } = calc(3, 7, 1);
// // console.log(result);
// console.log(mult, sum, dec);

// const obj = {
//     Moscow: 20,
//     Piter: 8,
// };
// let arr = [1, 2, 3, 4, 5, 6, 7];

// let z = { ...obj };
// // console.log(Math.max(...arr));
// console.log(Math.max.apply(null, arr));
// Math.max();
// // console.log({ ...obj });
// function sum(a, b) {
//     return a + b;
// }
// sum(2, 3);

// ................................REST....................................
// let arr = [1, 23, 4, 5, 6, 7, 8, 679];
// function sum(a, b, ...rest) {
//     console.log(rest); // arr []
//     console.log(...rest); // ell 1,2,3

//     return console.log(a + b + rest.reduce((acc, el) => acc + el, 0));
// }
// // sum(2, 2, 4, 5, 6);
// sum(1, 2, ...arr);

// const [a, b, ...other] = arr;
// console.log(a, b, other);

const obj = {
    name: "max",
    age: 24,
    city: "Piter",
    country: "Russia",
};

const { name: FirstName, age, car = "Нет машины", ...other } = obj;
console.log(FirstName, age, car);
console.log(other);
// console.log(other);
