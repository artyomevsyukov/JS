// // arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // function sum(arr) {
// //     if (arr.length === 0) {
// //         return 0;
// //     } else {
// //         console.log(arr);
// //         return arr[0] + sum(arr.slice(1));
// //     }
// // }
// // console.log(arr.slice(1));
// // console.log(arr.slice(2));
// // console.log(sum(arr));

// let company = {
//     // тот же самый объект, сжатый для краткости
//     sales: [
//         { name: "John", salary: 1000 },
//         { name: "Alice", salary: 600 },
//     ],
//     development: {
//         sites: [
//             { name: "Peter", salary: 2000 },
//             { name: "Alex", salary: 1800 },
//         ],
//         internals: [{ name: "Jack", salary: 1300 }],
//     },
// };

// function sumSalaries(department) {
//     if (Array.isArray(department)) {
//         return department.reduce((prev, current) => prev + current.salary, 0);
//     } else {
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum += sumSalaries(subdep);
//         }
//         return sum;
//     }
// }
// console.log(sumSalaries(company));
// console.log(Object.values(company));

// function pow(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

console.log(123 * 123 * 123 * 123);

console.time("timer_3");
function sumTo3(n) {
    return (n * (n + 1)) / 2;
}
console.log(sumTo3(10000));
console.timeEnd("timer_3");

console.time("timer_2");
function sumTo2(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumTo2(n - 1);
    }
}
console.log(sumTo2(10000));
console.timeEnd("timer_2");

console.time("timer_1");
function sumTo1(n) {
    let sum = 0;
    for (let i = n; i >= 1; i--) {
        sum += i;
    }
    return sum;
}
console.log(sumTo1(10000));
console.timeEnd("timer_1");

// sumTo(n) = n*(n+1)/2:
