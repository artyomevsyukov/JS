// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
// };
// // function sumSalaries(obj) {
// //     let sum = 0;
// //     for (const values of Object.values(obj)) {
// //         sum += values;
// //     }
// //     return sum;
// // }
// function sumSalaries(obj) {
//     return Object.values(obj).reduce((sum, value) => sum + value, 0);
// }
// console.log(sumSalaries(salaries)); // 650
// // ==========================================================

let user = {
    name: "John",
    name1: "John",
    name2: "John",
    age: 30,
};

function count(obj) {
    return Object.keys(obj).length;
}

console.log(count(user)); // 2
