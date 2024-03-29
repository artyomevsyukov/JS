/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

function quantitiesByCategories(products) {
    return products.reduce((acc, item) => {
        // acc[item.category] = (acc[item.category] || 0) + item.quantity;
        // изначально acc = {}, acc[item.categor] = {}
        const { category, quantity } = item;
        acc[category] = (acc[category] || 0) + quantity;

        return acc;
    }, {});
}

const inputProducts = [
    {
        title: "Phone case",
        price: 23,
        quantity: 2,
        category: "Accessories",
    },
    {
        title: "Android phone",
        price: 150,
        quantity: 1,
        category: "Phones",
    },
    {
        title: "Headphones",
        price: 78,
        quantity: 1,
        category: "Accessories",
    },
    {
        title: "Sport Watch",
        price: 55,
        quantity: 2,
        category: "Watches",
    },
    {
        title: "Sport Watch",
        price: 55,
        quantity: 2,
        category: "Watches",
    },
];

console.log(quantitiesByCategories(inputProducts));
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */
// return products.reduce((acc, item) => {
//     const { category, quantity, title, price } = item;

//     acc[title] = (acc[title] || 0) + price;
//     acc[category] = (acc[category] || 0) + quantity;

//     return acc;
// }, {});
