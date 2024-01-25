// const items = [
//     { price: 120 },
//     { quantity: 350 },
//     { price: 505 },
//     { price: 350 },
//     { price: 350 },
// ];

// const items2 = [{ price: 40 }, { price: 120 }, { price: 505 }, { price: 350 }];

// for ({ price } of items) {
//     if (price) {
//         console.log(`Price: ${price}`);
//     }
//     continue;
// }

// const isCorretPrice = (obj) => {
//     let status = false;
//     for ({ price } of obj) {
//         // if (price) {
//         // status = typeof price === "number" && price > 0;
//         if (typeof price === "number" && price > 0) {
//             status = true;
//         } else {
//             throw new Error("неправильная цена");
//         }
//         // if (!status) throw new Error("неправильная цена");
//         // }
//         // continue;
//     }
//     return status;
// };
// console.log(isCorretPrice(items));

// function totalSum(goods) {
//     // let newObj = { ...goods };
//     let value = 0;
//     if (isCorretPrice(goods)) {
//         for ({ price } in goods) {
//             // if (price) {
//             console.log(price);
//             value += price;
//             // }
//             // continue;
//         }
//     }
//     return value;
// }

// console.log(totalSum(items));
//
//
//
//
//
//
//
//
//
//
// const isNumber = (value) => typeof value === "number" && value > 0;

// const sum = (a, b) => {
//     if (isNumber(a) && isNumber(b)) {
//         return a + b;
//     }
//     throw new Error("a and b should be numbers");
// };
// console.log(sum("12", 2));

// const items = [
//     { price: "120" },
//     { price: 505 },
//     { price: 505 },
//     { price: -350 },
//     { price: "350" },
// ];
// let result = items
//     .filter((item) => typeof item.price === "number" && item.price > 0)
//     .map((item) => +item.price)
//     .reduce((sum, current) => (sum += current), 0);

// console.log(result);

// const purchase = {
//     Electronics: [
//         { name: "Laptop", price: 1500 },
//         { name: "Keyboard", price: 100 },
//         { name: "Laptop", price: 1500 },
//         { name: "mouse", price: 150 },
//     ],
//     Textile: [
//         { name: "Bag", price: 50 },
//         { name: "bigBag", price: 150 },
//     ],
// };
// category in
// hasOwnProperty
// []
// if
// null

// const purchase = [
//     { name: "Laptop", price: 1500 },
//     { name: "mouse", price: 200 },
//     { name: "Laptop", price: 900 },
// ];
// function find(arr, value) {
//     return arr.filter((item) => item.name === value);
//     // let result = [];

//     // for (let el of arr) {
//     //     if (el.name === value) {
//     //         result.push(el);
//     //     }
//     // }

//     // return result;
// }

// const result = find(purchase, "Laptop");
// console.log(result);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// function find(arr, value) {
//     for (const category in arr) {
//         if (arr.hasOwnProperty(category)) {
//             let result = arr[category].find((item) => item.name === value);
//             if (result) {
//                 return result;
//             }
//         }
//     }
//     return null;
// }

// const result = find(purchase, "Laptop");
// console.log(result);

//
//
//
//
//
//
//
//
//
//
//
//
//

// function find(arr, value) {
//     let result = arr.find((item) => item.name === value); // исправлено с (item.name = value)
//     return result;
// }

// const result = find(purchase, "Laptop");
// console.log(result);

// const purchase = [
//     { name: "Laptop", price: 1500 },
//     { name: "mouse", price: 200 },
//     { name: "Laptop", price: 900 },
// ];
// function find(arr, value) {
//     let result;
//     let newArr = [];
//     for (let el of arr) {
//         result = el.find((item) => item.name === value);
//         if (result) {
//             newArr.push(result);
//         } else continue;
//     }
//     // if(newArr) {return newArr} else {return null}
//     return newArr;
//     // if (result) {
//     //     return result;
//     // } else {
//     //     return null;
//     // }
// }

// const result = find(purchase, "Laptop");
// console.log(result);

const purchase = {
    Electronics: [
        { name: "Laptop", price: 1500 },
        { name: "Keyboard", price: 100 },
        { name: "Laptop", price: 900 },
        { name: "mouse", price: 150 },
        { name: "mouse", price: 150 },
    ],
    Textile: [
        { name: "Bag", price: 50 },
        { name: "bigBag", price: 150 },
        { name: "Laptop", price: 800 },
    ],
};

// category in
// hasOwnProperty
// []
// if
// null

function find(arr, value) {
    let newArr = [];
    for (let category in arr) {
        if (arr.hasOwnProperty(category)) {
            let result = arr[category].filter((el) => el.name == value);
            if (result) {
                newArr.push(category, { item: result });
            } else continue;
        }
    }
    return newArr;
}

const result = find(purchase, "Laptop");
console.log(result);
