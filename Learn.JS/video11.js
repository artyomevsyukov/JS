const goods = ["123", "123", 222, 222, 123, 435, 5765];
const goods2 = ["12311111", "1234", 2222, 222, 123123, 435, 875765];
// const bascet = new Set([...goods, ...goods2]);
const bascet = new Set(goods);
const bascet2 = new Set(goods2);
bascet.add("5345345");
bascet.add(435345345);
console.log(bascet);
console.log(bascet2);
// for (const key of bascet) {
//     console.log(`Элемент: ${key}`);
// }
const peresechenia = new Set([...bascet].filter((item) => bascet2.has(item)));
console.log(peresechenia);
const raznost = new Set([...bascet].filter((item) => !bascet2.has(item)));
console.log(raznost);
