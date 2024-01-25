// const sum = (...args) => {
//     let value = 0;
//     while (args.length > 0) {
//         value += args.pop();
//     }
//     return value;
// };
// console.log(sum(2, 3, 4, 5, 6, 7, 8, 9, 0, -1, 12, -32));

const basket = { laptop: 1500, mouse: 25 };
// const basket = [10, 15, 20];

// const calculateTotal = (obj) => {
//     let total = 0;
//     for (const key in obj) {
//         total += obj[key];
//     }
//     return total;
// };
const calculateTotal = (obj) => {
    let total = 0;
    for (const key of obj) {
        total += obj.key;
        console.log(key);
        // console.log(obj.key);
    }
    return total;
};

console.log(calculateTotal(basket));
