"use strict";
// let hamster = {
//     stomach: [],

//     eat(food) {
//         // this.stomach = [food];
//         this.stomach.push(food);
//     },
// };

// let speedy = { stomach: [], __proto__: hamster };

// let lazy = { stomach: [], __proto__: hamster };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// lazy.eat("apple");
// lazy.eat("banan");
// console.log(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy.stomach); // apple
// console.log(lazy); // apple

// let user = {
//     name: "John",
//     surname: "Smith",
//     walk() {
//         console.log("walk");
//     },
//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
// };

// let admin = {
//     __proto__: user,
//     isAdmin: true,
// };

// console.log(admin.fullName); // John Smith (*)

// // срабатывает сеттер!
// // admin.walk = function () {
// //     console.log("admin");
// // };
// admin.fullName = "Alice Cooper"; // (**)
// // console.log(admin.name); // Alice
// // console.log(admin.surname); // Cooper

// console.log(admin);
// // admin.walk();

// function Rabbit(name) {
//     this.name = name;
//     console.log(name);
// }

// let rabbit = new Rabbit("White Rabbit");
// console.log(rabbit);

// let rabbit2 = new rabbit.constructor("Black Rabbit");
// console.log(rabbit);
// // Rabbit.prototype = {
// //     eats: true,
// // };
// let obj2 = new rabbit.constructor("123 123");
// console.log(obj2);

// function Rabbit(name, surname) {
//     this.name = name;
//     this.surname = this.surname;
//     console.log(name, surname);
// }

// let rabbit = new Rabbit("White Rabbit", "sur");
// let rabbit2 = new rabbit.constructor("Black Rabbit", "222");
// // console.log(rabbit.constructor == Rabbit); // true (свойство получено из прототипа)

// // console.log(Object.getOwnPropertyDescriptors(Rabbit));
// // console.log(Rabbit.constructor);
// console.log(Object.keys(rabbit));
// =================================================

// function User(name) {
//     this.name = name;
// }

// // const constr = {
// //     age: 25,
// //     constructor: User,
// // };
// let age = 18;
// User.prototype.age = age;
// // User.prototype = {
// //     age: 25,
// //     constructor: User,
// // }; // (*)

// let user = new User("John");
// let user2 = new user.constructor("Pete");

// console.log(user.name); // undefined
// console.log(user2.name); // undefined
// console.log(user.age); // undefined
// console.log(user2.age); // undefined
// console.dir(user.name); // undefined
// console.dir(user2.name); // undefined
// console.dir(user.age); // undefined
// console.dir(user2.age); // undefined

// function Rabbit() {}

// // Не перезаписываем Rabbit.prototype полностью,
// // а добавляем к нему свойство
// Rabbit.prototype.jumps = true

// String.prototype.show = function () {
//     console.log(this + "****");
// };

// "BOOM!".show(); // BOOM!

// Function.prototype.defer = function (ms) {
//     setTimeout(this, ms);
// };

// function f() {
//     console.log("Hello!");
// }

// f.defer(1000); // выведет "Hello!" через 1 секунду

// Function.prototype.defer = function (ms) {
//     let f = this;
//     return function (...args) {
//         setTimeout(() => f.apply(this, args), ms);
//     };
// };

// function sum(a, b) {
//     console.log(a + b);
// }

// sum.defer(1000)(1, 2); // выведет 3 через 1 секунду.

// Function.prototype.defer = function (ms) {
//     let f = this;
//     console.log(this);
//     return function (...args) {
//         setTimeout(() => f.apply(this, args), ms);
//     };
// };

// function sum(a, b) {
//     console.log(a + b);
// }

// sum.defer(1000)(1, 2); // выведет 3 через 1 секунду.

// Function.prototype.defer = function (ms) {
//     setTimeout(this, ms);
// };

// function f(a, b) {
//     console.log(a + b);
// }

// Function.prototype.defer = function (ms) {
//     let f = this;
//     return function (...args) {
//         setTimeout(() => f.apply(this, args), ms);
//     };
// };

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

// function f() {
//     console.log("Hello!");
// }

// Function.prototype.defer = function (ms) {
//     console.log(this);
//     setTimeout(this, ms);
// };

// f.defer(1000); // выведет "Hello!" через 1 секунду

// let obj = {};

// let key = "__proto__";
// obj[key] = "some value";

// console.log(obj[key]); // [object Object], не "some value"!

// let dictionary = Object.create(null, {
//     toString: {
//         value: function () {
//             Object.keys(this).join();
//         },
//     },
// });

// // ваш код, который добавляет метод dictionary.toString

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for (let key in dictionary) {
//     console.log(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// console.log(dictionary); // "apple,__proto__"

// function Rabbit(name) {
//     this.name = name;
// }
// Rabbit.prototype.sayHi = function () {
//     console.log(this.name);
// };

// let rabbit = new Rabbit("Кролик");

// rabbit.sayHi(); //Rabbit
// Rabbit.prototype.sayHi(); //
// Object.getPrototypeOf(rabbit).sayHi(); //undefined
// rabbit.__proto__.sayHi(); //undefined

// const PapperBook = function (title, author) {
//     // function PapperBook(title, author) {
//     this.author = author;
//     this.title = title;
//     this.isRead = false;
//     this.color = "Blue";
//     this.translate = function () {
//         console.log("tranlate book");
//     };
// };

// PapperBook.prototype.isRead = true;
// PapperBook.prototype.cover = "Paper";
// PapperBook.prototype.read = function () {
//     this.isRead = true;
// };
// PapperBook.prototype.wishful = function () {
//     this.wishful = true;
// };
// PapperBook.prototype.translate = function () {
//     console.log("prototype translate book");
// };

// const lord = new PapperBook("Lord", "Tolkien");
// console.log(lord.title);
// lord.translate();

// class BookClass {
//     constructor(title, author) {
//         this.author = author;
//         this.title = title;
//         this.isRead = false;
//         this.color = "Blue";
//     }
//     read() {
//         this.isRead = true;
//     }
//     wishful() {
//         this.wishful = true;
//     }
//     translate() {
//         console.log("translate book");
//     }
// }

// const lordClass = new BookClass("Lord", "Tolkien");
// console.log(lordClass.title);
// lordClass.translate();

const PapperBook = function (title, author) {
    this.author = author;
    this.title = title;
    this.isRead = false;
    this.color = "Blue";
    this.translate = function () {
        console.log("tranlate book");
    };
};
PapperBook.prototype.Read = function () {
    this.isRead = true;
};
PapperBook.hello = function () {
    console.log("Hello");
};
PapperBook.stat = 5;
const book = new PapperBook("Lord", "Tolkien");
console.log(book);
console.log(book.__proto__);
