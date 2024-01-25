// let result = [];
// let array = [
//     { name: "1" },
//     { name: "2" },
//     { name: "4" },
//     { name: "2" },
//     { name: "3" },
//     { name: "1" },
// ];

// array.forEach(function (obj) {
//     const name = obj.name;
//     name in this || result.push((this[name] = []));
//     this[name].push(obj);
// }, Object.create(null));

// console.log(result);

const purchase = {
    Electronics: [
        { name: "Laptop", price: 1500 },
        { name: "Keyboard", price: 100 },
        { name: "Laptop", price: 900 },
        { name: "mouse", price: 150 },
    ],
    Textile: [
        { name: "Bag", price: 50 },
        { name: "bigBag", price: 150 },
        { name: "Laptop", price: 2200 },
    ],
};

function finder(purchaseObj, value) {
    let newObj = {};

    for (const category in purchaseObj) {
        if (purchaseObj.hasOwnProperty(category)) {
            const result = purchaseObj[category].filter(
                (item) => item.name === value
            );
            if (result) {
                return result;
            }
        }
    }
    return null;
}

const result2 = finder(purchase, "Laptop");
console.log(result2);
