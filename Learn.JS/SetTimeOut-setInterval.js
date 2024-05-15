"use strict";
// function sayHi() {
//     return console.log("Привет");
// }

// setTimeout(sayHi(), 1000);

// function printTime() {
//     console.log(new Date());
// }

// let timer = setInterval(printTime, 1000);
// setTimeout(() => clearInterval(timer), 5000);
// console.log("dsf");
// function sayHi() {
//     console.log("Привет");
//     function func(a = 2, b = 3) {
//         return console.log("asfdf");
//     }
//     return func();
// }

// let x = sayHi();
// let z = sayHi;
// console.log(x);
// console.log(z);
// // setTimeout(sayHi, 1000);

// function sum(a = 2, b = 3) {
//     return console.log(a + b);
// }
// // let x = sum(2, 3);
// // console.log(sum());
// // setTimeout(sum, 1000);
// let timer = setTimeout(sum, 2000, 2, 3);
// clearTimeout(timer, 1000);

// let timerId = setInterval(() => console.log("tick"), 1000);
// setTimeout(() => {
//     clearInterval(timerId), console.log("stop");
// }, 5100);

// let delay = 500;
// let error347 = true;
// let timerId = setTimeout(function request() {
//     //код запроса на сервер
//     console.log(delay);

//     if (error347) {
//         // увеличить интервал для следующего запроса
//         if (delay <= 30000) delay *= 2;
//     }

//     timerId = setTimeout(request, delay);
// }, delay);

// let delay = 100;
// let timer = setTimeout(function server() {
//     console.log(delay);
//     if (error347) {
//         if (delay <= 1000) {
//             delay *= 2;
//         } else delay = 1200;
//         timer = setTimeout(server, delay);
//     }
// }, delay);
// ===================================================

// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//     times.push(Date.now() - start); // запоминаем задержку от предыдущего вызова

//     if (start + 100 < Date.now())
//         console.log(times); // показываем задержку через 100 мс
//     else setTimeout(run); // если нужно ещё запланировать
// });

// function sayHi() {
//     console.log("Hi");

//     // давайте посчитаем, сколько вызовов мы сделали
//     sayHi.counter++;
// }
// sayHi.counter = 0; // начальное значение

// sayHi(); // Hi
// sayHi(); // Hi

// console.log(`Вызвана ${sayHi.counter} раза`); // Вызвана 2 раза
//=====================

// function printNumbers(from, to) {
//     let current = from;
//     let timerId = setInterval(function () {
//         console.log(current);
//         if (current >= to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 300);
// }

// printNumbers(3, 8);

// function printNumbers(from, to) {
//     let current = from;
//     let timerId = setTimeout(function go() {
//         console.log(current);

//         if (current < to) {
//             setTimeout(go, 300);
//         }
//         current++;
//         // clearTimeout(timerId);
//     }, 300);
// }

// printNumbers(3, 8);

// function printNumbers(from, to) {
//     let current = from;

//     function go() {
//         console.log(current);
//         if (current >= to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }
//     let timerId = setInterval(go, 300);
// }
// printNumbers(3, 8);
// go();

// // ================================================
function printNumbers(from, to) {
    let current = from;

    function go() {
        console.log(current);
        if (current < to) {
            current++;
            setTimeout(go, 300);
        }
    }
    go();
    // setTimeout(go, 1000);
}

printNumbers(3, 8);

// function printNumbers(from, to) {
//     let current = from;

//     function go() {
//         console.log(current);
//         if (current < to) {
//             current++;
//             setTimeout(go, 300); // вызываем снова через 300 миллисекунд
//         }
//     }

//     go(); // вызываем функцию go сразу после определения
// }

// printNumbers(1, 15);

// function printNumbers(from, to) {
//     let current = from;

//     function go() {
//         console.log(current);
//         if (current < to) {
//             setTimeout(go, 1000);
//         }
//         current++;
//     }
//     setTimeout(go, 5000);
// }

// // использование:
// printNumbers(5, 10);

// function secondItem() {
//     setTimeout(() => console.log("5-hello"), 50);

//     console.log("1-Max");
//     console.log("2-Den");
//     setTimeout(() => console.log("4-hello"), 20);
// }
// secondItem();

// setTimeout(() => console.log("444444"), 45);
// console.log("3-Ken");

// function printNumbers(from, to) {
//     let current = from;
//     function go() {
//         console.log(current);
//         if (current == to) {
//             clearInterval(timer);
//         }
//         current++;
//     }
//     go();
//     let timer = setInterval(go, 1000);
// }
// printNumbers(3, 9);

// function printNumbers(from, to) {
//     let current = from;
//     let timerId = setInterval(function go() {
//         console.log(current);
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// }
// printNumbers(3, 9);

// function printNumbers(from, to) {
//     let current = from;
//     function go() {
//         if (current < to) {
//             setTimeout(go, 300);
//         }
//         console.log(current);
//         current++;
//     }
//     go();
// }
// printNumbers(3, 9);

// for (let i = 1; i <= 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 300);
// }
// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }

// function printNumbers(from, to) {
//     let current = from;
//     function go() {
//         if (current < to) {
//             setTimeout(go, 300);
//         }
//         console.log(current);
//         current++;
//     }
//     go();
// }
// printNumbers(3, 9);

// function printNumbers(from, to) {
//     for (let current = from; current <= to; current++) {
//         setTimeout(() => {
//             console.log(current);
//         }, 500 * (current - from + 1));
//     }
// }

// printNumbers(-3, 9);

// function counter() {
//     let count = 0;

//     return {
//         increment: function () {
//             count++;
//         },
//         getCount: function () {
//             return count;
//         },
//     };
// }

// const counterInstance = counter();
// counterInstance.increment();
// console.log(counterInstance.getCount()); // Выведет 1
// console.log(typeof counterInstance);
// console.log(typeof counter);
// console.log(typeof counter());

// function printNumbers(from, to) {
//     let current = from;
//     function go() {
//         console.log(current);
//         if (current == to) {
//             clearInterval(timer);
//         }
//         current++;
//     }
//     go();
//     let timer = setInterval(go, 300);
// }
// printNumbers(-3, 7);

// function printNumbers(from, to) {
//     let current = from;
//     function go() {
//         console.log(current);
//         if (current < to) {
//             setTimeout(go, 300);
//         }
//         current++;
//     }
//     // go();
//     // setTimeout(go, 300);
// }
// printNumbers(-3, 7);

// function printNumber(from, to) {
//     let current = from;

//     function go() {
//         if (current >= to) {
//             clearInterval(timerId);
//         }
//         console.log(current);
//         current++;
//     }
//     go();
//     let timerId = setInterval(go, 1500);
// }

// printNumber(4, 9);
// function printNumber(from, to) {
//     let current = from;

//     function go() {
//         console.log(current);
//         if (current < to) {
//             setTimeout(go, 1000);
//         }
//         current++;
//     }
//     go();
//     // setTimeout(go, 1000);
// }
