// до вызова функции
// const menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == "Number") {
//             obj[key] *= 2;
//         }
//         console.log(obj[key]);
//     }
// }
// multiplyNumeric(menu);
// console.log(menu);

// после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu",
// };

//================================ This ===================

// const user = {
//     name: "Max",
//     age: 33,
//     sayHi() {
//         console.log(this.name);
//     },
// };

// user.sayHi();

// let user = {
//     firstName: "Ilya",
//     sayHi() {
//         let arrow = () => console.log(this.firstName);
//         arrow();
//     },
// };

// user.sayHi(); // Ilya

/*
Создайте калькулятор
важность: 5
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/

// let calculator = {
//     read(a, b) {
//         // this.a = +prompt("Введите число a", 0);
//         this.a = 8;
//         // this.b = +prompt("Введите число b", 0);
//         this.b = 9;
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

/**
 * Цепь вызовов
важность: 2
У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
 */

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
//     showStep: function () {
//         // показывает текущую ступеньку
//         console.log(this.step);
//         return this;
//     },
// };
// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1
// // ladder.down();
// // ladder.showStep(); // 0
// ladder.up().up().down().showStep().down().showStep();

// const userProf = {
//     name: "Artem",
//     age: 36,
//     comm: 23,
// };
// const name = "Nil";

// const { age } = userProf;
// const { comm } = userProf;
// console.log(name, age, comm);

const userProf = {
    name: "Artem",
    commentsQTy: 0,
    age: 36,
};

let name = "Nil";
userInfo = ({ name, commentsQTy }) => {
    if (!commentsQTy) {
        return console.log(`${name} не оставил ни одного комментария`);
    } else {
        return console.log(`${name} оставил ${commentsQTy} комментария`);
    }
};
userInfo(userProf);
