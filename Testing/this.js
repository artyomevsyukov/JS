"use strict";

// console.log(this);

// function test(a) {
//     console.log(this);
//     console.log(arguments);
//     // console.log(a);
//     // return function (b) {
//     //     console.log(a + b);
//     //     console.log(this);
//     //     return a + b;
//     // };
//     return (b) => {
//         console.log(a + b);
//         console.log(this);
//         return a + b;
//     };
// }

// let res = test(3);
// // test(3)(3);
// res(2);

function test(...arg) {
    console.log(this);
    console.log(arguments);
    console.log(arg);
    console.log(...arg);
    // console.log(a);
    // return function (b) {
    //     console.log(a + b);
    //     console.log(this);
    //     return a + b;
    // };
    console.log(arg.length);
    let sum = 0;
    for (let i = 0; i <= arg.length - 1; i++) {
        sum += arg[i];
    }
    return sum;
    // console.log(arguments.length);
    // let sum = 0;
    // for (let i = 0; i <= arguments.length-1; i++) {
    //     sum += arguments[i];
    // }
    // return sum;
    // return arguments[0] + arguments[1] + arguments[2] + arguments[3];
}

console.log(test(3, 5, 6, 7, 9, 12));
