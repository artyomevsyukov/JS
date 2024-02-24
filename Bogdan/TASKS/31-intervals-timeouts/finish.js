/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(function () {
//         console.log(current);
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 500);
//     // timerId();
// }
// printNumbers(1, 5);

//
//
//
//
//

// function printNumbers(from, to) {
//     let current = from;
//     let timerId = setInterval(function () {
//         console.log(current);
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 300);
// }
// printNumbers(2, 9);

// function printNumbers(from, to) {
//     let current = from;
//     setTimeout(function go() {
//         console.log(current);
//         if (current < to) {
//             setTimeout(go, 300);
//         }
//         current++;
//     }, 500);
// }
// printNumbers(2, 9);

// function printNumbers(n) {
//     let current = 1;
//     let timerId = setInterval(
//         function () {
//             console.log(`Message #${current}`);
//             // if (current == n) {
//             //     clearInterval(timerId);
//             // }
//             current++;
//         },
//         300,
//         n
//     );
// }

// printNumbers(9);

// function printNumbers(from, to) {
//     let current = from;
//     setTimeout(function go() {
//         console.log(`Message #${current}`);
//         if (current < to) {
//             setTimeout(go, 300);
//         }
//         current++;
//     }, 300);
// }
// printNumbers(1, 9);
// function printNumbers(from, to) {
//     let current = from;
//     const timerId = setInterval(function () {
//         console.log(`Message #${current}`);
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 300);
// }
// printNumbers(1, 9);
function printNumbers(from, to) {
    let current = from;
    setTimeout(function go() {
        console.log(`Message#${current}`);
        if (current < to) {
            setTimeout(go, 300);
        }
        current++;
    }, 300);
}
printNumbers(1, 9);
