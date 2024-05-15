// setTimeout(
//     (a, b) => {
//         console.log(`test ${a}${b}`);
//     },
//     100,
//     4,
//     7
// );
// let timer = setInterval(() => {
//     console.log("INTERVAL");
// }, 400);
// setTimeout(() => clearInterval(timer), 2000);

// let timer = setTimeout(
//     function tick(a, b) {
//         console.log(a + b);
//         timer = setTimeout(tick, 500, 4, 7);
//     },
//     500,
//     5,
//     10
// );
// setTimeout(() => clearInterval(timer), 3000);

// let error = 404;
// let delay = 150;
// // let time = 2;
// let timerDelay = setTimeout(function request() {
//     if (error == 404) {
//         delay *= 2;
//     }
//     if (delay > 14000) {
//         error = 400;
//     }
//     // console.log(`delay ${delay} * time ${time}: `, delay * time);
//     console.log(`delay ${delay}: `, delay);
//     timerDelay = setTimeout(request, delay);
// }, delay);

// setInterval(
//     (e) => {
//         console.log(e);
//         if (e == 400) {
//             clearTimeout(timerDelay);
//         }
//     },
//     5000,
//     error
// );

// function printNumbers(from, to) {
//     let current = from;

//     let timer = setInterval(function () {
//         console.log(current);
//         if (current == to) {
//             clearInterval(timer);
//         }
//         current++;
//     }, 1000);
// }
// printNumbers(3, 10);

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
// printNumbers(3, 10);

// function printNumbers(from, to) {
//     let current = from;
//     setTimeout(function go() {
//         console.log(current);
//         if (current < to) {
//             setTimeout(go, 1000);
//         }
//         current++;
//     }, 1000);
// }
// printNumbers(3, 10);

// function printNumbers(from, to) {
//     let current = from;
//     setTimeout(function go() {
//         console.log(current);
//         if (current < to) {
//             setTimeout(go, 1000);
//         }
//         current++;
//     }, 1000);
// }
// printNumbers(3, 10);

// function printNumbers(from, to) {
//     let current = from;

//     function go() {
//       alert(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }

//     go();
//     let timerId = setInterval(go, 1000);
//   }

//   printNumbers(5, 10);

// function printNumbers(from, to) {
//     let current = from;

//     function go() {
//         console.log(current);
//         if (current < to) {
//             current++;
//             setTimeout(go, 300);
//         }
//     }
//     go();
//     // setTimeout(go, 1000);
// }

// printNumbers(3, 8);
