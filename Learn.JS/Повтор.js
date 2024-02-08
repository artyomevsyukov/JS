// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//     return function (el) {
//         return el >= a && el <= b;
//     };
// }
// function inArray(arr) {
//     return function (el) {
//         return arr.includes(el);
//     };
// }

// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

//=============================================================================

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// function byField(fieldName) {
//     return (a, b) => a[fieldName] - b[fieldName];
// }

// console.log(users.sort(byField("name")));
// console.log(users.sort(byField("age")));

//=============================================================================

let shooters = [];

let i = 0;
while (i < 10) {
    let shooter = function () {
        // функция shooter
        console.log(i); // должна выводить порядковый номер
    };
    shooters.push(i); // и добавлять стрелка в массив
    i++;
}

// ...а в конце вернуть массив из всех стрелков
console.log(shooters);
