// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
//     // console.log(array.sort(() => Math.random() - 0.5));
//     console.log(array.join(""));
//     console.log(count[array.join("")]++);
// }

// // подсчёт вероятности для всех возможных вариантов
// // let count = {
// //     123: 0,
// //     132: 0,
// //     213: 0,
// //     231: 0,
// //     321: 0,
// //     312: 0,
// // };

// let count = {
//     1234: 0,
//     1243: 0,
//     1324: 0,
//     1342: 0,
//     1423: 0,
//     1432: 0,

//     2134: 0,
//     2143: 0,
//     2314: 0,
//     2341: 0,
//     2413: 0,
//     2431: 0,

//     3241: 0,
//     3214: 0,
//     3124: 0,
//     3142: 0,
//     3421: 0,
//     3412: 0,

//     4123: 0,
//     4132: 0,
//     4213: 0,
//     4231: 0,
//     4321: 0,
//     4312: 0,
// };

// let array = [1, 2, 3, 4];
// for (let i = 0; i < 100000; i++) {
//     shuffle(array);
//     count[array.join("")]++;
// }

// // показать количество всех возможных вариантов
// for (let key in count) {
//     console.log(`${key}: ${count[key]}`);
// }

// =====================================================

// function sumInput() {
//     let numbers = [];
//     while (true) {
//         let value = prompt("Введите число", 0);
//         if (value === null || value === "" || !isFinite(value) || value === "0")
//             break;
//         numbers.push(+value);
//     }
//     let sum = numbers.reduce((sum, curr) => (sum += curr));
//     return sum;
// }

// console.log(sumInput());

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
//     for (let item of arr) {
//         partialSum += item;
//         maxSum = Math.max(maxSum, partialSum);
//         if (partialSum < 0) partialSum = 0;
//     }
//     return console.log(maxSum);
// }

// getMaxSubSum([-1, 2, 3, -9]) == 5;
// getMaxSubSum([2, -1, 2, 3, -9]) == 6;
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11;
// getMaxSubSum([-2, -1, 1, 2]) == 3;
// getMaxSubSum([100, -9, 2, -3, 5]) == 100;
// getMaxSubSum([1, 2, 3]) == 6;

// ===========================================================================
// function getAverageAge(users) {
//     return users.reduce((sum, curr) => sum + curr.age, 0) / users.length;
// }

// let vasya = { name: "Вася", age: 1212 };
// let petya = { name: "Петя", age: 13342 };
// let masha = { name: "Маша", age: 15 };

// let arr = [vasya, petya, masha];

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// ===========================================================================

// function unique(arr) {
//     let result = [];

//     for (const key of arr) {
//         if (!result.includes(key)) {
//             result.push(key);
//         }
//     }
//     return result;
// }

// let strings = [
//     "кришна",
//     "кришна",
//     "харе",
//     "харе",
//     "харе",
//     "харе",
//     "кришна",
//     "кришна",
//     ":-O",
// ];

// console.log(unique(strings)); // кришна, харе, :-O

// ===========================================================================
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((item) => ({
//     fullName: `${item.name} ${item.surname}`,
//     id: item.id,
// }));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // Вася Пупкин
// ===========================================================================

let users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
    { id: "pete", name: "Pete1 Peterson1", age: 32 },
];

function groupById(users) {
    return users.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {});
}

let usersById = groupById(users);
console.log(usersById);

// data = data.reduce((p,c) => { p[c.name] = c; return p; }, {});

// {"guru":{"name":"guru","age":"24"},"guru2":{"name":"guru2","age":"29"}}

/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
// return arr.reduce((obj, value) => {
//   obj[value.id] = value;
//   return obj;
// }, {});
