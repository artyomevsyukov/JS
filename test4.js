// const obj = {
//     title: "Conference",
//     room: 23,
// };

// console.log(obj);

// console.log(JSON.stringify(obj));

// const uniqueInOrder = function (iterable) {
//     const newArr = [];
//     let marker = "";
//     for (const el of iterable) {
//         if (el !== marker) {
//             newArr.push(el);
//             marker = el; // Обновляем marker на текущий элемент
//         }
//     }
//     return newArr;
// };

// console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ["A", "B", "C", "D", "A", "B"];
// console.log(uniqueInOrder("ABBCcAD")); // ["A", "B", "C", "c", "A", "D"];
// console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3];

// function customHttp() {}
// const http = customHttp();

// const arr = [10, 20, 30];
// for (let index in arr) {
//     console.log(index, ":", arr[index]); // Вывод: "0", "1", "2" (индексы массива)
// }

// const newService = (function () {
//     const apiKey = "sdfsdfsdfsdf";
//     const apiUrl = "fsdfwerfwef";

//     return {
//         topNews(country = "ru", category = "techology", cb) {
//             http("sdfdsfsdfsd", cb);
//         },
//     };
// })();

let users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
];

/**
 *
 * @param {Array} users
 */
function groupById(users) {
    return users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}

let usersById = groupById(users);
console.log(usersById);

/*
после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

console.log(5 % 2);
