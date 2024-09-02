// const celciusToKelvin = function () {
//     const measurement = {
//         type: "temp",
//         unit: "celcius",
//         value: prompt("Температура в градусах: ", ""),
//     };

//     const kelvin = measurement.value + 273;
//     return kelvin;
// };

// console.log(celciusToKelvin());

const arr1 = [1, 22, 3, 54];
const arr2 = [5, 6, 37, 8];
const arr3 = [123, 43254, 3434, 453];

let result = [];

// Добавляем элементы arr1 в result
for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
}

// function reverseArr(...arr) {
//     let mas = [];
//     for (let i = 0; i < arr.length; i++) {
//         mas.push(arr[i]);
//     }
//     return mas;
//     let result = [];
//     for (let i = mas.length - 1; i >= 0; i--) {
//         result.push(mas[i]);
//     }
//     return result;
// }
// // const result = reverseArr(...arr1, ...arr2, ...arr3);
// const result = reverseArr(arr1, arr2, arr3);
console.log(result);
