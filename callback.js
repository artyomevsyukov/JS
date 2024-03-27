// {
//     // function myFunc(callback) {
//     //     let el1 = 10;
//     //     let el2 = 2;
//     //     let res = callback(el1, el2);
//     //     return res;
//     //     // console.log(callback(el1, el2));
//     // }

//     const myFunc = (el1, el2, callback) => callback(el1 + el2);
//     // const print = myFunc(2, 15, (print) => {
//     //     console.log(print);
//     // });

//     function outMult(element1, elemennt2) {
//         return element1 * elemennt2;
//     }
//     function outDel(element1, elemennt2) {
//         return element1 + elemennt2;
//     }

//     // console.log(myFunc(outMult));
//     // console.log(myFunc(outDel));
//     let res = myFunc(outMult);
//     console.log(res);
//     // myFunc(outMult);
//     // myFunc(outDel);
// }

const add = (a, b, callback) => callback(a + b);
const res = add(10, 20, (calback) => {
    console.log(calback);
    return calback;
});
console.log(res);
