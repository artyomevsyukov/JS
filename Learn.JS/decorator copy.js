"use strict";

// function work(a, b) {
//     work.calls = work.calls || [];
//     work.calls.push([a, b]);
//     console.log(a + b);
// }

// work(1, 2); // Вывод: 3
// work(4, 5); // Вывод: 9

// console.log(work.calls);
// for (let args of work.calls) {
//     console.log("call:" + args.join()); // "call:1,2", "call:4,5"
// }
// function exampleFunction() {
//     console.log(this);
// }
// let contextObject = { key: "value" };
// exampleFunction.call(contextObject); // this будет указывать на contextObject

// let arrowFunction = () => {
//     console.log(this);
// };
// arrowFunction(); // this будет зависеть от контекста, в котором определена arrowFunction

function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}

// function spy(func) {
//     wrapper.calls = [];
//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func(...args);
//     }
//     return wrapper;
// }

// function spy(func) {
//     return function wrapper(...args) {
//         wrapper.calls = [];
//         wrapper.calls.push(args);
//         return func(...args);
//     };
// }

// function spy(func) {
//     wrapper.calls = [];
//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func(...args);
//     }
//     return wrapper;
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//     console.log("call:" + args.join()); // "call:1,2", "call:4,5"
// }
