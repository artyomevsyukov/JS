/* Задание
В переменную password запишите строку с любым произвольным паролем. Проверьте надёжность пароля. Пароль является надёжным, когда в нём есть хотя бы четыре символа, а также есть хотя бы один из символов '-', '_'. Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно надёжный». */
// let password = "_3asdf";

// if (
//     password.length > 4 &&
//     password.indexOf("_", 2) + password.indexOf("-", 2) >= 0
//         ? console.log("Пароль надёжный")
//         : console.log("Пароль недостаточно надёжный")
// )

// if (
//     password.length > 4 &&
//     (password.includes("_", 2) || password.includes("-"))
// ) {
//     console.log("Пароль надёжный");
// } else {
//     console.log("Пароль недостаточно надёжный");
// }

// if (password.length > 4 && password.indexOf("_") + password.indexOf("-") > 0) {
//     console.log("Пароль надёжный");
// } else {
//     console.log("Пароль недостаточно надёжный");
// }

// console.log(password.length);
// console.log(password.indexOf("-"));
// console.log(password.includes("-"));
// console.log(password.includes("_"));
// console.log(password.indexOf("_"));

// let a = "Interfeic";
// let b = "INTERFACE";
// b = b[2].toLowerCase();
// console.log(a.toUpperCase()); // INTERFACE
// console.log(b); // interface

/* Задание 2
Цель задания
Узнать, как преобразовывать строку в верхний/нижний регистр. Узнать, как извлекать произвольные куски из строки.

Задание
В переменных name, surname написаны имя и фамилия человека. При этом в строках беспорядок с большими и маленькими буквами, и нужно привести строки в порядок. Для этого первые буквы имени и фамилии приведите к верхнему регистру, а оставшиеся буквы — к нижнему. Запишите результат в новые переменные и выведите их значения с помощью console.log. С помощью тернарных операторов и console.log выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии в зависимости от того, были ли исходные строки равны преобразованным. */

/* // let n = "iVan";
// let n = "Ivan";
// let s = "PasHKov";

// let n1 = n[0].toUpperCase() + n.slice(1).toLowerCase();
// let n1 = n[0].toUpperCase() + n.substr(1, n.length - 1).toLowerCase();
// let n1 = n[0].toUpperCase() + n.substr(1).toLowerCase();
// let s1 = s[0].toUpperCase() + s.slice(1).toLowerCase();

// n === n1
//     ? console.log("Имя осталось без изменений")
//     : console.log("Имя было преобразовано");

// if (s === s1) {
//     console.log("Фамилия осталось без изменений");
// } else {
//     console.log("Фамилия была преобразована");
// }
// console.log(n, n1);
// console.log(s, s1); */

// =================================================
// let name = "IVaN";
// let sourname = "PasHKov";
// function checkName(n, s) {
//     // str.substr(from, length)
//     let n1 = n[0].toUpperCase() + n.substr(1).toLowerCase();
//     let s1 = s[0].toUpperCase() + s.substr(1).toLowerCase();
//     // let n1 = n[0].toUpperCase() + n.substr(1, n.length - 1).toLowerCase();
//     console.log(n1, s1);
//     return n, s;
// }
// checkName("vaSiOK", "SoSrnSsSSe");

// Проверка на спам

/* важность: 5
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false */

// let a = "buy ViAgRA now";
// let d = "now";
// let b = "free xxxx vIaGra";
// let e = "free xx xx IaGra";
// let c = "innocent rabbit xx vIAgra ";

// function checkSpam(str) {
//     // let res = true;
//     let find = str.toLowerCase();
//     if (find.includes("xxx") || find.includes("viagra")) {
//         console.log("Это спам!!!");
//     } else {
//         console.log("Спама нет");
//     }
// }
// console.log(checkSpam(b));

/* Усечение строки
важность: 5
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!" */

/* let a = "Вот, что мне хотелось бы сказать на эту тему:";
let b = "Ура Ура";
function truncate(str, maxlength) {
    // let strLength = str.strLength;
    if (str.length >= maxlength) {
        // str[19] = ".";
        // console.log(str);
        let strNew = str.slice(0, maxlength - 1) + "...";
        console.log(strNew);
    } else {
        console.log(str);
    }
    // return str.maxlength > maxlength
    //     ? str.slice(0, maxlength - 1) + "..."
    //     : str;
}

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate(a, 30); */

// =================================================
/* Выделить число
важность: 4
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true */

// let str = "$120";
// let target = "$"; // цель поиска
// let pos = 0;

// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;
//     pos = foundPos + 1; // продолжаем со следующей позиции
//     console.log(`Найдено тут: ${foundPos}`);
//     let newStr = str.includes(1);
//     console.log(newStr);
// }

// let a = "$120";
// function extractCurrencyValue(str) {
//     console.log(+str.slice(1));
//     return +str.slice(1);
// }
// extractCurrencyValue(a);
