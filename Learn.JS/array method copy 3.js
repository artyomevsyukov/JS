// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((user) => user.name);

// console.log(names); // Вася, Петя, Маша
// ========================================

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((item) => ({
//     fullName: `${item.name} ${item.surname}`,
//     id: item.id,
// }));

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// console.log(usersMapped[1].id); // 1
// console.log(usersMapped[1].fullName); // Вася Пупкин

// ========================================

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// function sortByAge(users) {
//     return arr.sort((a, b) => b.age - a.age);
// }

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя

// ========================================

// let arr = [1, 2, 3];

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }

// let count = {
//     123: 0,
//     132: 0,
//     213: 0,
//     231: 0,
//     312: 0,
//     321: 0,
// };

// let array = [1, 2, 3];
// for (let i = 0; i < 10000; i++) {
//     shuffle(array);
//     count[array.join("")]++;
// }

// for (const key in count) {
//     console.log(`${key}:${count[key]}`);
// }

// function f() {
//     return Array.from(arguments);
//   }

// function f(...arg) {
//     return Array.from(arg);
// }

// // [1, 2, 3]
// console.log(f(1, 2, 3, 5, 6, 9));
// ===================================================
// Array.from([1, 2, 3], (x) => x + x);
// // [2, 4, 6]

// Генерирования последовательности чисел
let obj = {
    123: 0,
    132: 0,
    213: 0,
};
console.log(Array.from({ length: 5 }, (v, k) => ({ Object.values(obj): Object.keys(obj) })));
// [0, 1, 2, 3, 4]
