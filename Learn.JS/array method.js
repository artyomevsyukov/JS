// "use strict";
// function compare(a, b) {
//     if (a > b) return 1; // если первое значение больше второго
//     if (a == b) return 0; // если равны
//     if (a < b) return -1; // если первое значение меньше второго
// }

// const arr = [
//     2, 1, 19, 32, 546, 32, 145, 547, 3, 1, 35, 5, 6, 7, 8, 111111, 111, 11,
// ];
// console.log(arr);
// // arr.sort(compare);
// arr.sort((a, b) => a - b);
// // arr.sort();
// console.log(arr);
// let arr1 = ["dfgg", "sdfsa"];
// arr1[0];

// Задача 1

// function camelize(str) {
//     return str
//         .split("-")
//         .filter((item) => item !== "")
//         .map((item, index) =>
//             index == 0 ? item : item[0].toUpperCase() + item.substring(1)
//         )
//         .join("");
// }
// console.log(camelize("background-color-set-time-interval"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// Задача 2

// let arr = [5, 3, 8, 1, 5, 4, 3];
// function filterRange(arr, a, b) {
//     return arr.filter((item) => item >= a && item <= b);
// }

// let filtered = filterRange(arr, 1, 4);
// console.log(filtered); // Изменен
// console.log(arr); // Без изменений

// // Задача 3
// let arr = [5, 3, 8, 1];
// console.log(arr, "Без изменений"); // Без изменений

// function filterRangeInPlace(arr, a, b) {
//     let newArr = arr.filter((item) => item >= a && item <= b);
//     return newArr;
// }
// filterRangeInPlace(arr, 1, 4);
// console.log(filterRangeInPlace(arr, 1, 4));
// console.log(arr, "Изменен"); // Без изменений
// // splice(pos, deleteCount, ...items);

// let arr = [5, 3, 8, 1];
// console.log(arr, "Без изменений"); // Без изменений
// const filterRangeInPlace = (arr, a, b) => {
//     let newArr = arr.filter((item) => item >= a && item <= b);
//     console.log(newArr, "Func"); // Без изменений

//     return (arr = arr.splice(newArr));
// };
// filterRangeInPlace(arr, 1, 4);

// console.log(arr, "Изменен"); // Изменен

// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         let srav = arr[i];
//         if (srav < a || srav > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// Задача 4

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);
// // let arr = [5, 2, 1, -10, 8];
// // arr.sort((a, b) => a - b).reverse();
// // console.log(arr);

// Задача 5

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let sorted = copySorted(arr);

// console.log(arr); // HTML, JavaScript, CSS (без изменений)
// console.log(sorted); // CSS, HTML, JavaScript

//Задача 6

// let calc = new Calculator;

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let userName = new User("Jack");

// console.log(userName.name); // Jack
// console.log(userName.isAdmin); // false

//========================================================================================

// Создать расширяемый калькулятор
// важность: 5
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// function Calculator() {
//     this.calculate = function (str) {
//         str.split(" ");
//         return str.includes("+" || "-");
//     };
// }

// let calc = new Calculator();
// // calc.calculate("3 + 7");
// console.log(calc.calculate("3 + 7")); // 10

// function camelize(str) {
//     return str
//         .split("-")
//         .filter((item) => item !== "")
//         .map((item, index) =>
//             index == 0 ? item : item[0].toUpperCase() + item.substring(1)
//         )
//         .join("");
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
//
//
//
//
//
//
//
//
//

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

// let fibo = [1, 1];

// for (let i = 1; i < 49; i++) {
//     fibo.push(fibo[i] + fibo[i - 1]);
// }
// console.log(fibo);

// let reit = ["Sveta", "katia", "masha", "dasha"];
// console.log("Reiting studentov");

// for (let re in reit) {
//     console.log(`${parseInt(re) + 1} mesto: ${reit[re]}`);
// }

// let teaValue = 200;
// console.log(`Vbl nalili seve ${teaValue}ml 4aia \n  `);

// while (teaValue > 0) {
//     teaValue -= 10;
//     console.log(`в чашке осталось ${teaValue}ml чая`);
// }
// console.log("Чай закончился");

// do {
//     console.log("Нажмите на курок");
// } while (Math.random() > 0.2);

// console.log("Вам не повезло");

// let cards = ["король", "1", "2", "6", "туз", "дама", "король", "2"];
// let hand = [];

// for (let card of cards) {
//     if (card !== "дама" && card !== "туз") continue;
//     hand.push(card);
//     console.log(`Вы добавили карту ${card}`);
// }
// console.log("В колоде сейчас", hand);

// let cards = ["король", "1", "2", "6", "туз", "дама", "король", "2"];
// console.log("Мы ищем Даму");
// let found = false;
// for (let card of cards) {
//     console.log(`Из колоды вытащена карта ${card}`);
//     if (card == "дама") {
//         found = true;
//         break;
//     }
// }
// console.log(found ? "Есть" : "Нет");

// let cards = ["король", "1", "2", "6", "туз", "дама", "король", "2"];

// cards.forEach((el) => console.log("* " + el + " *"));
// let cards = ["король", "1", "2", "6", "туз", "дама", "король", "2"];
// // let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(cards);

// cards = cards.map((el) => "* " + el + " *");
// console.table(cards);

// const obj1 = {
//     name: "231",
//     age: 21,
// };

// const obj2 = Object.assign({}, obj1);
// const obj3 = { ...obj1 };
// const obj4 = JSON.parse(JSON.stringify(obj1));
// obj3.age = 111;
// obj4.name = "sfsdfsdfdffdsf";
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);

// let json = JSON.stringify(obj1);
// console.log(json);
// console.log(JSON.parse(json));

// function ask(question, yes, no) {
//     // if (confirm(question)) yes();
//     // else no();
//     confirm(question) ? yes() : no() ?? alert("отмена");
// }

// function showOk() {
//     alert("Вы согласны.");
// }

// function showCancel() {
//     alert("Вы отменили выполнение.");
// }

// // использование: функции showOk, showCancel передаются в качестве аргументов ask
// ask("Вы согласны?", showOk);

// let a = 10;
let b;
// console.log(a);
function myFn() {
    let b;
    // let a;
    a = true;
    b = 10;
    console.log(b);
}
myFn();
console.log(b);
console.log(a);
