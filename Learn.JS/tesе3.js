const purchase = {
    Electronics: [
        { name: "Laptop", price: 1500 },
        { name: "mouse", price: 200 },
        { name: "Laptop", price: 900 },
    ],
    Textile: [
        { name: "Bag", price: 50 },
        { name: "Shirt", price: 30 },
        { name: "Laptop", price: 2000 },
    ],
    LifiStyle: [
        { name: "Bag", price: 50 },
        { name: "Shirt", price: 30 },
        { name: "Laptop", price: 3000 },
    ],
};

function find(obj, value) {
    let newObj = {};

    for (let category in obj) {
        if (obj.hasOwnProperty(category)) {
            let result = obj[category].filter((el) => el.name === value);
            if (result.length > 0) {
                newObj[category] = result;
            }
        }
    }

    return newObj;
}

const result = find(purchase, "Laptop");
console.log(result);
