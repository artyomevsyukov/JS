"use strict";
// let user = {
//     firstName: "Вася",
//     say(phrase) {
//         console.log(`${phrase}, ${this.firstName}!`);
//     },
//     say2(phrase) {
//         console.log(`${phrase}, ${this.firstName}!`);
//     },
//     say3(phrase) {
//         console.log(`${phrase}, ${this.firstName}!`);
//     },
// };
// let say;
// let say2;
// let say3;
// // let say = user.say.bind(user);
// for (let key in user) {
//     if (typeof user[key] == "function") {

//         user[key] = user[key].bind(user);
//     }
// }

// say("Привет"); // Привет, Вася (аргумент "Привет" передан в функцию "say")
// say("Пока");

// function f() {
//     console.log(this); // ?
// }

// let user = {
//     g: f.bind(null),
// };

// user.g();

// function f() {
//     console.log(this.name);
// }

// f = f.bind({ name: "Вася" });
// let z = f.bind({ name: "Петя" });

// f(); // Вася
// z(); // Вася

// function f() {
//     console.log(this.name);
// }

// let firstBind = f.bind({ name: "Вася" });
//     let secondBind = f.bind({ name: "Петя" });

// // let secondBind = function () {
// //     // Используем метод call для установки нового контекста
// //     firstBind.call({ name: "Петя" });
// // };

// secondBind(); // Выведет "Петя"
// function f() {
//     console.log(this.name);
// }

// let x = f.bind({ name: "Вася" }).bind({ name: "Петя" });
// let z = f.bind({ name: "Петя" });
// x(); // Вася
// // x(); // Вася
// z(); // Вася
// ==============================

// function sayHi() {
//     console.log(this.name);
//     sayHi.test = 5;
// }

// let bound = sayHi.bind({
//     name: "Вася",
// });

// console.log(bound.test); // что выведет? почему?

// function askPassword(ok, fail) {
//     // let password = prompt("Password?", '');
//     let password = "rockstar";
//     // let password = "rocks";
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: "Вася",

//     loginOk() {
//         console.log(`${this.name} logged in`);
//     },

//     loginFail() {
//         console.log(`${this.name} failed to log in`);
//     },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// askPassword(
//     () => user.loginOk(),
//     () => user.loginFail()
// );
// ========================================================

// function askPassword(ok, fail) {
//     // let password = "rockstar";
//     let password = "rocks";
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: "John",

//     login(result) {
//         console.log(this.name + (result ? " logged in" : " failed to log in"));
//     },
// };

// // askPassword(
// //     () => user.login(true),
// //     () => user.login(false)
// // ); // ?
// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach((student) =>
            console.log(this.title + ": " + student)
        );
    },
};

// group.showList();
let newGrop = group.showList.bind(group);
newGrop();
