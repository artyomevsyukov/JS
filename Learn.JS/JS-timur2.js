// const items = [
//     { price: "120" },
//     { price: 505 },
//     { price: 505 },
//     { price: 350 },
//     { price: "350" },
// ];

// function incorrectPriceMessage() {
//     throw new Error("неправильная цена");
// }
// const pricesArray = items
//     .map((item) => {
//         const price = parseInt(item.price, 10); // Преобразуем значение в число
//         return !isNaN(price) && price > 0
//             ? price
//             : (() => {
//                   throw new Error("неправильная цена");
//               })(); // Проверяем, что это число и больше 0
//     })
//     .filter((item) => item !== null)
//     .reduce((sum, current) => (sum += current)); // Фильтруем null значения

// console.log(pricesArray);

// let result = [];
// let array2 = [4, 1, 3, 3, 9, 3, 2, 4];
// array2.forEach(function (a) {
//     a in this || result.push((this[a] = []));
//     this[a].push(a);
// }, Object.create(null)); // [[4, 4], [1], [3, 3], [2]]

// console.log(result);

// let array = [
//     { name: "1" },
//     { name: "2" },
//     { name: "4" },
//     { name: "2" },
//     { name: "3" },
//     { name: "1" },
// ];
// array.forEach(function (obj) {
//     const name = obj.name;
//     name in this || result.push((this[name] = []));
//     this[name].push(obj);
// }, Object.create(null));

// console.log(result);

let result = [];
let array2 = [4, 1, 3, 3, 9, 3, 2, 4];
let array = [4, 1, 3, 3, 9, 3, 2, 4];

// let context = {};

// array2.forEach((a) => {
//     a in context || result.push((context[a] = []));
//     context[a].push(a);
// },);
// array2.forEach((a) => {
//     a in this || result.push((this[a] = []));
//     this[a].push(a);
// }, {});

// array.forEach((a) => {
//     a in this || result.push((this[a] = []));
//     this[a].push(a);
// }, {});

array.forEach((a) => {
    a in this || result.push((this[a] = []));
    this[a].push(a);
    result.sort();
}, {});

console.table(result);
