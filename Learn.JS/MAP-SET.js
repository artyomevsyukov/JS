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

// let arr = [
//     "nap",
//     "teachers",
//     "cheaters",
//     "PAN",
//     "ear",
//     "ear",
//     "era",
//     "era",
//     "era",
//     "hectares",
//     "hectraes",
//     "ehctraes",
// ];

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
//     return obj;
//     return Object.keys(obj);
//     return Object.values(obj);
// }
// console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

// =====================================================
// let map = new Map();

// map.set("name", "John");

// console.log(map);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// console.log("keys");
// let keys = Array.from(map.keys());
// // let keys = map.entries();

// console.log(keys);
// // console.log(keys.get("name"));
// // console.log(keys.keys());
// // console.log(keys.values());
// // console.log(keys.entries());

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");

// console.log(keys);

// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// let arr = [
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

// // let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//     let map = new Map();
//     for (const word of arr) {
//         let sorted = word.toLowerCase().split("").sort().join("");
//         map.set(sorted, word);
//     }
//     // return Array.from(map.keys());
//     // return Array.from(map.values());
//     return Array.from(map.entries());
// }

// console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");
// console.log(keys);
// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция

// let objKey = { name: "John" };
// let obj = {};
// obj[objKey] = "value";
// console.log(obj);

// let map = new Map();
// map.set(objKey, "value");
// console.log(map);

// let obj = {};
// obj["65"] = 1;
// obj["12"] = 2;
// obj["1"] = 3;
// console.log(obj);

// // Использование Map
// let map = new Map();
// map.set("one", 1);
// map.set("two", 2);
// map.set("three", 3);

// Использование объекта
// let obj = {};
// obj["key1"] = "value1";
// obj["key2"] = "value2";

// // Перебор свойств объекта
// for (let key in obj) {
//     console.log(key, obj[key]);
// }

// for (const [key, value] of Object.entries(obj)) {
//     console.log(key, value);
// }

// let obj = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3",
// };

// let mapFromObj = new Map(Object.entries(obj));
// let mapFromObj = new Map();
// for (let key in obj) {
//     mapFromObj.set = (key, obj[key]);
// }
// console.log(mapFromObj);

// let mapFromObj = new Map();

// for (let key in obj) {
//     mapFromObj.set(key, obj[key]);
// }

// console.log(mapFromObj);
// let map = new Map();

// map.set("1", "str1"); // строка в качестве ключа
// map.set(1, "num1"); // цифра как ключ
// map.set(true, "bool1"); // булево значение как ключ

// // помните, обычный объект Object приводит ключи к строкам?
// // Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
// console.log(map.get(1)); // "num1"
// console.log(map.get("1")); // "str1"

// console.log(map.size); // 3
// console.log(map);

// ========   ПЕРЕБОР Array    ============== //TODO
// let arr = [1, 2, 3, 4];
// // console.log(arr.entries());
// let array = [
//     ["key1", "value1"],
//     ["key2", "value2"],
//     ["key3", "value3"],
// ];
// let object = Object.fromEntries(array);

// console.log(object);

// ========   ПЕРЕБОР Object    ============== //TODO

// let obj = {
//     1: 111,
//     2: 222,
//     3: 333,
// };

// console.log(Object.keys(obj));
// // возвращает массив ключей.
// console.log(Object.values(obj));
// // возвращает массив значений.
// console.log(Object.entries(obj));
// Получаю массив пар [ключ, значение]

// ========   ПЕРЕБОР Map    ============== //TODO

// map.keys() – возвращает итерируемый объект по ключам,
// recipeMap.keys()
// map.values() – возвращает итерируемый объект по значениям,
// recipeMap.values()
// map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.
// recipeMap.entries()
// let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук", 50],
// ]);

// // перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // огурец, помидор, лук
// }

// // перебор по значениям (числа)
// for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
// }

// // перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap) {
//     // то же самое, что и recipeMap.entries()
//     console.log(entry); // огурец,500 (и так далее)
// }

// console.log(recipeMap.keys());
// // Перебираемый объект
// console.log(recipeMap.values());
// // Перебираемый объект
// console.log(recipeMap.entries());
// // Перебираемый объект
// console.log(recipeMap);
// console.log();
// console.log();
// console.log(Object.fromEntries(recipeMap));

// let arr = [1, 2, 3, 4];
// let obj = arr.reduce((acc, currentValue, index) => {
//     acc[index.toString()] = currentValue;
//     return acc;
// }, {});

// console.log(obj);

// let obj = {
//     name: "John",
//     age: 30,
// };

// let map = new Map(Object.entries(obj));
// let newObj = Object.fromEntries(map.entries());
// let newObj1 = Object.fromEntries(map);

// console.log(map);
// console.log(newObj);
// console.log(newObj1);

// ===================

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // считаем гостей, некоторые приходят несколько раз
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set хранит только 3 уникальных значения
// // console.log(set.size); // 3

// // for (let user of set) {
// //     console.log(user.name); // John (потом Pete и Mary)
// // }

// // set.forEach((e) => console.log(e.name));

// console.log(set.values());
// console.log(set.entries());

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

// console.log(unique(values)); // Hare,Krishna,:-O

// function printNumbers(from, to) {
//     let current = from;
//     let timer = setInterval(() => {
//         if (current >= to) {
//             clearInterval(timer);
//         }
//         console.log(current);
//         current++;
//     }, 1000);
// }
// function printNumbers(from, to) {
//     let current = from;
//     function go() {
//         if (current >= to) {
//             clearInterval(timer);
//         }
//         console.log(current);
//         current++;
//     }
//     go();
//     let timer = setInterval(go, 1000);
// }

// function printNumbers(from, to) {
//     let current = from;
//     setTimeout(function go() {
//         if (current <= to) {
//             console.log(current);
//             setTimeout(go, 1000);
//         }
//         ++current;
//     }, 1000);
// }
// function printNumbers(from, to) {
//     let current = from;

//     function go() {
//         console.log(current);
//         if (current < to) {
//             current++;
//             setTimeout(go, 1000);
//         }
//     }
//     go();
// }

// printNumbers(2, 7);

function aclean(arr) {
    let map = new Map();
    let set = new Set();
    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted, word);
        set.add(sorted);
    }
    // console.log("set:", set);
    // console.log(map);
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
