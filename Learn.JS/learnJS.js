// const style = ["Джаз", "Блюз"];
// style.push("Рок-н-ролл");
// console.log(style);
// style[Math.floor((style.length - 1) / 2)] = "Классика";
// console.log(style);
// console.log(style.shift());
// style.unshift("Рэп", "Регги");
// console.log(style);

// function sunInput() {
//     let numbers = [];
//     while (true) {
//         let value = prompt("Vvedite 4islo", "");
//         if (value === "" || value === null || !isFinite(value)) break;
//         numbers.push(+value);
//     }
//     let sum = 0;
//     for (const number of numbers) {
//         sum += number;
//     }
//     return console.log(sum);
// }
// sunInput();

// function getMaxSubSum(arr) {
//     maxSum = 0;
//     partSum = 0;
//     for (let item of arr) {
//         partSum += item;
//         maxSum = Math.max(maxSum, partSum);
//         if (partSum < 0) partSum = 0;
//     }
//     return maxSum;
// }

// function getMaxSubSum(arr) {
//     maxSum = 0;
//     partitionSum = 0;
//     for (item of arr) {
//         partitionSum += item;
//         maxSum = Math.max(maxSum, partitionSum);
//         if (partitionSum < 0) partitionSum = 0;
//     }
//     return maxSum;
// }

// console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
// console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
// console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
// console.log(getMaxSubSum([1, 2, 3])); // 6
// console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
// console.log(getMaxSubSum([-1, -2, -3])); // 0

let users = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" },
    { id: 4, name: "Вася" },
];

// Найти индекс первого Васи
console.log(users.findIndex((qr) => qr.name == "Вася")); // 0

// Найти индекс последнего Васи
console.log(users.findLastIndex((user) => user.name == "Вася")); // 3
