// function makeUser() {
//     return {
//         name: "John",
//         ref() {
//             return this;
//         },
//     };
// }

// const { use } = require("chai");

// const { use } = require("chai");

// let user = makeUser();

// console.log(user.ref().name); // John

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         // return this;
//     },
//     down() {
//         this.step--;
//         // return this;
//     },
//     showStep: function () {
//         console.log(this.step);
//         // return this;
//     },
// };
// ladder.up().up().up().down().showStep();

// function makeUser() {
//     return {
//         name: "John",
//         ref() {
//             return this;
//         },
//     };
// }

// let user = makeUser();

// console.log(user.ref().name); // Каким будет результат?

/* 
Если непонятно почему в 1ой задаче ошибка:
this вызывается в функции и там же принимает значение undefined (смотрите на место вызова)потому что у функции контекста нету.
То есть, в блоке функции ключ ref принимает сразу undefined и копируют в user тоже undefined.
Следовательно, в вызове будет ошибка т.к. не найдена ссылка на обьект

п.с. Прошу простить за точность, но суть я донес
**/
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         console.log(this.step);
//         return this;
//     },
// };

// ladder.up().up().down().showStep().down().showStep();

// var sport = {
//     tournaments: "World Master",
//     players: [
//         { name: "Wood", age: 37 },
//         { name: "Mile", age: 43 },
//     ],
//     show() {
//         // console.log(this);
//         // this.players.forEach((players) =>
//         //     console.log(players.name, this.tournaments)
//         // );
//         // let self = this;
//         this.players.forEach(
//             // function (players) {
//             //     console.log(players.name, self.tournaments);
//             // }
//             function (players) {
//                 console.log(players.name, this.tournaments);
//             }.bind(this)
//         );
//     },
// };

// sport.show();
// const person = {
//     name: "Alice",
//     greet: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     },
// };
// person.greet();

// const personGreetFunction = person.greet.bind(person);
// personGreetFunction();
// // const personGreetFunction = person.greet;
// // personGreetFunction.call(person);

// let user = {
//     firstName: "Вася",
//     sayHi() {
//         console.log(`Привет, ${this.firstName}!`);
//     },
// };
// // let f = user.sayHi;
// let f = user.sayHi.bind(user);
// // f();

// setTimeout(user.sayHi.bind(user), 1000);
// setTimeout(() => user.sayHi(), 2000);
// setTimeout(user.sayHi.call(user), 1000);
// setTimeout(user.sayHi.call(this), 1000);

// function sayHi() {
//     sayHi.test = 5;
//     console.log(this.name);
// }

// let bound = sayHi.bind({
//     name: "Вася",
// });

// console.log(bound.test); // что выведет? почему?
// console.log(bound.name); // что выведет? почему?
// bound();
// function test() {
//     console.log("123");
// }
// test();
// console.log(test.name);

// let password = "rockstar";

// function askPassword(ok, fail) {
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

// askPassword(user.loginOk, user.loginFail);
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// askPassword(
//     () => user.loginOk(),
//     () => user.loginFail
// );
// askPassword(() => user.loginOk(), user.loginFail.bind(user));
// let f1 = user.loginOk.bind(user);
// let f2 = user.loginFail.bind(user);
// let f3 = user.loginOk();
// let f4 = user.loginFail();
// let f5 = user.loginOk;
// let f6 = user.loginFail;

// setTimeout(
//     askPassword.bind(user, user.loginOk.bind(user), user.loginFail.bind(user)),
//     200
// );
// setTimeout(() => askPassword(f1, f2), 200);
// setTimeout(askPassword.bind(user, f1, f2), 250);
// setTimeout(
//     () =>
//         askPassword.bind(
//             user,
//             () => f5,
//             () => f6
//         ),
//     400
// );
// setTimeout(askPassword.bind(user, f5, f6), 450);
// setTimeout(askPassword.bind(user, f1, f2), 200);
// setTimeout(
//     () => askPassword(user.loginOk.bind(user), user.loginFail.bind(user)),
//     400
// );
// setTimeout(
//     () =>
//         askPassword(
//             () => user.loginOk(),
//             () => user.loginFail()
//         ),
//     1000
// );

// user = null;
// let a = 2,
//     b = 2;
// function sayHi() {
//     // console.log(a + b);
//     console.log(this.name);
//     console.log(this.test);
//     return a + b;
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//     name: "Вася",
//     test: "test-333",
// });

// // console.log(bound.test2);
// console.log(bound());
// // console.log(sayHi.test);
// // sayHi();

// let password = "rockstar";

// function askPassword(ok, fail) {
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: "John",

//     login(result) {
//         console.log(this.name + (result ? " logged in" : " failed to log in"));
//     },
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false));
// askPassword(
//     () => user.login(true),
//     () => user.login(false)
// );
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// let password = "1234";
// function askPassword(ok, fail) {
//     if (password == "123") {
//         ok();
//     } else {
//         fail();
//     }
// }
// let user = {
//     name: "John",
//     login(result) {
//         console.log(this.name + (result ? " logged in" : " failed to log in"));
//     },
// };

// askPassword(
//     () => user.login(true),
//     () => user.login(false)
// );
// askPassword(user.login.bind(user, true), user.login.bind(user, false));

// function sayHi(who) {
//     console.log("Hello, " + who);
// }
// // sayHi("Pit");

// function deffer(f, ms) {
//     return function (...args) {
//         setTimeout(() => f(args), ms);
//         setTimeout(() => f.apply(this, args), ms);
//         setTimeout(f.bind(this, args), ms);
//     };
// }

// let sayHiDeffer = deffer(sayHi, 1000);
// sayHiDeffer("Lex");

function show(args) {
    console.log(this.title + ": " + args);
}

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        const show = (args) => {
            console.log(this.title + ": " + args);
        };
        // this.students.forEach(show.bind(this));
        this.students.forEach((students) => show(students));
        // this.students.forEach((students) => show.call(this, students));
    },

    // showList() {
    //     this.students.forEach((student) =>
    //         console.log(this.title + ": " + student)
    //     );
    // },
};

group.showList();
