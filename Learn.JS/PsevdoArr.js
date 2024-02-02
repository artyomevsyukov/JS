let obj = { a: 1, b: 2, c: 3 };
let keys = Object.keys(obj);
console.log(keys);
keys.push("d");
// Вывод: ['a', 'b', 'c']
console.log(keys[1]);
console.log(keys);
// console.log(keys.filter((item, index) => item >= 2));
