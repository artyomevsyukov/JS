/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ["London", "New York", "Singapore"];

function cityInfo(value, index) {
    return console.log(
        `${value} is at the index ${index} in the myCities array`
    );
}

myCities.forEach(cityInfo);
// myCities.forEach(({ value, index }) => cityInfo({ value, index }));
// myCities.forEach((value, index) =>
//     console.log(`${value} is at the index ${index} in the myCities array`)
// );

// for (const key in myCities) {
//     console.log(key, myCities[key]);
// }
