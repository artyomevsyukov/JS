// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// console.log(styles);

// styles[Math.floor(styles.length - 1 / 2)] = "Классика";
// console.log(styles);

// console.log(styles.shift());
// console.log(styles);
// styles.unshift("Рэп", "Регги");
// console.log(styles);

// function sumInput() {
//     let numbers = [];

//     while (true) {
//         let value = prompt("Введите число", 0);

//         // Прекращаем ввод?
//         if (value === "" || value === null || !isFinite(value)) break;

//         numbers.push(+value);
//     }

//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }

// console.log(sumInput());

function getMaxSubSum(arr) {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }
    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([100, -9, 22, -3, 6])); // 100
