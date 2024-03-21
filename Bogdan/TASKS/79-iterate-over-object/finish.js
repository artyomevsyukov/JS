/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
    a: 10,
    b: 20,
    c: "string",
    d: 12,
};

// function sumObjectValues(obj) {
//     let sum = 0;
//     for (const [key, value] of Object.entries(obj)) {
//         obj.hasOwnProperty(key) && typeof value === "number"
//             ? (sum += value)
//             : sum;
//     }
//     return sum;
// }
// function sumObjectValues(nums) {
//     let sum = 0;

//     console.log(Object.keys(nums));
//     Object.keys(nums).forEach((value) => {
//         if (typeof nums[value] === "number") {
//             sum += nums[value];
//         }
//     });
//     return sum;
// }
function sumObjectValues(nums) {
    console.log(Object.values(nums));
    return Object.values(nums).reduce((acc, value) => {
        if (typeof value === "number") {
            return acc + value;
        }
        return acc;
    }, 0);
}

const result = sumObjectValues(objectWithNumbers);
console.log(result);
//42
