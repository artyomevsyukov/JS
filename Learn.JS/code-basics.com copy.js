// function convertText(str) {
//     if (str == "") {
//         return console.log("Строка пустая");
//     }
//     let result = str[0].toUpperCase() + str.slice(1);
//     return str[0] === str[0].toUpperCase ? str : result;
// }
// console.log(convertText("hello"));

// const countChars = (str, char) => {
//     let i = 0;
//     let result = 0;
//     while (i < str.length) {
//         if (str[i].toLowerCase() === char.toLowerCase()) {
//             result++;
//         }
//         i++;
//     }
//     return result;
// };

// console.log(countChars("HexlEt", "e")); // 2
// console.log(countChars("HexlEt", "E")); // 2

// function reverse(str) {
//     let i = 0;
//     let result = "";
//     while (i < str.length) {
//         result = str[i] + result;
//         i++;
//     }
//     return result;
// }
// console.log(reverse("YtkksdfHello"));

// const text = "I never look back";
// function makeItFunny(str, n) {
//     let i = 0;
//     let result = "";
//     while (i < str.length) {
//         if ((i + 1) % n == 0) {
//             result = result + str[i].toUpperCase();
//         } else {
//             result = result + str[i];
//         }
//         i++;
//     }
//     return result;
// }

// makeItFunny(text, 3);
// console.log(makeItFunny(text, 3)); // 'I NevEr LooK bAck'

// const printNumbers = (initialNumber) => {
//     let i = initialNumber;
//     while (i > 0) {
//         console.log(i);
//         i--;
//     }
// };
// printNumbers(9);

// const hasChar = (str, char) => {
//     let i = 0;
//     while (i < str.length) {
//         if (str[i] === char) {
//             return true;
//         }
//         i++;
//     }
//     return false;
// };

// console.log(hasChar("Hexlet", "H"));
// console.log(hasChar("Hexlet", "1"));
// console.log(hasChar("Awesomeness", "m"));
// console.log(hasChar("Awesomeness", "d"));

// const printNameBySymbol = (name) => {
//     let i = name.length;
//     // Такая проверка будет выполняться до конца строки
//     // включая последний символ. Его индекс `length - 1`.
//     while (i >= 0) {
//         // Обращаемся к символу по индексу
//         console.log(name[i]);
//         i--;
//     }
// };

// const name = "Arya";
// printNameBySymbol(name);
// // => A
// // => r
// // => y
// // => a

// const chet = (str) => {
//     let i = 0;
//     // Нейтральный элемент для строк это пустая строка
//     let result = "";
//     while (i < str.length) {
//         if ((i + 1) % 2 == 0) {
//             result = `${result}${str[i]}`;
//         }
//         // То же самое через конкатенацию
//         // result = str[i] + result;
//         i++;
//     }

//     return result;
// };

// const name = "Bran";
// console.log(chet(name));

// const filterString = (str, char) => {
//     let i = 0;
//     let result = "";
//     while (i < str.length) {
//         if (str[i] === char) {
//             result = result;
//         } else {
//             result = result + str[i];
//         }
//         i++;
//     }
//     return result;
// };

// const str = "If I look back I am lost";
// console.log(filterString(str, "I")); // 'f  look back  am lost'
// console.log(filterString("zz Zorro", "z")); // ' Zorro'

// const name = "Hexlet";
// const getLetter = (str, n) => {
//     return str[n] || "";
// };
// // Обычное обращение возвращает undefined
// name[10]; // undefined

// // 11 символ соответствует 10 индексу
// getLetter(name, 11); // ''

// console.log(getLetter(name, 1));; // 'H'
// console.log(getLetter(name, 0));; // ''
// console.log(getLetter(name, 6));; // 'H'
// getLetter(name, 0); // ''
// getLetter(name, 6); // 't'

// function getNumberExplanation(number) {
//     switch (number) {
//         case 7:
//             return console.log("prime number");

//         case 8:
//             return console.log("just a number");

//         case 42:
//             return console.log("answer for everything");

//         case 666:
//             return console.log("devil number");

//         default:
//             return console.log("just a number");
//     }
// }

// getNumberExplanation(1231); // prime number
// getNumberExplanation(7); // prime number
// getNumberExplanation(8); // just a number
// getNumberExplanation(42); // answer for everything
// getNumberExplanation(666); // devil number

// const reverseString = (str) => {
//     let result = "";
//     for (let i = 0; i < str.length; i += 1) {
//         result = `${str[i]}${result}`;
//         console.log(result);
//     }

//     return result;
// };
// reverseString("revers");

// function encrypt(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i += 2) {
//         const nextSimbol = str[i + 1] || "";
//         result = result + nextSimbol + str[i];
//     }
//     return result;
// }

// console.log(encrypt("move")); // omev
// console.log(encrypt("attack")); // taatkc

// console.log(encrypt("go!")); // og!
