// Для объекта
// из объекта массив

const object1 = {
    a: "somestring",
    b: 42,
};

for (const [key, value] of Object.entries(object1)) {
    // console.log(`${key}: ${value}`);
}
console.log(Object.entries(object1));
console.log(Object.keys(object1));
console.log(Object.values(object1));

// Преобразование Array в Object

// const arr = [
//     ["0", "a"],
//     ["1", "b"],
//     ["2", "c"],
// ];
// const obj = Object.fromEntries(arr);
// console.log(obj); // { 0: "a", 1: "b", 2: "c" }
