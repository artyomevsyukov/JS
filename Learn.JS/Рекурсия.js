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

// console.log(123 * 123 * 123 * 123);

// console.time("timer_3");
// function sumTo3(n) {
//     return (n * (n + 1)) / 2;
// }
// console.log(sumTo3(10000));
// console.timeEnd("timer_3");

// console.time("timer_2");
// function sumTo2(n) {
//     if (n == 1) {
//         return 1;
//     } else {
//         return n + sumTo2(n - 1);
//     }
// }
// console.log(sumTo2(10000));
// console.timeEnd("timer_2");

// console.time("timer_1");
// function sumTo1(n) {
//     let sum = 0;
//     for (let i = n; i >= 1; i--) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumTo1(10000));
// console.timeEnd("timer_1");

// sumTo(n) = n*(n+1)/2:

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
//         internalsSite: {
//             sales: [
//                 { name: "John", salary: 2000 },
//                 { name: "Alice", salary: 2000 },
//             ],
//             sales33: [
//                 { name: "John", salary: 2000 },
//                 { name: "Alice", salary: 2000 },
//             ],
//         },
//     },
// };

// function sumSalaries(department) {
//     if (Array.isArray(department)) {
//         return department.reduce((sum, curr) => sum + curr.salary, 0);
//     } else {
//         let sum = 0;
//         for (const podOtdel of Object.values(department)) {
//             sum += sumSalaries(podOtdel);
//         }
//         return sum;
//     }
// }

// console.log(sumSalaries(company));

// function sumTo(n) {
//     if (n == 1) {
//         return 1;
//     }
//     return n + sumTo(n - 1);
// }
// console.log(sumTo(100));
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumTo(100));
// function sumTo(n) {
//     return (n * (n + 1)) / 2;
// }
// console.log(sumTo(100));

// function factorial(n) {
//     if (n == 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5)); // 120

// =====================================================================
// Числа Фибоначчи
// важность: 5
// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// // console.log(fib(77)); // 5527939700884757
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null,
//             },
//         },
//     },
// };
// function printList(list) {
//     let tmp = list;
//     while (tmp) {
//         console.log(tmp.value);
//         tmp = tmp.next;
//     }
// }
// printList(list);

// =====================================================================
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null,
//             },
//         },
//     },
// };
// function printList(list) {
//     console.log(list.value);
//     if (list.next) printList(list.next);
// }
// printList(list);

// let company = {
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
//         return department.reduce((acc, curr) => acc + curr.salary, 0);
//     } else {
//         let sum = 0;
//         for (const subdep of Object.values(department)) {
//             sum += sumSalaries(subdep);
//         }
//         return sum;
//     }
// }

// console.log(sumSalaries(company));

// function sumTo(n) {
//     let sum = 0;
//     for (let i = n; i >= 0; i--) {
//         sum += i;
//     }
//     return sum;
// }
// function sumTo(n) {
//     return n == 1 ? n : n + sumTo(n - 1);
// }
// function sumTo(n) {
//     return (n * (n + 1)) / 2;
// }
// console.log(sumTo(100));

// function factorial(n) {
//     return n == 1 ? n : n * factorial(n - 1);
// }
// console.log(factorial(5));
// console.log(factorial(1));
// console.log(factorial(7));
// console.log(factorial(10));

// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// function fib(n) {
//     let a = 1,
//         b = 1;

//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }

// console.log(fib(3));
// console.log(fib(7));
// console.log(fib(77));
// =======================================================================

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null,
//             },
//         },
//     },
// };

// function printList(list) {
//     console.log(list.value);
//     if (list.next) {
//         printList(list.next);
//     }
//     // if (!list.next) {
//     //     console.log(list.value);
//     //     return;
//     // } else {
//     //     console.log(list.value);
//     //     printList(list.next);
//     // }
// }

// function printList(list) {
//     let tmp = list;
//     while (tmp) {
//         console.log(tmp.value);
//         tmp = tmp.next;
//     }
// }

// printList(list);
// =======================================================================

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

// function printList(list) {
//     if (list.next) {
//         printList(list.next);
//     }
//     console.log(list.value);
// }
// printList(list);

function printReverseList(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    // arr.reverse().forEach((e) => console.log(e));
    for (let i = arr.length - 1; i >= 0; --i) {
        console.log(arr[i]);
    }
}

printReverseList(list);
