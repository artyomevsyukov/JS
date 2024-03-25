// const str = "привет что ты здесь делаешь?";
// console.log(str);
// console.log(str.split("е").join("ё"));

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newNumbers = [...numbers];
// while (newNumbers.length) {
//     console.log(`На каждой итерации цикла ${newNumbers.pop()}`);
// }
// console.log(numbers);

function parseEmpoyeesDate(dataString) {
    return dataString.split("\n").filter((line) => line.lengrh > 0);
}
console.log(
    parseEmpoyeesDate(`Тиунов Тимофей    Сергеевич,    системный архитектор
Иванов Иван Иванович  .  Frontend-разработчик
`)
);
