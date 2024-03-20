/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray {
    constructor(Array) {
        this.Array = Array;
    }
    sum(Array) {
        arg.reduce((acc, el) => acc + el);
    }
    onlyNumbers(Array) {
        return Array.reduce(
            (acc, num) => (typeof num == "number" ? acc.concat([num]) : acc),
            []
        );
        // let newArr = [];
        // for (const number of arg) {
        //     if (typeof number !== "number") {
        //         continue;
        //     } else {
        //         newArr.push(number);
        //     }
        // }
        // return newArr;
    }
}

// arr = [1, 2, 3, 5, 6, 4, "sdf", "", null];
const arr = new ExtendedArray([1, 2, 3, 5, 6, 4, "sdf", "", null]);

arr.onlyNumbers();
console.log(arr instanceof Array);
// function onlyNumbers(arg) {
//     return arg.reduce(
//         (acc, num) => (typeof num == "number" ? acc.concat([num]) : acc),
//         []
//     );
//     // let newArr = [];
//     // for (const number of arg) {
//     //     if (typeof number !== "number") {
//     //         continue;
//     //     } else {
//     //         newArr.push(number);
//     //     }
//     // }
//     // return newArr;
// }
