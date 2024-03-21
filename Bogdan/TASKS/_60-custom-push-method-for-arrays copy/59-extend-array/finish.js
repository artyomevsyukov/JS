/** 16 16 - Расширение массивов
 *161616
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

class ExtendedArray extends Array {
    sum() {
        return this.onlyNumbers().reduce((acc, el) => acc + el, 0);
    }
    // onlyNumbers() {
    //     return this.reduce(
    //         (acc, num) => (typeof num == "number" ? acc.concat([num]) : acc),
    //         []
    //     );
    // }
    onlyNumbers() {
        return this.filter((el) => typeof el === "number");
    }
}
// # MyColorBlock {#f9e, 4}
let array = [1, 2, 3, 5, 6, 4, "sdf", "", null];
const arr = new ExtendedArray(...array);

console.log(arr instanceof Array);

// ! red
// # MyColorBlock {#g4e, 3}
//  {#513,3}
console.log(arr.onlyNumbers());
console.log(arr.sum());
