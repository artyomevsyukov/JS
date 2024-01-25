// let values = [
//     "Hare",
//     "Krishna",
//     "Hare",
//     "Krishna",
//     "Krishna",
//     "Krishna",
//     "Hare",
//     "Hare",
//     ":-O",
// ];

// // function unique(arr) {
// //     let set = new Set(arr);

// //     return set;
// // }
// const unique = (arr) => Array.from(new Set(arr));

// console.log(unique(values)); // Hare,Krishna,:-O

//========================================================
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//     const newArr = [];
//     let map = new Map();
//     for (const word of arr) {
//         let sorted = word.toLowerCase().split("").sort().join("");
//         // console.log(map.set(sorted, word));
//         newArr.push(sorted);
//     }
//     return Array.from(new Set(newArr));
//     // return Array.from(map.values());
// }

// console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

// ======================================================
// let map = new Map();

// map.set("name", "John");
// map.set("name", "John12312");
// map.set("name1", "John1");
// map.set("name2", "John2");
// map.set("name3", "John3");

// let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
// let keys = Array.from(new Set(map));
// let keys = Array.from(map);
// let keys = Array.from(new Set(map));
// let keys = Array.from(map.keys());
// keys.push("more");
// console.log(keys);
// console.log(map.keys());

// let set = new Set(["апельсин", "яблоко", "банан"]);
// // for (const key of set) console.log(key);
// // set.forEach((item) => console.log(item));
// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());
// console.log(set);

// let map = new Map();
// map.set("1", "str1"); // строка в качестве ключа
// map.set(1, "num1"); // цифра как ключ
// map.set(true, "bool1"); // булево значение как ключ

// // помните, обычный объект Object приводит ключи к строкам?
// // Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
// console.log(map.get(1)); // "num1"
// console.log(map.get("1")); // "str1"

// console.log(map.size); // 3
// let john = { name: "John" };

// // давайте сохраним количество посещений для каждого пользователя
// let visitsCountMap = new Map();

// // объект john - это ключ для значения в объекте Map
// // visitsCountMap.set(john, 123);

// function visit(map) {
//     for (let i = 0; i < Math.random() * 100; i++) {
//         visitsCountMap.set(john, i);
//     }
//     console.log("Visit: ", visitsCountMap.get(map));
//     return visitsCountMap.get(map);
// }

// // visit(john);

// if (visit(john) > 10) console.log("Больше 10");

// // console.log(visitsCountMap.get(john)); // 123

// const arr = ["q", "w", "e", "r", "t", "y", "u", "t"];
// const map = new Map(arr.entries());
// // map.set("banana", 1);
// // map.set("orange", 2);
// // map.set("meat", 4);

// // let obj = Object.fromEntries(map.entries()); // создаём обычный объект (*)
// // let arrObj = Object.fromEntries(map.entries()); // создаём обычный объект (*)

// // готово!
// // obj = { banana: 1, orange: 2, meat: 4 }

// // console.log(obj.orange); // 2
// console.log(arr); // 2
// console.log(map.entries()); // 2
// console.log(map); // 2
// // console.log(arrObj); // 2

// let set = new Set(["апельсин", "яблоко", "банан"]);

// // for (let value of set) console.log(value);

// // то же самое с forEach:
// // set.forEach((value, valueAgain, set) => {
// //     console.log(value);
// // });
// console.log(set);
// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());

// ======================================================
// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// let values = [
//     "Hare",
//     "Krishna",
//     "Hare",
//     "Krishna",
//     "Krishna",
//     "Krishna",
//     "Hare",
//     "Hare",
//     ":-O",
// ];

// // console.log(unique(values)); // Hare,Krishna,:-O
// console.log(Array.from(new Set(values))); // Hare,Krishna,:-O

// ======================================================

let arr = [
    "nap",
    "teachers",
    "cheaters",
    "PAN",
    "ear",
    "ear",
    "era",
    "era",
    "era",
    "hectares",
    "hectraes",
    "ehctraes",
];

// function aclean(arr) {
//     let newArr = arr.map((item) =>
//         item.toLowerCase().split("").sort().join("")
//     );
//     return Array.from(new Set(newArr));
// }

// function aclean(arr) {
//     let map = new Map();
//     for (const word of arr) {
//         let sorted = word.toLowerCase().split("").sort().join("");
//         map.set(sorted, word);
//     }
//     return Array.from(map.values());
//     // return Array.from(map.keys());
//     // return Array.from(map.entries());
// }

// function aclean(arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         let sorted = arr[i].toLowerCase().split("").sort().join("");
//         obj[sorted] = arr[i];
//     }
//     // return obj;
//     return Object.keys(obj);
//     return Object.values(obj);
// }
// console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

// =====================================================
let map = new Map();

map.set("name", "John");

console.log(map);
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

console.log("keys");
let keys = Array.from(map.keys());
// let keys = map.entries();

console.log(keys);
// console.log(keys.get("name"));
// console.log(keys.keys());
// console.log(keys.values());
// console.log(keys.entries());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

console.log(keys);
