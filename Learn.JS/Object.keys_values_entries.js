// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
//     name: "Mary",
// };

// function sumSalaries(obj) {
//     let sum = 0;
//     for (let item of Object.values(obj)) {
//         if (typeof item == "number") {
//             sum += item;
//         }
//     }
//     return sum;
// }
// function sumSalaries(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == "number") {
//             obj[key] *= 2;
//         }
//     }
//     return obj;
// }

// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
//     name: "Mary",
// };

// function sumSalaries(obj) {
//     return Object.values(obj).reduce((sum, value) => {
//         if (typeof value === "number") {
//             return (sum += value);
//         } else {
//             return sum;
//         }
//     }, 0);
// }
// console.log(sumSalaries(salaries)); // 650

// let user = {
//     name: "John",
//     age: 30,
//     age2: 33,
// };

// function count(obj) {
//     return Object.entries(obj).length;
// }

// console.log(count(user)); // 2
