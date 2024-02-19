// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let anna = { name: "Анна", age: 20 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha, anna];

// function sortByAge(arr) {
//     return arr.sort((a, b) => a.name.localeCompare(b.name));
//     return arr.sort((a, b) => a.age - b.age);
//     return arr.sort((a, b) => (a.name > b.name ? 1 : -1));
//     return arr.sort((a, b) => (a.age > b.age ? 1 : -1));
// }

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя
// console.log(arr[3].name); // Петя

// let str = "qwr       wegfg342     rfsd fsdg";
// // console.log(Array.from(str));
// // Array.from(str).join("");
// let newStr = str.split(" ").join("");
// // newStr.join(";");
// console.log(newStr);
// // console.log(str);

// function delSpace(str) {
//     let arr = Array.from(str);
//     let newArr = [];
//     let stroka = "";
//     for (const el of arr) {
//         if (el == " ") continue;
//         newArr.push(el);
//         stroka = newArr.join("");
//         // console.log(newArr);
//         // console.log(stroka);
//     }
//     return console.log(stroka);
// }
// // return console.log(arr);

// delSpace(str);

// ==================================

// function f() {
//     return Array.from(arguments);
// }

// f(1, 2, 3);
// // [1, 2, 3]
// ==================================================
// function hash(...args) {
//     let sum = 0;
//     for (const arg of args) {
//         sum += arg;
//     }
//     return sum;
// }
// console.log(hash(3, 7, 5, 10, 5));

function hash(...args) {
    let arr = [];
    let str = "";
    for (const arg of args) {
        arr.push(arg);
        str = arr.join(",");
    }
    return str;
}
console.log(hash(3, 2, 45, 654, 7, 568, 78, 67, 68));
let key = hash();
console.log(key);
