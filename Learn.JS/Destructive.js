// // второй элемент не нужен
// let [firstName, lastName, , , title] = [
//     "Julius",
//     "Caesar",
//     "Consul",
//     "fsafsf",
//     "of the Roman Republic",
// ];

// console.log(firstName + " " + lastName, " + ", title); // Consul

// let [a, b, c] = "abc";
// let [one, two, three] = new Set([1, 2, 3]);
// console.log(b);
// /========================================================================
// let user = {
//     name: "John",
//     age: 30,
// };
// цикл по ключам и значениям
// for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}: ${value}`);
// }

// let map = new Map();
// map.set("name", "John");
// map.set("age", 30);

// for (let [key, value] of map) {
//     console.log(`${key}: ${value}`);
// }

// for (const key in user) {
//     console.log(`${key}: ${user[key]}`);
// }

// ===================================================================

// let [firstName, lastName, , , title] = [
//     "Julius",
//     "Caesar",
//     "Consul",
//     "fsafsf",
//     "of the Roman Republic",
// ];

// let [name1, , name2, ...rest] = [
//     "Julius",
//     "dfgdfsgdfg",
//     "Caesar",
//     "gdhfgh",
//     "Consul",
//     "of the Roman Republic",
// ];

// // rest это массив элементов, начиная с 3-го
// console.log(name1); // Consul
// console.log(name2); // Consul
// console.log("========================");
// console.log(rest[0]); // Consul
// console.log(rest[1]); // of the Roman Republic
// console.log(rest[2]); // of the Roman Republic
// console.log(rest.length); // 2

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200,
// };

// let { width, title, height } = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200,
// };

// // { sourceProperty: targetVariable }
// let { width: w, height: h, title } = options;

// // width -> w
// // height -> h
// // title -> title

// console.log(title); // Menu
// console.log(w); // 100
// console.log(h); // 200

// let title, width, height;

// // сейчас всё работает
// ({ title, width, height } = { title: "Menu", width: 200, height: 100 });

// console.log(title); // Menu

// let options = {
//     size: {
//         width: 100,
//         // height: 200,
//     },
//     items: ["Cake", "Donut", "Ponchick"],
//     extra: true,
// };

// // деструктуризация разбита на несколько строк для ясности
// let {
//     size: {
//         // положим size сюда
//         width,
//         height,
//     },
//     items: [item1, item2], // добавим элементы к items
//     title = "Menu", // отсутствует в объекте (используется значение по умолчанию)
// } = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200
// console.log(item1); // Cake
// console.log(item2); // Donut
// console.log("=========================");
// // console.log(items); // Donut
// // console.log(size); // Donut
// =======================================================

// мы передаём объект в функцию
// let options = {
//     title: "My menu",
//     items: [2, 27],
//     // items: ["Item1", "Item2"]
// };

// ...и она немедленно извлекает свойства в переменные
// function showMenu({
//     title = "Untitled",
//     width = 200,
//     height = 100,
//     items = [],
// }) {
//     // title, items – взято из options,
//     // width, height – используются значения по умолчанию
//     width = items[0] * items[1];
//     console.log(`${title} ${width} ${height}`); // My Menu 200 100
//     console.log(items); // Item1, Item2
// }
// showMenu(options);
// showMenu({});

// function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
//     console.log(`${title} ${width} ${height}`);
// }

// showMenu(); // Menu 100 200
// =====================================================

// let user = { name: "John", years: 30 };

// // ваш код должен быть с левой стороны:
// let { name, years: age, isAdmin = false } = user;

// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false

// =====================================================

let salaries = {
    John: 100,
    Pete: 300,
    Pete2: 1300,
    Mary1: 350,
    Mary: 1350,
};

function topSalary(salaries) {
    let top = Object.entries(salaries).sort(
        ([key, value], [key2, value2]) => value2 - value
    )[0][1];
    // console.log(Array.isArray(top));
    return console.log(top);

    // let top = Object.entries(salaries)
    //     .sort(([key, value], [key2, value2]) => value - value2)
    //     .at(-1)[0];
    // return console.log(top);

    // let top = Object.entries(salaries)
    //     .sort(([key, value], [key2, value2]) => value2 - value)
    //     .at(0)[0];
    // // return console.log(`${top.at(0)[0]}: ${top.at(0)[1]}`);
    // return console.log(`${top}: ${top.at(0)[1]}`);
}
topSalary(salaries);

// let salaries = {
//     John: 100,
//     Pete: 300,
//     Pete2: 1300,
//     Mary1: 350,
//     Mary: 1350,
//     Anna: 1350,
//     Mary3: 1350,
// };
// function topSalary(salaries) {
//     if (Object.keys(salaries).length == 0) {
//         return console.log("Пусто");
//     }
//     let max = 0;
//     let maxName = null;

//     for (const [name, salary] of Object.entries(salaries)) {
//         if (salary > max) {
//             max = salary;
//             maxName = name;
//         }
//     }
//     let arr = Object.entries(salaries);
//     let user = Object.fromEntries(arr.filter((item) => item[1] == max).sort());
//     // let arr = Object.entries(salaries.filter((item) => item[1] == max));
//     // let user = Object.fromEntries(arr);
//     // let arrObj = [salaries];
//     // let newArrObj = arrObj.filter((item) => item[Object.keys(salaries)] == max);

//     // return console.log(newArrObj);
//     // return console.log(arrObj);
//     return console.log(user);
//     return console.log(arr);
// }
// topSalary(salaries);

// function topSalary(salaries) {
//     let maxSalary = Math.max(...Object.values(salaries));
//     return console.log(maxSalary);
//     // for (let [name, salary] of Object.entries(salaries)) {
//     //     if (salary === maxSalary) {
//     //         return console.log(`${name}: ${salary}`);
//     //     }
//     // }
// }
// topSalary(salaries);

// let salaries = {
//     John: 100,
//     Pete: 300,
//     Pete2: 1300,
//     Mary1: 350,
//     Mary: 1350,
//     Mary3: 1350,
// };

// function topSalary(salaries) {}
// topSalary(salaries);
