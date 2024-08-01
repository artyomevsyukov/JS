// let numbers = [0, 1, 2];

// numbers = new Proxy(numbers, {
//     get(target, prop) {
//         if (prop in target) {
//             return target[prop];
//         } else {
//             return 0; // значение по умолчанию
//         }
//     },
// });

// console.log(numbers[1]); // 1
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

let numbers = [];

numbers = new Proxy(numbers, {
    set(target, prop, val) {
        if (typeof val == "number") {
            target[prop] = val;
            return true;
        } else {
            return false;
        }
    },
});

numbers.push(1); // добавилось успешно
numbers.push(2); // добавилось успешно
console.log("Длина: " + numbers.length); // 2

// numbers.push("тест"); // TypeError (ловушка set на прокси вернула false)
