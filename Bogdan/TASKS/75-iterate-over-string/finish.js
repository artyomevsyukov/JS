/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0;
let vowelsCount2 = 0;
let vowelsCount3 = 0;
const vowels = ["a", "e", "i", "o", "u"];

const str = "Today is the best day of my life";

// Напишите код здесь

// [...str].forEach((el) => {
//     if (vowels.includes(el)) {
//         vowelsCount++;
//     }
// });

// for (const char of str) {
//     if (vowels.includes(char)) {
//         vowelsCount2++;
//     }
// }

// reduce
vowelsCount3 = [...str].reduce((acc, el) => {
    if (vowels.includes(el)) {
        return ++acc;
    } else {
        return acc;
    }
}, 0);

// console.log(vowelsCount);
// console.log(vowelsCount2);
console.log(vowelsCount3);
// 9
