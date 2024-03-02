const arr = [1, 2, 3, 4, 5];

// function con(arr) {
//     for (const [index, el] of arr.entries()) {
//         console.log(`index: ${index} el: ${el}`);
//     }
// }
// con(arr);

// function sum(...arg) {
//     let sum = 0;
//     for (let i = 0; i < arg.length; i++) {
//         sum += i;
//     }
//     return sum;
// }

function up(x) {
    console.log(x);
}

arr.forEach(up);
// arr.forEach((el) => console.log(el));

for (const [ind, el] of arr.entries()) {
    console.log(ind, el);
}
function up(x) {
    console.log(x);
}

arr.forEach(up);
// arr.forEach((el) => console.log(el));

for (const [ind, el] of arr.entries()) {
    console.log(ind, el);
}
