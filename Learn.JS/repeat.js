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
