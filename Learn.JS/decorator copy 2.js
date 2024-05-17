"use strict";

// function slow(x) {
//     // здесь могут быть ресурсоёмкие вычисления
//     console.log(`Called with ${x}`);
//     return x;
// }

// function cachingDecorator(func) {
//     return func;
// }

// slow = cachingDecorator(slow);
// console.log(slow(7));

// const obj = {
//     name: "dfsdf",
//     age: 32,
// };

// let map = Object.entries(obj);
// console.log(map);

// let newObj = Object.fromEntries(map);
// console.log(newObj);

// let map = new Map();

// map.set(1, "111");
// map.set(2, 222);
// console.log(map.get(1));
// console.log(map.get(2));
// console.log(map.get(3));

//если кэш есть возвраащем его, если нет то запускаем функцию и записываем в кэш результат

// function slow(x) {
//     // здесь могут быть ресурсоёмкие вычисления
//     console.log(`Called with ${x}`);
//     return x;
// }

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

// function cachingDecorator(func) {
//     let cache = new Map();
//     return function (x) {
//         console.log("this =", this);
//         if (cache.has(x)) {
//             console.log("Такой кэш есть", cache.get(x));
//             return cache.get(x);
//         }

//         let result = func.call(this, x);

//         cache.set(x, result);
//         return result;
//     };
// }

// slow = cachingDecorator(slow);

// console.log(slow(1)); // slow(1) кешируем
// console.log("Again: " + slow(1)); // возвращаем из кеша

// console.log(slow(2)); // slow(2) кешируем
// console.log("Again: " + slow(2)); // возвращаем из кеша
// console.log("//////////////////////////////");
// // console.log(worker.slow(1)); // оригинальный метод работает

// worker.slow = cachingDecorator(worker.slow); // теперь сделаем его кеширующим

// console.log(worker.slow(2)); // Ой! Ошибка: не удаётся прочитать свойство 'someMethod' из 'undefined'
// worker.slow(2);
// let newFunc = worker.slow;
// newFunc.call(worker, 2);
// let newFunc2 = slow.bind(worker);
// newFunc2(3);

// function say(phrase) {
//     console.log(this.name + ": " + phrase);
// }

// let user = { name: "John" };

// let newSay = say.bind(user, "Hello"); // John: Hello
// // let newSay = say.bind(user); // John: Hello
// newSay("Hello2");

// function hash(...args) {
//     return args.join(",");
// }
// console.log(hash(123, 34, 345, 4, 661, 56, "fdf"));

// let worker = {
//     slow(...args) {
//         console.log(`Called with ${args}`);
//         return args.reduce((acc, curr) => acc + curr, 0);
//     },
// };

// function cachingDecorator(func, hash) {
//     let cache = new Map();
//     return function (...args) {
//         let key = hash(...args); // (*)
//         if (cache.has(key)) {
//             return cache.get(key);
//         }

//         let result = func.apply(this, args); // (**)

//         cache.set(key, result);
//         return result;
//     };
// }

// worker.slow = cachingDecorator(worker.slow, hash);

// console.log(worker.slow(3, 51, 7, 10)); // работает
// console.log("Again " + worker.slow(3, 2, 7)); // аналогично (из кеша)
// console.log(worker.slow(3, 51, 7, 101, 21));

// function loggingDecorator(func) {
//     return function (...args) {
//         console.log(`Calling ${func.name} with arguments ${args.join(", ")}`);
//         let result = func.apply(this, args);
//         console.log(result);
//         return result;
//     };
// }
// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(5, 5));
// let dec = loggingDecorator(sum);
// dec(5, 5);

// function work(a, b) {
//     console.log(a + b);
// }
// const obj = {
//     age: 22,
//     work(a, b) {
//         console.log(a + b + this.age);
//     },
// };

// function spy(func) {
//     wrapper.calls = [];
//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func.apply(this, args);
//         return func(...args);
//     }
//     return wrapper;
// }
// console.log(obj);
// work = spy(work);
// obj.work2 = spy(obj.work);

// work(1, 2); // 3
// work(4, 5); // 9
// obj.work2(7, 8); // 3
// obj.work2(9, 10); // 9

// for (let args of obj.work2.calls) {
//     console.log("call:" + args.join()); // "call:1,2", "call:4,5"
// }
// console.log(obj.work2.calls);

// function f(x) {
//     console.log(x);
// }

// function delay(f, ms) {
//     return function (...args) {
//         setTimeout(() => f.apply(this, args), ms);
//     };
// }

// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test");
// f1500("test");
// =================================================

// function debounce(func, wait) {
//     let timeout;

//     return function executedFunction(...args) {
//         const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//         };

//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// }

// function handleInput(event) {
//     console.log(event.target.value);
// }

// const debouncedInputHandler = debounce(handleInput, 500);

//   const input = document.querySelector(".input");

// function f(x) {
//     // console.log(x);
//     input.value = event.target.value
// }

// function debounce(f, ms) {
//     return function (...args) {
//         clearTimeout(timer);
//         let timer = setTimeout(() => f.apply(this, args), ms);
//     };
// }

// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test");
// f1500("test");

// function debounce(func, ms) {
//     let timeout;
//     return function () {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(this, arguments), ms);
//     };
// }
