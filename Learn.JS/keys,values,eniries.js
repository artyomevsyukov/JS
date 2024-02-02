// Для объекта
// из объекта массив

// const object1 = {
//     a: "somestring",
//     b: 42,
// };

// for (const [key, value] of Object.entries(object1)) {
//     // console.log(`${key}: ${value}`);
// }
// console.log(Object.entries(object1));
// console.log(Object.keys(object1));
// console.log(Object.values(object1));

// Преобразование Array в Object

// const arr = [
//     ["0", "a"],
//     ["1", "b"],
//     ["2", "c"],
// ];
// const obj = Object.fromEntries(arr);
// console.log(obj); // { 0: "a", 1: "b", 2: "c" }

// function sumSalaries(salaries) {
//     let sum = 0;
//     // for (const value of Object.values(salaries)) {
//     //     sum += value;
//     // }
//     // return sum;
//     return (sum = Object.values(salaries).reduce(
//         (sum, price) => sum + price,
//         0
//     ));
// }

// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
// };

// console.log(sumSalaries(salaries)); // 650

// let user = {
//     name: "John",
//     age: 30,
// };

// function count(obj) {
//     return Object.entries(obj).length;
// }

// console.log(count(user)); // 2
