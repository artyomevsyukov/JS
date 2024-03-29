// let worker = {
//     slow(...args) {
//         let arr = [];
//         let str = "";
//         for (const arg of args) {
//             arr.push(arg);
//             str = arr.join(",");
//         }
//         console.log(`Called with ${str}`);
//         let sum = 0;
//         for (const arg of args) {
//             sum += arg;
//         }
//         // console.log(sum);
//         return sum;
//     },
//     fib(n, z) {
//         return n <= 1 ? n : this.fib(n - 1) + this.fib(z - 2);
//     },
// };
// // worker.slow(3, 4, 5, 1, 12);
// // console.log(worker.slow(3, 4, 5, 1));
// function hash(args) {
//     let str = "";
//     for (const arg of args) {
//         let arr = [];
//         arr.push(arg);
//         str = arr.join(",");
//     }
//     return str;
// }

// function cachingDecorator(func, hash) {
//     let cache = new Map();
//     return function () {
//         let key = hash(arguments); // (*)
//         if (cache.has(key)) {
//             return cache.get(key);
//         }

//         let result = func.call(this, ...arguments); // (**)

//         cache.set(key, result);
//         return result;
//     };
// }

// worker.slow = cachingDecorator(worker.slow, hash);
// // console.log(worker.slow(3, 4, 5, 1, 12)); // работает
// // console.log("Again " + worker.slow(3, 4, 5, 1, 12)); // аналогично (из кеша

// worker.fib = cachingDecorator(worker.fib, hash);
// console.log(worker.fib(2, 3));
// console.log("Again " + worker.fib(2, 3));

// function work(...arg) {
//     // console.log(a + b); // произвольная функция или метод
//     console.log(
//         arg.reduce((acc, el) => {
//             return (acc += el);
//         }, 0)
//     ); // произвольная функция или метод
//     console.log(work.test);
// }
// work.test = "WORK";
// function spy(f) {
//     function wrapper(...arg) {
//         wrapper.calls.push(arg);
//         wrapper.test = "wrapper-test";
//         return f.apply(this, arg);
//         // return f.call(this, ...arg);
//         // return f(...arg);
//     }
//     wrapper.calls = [];
//     return wrapper;
// }

// work = spy(work);

// work(1, 2, 3, 3, 4, 6, 100); // 3
// work(4, 5, 123); // 9

// for (let args of work.calls) {
//     console.log("call:" + args.join()); // "call:1,2", "call:4,5"
// }
// =====================================
// через bind

function work(...arg) {
    // console.log(a + b); // произвольная функция или метод
    console.log(
        arg.reduce((acc, el) => {
            return (acc += el);
        }, 0)
    ); // произвольная функция или метод
    work.test = "WORK";
    console.log(work.test);
}
work.test = "WORK";
function spy(f) {
    function wrapper(...arg) {
        wrapper.calls.push(arg);
        wrapper.test = "wrapper-test";
        // return f.apply(this, arg);
        let bind = f.bind(this, ...arg);
        return bind();
        // return f.call(this, ...arg);
        // return f(...arg);
    }
    wrapper.calls = [];
    return wrapper;
}

work = spy(work);

work(1, 2, 3, 3, 4, 6, 100); // 3
work(4, 5, 123); // 9

for (let args of work.calls) {
    console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}
