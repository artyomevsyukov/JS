/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

const a = [1, 2, 3];
const b = [1, 2, 3];

function arraysEqual(firstArray, secondArray) {
    if (
        firstArray.length === secondArray.length &&
        firstArray.every((el, index) => el === secondArray[index])
    ) {
        return true;
    }
    return false;
    // if (firstArray.join(",") === secondArray.join(",")) {
    // if (JSON.stringify(firstArray) === JSON.stringify(secondArray)) {
    //     return "true 2";
    // }
    // return "false 2";
}

console.log(a === b, "\n"); // false (Почему?)
const c = [2, 1, 3];
const d = [1, 2, 3, 4];

console.log(arraysEqual(a, b)); // true
console.log(arraysEqual(a, c)); // false
console.log(arraysEqual(a, d)); // false
