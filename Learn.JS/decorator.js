"use strict";
// function slow(x) {
//     console.log(`Called with ${x}`);
//     return x * 2352525 ** 2;
// }

// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// function cachingDecorator(func) {
//     let cache = new Map();

//     return function (x) {
//         if (cache.has(x)) {
//             // если кеш содержит такой x,
//             return cache.get(x); // читаем из него результат
//         }

//         let result = func(x); // иначе, вызываем функцию

//         cache.set(x, result); // и кешируем (запоминаем) результат
//         return result;
//     };
// }

// sl = cachingDecorator(slow);
// f = cachingDecorator(fib);

// // console.log(sl(34)); // slow(1) кешируем
// // console.log("Again: " + sl(34)); // возвращаем из кеша

// // console.log(sl(57)); // slow(2) кешируем
// // console.log("Again: " + sl(57)); // возвращаем из кеша

// console.log(f(41));
// console.log(f(42));
// console.log("Again: " + f(41)); // возвращаем из кеша
// console.log("Again: " + f(42)); // возвращаем из кеша
// ===============================================================================
// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
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
// let f = cachingDecorator(fib);
// console.log(f(43));
// console.log("Again: " + f(43)); // возвращаем из кеша
// console.log(f(44));
// console.log("Again: " + f(44)); // возвращаем из кеша
// ===============================================================================

// let worker = {
//     somMethod() {
//         return 1;
//     },
//     fib(n) {
//         // console.log("Called with " + n);
//         return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//     },
// };

// function cachingDecorator(func) {
//     let cache = new Map();

//     return function (x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func.call(this, x);
//         cache.set(x, result);
//         return result;
//     };
// }
// let f = cachingDecorator(worker.fib);
// worker.fib = cachingDecorator(worker.fib);
// console.log(worker.fib(41));

// console.log(f(42));
// console.log("Again: " + f(42)); // возвращаем из кеша
// console.log(f(44));
// console.log("Again: " + f(44)); // возвращаем из кеша

// let worker = {
//     someMethod() {
//         return 1;
//     },

//     slow(x) {
//         console.log("Called with " + x);
//         return x * this.someMethod(); // (*)
//     },
//     fib(n) {
//         return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
//     },
// };

// function cachingDecorator(func) {
//     let cache = new Map();
//     return function (x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func.call(this, x); // теперь 'this' передаётся правильно
//         cache.set(x, result);
//         return result;
//     };
// }

// worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей

// console.log(worker.slow(2)); // работает
// console.log(worker.slow(2));

// worker.fib = cachingDecorator(worker.fib);
// console.log(worker.fib(94));

// console.log(worker.fib(42));
// console.log("Again: " + worker.fib(42)); // возвращаем из кеша
// console.log(worker.fib(44));
// console.log("Again: " + worker.fib(44)); // возвращаем из кеша

// ......................................................Задачи..........................................
// function work(a, b) {
//     console.log(a + b); // произвольная функция или метод?
// }
// function spy(func) {
//     return function wrapper(a, b) {
//         work.calls = work.calls || [];
//         work.calls.push([a, b]);
//         console.log(a + b);
//     };
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//     console.log("call:" + args.join()); // "call:1,2", "call:4,5"
// }

// ......................................................Задачи..........................................
// function work(a, b) {
//     console.log(a + b); // произвольная функция или метод?
// }
// function spy(func) {
//     function wrapper(...args) {
//         work.calls = work.calls || [];
//         wrapper.calls.push(args);
//         console.log("kontekst: ", this);
//         return func.apply(this, args);
//         // return func.apply(this, args);
//     }
//     // wrapper.calls = [];
//     return wrapper;
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//     console.log("call:" + args.join()); // "call:1,2", "call:4,5"
// }
// ......................................................Задачи..........................................
// ......................................................Задачи..........................................
// ......................................................Задачи..........................................

// let worker = {
//     someMethod() {
//         return 1;
//     },

//     slow(x) {
//         console.log("Called with " + x);
//         return x * this.someMethod(); // (*)
//     },
// };

// function cachingDecorator(func) {
//     let cache = new Map();
//     return function (x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func.call(this, x); // теперь 'this' передаётся правильно
//         cache.set(x, result);
//         return result;
//     };
// }

// worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей

// console.log(worker.slow(2)); // работает
// console.log(worker.slow(2)); // работает, не вызывая первоначальную функцию (кешируется)

// ==========================
// let arr = [1, 2, 3, 4, 5, 6];
// function spred(arr) {
//     console.log("spred");
//     console.log(arr);
//     console.log(...arr);
//     console.log("/n");
// }
// spred(arr);

// function rest(...arr) {
//     console.log("rest");
//     console.log(arr);
//     console.log(...arr);
// }
// rest(arr);
// ======================================================================

// let worker = {
//     // slow(min, max) {
//     //     console.log(`Called with ${min},${max}`);
//     //     return min + max;
//     // },
//     slow(...args) {
//         console.log(args);
//         console.log(`Called with ${args}`);
//         return args.reduce((acc, el) => acc + el, 0);
//     },
// };
// // function hash(...args) {
// //     return args.join();
// //     // return args[0] + "," + args[1];
// // }
// function hash() {
//     return [].join.call(arguments);
//     // return args[0] + "," + args[1];
// }

// function cachingDecorator(func, hash) {
//     let cache = new Map();
//     return function (...args) {
//         // return function () {
//         // let key = hash(arguments); // (*)
//         let key = hash(...args); // (*)
//         if (cache.has(key)) {
//             return cache.get(key);
//         }

//         let result = func.apply(this, args); // (**)
//         // let result = func.call(this, ...args); // (**)
//         // let result = func.call(this, ...arguments); // (**)

//         cache.set(key, result);
//         return result;
//     };
// }

// worker.slow = cachingDecorator(worker.slow, hash);

// console.log(worker.slow(3, 5, 6)); // работает
// console.log("Again " + worker.slow(3, 5, 6)); // аналогично (из кеша)

// ======================================================================

// function originalFunction(message) {
//     console.log(`Original function: ${message}`);
// }

// function decoratorFunction(message) {
//     console.log(`Decorator function: ${message}`);
//     // Передача вызова оригинальной функции
//     originalFunction.call(this, message);
//     worker.slow.call(this, message);
//     // originalFunction.call(this, message);
// }

// // Использование декоратора
// decoratorFunction("Hello, world!");
// ==========================================

// function work(a, b) {
//     console.log(a + b); // произвольная функция или метод
// }

// function spy(func) {
//     wrapper.calls = [];

//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func.apply(this, args);
//     }

//     return wrapper;
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9
// work(7, 12); // 3
// for (let args of work.calls) {
//     console.log("call:" + args.join()); // "call:1,2", "call:4,5"
// }
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

// function work(a, b) {
//     console.log(a + b); // произвольная функция или метод
// }
// function spy(func) {
//     wrapper.calls = [];
//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func.apply(this, args);
//     }
//     return wrapper;
// }
// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//     console.log("call:" + args.join()); // "call:1,2", "call:4,5"
// }

// сделаем worker.slow кеширующим
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
//         let result = func.call(this, x);
//         cache.set(x, result);
//         return result;
//     };
// }

// worker.slow = cachingDecorator(worker.slow);

// console.log(worker.slow(1)); // slow(1) кешируем
// console.log("Again: " + worker.slow(1)); // возвращаем из кеша

// console.log(worker.slow(2)); // slow(2) кешируем
// console.log("Again: " + worker.slow(2)); // возвращаем из кеша

// ===============================================================
// function f(x) {
//     console.log(x);
// }
// function delay(f, ms) {
//     return function (...args) {
//         let saveThis = this;
//         setTimeout(function () {
//             f.apply(saveThis, args);
//         }, ms);
//     };
// }

// // создаём обёртки
// let f1000 = delay(f, 500);
// let f1500 = delay(f, 2500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс
// ===============================================================
function f(x) {
    console.log(x);
}

function debounce(f, ms) {
    let zadershka = "?";
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

let f = debounce(f, 1000);

f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);

// ===============================================================
