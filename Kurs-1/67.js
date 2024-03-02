// const arr = [100, -20, 300, -170, -40];

// // let c = arr.reduce((acc, value, index, arr) => {
// //     console.log(`index:${index} acc:${acc} + value:${value} in arr:${arr}`);
// //     return acc + value;
// // }, 0);
// // console.log(c);

// let minEl = arr.reduce((acc, value) => {
//     if (acc < value) {
//         return acc;
//     } else return value;
// });

// console.log(minEl);
// console.log(Math.min(...arr));

const arr = [1, 4, 4, 10];

// const avg = arr.reduce((acc, value, i) => {
//     console.log(i + 1, value);
//     if (i < arr.length - 1) {
//         return acc + value;
//     }
//     console.log(acc + value);
//     return (acc + value) / arr.length;
// }, 0);
// console.log(avg);

// function some(arr, value) {
//     const result = arr.find((el) => el === value);
//     return result == undefined ? false : true;
// }
// some(arr, 10);
// console.log(some(arr, 11));
function some(arr, value) {
    console.log(arr.some((el) => el == value));
}
some(arr, 4);
