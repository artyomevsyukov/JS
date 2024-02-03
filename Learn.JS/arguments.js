// function example(...args) {
//     let max = Math.max(...args);
//     return console.log(max);
// }

// example(1, 99, 2, 3, 44);
// // Вывод: [1, 'two', true]

// let obj = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(obj).length);

// let obj = { a: 1, b: 2, c: 3 };

// console.log(new Map(Object.entries(obj)).size);

let obj = { a: 1, b: 2, c: 3 };
let size = JSON.stringify(obj).length;
console.log(size);
