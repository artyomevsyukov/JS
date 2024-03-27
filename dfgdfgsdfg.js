// const str = "привет что ты здесь делаешь?";
// console.log(str);
// console.log(str.split("е").join("ё"));

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newNumbers = [...numbers];
// while (newNumbers.length) {
//     console.log(`На каждой итерации цикла ${newNumbers.pop()}`);
// }
// console.log(numbers);

// function parseEmpoyeesDate(dataString) {
//     return dataString.split("\n").filter((line) => line.lengrh > 0);
// }
// console.log(
//     parseEmpoyeesDate(`Тиунов Тимофей    Сергеевич,    системный архитектор
// Иванов Иван Иванович  .  Frontend-разработчик
// `)
// );

// const purchase = [
//     { name: "Laptop", price: 1500 },
//     { name: "Keyboard", price: 100 },
//     { name: "Mouse", price: 50 },
//     { name: "Mic", price: 15 },
// ];
// const re = purchase.find((item) => item.name === "Mic");
// console.log(re);

// const factorial = (n) => {
//     console.log({ n });
//     if (n == 0) {
//         console.log(`${n}! = 1`);
//         return 1;
//     } else {
//         const result = n * factorial(n - 1);
//         console.log(`${n}! = ${result}`);
//         return result;
//     }
// };
// console.log(factorial(5));

// const getMaxCallStackSize = (i) => {
//     // try {
//     //     return getMaxCallStackSize(++i);
//     // } catch () {
//     //     return i;
//     // }
//     try {
//         return getMaxCallStackSize(++i);
//     } catch (error) {
//         return i;
//     }
// };

// console.log(getMaxCallStackSize(0));

// function countDown(i) {
//     // console.log(i);
//     if (i <= 0) {
//         return;
//     }
//     countDown(i - 1);
//     console.log(i);
// }
// countDown(5);

// let x = 2 + 4;
// let z = 2;
// const arr = [1, 2, 3, 4, 5, 6, 7];

// const res = arr.reduce((acc, el) => {
//     return acc + el;
// });

// console.log(res);

const arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.myReduce = function (arr, initialValue, indexArr, currentArr) {
    let acc = initialValue;

    let index = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        acc += arr[i];
    }
    console.log(index);
    return acc;
};

console.log(arr.myReduce(arr, 0));
