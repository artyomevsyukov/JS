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
// let user = {};

// Object.defineProperty(user, "name", {
//     value: "John",
//     // для нового свойства необходимо явно указывать все флаги, для которых значение true
//     // writable: true,
//     enumerable: true,
//     configurable: true,
// });
// console.log(Object.getOwnPropertyDescriptor(user, "name"));
// Object.defineProperty(user, "name", {
//     writable: true,
// });
// console.log(user.name); // John
// user.name = "Pete"; // Ошибка
// console.log(Object.getOwnPropertyDescriptor(user, "name", 2));
// console.log(user.name); // John
// // user.name = "Pete"; // Ошибка

// let user = {
//     name: "John",
//     age: 22,
// };
// console.log(user.name);

// Object.defineProperty(user, "name", {
//     writable: false,
//     enumerable: false,
//     configurable: false,
// });
// Object.defineProperty(user, "name", {
//     // writable: true,
//     writable: false,
//     enumerable: false,
//     configurable: true,
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, "name");
// console.log(JSON.stringify(descriptor, null, 2));

// Object.defineProperty(user, "name", { value: "Pete" });
// user.name = "Pete";
// console.log(user);
// console.log(user.name);
// console.log(JSON.stringify(user, null, 2));
// console.log(
//     JSON.stringify(
//         user,
//         function (key, value) {
//             if (typeof value == "string") {
//                 return undefined;
//             } else return value;
//         },
//         2
//     )
// );

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
// // set fullName запустится с данным значением
// user.fullName = "Alice Cooper";

// // Object.defineProperty(user, "fullName", { configurable: false });
// // delete user.fullName;

// console.log(user.name); // Alice
// console.log(user.surname); // Cooper
// console.log(user.fullName);
// =================================================
// let user = {
//     name: "John",
//     surname: "Smith",
// };

// Object.defineProperty(user, "fullName", {
//     get() {
//         return `${this.name} ${this.surname}`;
//     },

//     set(value) {
//         [this.name, this.surname] = value.split(" ");
//     },
// });

// // delete user.fullName;

// console.log(user.fullName); // John Smith
// user.fullName = "Alice Cooper";

// for (let key in user) console.log(key); // name, surname

// // let clone = Object.defineProperties(user);
// console.log(Object.getOwnPropertyDescriptors(user));
// // let clone2 = Object.getOwnPropertyDescriptors(user);
// // console.log(clone2);
// console.log(user.fullName); // John Smith
// ====================================================================================
// let user = {
//     get name() {
//         return this._name;
//     },

//     set name(value) {
//         if (value.length < 4) {
//             console.log("Имя слишком короткое, должно быть более 4 символов");
//             return;
//         }
//         this._name = value;
//     },
// };

// user.name = "Pete";
// console.log(user.name); // Pete

// user.name = ""; // Имя слишком короткое...
// ====================================================================================

// let user = {
//     get name() {
//         return this._name;
//     },
//     set name(value) {
//         if (value.length < 4) {
//             console.log("Слишком короткое имя, должно быть больше 4 символов");
//             return;
//         }
//         this._name = value;
//     },
// };

// user.name = "Pete";
// console.log(user.name);
// user.name = "Pe";
// ====================================================================================

// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;
//     // this.age = age;
//     Object.defineProperty(this, "age", {
//         get() {
//             let todayYear = new Date().getFullYear();
//             return todayYear - this.birthday.getFullYear();
//         },
//     });
// }

// let john = new User("John", new Date(1992, 6, 1));

// console.log(john.birthday); // 25
// console.log(john.age); // 25

// ====================================================================================

// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;

//     Object.defineProperty(this, "age", {
//         get() {
//             let todayYear = new Date().getFullYear();
//             return todayYear - this.birthday.getFullYear();
//         },
//     });
// }
// // let John = new User("John", 25);
// let John = new User("John", new Date(1987, 22, 8));
// console.log(John);
// console.log(John.name);
// console.log(John.birthday);
// console.log(John.age);

// =================================================================
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

// user.fullName = "Alice Cooper";

// console.log(user.name); // Alice
// console.log(user.surname); // Cooper
// console.log(user.fullName); // Cooper
// =================================================================
// let user = {
//     name: "John",
//     surname: "Smit",
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },
// };

// user.fullName = "Alice Pont";

// console.log(user.name);
// console.log(user.surname);
// console.log(user.fullName);

// =================================================================
// let user = {
//     get name() {
//         return this._name;
//     },
//     set name(value) {
//         if (value.length < 4) {
//             console.log("Сдишком короткое имя");
//             return;
//         }
//         this._name = value;
//     },
// };

// user.name = "pet";
// console.log(user.name);

// =================================================================

// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;
//     this.age2 = 222;
//     Object.defineProperty(this, "age", {
//         get() {
//             let todayYear = new Date().getFullYear();
//             return todayYear - this.birthday.getFullYear();
//         },
//     });
// }

// let john = new User("John", new Date(1987, 23, 9));

// console.log(john);
// console.log(john.name);
// console.log(john.birthday);
// console.log(john.age);
// let print = Object.getOwnPropertyDescriptor(john, "name");
// console.log(JSON.stringify(print, null, " -- "));

// console.log(Object.getOwnPropertyDescriptor(john, "name"));
// console.log(Object.getOwnPropertyDescriptor(john, "age"));

function User(name, surname, birthday) {
    // this.name = name;
    this.surname = surname;
    // this.age = age;
    this.birthday = birthday;

    Object.defineProperties(this, {
        fullname: {
            get() {
                return `${this._name} ${this.surname}`;
            },
            set(value) {
                [this._name, this.surname] = value.split(" ");
            },
        },
        age: {
            get() {
                let todayYear = new Date().getFullYear();
                return todayYear - this.birthday.getFullYear();
            },
        },
        name: {
            get() {
                return this._name;
            },
            set(value) {
                if (value.length < 4) {
                    console.log(
                        "Имя слишком короткое, должно быть более 4 символов"
                    );
                    return;
                }
                this._name = value;
            },
        },
    });
    this.name = name;
}
let birthday = new Date(1991, 6, 1);

let john = new User("John   ", "Nox", birthday);

// john.name = "123";

console.log(john.age);
console.log(john.name);
console.log(john.fullname);
console.log(john);

// let descriptor = Object.getOwnPropertyDescriptor(john, 'PI');

// let descriptor = Object.getOwnPropertyDescriptors(john);
// console.log(JSON.stringify(descriptor, null, 2));
