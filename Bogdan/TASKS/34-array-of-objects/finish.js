/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

let arr = [];
const car1 = {
    carBrand: "BMW",
    price: 10000,
    isAvailableForSale: false,
};
const car2 = {
    carBrand: "Audi",
    price: 20000,
    isAvailableForSale: false,
};
const car3 = {
    carBrand: "Mersedec",
    price: 30000,
    isAvailableForSale: true,
};
arr.push(car1);
arr.push(car2);
arr.push(car3);
// arr = [car1, car2, car3];
console.log(arr);
