let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = [3, 4];

// // создать массив из: arr и [3,4]
// console.log(arr.concat([3, 4])); // 1,2,3,4

// // создать массив из: arr и [3,4] и [5,6]
// console.log(arr.concat(arr2, [7])); // 1,2,3,4,5,6

// // создать массив из: arr и [3,4], потом добавить значения 5 и 6
// console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
// let x = arr.map((item, index, arr) => item * 2);
// console.log(x);

// let users = [
//     { id: 1, name: "Вася" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" },
// ];

// let pol = users.filter((el) => el.id >= 2);
// console.log(pol);
// pol.forEach((el) => console.log(el.id + " " + el.name));

// console.log(pol.id); // Вася
// console.log(pol); // Вася

// let user = {
//     name: "John",
//     surname: "Smith",
// };

// function isEmpty(obj, key) {
//     return console.log(key in obj);
// }
// isEmpty(user, "name1");

// function isEmpty(obj) {
//     for (let key in obj) {
//         // если тело цикла начнет выполняться - значит в объекте есть свойства
//         return false;
//     }
//     return true;
// }
// isEmpty(user);
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// function sum(obj) {
//     let summa = 0;
//     for (let key in obj) {
//         summa += obj[key];
//     }
//     return console.log(summa);
// }

// sum(salaries);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum); // 390
