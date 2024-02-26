/** ЗАДАЧА 37 - Цикл "for .. in"
 *
 * Внутри цикла "for .. in" перед выводом значения свойства в консоль
 * выполните проверку того, что свойство является
 * собственным свойством объекта
 */

const myObject = {
    name: "Mike",
    age: 30,
    city: "London",
};

Object.prototype.country = "England";

for (let key of Object.keys(myObject)) {
    // for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log(key);
    } else {
        console.log(key + " - Прототип");
    }
}
