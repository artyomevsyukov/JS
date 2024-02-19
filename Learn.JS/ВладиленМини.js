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

function sayHi(a) {
    console.log(this.name + " " + a);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// используем 'call' для передачи различных объектов в качестве 'this'
// sayHi.call(user); // John
user.sayHi = sayHi.call(user, "efsdf");
console.log(user.sayHi);

// user.sayHi = sayHi.call(user, "sdf");
// sayHi.call(admin); // Admin
// user.sayHi();
