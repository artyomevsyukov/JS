// function isNotPalindrome(str) {
//     const reverse = (str) => str.split("").reverse().join("");
//     return str === reverse(str);
// }

// console.log(isNotPalindrome("шалаш"));

// function convertText(str) {
//     if (str == "") {
//         return console.log("Строка пустая");
//     }
//     str.split("");
//     let result = str[0].toUpperCase() + str.slice(1);
//     return str[0] === str[0].toUpperCase() ? str : result;
// }

// console.log(convertText("hello"));

// const countChars = (str, char) => {
//     let i = 0;
//     let count = 0;
//     while (i < str.length) {
//         if (str[i].toLowerCase() === char.toLowerCase()) {
//             // Считаем только подходящие символы
//             count = count + 1;
//         }
//         // Счетчик увеличивается в любом случае
//         i = i + 1;
//     }

//     return count;
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
//     // for (let i = 0; i < str.length; i++) {
//     //     result = str[i] + result;
//     // }
//     return result;
// }

// console.log(reverse("YtkksdfHello"));

// const text = "I never look back";
// function makeItFunny(str, n) {
//     let i = 0;
//     let result = "";
//     while (i < str.length) {
//         let current = str[i];
//         if ((i + 1) % n == 0) {
//             result = result + current.toUpperCase();
//         } else {
//             result = result + current;
//         }
//         i++;
//     }
//     return result;
// }
// makeItFunny(text, 3);
// console.log(makeItFunny(text, 3)); // 'I NevEr LooK bAck'
// ===============================================================================

// function reverse(str) {
//     let i = 0;
//     let result = "";
//     while (i < str.length) {
//         result = str[i] + result;
//         i++;
//     }
//     return result;
// }

// console.log(reverse("sgdfgHello"));
// ===============================================================================
// const text = "I never look back";
// function makeItFunny(str, n) {
//     let i = 0;
//     let result = "";
//     while (i < str.length) {
//         if ((i + 1) % n === 0) {
//             result = result + str[i].toUpperCase();
//         } else {
//             result = result + str[i];
//         }
//         i++;
//     }
//     //
//     return result;
// }

// console.log(makeItFunny(text, 2));

// ===============================================================================

// const printNumbers = (initialNumber) => {
//     // BEGIN (write your solution here)
//     let i = initialNumber;
//     while (0 < i) {
//         console.log(i);
//         i--;
//     }
//     console.log('finished!');
//     // END
// };
// printNumbers(9);

// ===============================================================================

// const hasChar = (str, char) => {
//     let i = 0;
//     while (i <= str.length) {
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

// ===============================================================================
// TODO ДЕБАГ <= Undefined
function encrypt(str) {
    let result = "";
    for (let i = 0; i <= str.length; i += 2) {
        const nextSimbol = str[i + 1] || "";
        result = result + nextSimbol + str[i];
    }
    return result;
}

// function encrypt(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i += 2) {
//         const nextSimbol = str[i + 1] || "";
//         result = result + nextSimbol + str[i];
//     }
//     return result;
// }

// const encrypt = (str) => {
//     let result = "";
//     for (let i = 0; i < str.length; i += 2) {
//         const nextSymbol = str[i + 1] || "";
//         result = `${result}${nextSymbol}${str[i]}`;
//     }

//     return result;
// };

console.log(encrypt("move"));
console.log(encrypt("attack"));
console.log(encrypt("go!"));
