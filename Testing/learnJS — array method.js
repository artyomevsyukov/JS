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
