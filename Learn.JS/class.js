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
// ===================================================================================
// class Clock {
//     constructor({ template }) {
//         this.template = template;
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
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }

// class ExtendedClock extends Clock {
//     timer1() {
//         this.timerStart = setInterval(() => super.render(), this.precision);
//     }
//     constructor({ template }, precision = 500) {
//         super({ template });
//         this.precision = precision;
//         // this.precision = precision || 500;
//     }
//     render() {
//         console.log("ExtendedClock.render()");
//     }
//     // start() {
//     //     this.render();
//     //     this.timer = setInterval(() => this.render(), this.precision);
//     // }
//     start() {
//         super.render();
//         this.timer1();
//     }
// }

// // todo
// // class ExtendedClock extends Clock {
// //     constructor(options) {
// //         super(options);
// //         let { precision = 1000 } = options;
// //         this.precision = precision;
// //     }

// //     start() {
// //         this.render();
// //         this.timer = setInterval(() => this.render(), this.precision);
// //     }
// // }
// // let lowResolutionClock = new ExtendedClock({
// //     template: "h:m:s",
// //     precision: 10000,
// // });
// // lowResolutionClock.start();
// //
// //
// //
// //

// // let extendedClock = new ExtendedClock({ template: "h:m:s" });
// let extendedClock = new ExtendedClock({ template: "h:m:s" }, 200);

// // extendedClock.render();
// extendedClock.start();
// =======================================================================================

// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }

//     static compare(articleA, articleB) {
//         return articleA.date - articleB.date;
//     }
// }

// // использование
// let articles = [
//     new Article("JavaScript", new Date(2019, 11, 1)),
//     new Article("HTML", new Date(2019, 1, 1)),
//     new Article("JavaScript", new Date(2019, 11, 1)),
//     new Article("CSS", new Date(2019, 0, 1)),
// ];

// articles.sort(Article.compare);

// console.log(articles[0].title); // CSS
// console.log(articles[1].title); // CSS
// console.log(articles[2].title); // CSS
// console.log(articles[3].title); // CSS
// =======================================================================================

// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }

//     static createTodays() {
//         // помним, что this = Article
//         return new this("Сегодняшний дайджест", new Date());
//     }
// }

// let article = Article.createTodays();

// alert(article.title); // Сегодняшний дайджест
// =======================================================================================
class Article {
    category = science;
    constructor(title, date) {
        this.title = title;
        this.date = date;
        this.color = blue;
    }

    //  static createTodays(title = "Сегодняшний дайджест") {
    //         // помним, что this = Article
    //         return new this(title, new Date());
    //     }
    // }
    createTodays2(title = "Сегодняшний дайджест") {
        return console.log(title, new Date());
    }
    static createTodays(title) {
        // помним, что this = Article
        return new this(title, new Date());
    }
}

let article = Article.createTodays("djjherfwef");

new Article().createTodays2("12312313123");

console.log(article.title, article.date); // Сегодняшний дайджест
// console.log(article.date); // Сегодняшний дайджест
// =======================================================================================
