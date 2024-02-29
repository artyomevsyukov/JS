// function power(pow) {
//     return function (num) {
//         return num ** pow;
//     };
// }

// const powerOfTow = power(2);
// console.log(powerOfTow(5));
// console.log(powerOfTow(10));

const power = (pow) => (num) => num ** pow;
const powerOfTow = power(2);

console.log(powerOfTow(5));
console.log(powerOfTow(10));
