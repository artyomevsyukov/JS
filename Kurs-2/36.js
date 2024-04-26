"use strict";

const wetherMap = new Map([
    ["London", 12],
    ["Moscow", 7],
    ["Paris", 16],
    ["Berlin", 10],
]);

// for (const [key, value] of wetherMap) {
//     console.log(key);
//     console.log(value);
// }
// console.log([...wetherMap]);
// console.log([...wetherMap.keys()]);
// console.log([...wetherMap.values()]);
// console.log([...wetherMap.values()].filter((el) => el > 11));

// console.log(Object.entries(wetherMap));

let prices = {
    banana: 1,
    orange: 3,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    // преобразовать в массив, затем map, затем fromEntries обратно объект
    Object.entries(prices)
        // .filter(([key, value]) => value > 3)
        .map(([key, value]) => [key, value > 3 ? value * 2 : value])
);
console.log(doublePrices); // 8
console.log(doublePrices.meat); // 8
