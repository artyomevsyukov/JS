// class Clock {
//     constructor({ template, time = 1000 }) {
//         this.template = template;
//         this.time = time;
//         this.timer = null;
//     }

//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = "0" + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = "0" + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = "0" + secs;

//         let output = this.template
//             .replace("h", hours)
//             .replace("m", mins)
//             .replace("s", secs);

//         console.log(output);
//     }

//     stop() {
//         clearInterval(this.timer);
//     }

//     start() {
//         this.render();
//         // this.timer = setInterval(() => this.render(), 1000);
//         this.timer = setInterval(this.render.bind(this), this.time);
//     }
// }

// let clock = new Clock({ template: "h:m:s", time: 500 });
// clock.start();

// setTimeout(() => clock.stop(), 8000);

// ===========================================
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Rabbit extends Animal {
//     constructor(name) {
//         super(name);
//         this.created = Date.now();
//     }
// }

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// console.log(rabbit.name);
// ======================================================

// class Clock {
//     constructor({ template }) {
//         this.template = template;
//         // this.time = time;
//         this.timer = null;
//     }

//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = "0" + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = "0" + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = "0" + secs;

//         let output = this.template
//             .replace("h", hours)
//             .replace("m", mins)
//             .replace("s", secs);

//         console.log(output);
//     }

//     stop() {
//         clearInterval(this.timer);
//     }

//     start() {
//         this.render();
//         // this.timer = setInterval(() => this.render(), 1000);
//         this.timer = setInterval(this.render.bind(this), 1000);
//     }
// }

// let clock = new Clock({ template: "h:m:s", time: 500 });
// clock.start();

// setTimeout(() => clock.stop(), 8000);

// class ExtendedClock extends Clock {
//     constructor(precision) {
//         super(precision);
//         this.precision = precision;
//     }

//     start() {
//         super.render();
//         this.timer = setInterval(() => this.render(), this.precision);
//         // this.timer = setInterval(this.render.bind(this), this.precision);
//     }
// }

// let extendedClock = new ExtendedClock({ template: "h:m:s", precision: 1000 });
// extendedClock.start();
// // let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// // console.log(rabbit.name);

// class Comment {
//     constructor(text) {
//         this.text = text;
//         this.votesQty = 0;
//     }
//     upvote() {
//         this.votesQty++;
//     }
// }

// const firstComment = new Comment("sdfsdfdf");

// firstComment.upvote();
// firstComment.upvote();
// firstComment.upvote();
// firstComment.upvote();
// console.log(firstComment.votesQty);

// class NumberArray extends Array {
//     sum() {
//         return this.reduce((acc, current) => acc + current, 0);
//     }
// }

// const myArray = new NumberArray(4, 6, 10);

// console.log(myArray);
// console.log(myArray.sum());

// class User {
//     surname = "Аноним";
//     age = 22;
//     constructor(name, surname) {
//         this.name = name;
//         // this.surname = surname;
//     }
//     sayHi() {
//         console.log(`Привет, ${this.surname}!`);
//     }
// }

// new User().sayHi();

// let user = new User("Pit");
// console.log(user);
// console.dir(user);

// function Rabbit(name) {
//     this.name = name;
// }
// Rabbit.prototype.sayHi = function () {
//     alert(this.name);
// };
// Rabbit.prototype.zzz = 22;

// let rabbit = new Rabbit("Rabbit");

// class Clock {
//     constructor({ template }) {
//         this.template = template;
//     }

//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = "0" + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = "0" + mins;

//         // let secs = `${date.getSeconds()}`.padStart(3, "0");
//         // let secs = date.getSeconds();
//         let secs = String(date.getSeconds()).padStart(3, "0");
//         // if (secs < 10) secs = "0" + secs;
//         let output = this.template
//             .replace("h", hours)
//             .replace("m", mins)
//             .replace("s", secs);
//         // .replace("s", String(secs).padStart(3, "0"));

//         console.log(output);
//         // console.log(String(output).padStart(3, "0"));
//     }

//     stop() {
//         clearInterval(this.timer);
//     }

//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();

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
//
//
//
//
//

// class Clock {
//     constructor({ template }) {
//         this.timer = null;
//         this.template = template;
//     }

//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = "0" + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = "0" + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = "0" + secs;

//         let output = this.template
//             .replace("h", hours)
//             .replace("m", mins)
//             .replace("s", secs);

//         console.log(output);
//     }

//     stop() {
//         clearInterval(this.timer);
//     }

//     start() {
//         this.render();
//         this.timer = setInterval(this.render.bind(this), 1000);
//     }
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();
