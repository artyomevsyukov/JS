"use strict";

// const foo = {
//     foundation: "Mozilla",
//     model: "box",
//     week: 45,
//     transport: "car",
//     month: 7,
// };

// console.log(
//     JSON.stringify(
//         foo,
//         function (key, value) {
//             if (typeof value === "string") {
//                 return undefined; // удаляем все строковые свойства
//             }
//             return value;
//         },
//         10
//     )
// ); // '{"week":45,"month":7}'
// console.log(foo);

// console.log(JSON.stringify(foo, ["week", "month"], " -- "));
// // '{"week":45,"month":7}', сохранились только свойства week и month

// let user = {
//     name: "John",
//     surname: "Smith",
//     nick: "X",
//     age: 22,

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },
// };

// Object.defineProperty(user, "nick", { writable: false });

// let descriptor3 = Object.getOwnPropertyDescriptor(user, "nick");
// console.log(JSON.stringify(descriptor3, null, 2));

// user.nick = "XXX";
// Object.defineProperty(user, "nick", { writable: true });

// Object.defineProperty(user, "nick", {
//     value: "TEST",
//     // для нового свойства необходимо явно указывать все флаги, для которых значение true
//     writable: true,
//     enumerable: true,
//     configurable: true,
// });
// console.log(JSON.stringify(descriptor3, null, 2));
// user.nick = "NEW";
// console.log(user.nick);

// let descriptor = Object.getOwnPropertyDescriptor(user, "nick");

// set fullName запустится с данным значением
// user.fullName = "Alice Cooper";

// console.log(user.name); // Alice
// console.log(user.surname); // Cooper

// let descriptor1 = Object.getOwnPropertyDescriptor(user, "name");
// let descriptor2 = Object.getOwnPropertyDescriptor(user, "surname");

// console.log(JSON.stringify(descriptor1, null, " -- "));
// console.log(JSON.stringify(descriptor2, null, 2));

// console.log(JSON.stringify(descriptor3, null, 2));
// console.log(
//     JSON.stringify(
//         user,
//         function (key, value) {
//             if (typeof value === "string") {
//                 return undefined; // удаляем все строковые свойства
//             }
//             return value;
//         },
//         2
//     )
// );

// console.log(descriptor1);

// let user = {
//     name: "John",
//     surname: "Smith",
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },
// };

// console.log(user.fullName);
// user.fullName = "Alice Cooper";

// console.log(user.name); // Alice
// console.log(user.surname); // Cooper
// console.log(user.fullName);
let user = {};

Object.defineProperty(user, "name", {
    value: "John",
    // для нового свойства необходимо явно указывать все флаги, для которых значение true
    // writable: true,
    enumerable: true,
    configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(user, "name"));
Object.defineProperty(user, "name", {
    writable: true,
});
console.log(user.name); // John
user.name = "Pete"; // Ошибка
console.log(Object.getOwnPropertyDescriptor(user, "name", 2));
console.log(user.name); // John
// user.name = "Pete"; // Ошибка
