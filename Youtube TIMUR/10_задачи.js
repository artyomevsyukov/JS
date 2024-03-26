// https://github.com/HowProgrammingWorks/Book/blob/master/content/ru/2-9-Tasks.md

// Задача 1-2
// const items = [
//     { price: 40 },
//     { price: 120 },
//     { price: 550 },
//     { price: -120 },
//     { price: "550" },
//     { price: 350 },
// ];

// for (const item of items) {
//     console.log(`Price: ${item.price}`);
// }

// function totalPrice(goods) {
//     return goods.reduce((total, el, index) => {
//         const { price } = el;
//         if (typeof price !== "number" || price <= 0) {
//             throw new Error(`Элемент ${index} - ${price} некоректная цена`);
//         }
//         return (total += +price);
//     }, 0);
// }

// console.log(totalPrice(items));

// Задача 3

const purchase = {
    Electronics: [
        { name: "Laptop", price: 1500 },
        { name: "Keyboard", price: 100 },
        { name: "Mouse", price: 50 },
        { name: "Mic", price: 15 },
    ],
    Textile: [
        { name: "Bag", price: 50 },
        { name: "Pad", price: 50 },
    ],
    Raz: [
        { name: "Bag", price: 50 },
        { name: "Max", price: 50 },
        { name: "Max", price: 340 },
    ],
};

//closure
// function find(purchase, name) {
//     if (Array.isArray(purchase)) {
//         return purchase.find((item) => item.name == name);
//     } else {
//         for (const category of Object.values(purchase)) {
//             const foundItem = find(category, name);
//             if (foundItem) {
//                 return foundItem;
//             }
//         }
//     }
// }

// function find(purchase, name) {
//     if (Array.isArray(purchase)) {
//         return purchase.find((item) => item.name === name);
//     } else {
//         for (const category of Object.values(purchase)) {
//             const findItem = find(category, name);
//             if (findItem) {
//                 return findItem;
//             }
//         }
//     }
// }
function findAll(purchase, name) {
    let findItem = [];
    if (Array.isArray(purchase)) {
        return purchase.filter((item) => item.name === name);
    } else {
        for (const category of Object.values(purchase)) {
            findItem = findItem.concat(findAll(category, name));
        }
    }
    return findItem;
}

//for
// function find(basket, name) {
//     for (const key in basket) {
//         const items = basket[key];
//         for (const item of items) {
//             if (item.name === name) return item;
//         }
//     }
// }
// function findAll(basket, name) {
//     let findItems = [];
//     for (const key in basket) {
//         const items = basket[key];
//         for (const item of items) {
//             if (item.name === name) findItems.push(item);
//         }
//     }
//     return findItems;
// }

// fund(purchase, "Pad");

// console.log(find(purchase, "Pad"));
// console.log(find(purchase, "Laptop"));
// console.log(find(purchase, "Max"));
console.log(findAll(purchase, "Pad"));
console.log(findAll(purchase, "Laptop"));
console.log(findAll(purchase, "Max"));
