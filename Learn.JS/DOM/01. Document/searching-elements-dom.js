// // может быть любая коллекция вместо document.body.children
// for (let elem of document.body.children) {
//     // console.log(elem);
//     if (elem.matches('a[href$="zip"]') || elem.matches('a[href$="rar"]')) {
//         // alert("Ссылка на архив: " + elem.href);
//         console.log("Ссылка на архив: " + elem.href);
//     }
//     if (elem.matches("div")) {
//         // alert("Ссылка на архив: " + elem.href);
//         console.log("Нашли Span");
//     }
// }

// searching-elements-dom

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.

const table = document.getElementById("age-table");

console.log(table.querySelectorAll("label"));

console.log(document.querySelectorAll("#age-table label"));
console.log(document.querySelectorAll("#age-table label:first-child"));

console.log("rows cells", table.rows[0].cells[0]);
console.log(table.getElementsByTagName("td")[0]);
console.log(table.querySelector("td").innerHTML);
console.log(table.querySelector("td").innerText);
// console.log(table.querySelector("label").innerText);
// console.log(table.querySelector("td:firstElementChild"));
// console.log(getElementsByTagName("td"));
//todo
console.log("Q", document.querySelector('form[name="search"]'));
const form = document.getElementsByName("search")[0];
const form1 = document.querySelector(".form")[0];
const form2 = document.querySelector(".form");
const form3 = document.getElementsByName("search");

console.log(form.value);
console.log(form1);
console.log("первый элемент");
console.log(form2.querySelector("input"));
console.log(form.querySelector("input"));
console.log("first", form[0]);
console.log("last", form[form.length - 1]);
