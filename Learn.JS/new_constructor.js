// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }
// // class User {
// //     constructor(name) {
// //         this.name = name;
// //         this.isAdmin = false;
// //     }
// // }

// let pol = new User("Jack");

// console.log(pol.name); // Jack
// console.log(pol.isAdmin); // false

// function BigUser() {
//     this.name = "John";

//     return { name: "Godzilla" }; // <-- возвращает этот объект
//     return 12; // <-- возвращает этот объект
// }

// // console.log(new BigUser().name); // Godzilla, получили этот объект
// console.log(new BigUser()); // Godzilla, получили этот объект

//===========================================================================================================

/**
 * Создайте калькулятор при помощи конструктора, new Calculator
важность: 5
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
Запустить демо

Открыть песочницу с тестами для задачи.
 */
let a = 3;
let b = 4;
function Calculator() {
    this.read = function () {
        this.a = a;
        this.b = b;
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
}

let calc = new Calculator();
calc.read();

console.log("Sum=" + calc.sum());
console.log("Mul=" + calc.mul());

//====================================================

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value = +prompt("value?", 0);
    };
    return (this.value += this.startingValue);
}

let accumulator = new Accumulator(0);
accumulator.read();

alert(accumulator.value);
