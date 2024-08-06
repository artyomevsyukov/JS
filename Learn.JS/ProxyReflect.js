// let numbers = [1, 2, 3];

// numbers = new Proxy(numbers, {
//     get(target, prop) {
//         // if (prop in target) {
//         //     return target[prop];
//         // } else {
//         //     return 0; // значение по умолчанию
//         // }

//         return prop in target ? target[prop] : 0;
//     },
// });

// console.log(numbers[1]); // 2
// console.log(numbers[123]); // 0 (нет такого элемента)

// let dictionary = {
//     Hello: "Hola",
//     Bye: "Adiós",
// };

// dictionary = new Proxy(dictionary, {
//     get(target, phrase) {
//         if (phrase in target) {
//             return target[phrase];
//         } else {
//             return phrase;
//         }
//     },
// });

// console.log(dictionary["Hello"]); // Hola
// console.log(dictionary["Welcome to Proxy"]); // Welcome to Proxy (нет перевода)

// let numbers = [];

// numbers = new Proxy(numbers, {
//     set(target, prop, val) {
//         if (typeof val == "number") {
//             target[prop] = val;
//             return true;
//         } else {
//             return false;
//         }
//     },
// });

// numbers.push(1); // добавилось успешно
// numbers.push(2); // добавилось успешно
// console.log("Длина: " + numbers.length); // 2

// numbers.push("тест"); // TypeError (ловушка set на прокси вернула false)

// let dictionary = {
//     Hello: "Hola",
//     Bye: "Adiós",
// };

// let proxyHendler = {
//     get(target, phrase) {
//         return phrase in target ? target[phrase] : phrase;
//     },
// };

// dictionary = new Proxy(dictionary, proxyHendler);

// console.log(dictionary["Hello"]);
// console.log(dictionary["Bye"]);
// console.log(dictionary["bye"]);

let number = [];

number = new Proxy(number, {
    set(target, prop, val) {
        if (typeof val == "number") {
            target[prop] = val;
            return true;
        } else {
            // return false;
            throw new TypeError(
                `Недопустимое значение: ${val} не является числом`
            );
        }
    },
});

const valuesToAdd = [1, "vbncvn", 2, 3, "sdff", 4, 5];

valuesToAdd.forEach((value) => {
    try {
        number.push(value);
    } catch (error) {
        console.error(error.message);
    }
});

console.log(number);
