// let value = NaN;

// value &&= 10; //nan
// value ||= 20; //20
// value &&= 30; //30
// value ||= 40; //30

// console.log(value);

// let age = 111;
// if (!(age >= 14 && age <= 90)) {
//     console.log(age, "В не диапозона");
// } else {
//     console.log("в диапозоне");
// }
// let age = 15;
// if (age < 14 || age > 90) {
//     console.log(age, "В не диапозона");
// } else {
//     console.log("в диапозоне");
// }

// if (-1 || 0) console.assert.log("first"); //yes
// if (-1 && 0) console.assert.log("second"); //no
// if (null || (-1 && 1)) console.assert.log("third"); //yes

// function showMessage(from, text) {
//     text = text || "текст не добавлен";
//     // text = text ?? "неизвестно";
//     return from + " " + text;
// }
// console.log(showMessage("Artem", 0));
// function showMessage(text) {
//     // text = text || "текст не добавлен";
//     // text = text ?? "неизвестно";
//     return text;
// }
// console.log(showMessage());

// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 continue nextPrime;
//             }
//         }
//         console.log(i);
//     }
// }
// showPrimes(99);
// function isPrimes(n) {
//     for (let i = 2; i < n; i++) {
//         console.log(i);
//         for (let j = 2; j < i; j++) {
//             console.log(j);
//             if (i % j == 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

function isPrimes(n) {
    for (let i = 2; i < n; i++) {
        console.log(`Делим ${n} на ${i}`);
        if (n % i == 0) {
            console.log(n, "Не простое");
            return false;
        } else {
            console.log(n, "Простое");
            return true;
        }
    }
}
// isPrimes(7);

function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrimes(i)) continue;
        console.log(i);
    }
}
showPrimes(10);
