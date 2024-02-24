/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */

const myObject = {
    key1: true,
    key5: 10,
    key3: "abc",
    key4: null,
    key10: NaN,
};

for (const obj in myObject) {
    if (
        (obj == "key1" && myObject.hasOwnProperty(obj)) ||
        (obj == "key3" && myObject.hasOwnProperty(obj))
    ) {
        // console.log(obj);
        console.log(myObject[obj]);
    }
    continue;
}

// let result = Object.keys(myObject);
// result.forEach((el) => {
//     if (el == "key1" || el == "key3") console.log(myObject[el]);
// });
