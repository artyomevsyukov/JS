// function sayHi(a, b, c) {
//     console.log("Hi, " + a + " " + " " + b);

//     // давайте посчитаем, сколько вызовов мы сделали
//     sayHi.counter++;
// }
// sayHi.counter = 0; // начальное значение

// sayHi("Max", "Jon"); // Hi
// sayHi(); // Hi
// sayHi(); // Hi
// sayHi(); // Hi
// sayHi(); // Hi

// console.log(
//     `Вызвана ${sayHi.counter} раза, имя функуии ${sayHi.name}, ${sayHi.length}`
// ); // Вызвана 2 раза

// function changeCount(a) {
//     console.log(counter.count);
//     return (counter.count = a);
// }

// function makeCounter() {
//     // вместо
//     // let count = 0
//     counterC.count = 0;

//     function counterC() {
//         return counterC.count++;
//     }

//     return counterC;
// }

// let counter = makeCounter();
// let counter2 = makeCounter();
// counter.count = 5;
// counter2.count = 10;
// // console.log(changeCount(5));
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter2()); // 0
// console.log(counter2()); // 1

// ======================================================
// Исходная функция
// let originalFunction = function () {
//     console.log("Original function");
// };

// // Копирование функции
// const copiedFunction = originalFunction;

// // Вызов обеих функций
// originalFunction(); // Выведет "Original function"
// copiedFunction(); // Выведет "Original function"

// // Изменение оригинальной функции
// originalFunction.message = "Hello from original";
// originalFunction = null;
// // Печать значения свойства message для обеих функций

// console.log(originalFunction);
// // console.log(originalFunction.message); // Выведет "Hello from original"
// console.log(copiedFunction.message); // Выведет "Hello from original"

// function sayHi() {
//     // (1) создаём
//     // return 1;
//     return 2 + 2;
// }

// let func = sayHi(); // (2) копируем

// // console.log(sayHi()); // Привет     // (3) вызываем копию (работает)!
// console.log(func); // Привет     // (3) вызываем копию (работает)!
// // sayHi(); // Привет

// function makeCounter() {
//     let count = 0;
//     function counter() {
//         return ++count;
//     }
//     counter.set = function (value) {
//         return (count = value);
//     };
//     // counter.decrease = function () {
//     counter.decrease = () => --count;
//     //     return --count;
//     // };
//     return counter;
// }

// let counter2 = makeCounter();
// makeCounter = null;

// console.log(counter2.set(20));
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2.decrease());
// ==========================================================

// function sum(...arg){
//   let isYes = arg;

//   for(let handler of arg) {
//     if (handler.length == 0) {
//       if (isYes) handler();
//     } else {
//       handler(arg);
//     }
//   }

// }

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

// function yes() {
//     return console.log("Вы ответили да");
// }

// function ask(question, ...handlers) {
//     let isYes = true;

//     for (let handler of handlers) {
//         console.log(handler, handler.length);
//         if (handler.length == 0) {
//             if (isYes) handler();
//         } else {
//             handler(isYes);
//         }
//     }
// }
// let a = "test";
// // для положительных ответов вызываются оба типа обработчиков
// // для отрицательных - только второго типа
// ask(
//     "Вопрос?",
//     function yes() {
//         return console.log("Вы ответили да ");
//     },
//     function result(result, a) {
//         let text = "test";
//         a = text;
//         return console.log(result, a);
//     }
// );

// function sayHi() {
//     console.log("Hi");

//     // давайте посчитаем, сколько вызовов мы сделали
//     sayHi.counter++;
// }
// sayHi.counter = 0; // начальное значение
// sayHi.test = 0; // начальное значение

// sayHi(); // Hi
// sayHi(); // Hi
// sayHi(); // Hi
// sayHi(); // Hi

// console.log(`Вызвана ${sayHi.counter} раза`); // Вызвана 2 раза
// console.log(sayHi);
// console.log(sayHi.counter);
// sayHi.counter--;
// console.log(sayHi.counter);

// function makeCounter() {
//     // вместо
//     // let count = 0

//     function counter() {
//         return ++counter.count;
//     }

//     counter.count = 10;
//     console.log("345234");
//     return counter;
// }

// let counter = makeCounter();
// console.log(counter()); // 0
// console.log(counter()); // 1

function sum(a = 2, b = 3) {
    return a + b;
}
let z = sum;
let x = sum();
console.log(z);
console.log(x);
console.log(z());

// function makeCounter() {
//     function counter() {
//         return counter.count++;
//     }

//     counter.count = 0;

//     return counter;
// }

// let x = makeCounter();
// let z = makeCounter();
// console.log("z", z()); // 0
// console.log(x()); // 0
// console.log(x()); // 0
// console.log("z", z()); // 0
// console.log("z", z()); // 1
// console.log("z", z()); // 1
// console.log("z", z()); // 1
// console.log(x()); // 0
// console.log("z", z()); // 1

// function sum(a) {
//     let currentSum = a;

//     function f(b) {
//         currentSum += b;
//         return f;
//     }

//     // f.toString = function () {
//     //     return currentSum;
//     // };
//     f.valueOf = function () {
//         return currentSum;
//     };

//     return f;
// }

// alert(sum(1)(2)); // 3
// alert(sum(5)(-1)(2)); // 6
// alert(sum(6)(-1)(-2)(-3)); // 0
// alert(sum(0)(1)(2)(3)(4)(5)); // 15
// console.log(sum(1)(2)); // 3
// console.log(sum(5)(-1)(2)); // 6
// console.log(sum(6)(-1)(-2)(-3)); // 0
// console.log(sum(0)(1)(2)(3)(4)(5)); // 15

// function sum(a) {
//     let currentSum = a;

//     function f(b) {
//         currentSum += b;
//         return f;
//     }
//     f.toString = function () {
//         return currentSum;
//     };

//     // f.valueOf = function () {
//     //     return currentSum;
//     // };
//     // f[Symbol.toPrimitive] = function () {
//     //     return currentSum;
//     // };

//     return f;
// }

// console.log(sum(1)(2)); // 3
// console.log(sum(5)(-1)(2)); // 6
// console.log(sum(6)(-1)(-2)(-3)); // 0
// console.log(sum(0)(1)(2)(3)(4)(5)); // 15

// alert(sum(1)(2).getResult()); // 3
// alert(sum(5)(-1)(2).getResult()); // 6
// alert(sum(6)(-1)(-2)(-3).getResult()); // 0
// alert(sum(0)(1)(2)(3)(4)(5).getResult()); // 15

// console.log(sum(1)(2).getResult()); // 3
// console.log(sum(5)(-1)(2).getResult()); // 6
// console.log(sum(6)(-1)(-2)(-3).getResult()); // 0
// console.log(sum(0)(1)(2)(3)(4)(5).getResult()); // 15

// function exampleFunction() {
//     return "Hello, World!";
// }

// exampleFunction.toString = function () {
//     return "Custom String Representation";
// };

// alert(exampleFunction);
