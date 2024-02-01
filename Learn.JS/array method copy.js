// function camelize(str) {
//     return str
//         .split("-")
//         .filter((item) => item !== "")
//         .map((item, index) =>
//             index == 0 ? item : item[0].toUpperCase() + item.substring(1)
//         )
//         .join("");
// }
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// let arr = [9, 99, 2, 5, 3, 8, 1];

// function filterRange(arr, a, b) {
//     return arr.filter((item) => (item >= a) & (item <= b));
// }

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // 3,1 (совпадающие значения)

// console.log(arr); // 5,3,8,1 (без изменений)

// let arr = [5, 3, 8, 1];
// function filterRangeInPlace(arr, a, b) {
//     // return arr.filter((item) => item >= a && item <= b);
//     for (let i = 0; i <= arr.length; i++) {
//         let item = arr[i];
//         if (item < a || item > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// console.log(arr); // [3, 1]
// =======================================================================
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr); // 8, 5, 2, 1, -10
// =======================================================================
// let arr = ["HTML", "JavaScript", "CSS"];

// // function copySorted(arr) {
// //     return arr.sort();
// // }
// let sort = (arr) => arr.slice().sort();

// // let sort = function (arr) {
// //     return arr.slice().sort();
// // };
// // let sorted = copySorted(arr);
// let sorted = sort(arr);

// console.log(arr); // HTML, JavaScript, CSS (без изменений)
// console.log(sorted); // CSS, HTML, JavaScript
// =========================================================================
// function Calculator() {
//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b,
//     };
//     this.calculate = function (str) {
//         // let split = str.split(" ");
//         // let a = +split[0];
//         // let op = split[1];
//         // let b = +split[2];
//         let split = str.split(" "),
//             a = +split[0],
//             op = split[1],
//             b = +split[2];
//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }
//     };
//     // console.log(this.methods[op](a, b));
//     return this.methods[op](a, b);
// }

// let calc = new Calculator();
// console.log(calc.calculate("3 + 7")); // 10
// =========================================================================

// function Calculator() {
//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b,
//     };

//     this.calculate = function (str) {
//         let split = str.split(" "),
//             a = +split[0],
//             op = split[1],
//             b = +split[2];

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return this.methods[op](a, b);
//     };

//     this.addMethod = function (name, func) {
//         this.methods[name] = func;
//     };
// }
// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log(result); // 8
// console.log(powerCalc);
// ==============================================

// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((item, index) => (item = item.name));

// console.log(names); // Вася, Петя, Маша
// =============================================================================

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;
// for (const key in salaries) {
//     sum += salaries[key];
// }

// for (const value of Object.values(salaries)) {
//     sum += value;
// }

console.log(sum);
