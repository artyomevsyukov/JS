"use strict";
// class Clock {
//     constructor({ template = "h:m:s" }) {
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
//         // this.timer = setInterval(this.render.bind(this), 1000);
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();

// class ExtendedClock extends Clock {
//     // constructor({ template }, precision = 1000) {
//     //     super({ template });
//     //     this.precision = precision;
//     // }
//     constructor(options = {}) {
//         // super((options = {}));
//         super({ template: options.template || "h:m:s" });
//         // let { precision = 1000 } = options;
//         // this.precision = precision;
//         this.precision = options.precision || 100;
//     }
//     start() {
//         this.render();
//         // this.timer = setInterval(this.render.bind(this), 1000);
//         this.timer = setInterval(() => this.render(), this.precision);
//     }
// }
// // let clockPrecision = new ExtendedClock({ template: "h:m:s", precision: 500 });
// let clockPrecision = new ExtendedClock();

// // let clockPrecision = new ExtendedClock({ template: "h:m:s" }, 100);
// clockPrecision.start();

// ===========================static==========================

// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }

//     static createTodays(title = "Сегодняшний дайджест") {
//         // помним, что this = Article
//         return new this(title, new Date());
//     }
// }

// let article1 = Article.createTodays("test");
// let article2 = Article.createTodays();

// console.log(article1.title);
// console.log(article1.date);
// console.log(article2.title);
// console.log(article2.date);

// class Rabbit extends Object {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }

// let rabbit = new Rabbit("Кроль");

// console.log(rabbit.hasOwnProperty("name")); // Ошибка
console.log(2 + 4);
