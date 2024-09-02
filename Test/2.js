// =======================================
// ФУНКЦИЯ RANDOM MIN MAX
// function random(min, max) {
//     return Math.round(min + Math.random() * (max - min));
// }

// console.log(random(1, 50));
// console.log(random(1, 500));
// console.log(random(-100, 100));
// ==============================================

// let a = 13.123456789;
// let b = 2.123;

// console.log(a < b);

// let first = (0.1 + 0.2 + 0.033).toString(8);
// let second = (0.333).toString(8);

// console.log(first);
// console.log(second);
// console.log(first === second);

// console.log((2).toString(2));
// console.log((3).toString(2));

// console.log(first === second);

// let num = 12.3434;
// num.toFixed(11);
// console.log(num.toFixed(11));
// console.log(typeof num);
// let a = 1;
// console.log(a / 3);
// console.log(1 / 3 === 0.3333333333333333);
// let str = "12.3434";
// console.log(typeof str);
// console.log(isNaN("15"));
// console.log(isFinite("1dfg5"));

// let num = "12.343";
// console.log(isNaN(num));
// console.log(Math.random() * 100);

// let a = +prompt("Введите первое число", "");
// let b = +prompt("Введите второе число", "");
// alert(a + b);

// console.log();
// console.log((1.35).toFixed(1)); // 1.4
// console.log((6.35).toFixed(1)); // 6.3

// console.log(Math.round(1.35).toFixed(2)); // 1.4
// console.log(Math.round(6.35 * 10) / 10); // 6.3

// let a = 6.35;
// Math.floor(a.toFixed(a * 100)) / 100;

// console.log(a);

// for (let char of "Hello") {
//     console.log(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
// }
// let a = [
//     "fgd",
//     "dfsghert4532qref34r",
//     "3453rfsdfasd",
//     "gfgsdfgsdfgsfd",
//     "3",
//     "2",
// ];
// for (let char in a) {
//     console.log(char);
// }

// let a = "Interface";
// let b = "HELLO";
// let newA = a[0].toUpperCase();
// console.log(a);
// console.log(b);
// console.log(a[0].toUpperCase()); // INTERFACE
// console.log(b[2].toLowerCase()); // interface
// console.log(newA);

// let a = 10;
// let x = 0;
// x += a++;
// console.log(a);
// console.log(x);

// let n = 10;
// current = 0;
// prev = 1;
// prevPrev = 1;

// while (n-- > 0) {
//     prevPrev = prev;
//     prev = current;
//     current += prevPrev;
//     console.log(current);
// }

// console.log(Math.round(Math.random() * 12));
// console.log(Math.round(Math.random() * 14) + 14);

// const randomD = (min = 6, max = 20) => {
//     return Math.floor(Math.random(max - min + 1)) + min;
// };

// console.log(randomD(17, 20));

// let num = 12.56;
// console.log(typeof +num.toFixed(1)); // "12.4"
// console.log(+num.toFixed(1)); // "12.4"
// console.log(typeof num);
// console.log(num);

// ЗадачаЗадание 1
// Цель задания
// Научиться совместно применять переменные, математические операторы и функции объекта Math.

// Задание
// Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка. Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. Выведите результат с помощью console.log.

// Проверка результата
// Для проверки подставляйте разные значения в переменные x1, y1, x2, y2 и смотрите на  получившуюся площадь. Примеры для проверки:
// Для x1 = 2, y1 = 3, x2 = 10, y2 = 5 площадь равна 16;
// Для x1 = 10, y1 = 5, x2 = 2, y2 = 3 площадь равна 16;
// Для x1 = -5, y1 = 8, x2 = 10, y2 = 5 площадь равна 45;
// Для x1 = 5, y1 = 8, x2 = 5, y2 = 5 площадь равна 0;
// Для x1 = 8, y1 = 1, x2 = 5, y2 = 1 площадь равна 0.

// Критерии оценки
// **Для любых значений координат точек площадь считается корректно.

// Рекомендации к выполнению
// Не торопитесь приступать к написанию кода. Попробуйте сначала представить решение на бумаге и всё обдумать. В этом нет ничего страшного, так делают даже серьёзные разработчики с большим опытом работы. Визуализация помогает мозгу быстрее найти решение и часто даже не одно. А перевести такую идею на язык JS или любой другой — это уже дело техники.

// let x1 = 10;
// let x2 = 2;
// let y1 = -3;
// let y2 = 3;

// let cat1 = Math.abs(x1 - x2);
// let cat2 = Math.abs(y1 - y2);

// console.log(cat1, cat2);

// let n = -100;
// let m = 350;
// let range = Math.abs(m - n);

// let numberInRange = Math.round(Math.random() * range);
// console.log(`Диапозон от: ${n} до ${m}`);
// const min = () => {
//     return n < m ? n : m;
// };

// let min = Math.min(n, m);

// console.log(min + numberInRange);

// let precision = 3;
// let number = 3333 + 0.3 + 0.1 + 0.33523;
// console.log(number);
// console.log(
//     `Целая часть: ${Math.floor(number)} Дробная часть ${Math.round(
//         (number % 1) * Math.pow(10, precision)
//     )}`
// );

// let x1 = 5;
// let y1 = 8;
// let x2 = 5;
// let y2 = 5;

// let x = Math.abs(x1 - x2);
// let y = Math.abs(y1 - y2);

// let S = x * y;
// console.log(S);

// Задание 2
// Цель задания
// Научиться округлять и надёжно сравнивать дробные части чисел с помощью console.log

// Задание
// Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

// Проверка результата
// Для проверки подставляйте разные значения переменных a, b и n и проверяйте получившийся результат. Сравнения должны давать соответствующий результат true или false в зависимости от получившихся дробных частей.

// Примеры для проверки:
// Для a = 13.123456789, b = 2.123, n = 5 дробные части: 12345, 12300.
// Для a = 13.890123, b = 2.891564, n = 2 дробные части: 89, 89.
// Для a = 13.890123, b = 2.891564, n = 3 дробные части: 890, 891.

// let precision = 3;

// let a = 13.123456789, b = 2.123, n = 5
// let  a = 13.890123, b = 2.891564, n = 2
// let a = 13.890123,
//     b = 2.891564,
//     n = 3;

// console.log(`Дробная часть ${Math.floor((a % 1) * Math.pow(10, n))}`);
// console.log(`Дробная часть ${Math.floor((b % 1) * Math.pow(10, n))}`);
// console.log(Math.floor((b % 1) * Math.pow(10, n)));
// console.log(b > a);
// console.log(b < a);
// console.log(b == a);
// console.log(b != a);

// Задание 3
// Цель задания
// Попрактиковаться в написании универсального кода, поддерживающего различные ситуации. Научиться применять Math.random и другие функции объекта Math.

// const randomNumber = (min = 6, max = 20) => {
//     randomNe = Math.floor(Math.random(max - min + 1)) + min;
//     return randomNe;
// };

// console.log(randomNumber(26, 20));

// const randomD = (min = 6, max = 20) => {
//     return Math.round(Math.random(max - min + 1)) + min;
// };

// console.log(randomD(10, 20));

// ФУНКЦИЯ RANDOM MIN MAX
// function random(min, max) {
//     let renge = Math.abs(min - max);
//     return Math.round(Math.random() * renge + min);
// }

// // console.log(random(10, 15));
// // console.log(random(1, 500));
// // console.log(random(-100, 100));
// console.log(Math.round(Math.random() * 5));
// console.log(Math.random() * 10 + 5);

// const myArray = [1, 2, 3, 10];

// const res = myArray.forEach((el) => console.log(el * 2)); //1
// const newArray = myArray.map((el) => el * 3);
// const reduceArray = myArray.reduce((el) => el * 5);
// console.log(myArray); //2
// console.log(res); //3
// console.log(newArray); //4
// console.log(reduceArray); //5

// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//         return user.age >= this.minAge && user.age < this.maxAge;
//     },
// };

// let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }, { age: 18 }];

// // найти пользователей, для которых army.canJoin возвращает true
// let soldiers = users.filter(army.canJoin, army);

// // alert(soldiers.length); // 2
// // alert(soldiers[0].age); // 20
// console.log(soldiers); // 23

// const user = {
//     nam: "art",
//     age: 23,
//     pol: "m",
// };

// const { name, age } = user;
// const { pol } = user;

// console.log(name);
// console.log(age);
// console.log(pol);

// const frut = ["banan", "apple"];

// const [frukt1, frukt2, frukt3] = frut;

// console.log(frukt1);
// console.log(frukt2);
// console.log(frukt3);
// console.log(finik);

// function check(z) {
//     return Boolean(z);
// }
// // check(2);
// // console.log(z);
// console.log(check(-1));

// function check(z) {
//     return !!z;
// }
// // check(2);
// // console.log(z);

// const check1 = (z) => !!z;

// console.log(check(-1));
// console.log(check1(-1));
// function checkBoolean() {
//     return console.log(Boolean(z));
// }
// // check(2);
// // console.log(z);
// // console.log(check(-1));
// console.log(checkBoolean(-1));

// const myArray = ["first", "second", "third"];

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// myArray.forEach((element, index) => {
//     console.log(index, element);
//     // console.log(index, element);
// });
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// const obj = {
//     1: "first",
//     2: "second",
//     3: "thrid",
// };

// console.log(Object.entries(obj));

// for (key in obj) {
//     // console.log(`Значение колючей объекта OBJ ${obj[key]}`);
//     console.log(`Ключ и значение объекта OBJ ${key}:${obj[key]} `);
// }

// Object.keys(obj).forEach((key) => {
//     console.log(key, obj[key]);
// });
// Object.values(obj).forEach((values) => {
//     console.log(values);
// });

// for (value in obj) {
//     console.log(value, obj[value]);
// }

// for (value of obj) {
//     console.log(value);
// }
// const arr = ["apple", "banan", "pear", "orange"];
// for (const key in arr) {
//     console.log(key, arr[key]);
// }
// for (const el of arr) {
//     console.log(el);
// }
// arr.forEach((el, inde) => {
//     console.log(inde, el);
// });

// let str = "sadfsagg";
// for (const el of str) {
//     console.log(el);
// }

const sum = (...arg) => {
    console.log(arg.reduce((prev, curr) => prev + curr, 0));
};
sum(1, 2, 3, 4, 5);
const sumA = (a, ...arg) => {
    console.log(arg.reduce((prev, curr) => a + prev + curr, 0));
};
sum(1, 2, 3, 4, 5);
