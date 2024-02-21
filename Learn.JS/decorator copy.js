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
function exampleFunction() {
    console.log(this);
}
let contextObject = { key: "value" };
exampleFunction.call(contextObject); // this будет указывать на contextObject

let arrowFunction = () => {
    console.log(this);
};
arrowFunction(); // this будет зависеть от контекста, в котором определена arrowFunction
