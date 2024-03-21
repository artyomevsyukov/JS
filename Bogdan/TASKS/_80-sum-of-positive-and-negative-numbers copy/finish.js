/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

function sumPositiveNegative(arr) {
    let positive = arr.reduce((acc, el) => (el > 0 ? acc + el : acc), 0);
    let negative = arr.reduce((acc, el) => (el < 0 ? acc + el : acc), 0);
    // console.log(`positiveSum : ${positiveSum}\nnegativeSum : ${negativeSum} `);
    return { positiveSum: positive, negativeSum: negative };
}
function sumPositiveNegative(arr) {
    return arr.reduce(
        (acc, el) => {
            // if (el > 0) {
            //     return {
            //         positiveSum: acc.positiveSum + el,
            //         negativeSum: acc.negativeSum,
            //     };
            // }
            // return {
            //     positiveSum: acc.positiveSum,
            //     negativeSum: acc.negativeSum + el,
            // };
            return el > 0
                ? {
                      ...acc,
                      positiveSum: acc.positiveSum + el,
                  }
                : {
                      ...acc,
                      negativeSum: acc.negativeSum + el,
                  };
        },
        { positiveSum: 0, negativeSum: 0 }
    );
}

const result = sumPositiveNegative(nums);

console.log(result);
// { positive: 74, negative: -54 }
