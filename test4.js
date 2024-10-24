// const obj = {
//     title: "Conference",
//     room: 23,
// };

// console.log(obj);

// console.log(JSON.stringify(obj));

const uniqueInOrder = function (iterable) {
    const newArr = [];
    let marker = "";
    for (const el of iterable) {
        if (el !== marker) {
            newArr.push(el);
            marker = el; // Обновляем marker на текущий элемент
        }
    }
    return newArr;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ["A", "B", "C", "D", "A", "B"];
console.log(uniqueInOrder("ABBCcAD")); // ["A", "B", "C", "c", "A", "D"];
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3];
