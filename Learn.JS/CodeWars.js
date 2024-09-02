// Вы получаете массив чисел, возвращаете сумму всех положительных чисел.

// Пример [1,-4,7,12]=>1 + 7 + 12 = 20

// Примечание. Если суммировать нечего, сумма по умолчанию равна 0.

// let a = [1, -4, 7, 12];
// const sumPos = (...arg) => {
//     console.log(
//         arg.reduce((prev, curr) => {
//             prev + curr, 0;
//         })
//     );
// };

// sumPos(1, 7, 12);

// function sumOfPositiveNumbers(arg) {
//     let sum = 0;
//     for (let i = 0; i <= arg.length - 1; i++) {
//         if (arg[i] > 0) {
//             sum += arg[i];
//         }
//     }
//     console.log(sum);
// }

// function positiveSum(arr) {
//     let sum = 0;
//     for (let i = 0; i <= arg.length - 1; i++) {
//         if (arr[i] > 0) {
//             sum += arg[i];
//         }
//     }
//     return sum;
// }

// function sumOfPositiveNumbers(...arg) {
//     return console.log(
//         arg.reduce((sum, num) => {
//             if (arg > 0) {
//                 return sum + num;
//             } else return sum;
//         }, 0)
//     );
// }

// const a = [1, -4, 7, 12];
// const b = [0, -4, 0, 0];
// const c = [1, 2, 3, 4, 5];
// const d = [1, -2, 3, 4, 5];
// const e = [];
// const f = [-12, -1, -2, -3, -4, -5];
// const g = [-1, 2, 3, 4, -5];

// const sum = (arg) => {
//     return arg.reduce((prev, curr) => prev + (curr > 0 ? curr : 0), 0);
// };

// console.log(sum(f));

// console.log(sumOfPositiveNumbers(a));
// console.log(sumOfPositiveNumbers(b));
// console.log(sumOfPositiveNumbers(c));
// console.log(sumOfPositiveNumbers(d));
// console.log(sumOfPositiveNumbers(e));
// console.log(sumOfPositiveNumbers(f));
// console.log(sumOfPositiveNumbers(g));

// function sumOfPositiveNumbers(nums) {
//     return nums.reduce((sum, num) => {
//         if (num > 0) {
//             return sum + num;
//         } else {
//             return sum;
//         }
//     }, 0);
// }

// function positiveSum(arr) {
//     return arr.filter((x) => x > 0).reduce((a, b) => a + b, 0);
// }

// ====================================================

// Завершите решение так, чтобы оно перевернуло переданную в него строку.

// 'world' => 'dlrow'
// 'word'  => 'drow'

//========================================================
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/solutions/javascript?filter=all&sort=best_practice&invalids=false

// function solution(str) {
//     let newStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return console.log(newStr);
// }

// solution("Hello");

// const revers = (str) => {
//     let newStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return console.log(newStr);
// };

// revers("olleH");

// function solution(str){
//     return str.split('').reverse().join('');
//   }

// ============================================================
// https://www.codewars.com/kata/5545f109004975ea66000086

// Создайте функцию, которая проверяет, nделится ли число на два числа x И. yВсе входные данные являются положительными, ненулевыми числами.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

// function isDivisible(n, x, y) {
//     if (n % x == 0 && n % y == 0) {
//         return console.log(true);
//     } else {
//         return console.log(false);
//     }
// }
// isDivisible(3, 1, 4);

// function isDivisible(n, x, y) {
//     return n % x === 0 && n % y === 0 ? true : false;
// }

// function isDivisible(n, x, y) {
//     return n % x === 0 && n % y === 0;
// }

//========================================================

// function litres(time) {
//     const water = 0.5;
//     let totalWater = Math.floor(time * water);
//     // return time;
//     return console.log(totalWater);
// }

// litres(1.4);

//======================================================

// function monkeyCount(n) {
//     const arr = [];
//     for (let i = 1; i <= n; i++) {
//         arr.push(i);
//     }
//     return console.log(arr);
// }

// monkeyCount(5);
//======================================================

// function between(a, b) {
//     const arr = [];

//     for (let i = a; i <= b; i++) {
//         arr.push(i);
//     }
//     return console.log(arr);
// }
// between(3, 9);

//======================================================

// function expressionMatter(a, b, c) {
//     const arr = [];
//     let max = Math.max(a, b, c);
//     let min = Math.min(a, b, c);
//     console.log(max, min);
//     if (a == 1 && b == 1 && c == 1) {
//         return a + b + c;
//     }
//     if (a == b && b == c) {
//         return a * (b + c);
//     }
//     if (max > a && a > min) {
//         return max * (min + a);
//     }
//     if (max > b && b > min) {
//         let res = max * (b + min);
//         return res;
//     }
//     if (max > c && c > min) {
//         return max * (c + min);
//     }
// }
// console.log(expressionMatter(12, 8, 2));
// console.log(expressionMatter(1, 1, 1));
// console.log(expressionMatter(2, 2, 2));

// function expressionMatter(a, b, c) {
//     let res = [a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c];
//     return Math.max(...res);
// }
// console.log(expressionMatter(12, 8, 2));
// console.log(expressionMatter(1, 1, 1));
// console.log(expressionMatter(2, 2, 2));
//=============================================================================
// function findMiddle(num1, num2, num3, num4, num5) {
//     let arr = [num1, num2, num3, num4, num5];
//     arr.sort((a, b) => a - b);
//     return console.log(`${arr[2]} , ${arr}`);
// }

// console.log(findMiddle(99, 14, 2, 100, 1231)); // Output: 17

// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// console.log(styles);
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// console.log(styles);
// console.log(styles.shift());
// styles.unshift("Рэп", "Регги");
// console.log(styles);

// let arr = ["a", "b"];

// arr.push(function () {
//     console.log(this);
// });

// arr[2]();
// console.log(arr[2]);

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// function sumInput() {
//     let numbers = [];
//     while (true) {
//         let value = prompt("Введите число", 0);
//         if (value === "" || value === "null" || !isFinite(value)) break;
//         numbers.push(+value);
//     }

//     let sum = 0;
//     for (number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
// alert(sumInput());

// ==================================================================

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
//     for (let item of arr) {
//         partialSum += item;
//         maxSum = Math.max(maxSum, partialSum);
//         if (partialSum < 0) partialSum = 0;
//     }
//     return maxSum;
// }

// console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
// console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
// console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
// console.log(getMaxSubSum([1, 2, 3])); // 6
// console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100

// =========================================================================

// let arr = ["Я", "изучаю", "JavaScript"];

// arr.splice(0, 1); // начин

// console.log(arr);

// let users = [
//     { id: 1, name: "Вася" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" },
// ];

// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter((item) => item.id < 3);

// console.log(someUsers); // 2
// let z = [1, -2, 15, 2, 0, 8];
// z.sort(function (a, b) {
//     console.log(a + " <> " + b);
//     return a - b;
// });
// console.log(z);

// const sum = (...arg) => {
//     let result = 0;
//     for (let i = 0; i <= arg.length - 1; i++) {
//         result += arg[i];
//     }
//     return result;
// };
// console.log(sum(2, 2, 2, 2, 2, 10));

const sum = (...arg) => arg.reduce((prev, curr) => prev + curr);
//     return arg.reduce((prev, curr) => prev + (curr > 0 ? curr : 0), 0);

// return result;

console.log(sum(2, 2, 2, 2, 2, 10));
